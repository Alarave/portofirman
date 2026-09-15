import { useState, useEffect, useRef, useMemo } from "react";
import {
  Folder,
  FileCode,
  FileText,
  FileJson,
  File,
  ChevronRight,
  Copy,
  Check,
  Download,
  Github,
  CornerLeftUp,
  GitBranch,
  Loader2,
  AlertCircle,
  ExternalLink,
  WrapText,
  RefreshCw,
  FolderOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeExplorerProps {
  githubUrl?: string;
  defaultSnippet?: string;
  repoName?: string;
  className?: string;
}

interface GithubItem {
  name: string;
  path: string;
  type: "dir" | "file";
  size?: number;
  download_url?: string | null;
  html_url?: string;
}

function parseGithubUrl(url?: string): { owner: string; repo: string } | null {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("github.com")) {
      const parts = parsed.pathname.split("/").filter(Boolean);
      if (parts.length >= 2) {
        return { owner: parts[0], repo: parts[1].replace(/\.git$/, "") };
      }
    }
  } catch {
    const parts = url.replace(/^https?:\/\/github\.com\//, "").split("/").filter(Boolean);
    if (parts.length >= 2) {
      return { owner: parts[0], repo: parts[1].replace(/\.git$/, "") };
    }
  }
  return null;
}

function formatBytes(bytes?: number): string {
  if (!bytes || bytes === 0) return "0 B";
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function getFileIcon(filename: string) {
  const ext = filename.split(".").pop()?.toLowerCase() || "";
  if (["ts", "tsx", "js", "jsx"].includes(ext)) {
    return <FileCode className="w-4 h-4 text-sky-500 shrink-0" />;
  }
  if (["php"].includes(ext)) {
    return <FileCode className="w-4 h-4 text-indigo-500 shrink-0" />;
  }
  if (["py"].includes(ext)) {
    return <FileCode className="w-4 h-4 text-emerald-500 shrink-0" />;
  }
  if (["json", "yaml", "yml", "xml"].includes(ext)) {
    return <FileJson className="w-4 h-4 text-amber-500 shrink-0" />;
  }
  if (["md", "txt", "pdf"].includes(ext)) {
    return <FileText className="w-4 h-4 text-emerald-600 shrink-0" />;
  }
  if (filename.startsWith(".git") || filename.startsWith(".env") || filename.includes("config")) {
    return <FileCode className="w-4 h-4 text-muted-foreground shrink-0" />;
  }
  return <File className="w-4 h-4 text-muted-foreground shrink-0" />;
}

export function CodeExplorer({
  githubUrl,
  defaultSnippet = "",
  repoName = "repository",
  className,
}: CodeExplorerProps) {
  const parsedRepo = useMemo(() => parseGithubUrl(githubUrl), [githubUrl]);

  // Current path inside repository
  const [currentPath, setCurrentPath] = useState<string>("");
  const [activeFile, setActiveFile] = useState<GithubItem | null>(null);
  const [fileContent, setFileContent] = useState<string>("");

  // Directory listing state
  const [dirItems, setDirItems] = useState<GithubItem[]>([]);
  const [loadingDir, setLoadingDir] = useState<boolean>(false);
  const [loadingFile, setLoadingFile] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // In-memory cache for instant navigation
  const dirCache = useRef<Map<string, GithubItem[]>>(new Map());
  const fileCache = useRef<Map<string, string>>(new Map());

  // UI state
  const [copied, setCopied] = useState(false);
  const [wordWrap, setWordWrap] = useState(false);

  const effectiveRepoName = parsedRepo?.repo || repoName;

  // ── 1. Fetch Directory Contents ──
  const fetchDirectory = async (path: string) => {
    if (!parsedRepo) return;

    if (dirCache.current.has(path)) {
      setDirItems(dirCache.current.get(path)!);
      setErrorMsg(null);
      return;
    }

    setLoadingDir(true);
    setErrorMsg(null);

    try {
      const url = `https://api.github.com/repos/${parsedRepo.owner}/${parsedRepo.repo}/contents/${path}`;
      const res = await fetch(url);

      if (res.status === 403) {
        throw new Error("Batas request GitHub API tercapai. Buka langsung repositori di GitHub atau coba beberapa saat lagi.");
      }

      if (!res.ok) {
        throw new Error(`Tidak dapat memuat repositori GitHub (${res.status} ${res.statusText})`);
      }

      const data = await res.json();

      if (Array.isArray(data)) {
        // Sort: directories first, then files alphabetically
        const sorted: GithubItem[] = data.sort((a, b) => {
          if (a.type === b.type) return a.name.localeCompare(b.name);
          return a.type === "dir" ? -1 : 1;
        });

        dirCache.current.set(path, sorted);
        setDirItems(sorted);
      } else {
        setDirItems([]);
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Gagal memuat struktur repositori dari GitHub");
    } finally {
      setLoadingDir(false);
    }
  };

  // ── 2. Fetch File Raw Content ──
  const fetchFileContent = async (item: GithubItem) => {
    if (fileCache.current.has(item.path)) {
      setFileContent(fileCache.current.get(item.path)!);
      return;
    }

    setLoadingFile(true);

    try {
      let content = "";
      if (item.download_url) {
        const res = await fetch(item.download_url);
        if (res.ok) {
          content = await res.text();
        } else {
          throw new Error("Gagal mengunduh file kode mentah.");
        }
      } else {
        if (!parsedRepo) throw new Error("URL GitHub tidak valid");
        const res = await fetch(
          `https://api.github.com/repos/${parsedRepo.owner}/${parsedRepo.repo}/contents/${item.path}`
        );
        const data = await res.json();
        if (data.content && data.encoding === "base64") {
          content = atob(data.content.replace(/\n/g, ""));
        } else {
          throw new Error("Format konten tidak didukung.");
        }
      }

      fileCache.current.set(item.path, content);
      setFileContent(content);
    } catch {
      setFileContent(defaultSnippet || "// Tidak dapat memuat isi file dari GitHub");
    } finally {
      setLoadingFile(false);
    }
  };

  useEffect(() => {
    if (!activeFile && parsedRepo) {
      fetchDirectory(currentPath);
    }
  }, [currentPath, activeFile, parsedRepo]);

  const handleOpenFolder = (folderPath: string) => {
    setActiveFile(null);
    setFileContent("");
    setCurrentPath(folderPath);
  };

  const handleOpenFile = (fileItem: GithubItem) => {
    setActiveFile(fileItem);
    fetchFileContent(fileItem);
  };

  const handleGoUp = () => {
    if (activeFile) {
      setActiveFile(null);
      setFileContent("");
      return;
    }
    const parts = currentPath.split("/").filter(Boolean);
    parts.pop();
    setCurrentPath(parts.join("/"));
  };

  const breadcrumbs = useMemo(() => {
    const pathStr = activeFile ? activeFile.path : currentPath;
    const parts = pathStr.split("/").filter(Boolean);

    const crumbs: { name: string; path: string; isFile: boolean }[] = [
      { name: effectiveRepoName, path: "", isFile: false },
    ];

    let accum = "";
    parts.forEach((part, idx) => {
      accum = accum ? `${accum}/${part}` : part;
      const isLastFile = activeFile && idx === parts.length - 1;
      crumbs.push({ name: part, path: accum, isFile: !!isLastFile });
    });

    return crumbs;
  }, [currentPath, activeFile, effectiveRepoName]);

  const handleCopy = () => {
    if (!fileContent) return;
    navigator.clipboard.writeText(fileContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!activeFile) return;
    const blob = new Blob([fileContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = activeFile.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const codeLines = useMemo(() => {
    if (!fileContent) return [];
    return fileContent.split("\n");
  }, [fileContent]);

  // Fallback if no GitHub repo link provided
  if (!parsedRepo) {
    return (
      <div
        className={cn(
          "w-full h-full min-h-[520px] rounded-3xl bg-card border border-border shadow-xl flex flex-col font-mono relative overflow-hidden",
          className
        )}
      >
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-muted/30 text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">source_code</span>
          <span>Local Snippet</span>
        </div>
        <pre className="flex-1 overflow-auto text-xs sm:text-sm text-foreground p-5 leading-relaxed">
          <code>{defaultSnippet || "// Tidak ada repositori GitHub yang terhubung."}</code>
        </pre>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "w-full h-full min-h-[520px] rounded-3xl bg-card text-card-foreground border border-border shadow-xl flex flex-col relative overflow-hidden font-sans",
        className
      )}
    >
      {/* ── Header: Modern GitHub Repository Bar ── */}
      <div className="flex items-center justify-between px-3.5 py-2.5 sm:px-5 sm:py-3.5 border-b border-border bg-muted/40 backdrop-blur-md shrink-0 gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar text-xs font-mono min-w-0 flex-1">
          <div className="flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-background border border-border/80 text-foreground font-semibold shadow-xs shrink-0 text-[10px] sm:text-xs">
            <GitBranch className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
            <span>main</span>
          </div>

          <span className="text-muted-foreground/50 shrink-0">/</span>

          <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <div key={crumb.path} className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => {
                      if (crumb.isFile) return;
                      setActiveFile(null);
                      setFileContent("");
                      setCurrentPath(crumb.path);
                    }}
                    className={cn(
                      "transition-colors text-[11px] sm:text-xs truncate max-w-[120px] sm:max-w-none",
                      isLast
                        ? "text-foreground font-bold cursor-default"
                        : "text-primary hover:underline font-medium cursor-pointer"
                    )}
                  >
                    {crumb.name}
                  </button>
                  {!isLast && <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-muted-foreground/50 shrink-0" />}
                </div>
              );
            })}
          </div>
        </div>

        {/* GitHub Direct Link Badge */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={activeFile?.html_url || githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Buka langsung di GitHub.com"
            className="flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-medium bg-background hover:bg-muted text-foreground border border-border transition-all hover:shadow-xs cursor-pointer"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden xs:inline sm:inline">GitHub</span>
            <ExternalLink className="w-3 h-3 text-muted-foreground hidden sm:inline" />
          </a>
        </div>
      </div>

      {/* ── Content Viewport ── */}
      <div className="flex-1 overflow-auto">
        {/* Loading Spinner */}
        {(loadingDir || loadingFile) && (
          <div className="flex flex-col items-center justify-center p-16 text-muted-foreground gap-3">
            <Loader2 className="w-7 h-7 animate-spin text-primary" />
            <span className="text-xs font-mono">
              {loadingFile ? "Memuat isi file dari GitHub..." : "Menyinkronkan direktori repositori..."}
            </span>
          </div>
        )}

        {/* Error Alert / Rate Limit Fallback */}
        {!loadingDir && !loadingFile && errorMsg && (
          <div className="p-6 sm:p-8 space-y-4">
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold text-sm">{errorMsg}</p>
                <p className="text-muted-foreground">
                  Seluruh kode sumber tetap dapat ditinjau langsung di repositori resmi GitHub.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => fetchDirectory(currentPath)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 text-xs font-medium text-foreground transition-colors cursor-pointer border border-border"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Muat Ulang</span>
              </button>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Buka di GitHub</span>
              </a>
            </div>

            {defaultSnippet && (
              <div className="mt-6 border border-border rounded-2xl overflow-hidden bg-muted/20">
                <div className="px-4 py-2.5 bg-muted/40 border-b border-border text-xs font-mono text-muted-foreground">
                  Cuplikan Kode Cadangan
                </div>
                <pre className="p-4 text-xs font-mono text-foreground leading-relaxed overflow-x-auto">
                  <code>{defaultSnippet}</code>
                </pre>
              </div>
            )}
          </div>
        )}

        {/* ── File Blob Viewer (Active File Selected) ── */}
        {!loadingDir && !loadingFile && !errorMsg && activeFile && (
          <div className="flex flex-col min-h-full">
            {/* File Info & Action Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 px-3 py-2.5 sm:px-5 sm:py-2.5 bg-muted/30 border-b border-border text-xs text-muted-foreground font-mono shrink-0">
              <div className="flex items-center gap-1.5 sm:gap-2 truncate min-w-0">
                {getFileIcon(activeFile.name)}
                <span className="font-semibold text-foreground truncate">{activeFile.name}</span>
                <span className="text-border shrink-0">•</span>
                <span className="shrink-0">{codeLines.length} baris</span>
                <span className="text-border shrink-0">•</span>
                <span className="shrink-0">{formatBytes(activeFile.size || new Blob([fileContent]).size)}</span>
              </div>

              <div className="flex items-center justify-end gap-1.5 shrink-0">
                <button
                  onClick={() => setWordWrap((prev) => !prev)}
                  title={wordWrap ? "Matikan Word Wrap" : "Aktifkan Word Wrap"}
                  className={cn(
                    "p-1.5 rounded-lg border transition-colors cursor-pointer",
                    wordWrap
                      ? "bg-primary/10 border-primary/30 text-primary"
                      : "border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <WrapText className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleDownload}
                  title="Unduh file ini"
                  className="p-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleCopy}
                  title="Salin isi file"
                  className={cn(
                    "flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer",
                    copied
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                      : "border-border bg-background hover:bg-muted text-foreground"
                  )}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Code Canvas with Clean Gutter */}
            <div className="flex-1 p-2 sm:p-4 bg-muted/10 font-mono text-[11px] sm:text-[13px] leading-relaxed overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  {codeLines.map((line, index) => (
                    <tr key={index} className="hover:bg-muted/40 transition-colors">
                      <td className="w-8 sm:w-12 pr-2 sm:pr-4 select-none text-right text-muted-foreground/40 align-top text-[10px] sm:text-xs border-r border-border/40">
                        {index + 1}
                      </td>
                      <td
                        className={cn(
                          "text-foreground pl-2.5 sm:pl-4",
                          wordWrap ? "whitespace-pre-wrap break-all" : "whitespace-pre"
                        )}
                      >
                        {line || " "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── Directory Listing (Clean GitHub Table) ── */}
        {!loadingDir && !loadingFile && !errorMsg && !activeFile && (
          <div className="p-2 sm:p-4 sm:p-6">
            <div className="border border-border rounded-xl sm:rounded-2xl overflow-hidden bg-background shadow-xs divide-y divide-border/60">
              {/* Directory Subheader */}
              <div className="px-3.5 py-2.5 sm:px-5 sm:py-3 bg-muted/30 flex items-center justify-between text-xs text-muted-foreground font-mono">
                <div className="flex items-center gap-2 truncate min-w-0">
                  <FolderOpen className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-foreground font-semibold truncate">
                    {currentPath ? currentPath : effectiveRepoName}
                  </span>
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-muted-foreground shrink-0 ml-2">
                  {dirItems.length} objek
                </div>
              </div>

              {/* Up to Parent Directory ("..") */}
              {currentPath && (
                <button
                  onClick={handleGoUp}
                  className="w-full flex items-center gap-2 sm:gap-3 px-3.5 py-2.5 sm:px-5 sm:py-3 text-xs font-mono text-primary hover:bg-muted/40 transition-colors text-left cursor-pointer group"
                >
                  <CornerLeftUp className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  <span className="font-semibold truncate">.. (kembali)</span>
                </button>
              )}

              {/* Items List */}
              {dirItems.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground text-xs font-mono">
                  Folder ini kosong.
                </div>
              ) : (
                dirItems.map((item) => {
                  const isDir = item.type === "dir";

                  return (
                    <button
                      key={item.path}
                      onClick={() => {
                        if (isDir) {
                          handleOpenFolder(item.path);
                        } else {
                          handleOpenFile(item);
                        }
                      }}
                      className="w-full flex items-center justify-between px-3 py-2.5 sm:px-5 sm:py-3 text-xs font-mono text-foreground hover:bg-muted/40 transition-colors text-left cursor-pointer group gap-2"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                        {isDir ? (
                          <Folder className="w-4 h-4 text-sky-500 group-hover:text-primary shrink-0 transition-colors" />
                        ) : (
                          getFileIcon(item.name)
                        )}
                        <span
                          className={cn(
                            "truncate font-medium transition-colors text-xs sm:text-sm",
                            isDir
                              ? "text-foreground group-hover:text-primary"
                              : "text-foreground/90 group-hover:text-primary"
                          )}
                        >
                          {item.name}
                        </span>
                      </div>

                      <span className="text-[10px] sm:text-[11px] text-muted-foreground group-hover:text-foreground shrink-0 font-mono px-1.5 sm:px-2 py-0.5 rounded bg-muted/40 border border-border/40">
                        {isDir ? "Folder" : formatBytes(item.size)}
                      </span>
                    </button>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
