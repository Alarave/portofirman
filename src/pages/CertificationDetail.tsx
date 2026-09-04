import { useParams, Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Award, Calendar, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

// Import path sertifikat
import sertif1 from "@/assets/sertif/Sertif1.png";
import sertif2 from "@/assets/sertif/Sertif2.png";
import sertif3 from "@/assets/sertif/Sertif3.jpg";
import sertif4 from "@/assets/sertif/Sertif4.jpg";
import sertif5 from "@/assets/sertif/Sertif5.jpg";
import sertif6 from "@/assets/sertif/Sertif6.png";
import sertif7 from "@/assets/sertif/Sertif7.png";
import sertif8 from "@/assets/sertif/sertif8.PNG";
import sertif9 from "@/assets/sertif/sertif9.png";
import sertif10 from "@/assets/sertif/sertif10.png";
import sertif11 from "@/assets/sertif/sertif11.jpg";
import sertif12 from "@/assets/sertif/sertif12.jpg";
import sertif13 from "@/assets/sertif/sertif13.jpg";

export const certificationsData = [
  {
    id: "dicoding-belajar-dasar-data-science",
    title: "Belajar Dasar Data Science",
    issuer: "Dicoding Indonesia",
    year: "2026",
    icon: sertif10,
    isImage: true,
    description: "Sertifikat kompetensi kelulusan kelas Belajar Dasar Data Science yang diselenggarakan oleh Dicoding Academy. Kurikulum mencakup pemahaman fundamental siklus data science, eksplorasi & pembersihan data, statistik deskriptif, dan pengenalan machine learning modeling.",
    skills: ["Data Science", "Data Exploration", "Data Cleaning", "Descriptive Statistics", "Machine Learning"],
    credentialId: "EYX4O7E7WXDL",
    credentialUrl: "https://www.dicoding.com/certificates/EYX4O7E7WXDL",
  },
  {
    id: "udemy-machine-learning-python-data-science",
    title: "Machine Learning & Python Data Science for Business and AI",
    issuer: "Udemy · Brighter Futures Hub",
    year: "2026",
    icon: sertif12,
    isImage: true,
    description: "Sertifikat penyelesaian pelatihan komprehensif Machine Learning & Python Data Science for Business and AI di platform Udemy. Mempelajari implementasi algoritma machine learning, pemrosesan data dengan Python, serta aplikasi praktis AI untuk pemecahan masalah bisnis.",
    skills: ["Machine Learning", "Python", "Data Science", "Artificial Intelligence", "Business Analytics", "Model Evaluation"],
    credentialId: "UC-ae409f82-85db-445c-a0dd-e65ad26b0d25",
    credentialUrl: "https://www.udemy.com/certificate/UC-ae409f82-85db-445c-a0dd-e65ad26b0d25/",
  },
  {
    id: "seminar-kebanksentralan-bi-gunadarma",
    title: "Seminar Kebanksentralan",
    issuer: "Bank Indonesia & Universitas Gunadarma",
    year: "2026",
    icon: sertif11,
    isImage: true,
    description: "Sertifikat Penghargaan sebagai Peserta dalam kegiatan Seminar Kebanksentralan yang diselenggarakan atas kerjasama antara Bank Indonesia dan Universitas Gunadarma, bertempat di Auditorium Kampus F8 Universitas Gunadarma Depok pada 20 Juni 2026.",
    skills: ["Kebanksentralan", "Kebijakan Moneter", "Sistem Pembayaran", "Stabilitas Sistem Keuangan", "Makroekonomi"],
  },
  {
    id: "udemy-project-management-agile-scrum-pmp",
    title: "Project Management Methodologies: Agile, Scrum, and PMP",
    issuer: "Udemy · MTF Institute",
    year: "2025",
    icon: sertif13,
    isImage: true,
    description: "Sertifikat kelulusan kursus Project Management Methodologies: Agile, Scrum, and PMP di platform Udemy. Menguasai framework manajemen proyek modern termasuk Agile methodology, Scrum sprint planning, dan standar Project Management Professional (PMP).",
    skills: ["Project Management", "Agile", "Scrum", "Sprint Planning", "PMP Framework"],
    credentialId: "UC-8373100e-b253-487f-b608-e8a2b7a12753",
    credentialUrl: "https://www.udemy.com/certificate/UC-8373100e-b253-487f-b608-e8a2b7a12753/",
  },
  {
    id: "dicoding-introduction-financial-literacy",
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding Indonesia · DBS Foundation",
    year: "2026",
    icon: sertif9,
    isImage: true,
    description: "Sertifikat kompetensi kelulusan kelas Introduction to Financial Literacy yang diselenggarakan oleh Dicoding Academy dalam program Coding Camp 2026 powered by DBS Foundation. Membekali pemahaman komprehensif mengenai pengelolaan keuangan pribadi (personal finance), navigasi masa depan finansial, strategi investasi, dan manajemen pinjaman bijak (loan management).",
    skills: ["Financial Literacy", "Personal Finance", "Investment Planning", "Smart Borrowing", "Financial Analysis"],
    credentialId: "1OP87L82VZQK",
    credentialUrl: "https://www.dicoding.com/certificates/1OP87L82VZQK",
  },
  {
    id: "fgd-team-project-ovarium",
    title: "FGD Team Project: Perbandingan Kinerja Model ResNet dan VGG16 untuk Klasifikasi Penyakit Ovarium",
    issuer: "Universitas Gunadarma · UG-AI-CoE",
    year: "2026",
    icon: sertif5,
    isImage: true,
    description: "A collaborative team project focusing on comparing the performance of ResNet and VGG16 models using Gray Level Co-occurrence Matrix (GLCM) feature extraction for classifying ovarian diseases in medical images.",
    skills: ["Deep Learning", "ResNet", "VGG16", "Medical Imaging", "GLCM", "Python"],
  },
  {
    id: "iarc-ai-research-collaboration",
    title: "Kick off the AI Research Collaboration Network Initiative and Launch of IARC Research Network Secretariat",
    issuer: "Universitas Gunadarma · IARC",
    year: "2024",
    icon: sertif3,
    isImage: true,
    description: "Participation in the launch of the AI Research Collaboration Network Initiative and the IARC Research Network Secretariat, focusing on fostering collaborative research in Artificial Intelligence.",
    skills: ["AI Research", "Collaboration Network", "Research Initiative"],
  },
  {
    id: "big-data-healthcare-seminar",
    title: "Seminar Peran Strategis Big Data Dalam Mewujudkan Asta Cita Di Sektor Kesehatan",
    issuer: "Universitas Gunadarma · Kementerian Kesehatan · UNICEF",
    year: "2024",
    icon: sertif1,
    isImage: true,
    description: "Seminar tentang peran strategis Big Data dalam mewujudkan Asta Cita di sektor kesehatan dan pengembangan kerjasama antara Universitas Gunadarma, Kementerian Kesehatan, dan UNICEF. Membahas implementasi data analytics dalam sistem kesehatan nasional.",
    skills: ["Big Data", "Healthcare Analytics", "Data Strategy", "Public Health", "Data Governance"],
  },
  {
    id: "data-analysis-analytics",
    title: "Master in Data Analysis and Analytics",
    issuer: "Udemy",
    year: "2024",
    icon: sertif2,
    isImage: true,
    description: "In-depth certification focused on data analysis techniques, statistical methods, and analytics tools. Covers data visualization, exploratory data analysis, and deriving actionable insights from complex datasets.",
    skills: ["Data Analysis", "Statistics", "Data Visualization", "Excel", "SQL", "Power BI"],
  },
  {
    id: "sap-s4hana",
    title: "SAP S/4HANA Business Process Simulation Program",
    issuer: "SAP",
    year: "2024",
    icon: sertif1,
    isImage: true,
    description: "Official SAP certification program covering S/4HANA business process simulation including procurement, sales, manufacturing, and warehouse management modules.",
    skills: ["SAP S/4HANA", "ERP", "Business Process", "Procurement", "Sales", "Manufacturing"],
  },
  {
    id: "gdsc-info-session",
    title: "Certificate of Attendance: Info Session From Organization to Team: Introducing GDSC and Our Team",
    issuer: "Google Developer Student Clubs Universitas Gunadarma",
    year: "2023",
    icon: sertif4,
    isImage: true,
    description: "Attendance at the GDSC Info Session, introducing the organization's goals, team structure, and upcoming initiatives for the 2023/2024 period.",
    skills: ["GDSC", "Community Engagement", "Team Introduction"],
  },
  {
    id: "bank-transaction-fraud-detection",
    title: "FGD Team Project: Comparative Analysis of CatBoost, FT-Transformer, and TabPFN for Bank Transaction Fraud Detection",
    issuer: "HPC Universitas Gunadarma · UG-AI-CoE",
    year: "2026",
    icon: sertif6,
    isImage: true,
    description: "A comparative analysis focusing on the performance of CatBoost, FT-Transformer, and TabPFN models for detecting fraudulent bank transactions. This project utilizes the CRISP-DM methodology and hands-on implementation for tabular data analysis.",
    skills: ["Machine Learning", "CatBoost", "FT-Transformer", "TabPFN", "Fraud Detection", "CRISP-DM"],
  },
  {
    id: "driver-drowsiness-detection",
    title: "FGD Team Project: Implementasi Model Deteksi Kantuk dan Distraksi Pengemudi secara Real-Time menggunakan MediaPipe dan MobilenetV3",
    issuer: "HPC Universitas Gunadarma · UG-AI-CoE",
    year: "2026",
    icon: sertif7,
    isImage: true,
    description: "A real-time driver drowsiness and distraction detection system implemented using MediaPipe Face Mesh for facial landmark extraction and MobileNetV3 for classification. The project focuses on improving road safety through computer vision.",
    skills: ["Computer Vision", "MediaPipe", "MobileNetV3", "Drowsiness Detection", "Real-Time AI", "Python"],
  },
  {
    id: "asisten-praktikum-dgx-universitas-gunadarma-2026",
    title: "Sertifikat Asisten Praktikum Mata Kuliah Unggulan (Praktikum DGX)",
    issuer: "Universitas Gunadarma",
    year: "2026",
    icon: sertif8,
    isImage: true,
    description: "Sertifikat sebagai Asisten dalam Praktikum Mata Kuliah Unggulan (Praktikum DGX) menggunakan Supercomputer NVIDIA DGX A100 yang diselenggarakan oleh Universitas Gunadarma selama Semester Genap ATA 2025/2026.",
    skills: ["NVIDIA DGX A100", "High Performance Computing (HPC)", "Artificial Intelligence", "Machine Learning", "Praktikum", "Asistensi", "Supercomputing"],
  },
];

const CertificationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  const currentIndex = certificationsData.findIndex((c) => c.id === id);
  const cert = currentIndex !== -1 ? certificationsData[currentIndex] : null;

  // Pagination kalkulasi (looping prev/next)
  const prevCert =
    currentIndex > 0
      ? certificationsData[currentIndex - 1]
      : certificationsData[certificationsData.length - 1];
  const nextCert =
    currentIndex < certificationsData.length - 1
      ? certificationsData[currentIndex + 1]
      : certificationsData[0];

  // Reset img error & smooth scroll to top when switching certs
  useEffect(() => {
    setImgError(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // Keyboard navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && prevCert) {
        navigate(`/certifications/${prevCert.id}`);
      } else if (e.key === "ArrowRight" && nextCert) {
        navigate(`/certifications/${nextCert.id}`);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevCert, nextCert, navigate]);

  if (!cert) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Certification Not Found</h1>
          <p className="text-muted-foreground mb-8">The certification you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/" state={{ scrollTo: "certifications" }}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Sertifikasi
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* ── Top Navigation Bar ── */}
      <section className="pt-24 pb-6 border-b border-border/40">
        <div className="container">
          <Button variant="ghost" asChild className="pl-0 hover:bg-transparent text-muted-foreground hover:text-primary">
            <Link to="/" state={{ scrollTo: "certifications" }}>
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" /> Kembali ke Sertifikasi
            </Link>
          </Button>
        </div>
      </section>

      {/* ── Header Info ── */}
      <section className="py-10 border-b border-border/30 bg-muted/10">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden border border-primary/15 shadow-inner">
              {cert.isImage && !imgError ? (
                <img
                  src={cert.icon}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Award className="w-10 h-10 text-primary" />
              )}
            </div>
            <div className="space-y-2">
              <Badge variant="secondary" className="bg-primary/15 text-primary border-0 font-bold px-3 py-1">
                {cert.issuer} · {cert.year}
              </Badge>
              <h1 className="text-2xl md:text-4xl font-black text-foreground tracking-tight leading-tight">
                {cert.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ── Certificate Preview & Details ── */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Certificate Document Viewer & Overview */}
            <div className="lg:col-span-2 space-y-8">
              <div className="rounded-2xl border border-border/60 bg-muted/20 flex items-center justify-center p-3 sm:p-6 min-h-[320px] max-h-[620px] overflow-hidden shadow-sm">
                {!imgError && cert.isImage ? (
                  <img
                    src={cert.icon}
                    alt={cert.title}
                    className="max-h-[560px] w-auto max-w-full object-contain rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.01]"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 text-muted-foreground gap-3">
                    <span className="text-6xl" aria-hidden="true">📄</span>
                    <p className="text-sm font-medium">Dokumen Sertifikat</p>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {cert.description}
                </p>
              </div>
            </div>

            {/* Right: Skills & Meta */}
            <div className="space-y-6">
              <div className="bg-muted/30 p-6 rounded-2xl border border-border/50 space-y-4">
                <h3 className="font-bold text-foreground">Skills Covered</h3>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline"
                      className="px-3 py-1 rounded-xl text-xs font-semibold hover:text-primary hover:border-primary/50 transition-all"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-2xl border border-border/50 space-y-3">
                <h3 className="font-bold text-foreground">Credential Details</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Penerbit</span>
                    <span className="font-semibold text-foreground">{cert.issuer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tahun</span>
                    <span className="font-semibold text-foreground">{cert.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status</span>
                    <span className="font-semibold text-primary">Verified</span>
                  </div>
                  {cert.credentialId && (
                    <div className="flex justify-between items-center pt-1 border-t border-border/40">
                      <span>ID Kredensial</span>
                      <span className="font-mono text-xs font-bold text-foreground bg-muted px-2 py-0.5 rounded">
                        {cert.credentialId}
                      </span>
                    </div>
                  )}
                </div>

                {cert.credentialUrl && (
                  <Button asChild className="w-full mt-4 rounded-xl shadow-md font-bold" size="sm">
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Verifikasi Kredensial Resmi
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* ── Bottom Pagination Cards ── */}
          <div className="mt-16 pt-10 border-t border-border/40">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Prev */}
              <button
                onClick={() => navigate(`/certifications/${prevCert.id}`)}
                className="flex items-center gap-4 p-4 rounded-2xl border border-border/50 bg-card hover:bg-muted/30 transition-all text-left group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:-translate-x-1 transition-transform">
                  <ArrowLeft className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider block mb-1">
                    Previous Credential
                  </span>
                  <p className="text-sm font-bold text-foreground truncate group-hover:text-primary transition-colors">
                    {prevCert.title}
                  </p>
                </div>
              </button>

              {/* Next */}
              <button
                onClick={() => navigate(`/certifications/${nextCert.id}`)}
                className="flex items-center justify-between gap-4 p-4 rounded-2xl border border-border/50 bg-card hover:bg-muted/30 transition-all text-right group"
              >
                <div className="min-w-0 flex-1">
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider block mb-1">
                    Next Credential
                  </span>
                  <p className="text-sm font-bold text-foreground truncate group-hover:text-primary transition-colors">
                    {nextCert.title}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CertificationDetail;