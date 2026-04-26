import { Layout } from "@/components/layout/Layout";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { useState, useEffect, Suspense } from "react";
import { cn } from "@/lib/utils";
import bookImage from "@/assets/projects/book-recommendation.jpg";
import BBCA from "@/assets/projects/bbca_prediction_comparison.jpg";
import algoritma from "@/assets/projects/algoritma.jpg";

// ── Project Data ──────────────────────────────────────────────────────────────
// Descriptions follow STAR formula: Situation → Task → Action → Result
export const projectsData = [
  {
    id: "book-recommendation-system",
    title: "Book Recommendation System (Akurasi Cosine 94%)",
    description:
      "Membangun sistem rekomendasi buku berbasis konten untuk membantu pengguna menemukan buku relevan — menggunakan TF-IDF dan Cosine Similarity dengan akurasi kemiripan 94%.",
    category: "Data Science",
    technologies: ["Python", "Scikit-learn", "Pandas", "TF-IDF", "Cosine Similarity", "React", "TypeScript"],
    fullDescription:
      "Situasi: Pengguna kesulitan menemukan buku relevan dari ribuan judul. Tugas: Membangun sistem rekomendasi tanpa data riwayat pengguna. Aksi: Mengimplementasikan content-based filtering dengan TF-IDF vectorization dan cosine similarity pada deskripsi & kategori buku. Hasil: Sistem menghasilkan rekomendasi dengan skor kemiripan rata-rata 94%, deployed sebagai web app interaktif.",
    features: [
      "Pencarian buku berdasarkan judul atau kata kunci",
      "Rekomendasi berbasis kemiripan konten (TF-IDF + Cosine Similarity)",
      "Menampilkan skor kemiripan antar buku",
      "Antarmuka web responsif dan interaktif",
      "Rekomendasi konsisten tanpa login pengguna",
    ],
    metrics: [
      { label: "Cosine Similarity", value: "94%", color: "text-primary" },
      { label: "Dataset Size", value: "10K+ Books", color: "text-cyan-600" },
      { label: "Response Time", value: "<200ms", color: "text-emerald-600" },
    ],
    thumbnail: bookImage,
    image: bookImage,
    links: {
      liveDemo: "https://icarusbookai.netlify.app/",
      github: "https://github.com/Alarave/Icarus-AI",
    },
    chartType: null as null,
    codeSnippet: `# TF-IDF + Cosine Similarity
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

tfidf = TfidfVectorizer(stop_words='english')
tfidf_matrix = tfidf.fit_transform(df['description'])
cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)`,
  },
  {
    id: "lstm-bbca-stock-prediction",
    title: "Prediksi Saham BBCA dengan LSTM (MAPE 2.3%)",
    description:
      "Memprediksi harga saham Bank Central Asia (BBCA) menggunakan deep learning LSTM — mencapai MAPE 2.3% dan Direction Accuracy 78% pada data historis 5 tahun.",
    category: "Data Science",
    technologies: ["Python", "TensorFlow", "Keras", "Pandas", "NumPy", "yfinance", "Plotly", "Scikit-learn"],
    fullDescription:
      "Situasi: Investor membutuhkan prediksi harga saham yang akurat untuk mengurangi risiko. Tugas: Membangun model time-series forecasting untuk saham BBCA. Aksi: Mengimplementasikan LSTM (128-64 units) dengan 5 indikator teknikal, EarlyStopping, dan ReduceLROnPlateau. Hasil: MAPE 2.3%, R² 0.94, Direction Accuracy 78% — performa signifikan di atas baseline.",
    features: [
      "Time-series forecasting dengan arsitektur LSTM (128-64 units)",
      "Feature engineering dengan 5 indikator teknikal",
      "Evaluasi model: MAE, RMSE, MAPE, R², Direction Accuracy",
      "Visualisasi interaktif dengan Plotly",
      "Pipeline data via Yahoo Finance API",
      "EarlyStopping & ReduceLROnPlateau callbacks",
    ],
    metrics: [
      { label: "MAPE", value: "2.3%", color: "text-primary" },
      { label: "R² Score", value: "0.94", color: "text-cyan-600" },
      { label: "Direction Acc.", value: "78%", color: "text-emerald-600" },
    ],
    thumbnail: BBCA,
    image: BBCA,
    links: {
      github: "https://github.com/Alarave/BBCA-Stock-Prediction.git",
    },
    chartType: null as null,
    codeSnippet: `# LSTM Model Architecture
model = Sequential([
    LSTM(128, return_sequences=True, input_shape=(60, features)),
    Dropout(0.2),
    LSTM(64, return_sequences=False),
    Dropout(0.2),
    Dense(25),
    Dense(1)
])
model.compile(optimizer='adam', loss='mse')`,
  },
  {
    id: "sap-inventory",
    title: "SAP Inventory Management — Kurangi Stok Mati 30%",
    description:
      "Implementasi modul SAP S/4HANA untuk manajemen inventaris real-time — mengotomasi reorder notification dan mengurangi dead stock sebesar 30%.",
    category: "SAP/ERP",
    technologies: ["SAP S/4HANA", "ABAP", "SAP Fiori", "SQL"],
    fullDescription:
      "Situasi: Perusahaan mengalami kelebihan stok dan keterlambatan reorder yang menyebabkan kerugian operasional. Tugas: Mengkonfigurasi modul SAP S/4HANA untuk manajemen inventaris terintegrasi. Aksi: Konfigurasi MM/WM modules, custom ABAP reports, dan SAP Fiori dashboard untuk monitoring real-time. Hasil: Pengurangan dead stock 30%, otomasi reorder notification, dan visibilitas stok real-time.",
    features: [
      "Pelacakan inventaris real-time",
      "Notifikasi reorder otomatis",
      "Integrasi warehouse management",
      "Laporan valuasi stok",
    ],
    metrics: [
      { label: "Dead Stock Reduction", value: "30%", color: "text-primary" },
      { label: "Reorder Automation", value: "100%", color: "text-cyan-600" },
      { label: "Modules Configured", value: "MM + WM", color: "text-emerald-600" },
    ],
    thumbnail: undefined as string | undefined,
    image: undefined as string | undefined,
    links: {},
    chartType: "inventory" as "inventory",
    codeSnippet: `* ABAP: Custom Inventory Report
REPORT z_inventory_report.
SELECT matnr, werks, labst, umlme
  INTO TABLE @DATA(lt_stock)
  FROM mard
  WHERE werks = @gv_plant
    AND labst < @gv_min_stock.`,
  },
  {
    id: "sentiment-analysis",
    title: "Analisis Sentimen Media Sosial (Akurasi 87%)",
    description:
      "Mengklasifikasikan sentimen pelanggan dari media sosial menggunakan NLP dan machine learning — akurasi 87% untuk mendukung keputusan brand management.",
    category: "Data Science",
    technologies: ["Python", "NLTK", "TensorFlow", "Pandas", "Scikit-learn"],
    fullDescription:
      "Situasi: Brand membutuhkan pemahaman cepat tentang persepsi pelanggan di media sosial. Tugas: Membangun pipeline NLP untuk klasifikasi sentimen otomatis. Aksi: Text preprocessing (tokenisasi, stemming, stopword removal), TF-IDF features, dan model klasifikasi dengan evaluasi F1-score. Hasil: Akurasi 87%, F1-score 0.85, dengan dashboard trend analisis sentimen.",
    features: [
      "Text preprocessing dan cleaning pipeline",
      "Model klasifikasi sentimen (Positif/Netral/Negatif)",
      "Dashboard analisis tren sentimen",
      "Insight persepsi brand",
    ],
    metrics: [
      { label: "Accuracy", value: "87%", color: "text-primary" },
      { label: "F1-Score", value: "0.85", color: "text-cyan-600" },
      { label: "Classes", value: "3 Labels", color: "text-emerald-600" },
    ],
    thumbnail: undefined as string | undefined,
    image: undefined as string | undefined,
    links: {},
    chartType: "sentiment" as "sentiment",
    codeSnippet: `# Sentiment Classification Pipeline
from sklearn.pipeline import Pipeline
from sklearn.svm import LinearSVC

pipeline = Pipeline([
    ('tfidf', TfidfVectorizer(ngram_range=(1,2))),
    ('clf', LinearSVC(C=1.0))
])
pipeline.fit(X_train, y_train)
# Accuracy: 87% | F1: 0.85`,
  },
  {
    id: "financial-reporting",
    title: "Financial Reporting Dashboard — Otomasi Laporan Bulanan",
    description:
      "Dashboard Looker Studio terintegrasi BigQuery untuk laporan keuangan otomatis — mengurangi waktu pembuatan laporan dari 3 hari menjadi real-time.",
    category: "Business Intelligence",
    technologies: ["Looker Studio", "BigQuery", "SQL", "Google Sheets"],
    fullDescription:
      "Situasi: Tim finance menghabiskan 3 hari/bulan untuk membuat laporan manual dari berbagai sumber data. Tugas: Membangun dashboard BI terotomasi yang menarik data dari BigQuery. Aksi: Desain data pipeline BigQuery → Looker Studio dengan scheduled refresh, visualisasi P&L, dan budget vs actual comparison. Hasil: Laporan real-time, eliminasi 3 hari kerja manual per bulan.",
    features: [
      "Refresh data otomatis terjadwal",
      "Visualisasi P&L statement",
      "Perbandingan Budget vs Actual",
      "Analisis cash flow",
    ],
    metrics: [
      { label: "Time Saved", value: "3 days/mo", color: "text-primary" },
      { label: "Data Sources", value: "5 Sources", color: "text-cyan-600" },
      { label: "Refresh Rate", value: "Real-time", color: "text-emerald-600" },
    ],
    thumbnail: undefined as string | undefined,
    image: undefined as string | undefined,
    links: {},
    chartType: "financial" as "financial",
    codeSnippet: `-- BigQuery: Monthly P&L Summary
SELECT
  FORMAT_DATE('%Y-%m', date) AS month,
  SUM(revenue) AS total_revenue,
  SUM(expenses) AS total_expenses,
  SUM(revenue - expenses) AS net_profit
FROM \`project.finance.transactions\`
GROUP BY month
ORDER BY month DESC`,
  },
  {
    id: "dijkstra-shortest-path",
    title: "Dijkstra Shortest Path — Optimasi Rute Logistik",
    description:
      "Implementasi algoritma Dijkstra untuk menemukan rute terpendek dalam jaringan distribusi — dengan visualisasi interaktif step-by-step.",
    category: "Data Science",
    technologies: ["Python", "NetworkX", "Matplotlib", "Graph Theory", "Algorithms", "Data Structures"],
    fullDescription:
      "Situasi: Sistem logistik membutuhkan optimasi rute pengiriman untuk meminimalkan biaya. Tugas: Mengimplementasikan algoritma shortest path yang efisien. Aksi: Implementasi Dijkstra dengan priority queue (Min-Heap), weighted graph, dan visualisasi step-by-step menggunakan NetworkX. Hasil: Deployed sebagai web app interaktif untuk demonstrasi konsep routing optimization.",
    features: [
      "Konstruksi dan manajemen weighted graph",
      "Optimasi priority queue (Min-Heap)",
      "Kalkulasi shortest path antar node",
      "Trace eksekusi algoritma step-by-step",
    ],
    metrics: [
      { label: "Time Complexity", value: "O((V+E)logV)", color: "text-primary" },
      { label: "Algorithm", value: "Dijkstra", color: "text-cyan-600" },
      { label: "Visualization", value: "Interactive", color: "text-emerald-600" },
    ],
    thumbnail: algoritma,
    image: algoritma,
    links: {
      liveDemo: "https://algoritmadijkstra.netlify.app/",
    },
    chartType: null as null,
    codeSnippet: `import heapq

def dijkstra(graph, start):
    dist = {node: float('inf') for node in graph}
    dist[start] = 0
    pq = [(0, start)]
    
    while pq:
        d, u = heapq.heappop(pq)
        for v, w in graph[u]:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                heapq.heappush(pq, (dist[v], v))
    return dist`,
  },
];

// ── Category filter config ────────────────────────────────────────────────────
const categories = ["All", "Data Science", "Business Intelligence", "SAP/ERP"];

// ── Skeleton card ─────────────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-border/50 overflow-hidden animate-pulse">
      <div className="aspect-video bg-muted" />
      <div className="p-5 space-y-3">
        <div className="h-3 bg-muted rounded w-1/3" />
        <div className="h-5 bg-muted rounded w-3/4" />
        <div className="h-3 bg-muted rounded w-full" />
        <div className="h-3 bg-muted rounded w-5/6" />
        <div className="flex gap-2 pt-2">
          <div className="h-5 bg-muted rounded w-16" />
          <div className="h-5 bg-muted rounded w-16" />
          <div className="h-5 bg-muted rounded w-12" />
        </div>
      </div>
    </div>
  );
}

// ── Projects Page ─────────────────────────────────────────────────────────────
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // Simulate brief skeleton loading for perceived performance
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, [activeCategory]);

  const handleCategoryChange = (cat: string) => {
    if (cat === activeCategory) return;
    setLoading(true);
    setActiveCategory(cat);
  };

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  // Count per category
  const counts: Record<string, number> = { All: projectsData.length };
  categories.slice(1).forEach((cat) => {
    counts[cat] = projectsData.filter((p) => p.category === cat).length;
  });

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-muted/40 to-background">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Featured Projects
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Koleksi proyek Data Science, Business Intelligence, dan SAP — setiap proyek disertai
            metrik performa dan konteks bisnis yang jelas.
          </p>
        </div>
      </section>

      {/* ── Category Filter with counts ── */}
      <section className="py-6 border-b border-border/50 sticky top-0 z-10 bg-background/80 backdrop-blur-md">
        <div className="container">
          <div
            className="flex flex-wrap justify-center gap-2"
            role="group"
            aria-label="Filter projects by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                aria-pressed={activeCategory === category}
                className={cn(
                  "inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                    : "bg-background text-muted-foreground border-border hover:bg-muted hover:text-foreground hover:border-primary/30"
                )}
              >
                {category}
                <span
                  className={cn(
                    "text-xs px-1.5 py-0.5 rounded-full font-bold",
                    activeCategory === category
                      ? "bg-white/20 text-white"
                      : "bg-muted text-muted-foreground"
                  )}
                  aria-label={`${counts[category]} projects`}
                >
                  {counts[category]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="py-12 md:py-20">
        <div className="container">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((project, i) => (
                <div
                  key={project.id}
                  className="opacity-0 animate-slide-up fill-mode-forwards"
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  <ProjectCard
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    category={project.category}
                    technologies={project.technologies}
                    thumbnail={project.thumbnail}
                    image={project.image}
                    links={project.links}
                    chartType={project.chartType}
                    metrics={project.metrics}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-muted/20 rounded-2xl border border-dashed">
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
