import bookImage from "@/assets/projects/book-recommendation.jpg";
import BBCA from "@/assets/projects/bbca_prediction_comparison.jpg";
import algoritma from "@/assets/projects/algoritma.jpg";
import aiRecruiterImage from "@/assets/projects/ai-assisten.png";
import posyanduImage from "@/assets/projects/posyandu.png";
import acaImage from "@/assets/projects/aca-advisor.png";

export interface ProjectMetric {
  label: string;
  value: string;
  color: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  fullDescription: string;
  features: string[];
  metrics: ProjectMetric[];
  thumbnail: string;
  image: string;
  links: {
    github?: string;
    liveDemo?: string;
    prd?: string;
  };
  chartType: "inventory" | "sentiment" | "financial" | null;
  codeSnippet: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "aca-advisor-expert-system",
    title: "ACA Advisor — Sistem Pakar Akuntansi EMKM",
    description: "Sistem pakar akuntansi berbasis mesin inferensi Backward Chaining untuk memandu UMKM dalam penentuan debit-kredit dan klasifikasi jurnal memorial patuh SAK EMKM.",
    category: "Full Stack Development",
    technologies: [
      "Node.js",
      "Express.js",
      "React 18",
      "Vite",
      "SQLite3",
      "Backward Chaining",
      "SAK EMKM",
      "REST API"
    ],
    fullDescription: "Aplikasi web sistem pakar yang dirancang untuk mengatasi kendala pembukuan dan kebingungan debit-kredit pada pelaku UMKM berdasarkan standar resmi SAK EMKM terbitan Ikatan Akuntan Indonesia (IAI). Sistem mengintegrasikan mesin inferensi Backward Chaining untuk menuntun pengguna menentukan posisi akun, kodefikasi Bagan Akun (CoA), dan aturan kapitalisasi aset melalui alur tanya-jawab terstruktur. Dilengkapi validasi saldo seimbang (Zero-Proof Balance), mesin penentu metode persediaan perpetual vs periodik, analisis rasio kesehatan finansial, serta otomasi penerbitan jurnal memorial voucher dan laporan keuangan formal (Neraca, Laba Rugi, CALK) yang siap diaudit perbankan.",
    features: [
      "Mesin Inferensi Backward Chaining: Penelusuran pohon keputusan dinamis dari hipotesis jurnal tujuan ke pembuktian premis transaksi",
      "Zero-Proof Balance Guarantee: Validasi mutlak keseimbangan nominal debit dan kredit pada setiap transaksi terverifikasi",
      "Inventory Classification Engine: Evaluasi metode persediaan (Perpetual vs Periodik) dan otomasi kalkulasi HPP",
      "Financial Health Diagnostics: Analisis rasio likuiditas, solvabilitas, dan profitabilitas beserta rekomendasi operasional UMKM",
      "Standarisasi Bagan Akun (CoA): Integrasi 35+ akun baku resmi SAK EMKM lengkap dengan kategori dan kodefikasi industri",
      "Audit Trail & Legal Compliance: Pencatatan rule trace lengkap yang dapat diaudit sebagai dasar verifikasi kelayakan kredit perbankan"
    ],
    metrics: [
      { label: "Standar Akuntansi", value: "SAK EMKM IAI", color: "text-primary" },
      { label: "Keseimbangan Jurnal", value: "100% Balanced", color: "text-palette-primary" },
      { label: "Respon Inferensi", value: "< 150 ms", color: "text-palette-dark" },
      { label: "Knowledge Base", value: "25+ Rules", color: "text-primary" }
    ],
    thumbnail: acaImage,
    image: acaImage,
    links: {
      github: "https://github.com/zikri1707/ACA",
      liveDemo: "https://aca-advisor.netlify.app",
    },
    chartType: null,
    codeSnippet: `/**
 * Backward Chaining Inference Engine
 * Mengevaluasi aturan candidate goals berdasarkan prioritas dan fakta transaksi
 */
export class BackwardChainingEngine {
  static async evaluate(businessType, facts = {}) {
    // 1. Ambil aturan aktif terurut prioritas
    const rules = await query(\`
      SELECT id, code, name, business_type, debit_account_id, credit_account_id, priority
      FROM rules
      WHERE is_active = 1 AND (business_type = ? OR business_type = 'semua')
      ORDER BY priority DESC, code ASC
    \`, [businessType]);

    // 2. Evaluasi kondisi premis IF-THEN
    for (const rule of rules) {
      const conditions = conditionsByRule[rule.id] || [];
      let ruleSatisfied = true;

      for (const cond of conditions) {
        const factVal = facts[cond.fact_name];
        if (factVal === undefined) {
          return { status: 'NEED_INPUT', nextQuestion: questionsMap[cond.fact_name] };
        }
        if (factVal !== cond.expected_value) {
          ruleSatisfied = false;
          break;
        }
      }

      if (ruleSatisfied) {
        return { status: 'PROVEN', goal: rule, auditTrail: rule.code };
      }
    }
    return { status: 'NO_MATCH' };
  }
}`,
  },
  {
    id: "posyandu-kenanga-system",
    title: "Sistem Rekam Medis & Monitoring Tumbuh Kembang Balita",
    description: "Aplikasi rekam medis posyandu berbasis web untuk pemantauan tumbuh kembang balita dengan kalkulasi 4 indeks antropometri standar WHO 2006 / Permenkes.",
    category: "Full Stack Development",
    technologies: [
      "Laravel 12",
      "Livewire 3 (Volt & Flux)",
      "PHP 8.2",
      "Tailwind CSS",
      "MySQL 8",
      "PhpSpreadsheet",
      "Barryvdh DomPDF",
      "Pest PHP"
    ],
    fullDescription: "Sistem informasi berbasis web yang mengintegrasikan portal publik warga dengan dashboard administratif posyandu. Dibangun untuk mendigitalisasi pencatatan manual buku KIA ke KMS digital interaktif, mengotomasi perhitungan 4 indeks antropometri standar WHO 2006 (BB/U, TB/U deteksi stunting, BB/TB deteksi wasting, dan IMT/U deteksi obesitas) menggunakan metode SD & formula Box-Cox LMS. Dilengkapi fitur Fast Bulk Measurement Entry untuk percepatan penimbangan hari-H posyandu, validasi pencegahan duplikasi vitamin/suplemen, audit trail aktivitas, serta automasi ekspor laporan bulanan puskesmas (Excel) dan cetak PDF raport balita.",
    features: [
      "KMS Digital & Kurva Pertumbuhan WHO: Visualisasi grafik pertumbuhan anak (BB/U, TB/U, BB/TB) interaktif dengan kurva standar Z-Score (-3SD s/d +3SD)",
      "Kalkulasi 4 Indeks Antropometri WHO: Engine NutritionCalculatorService untuk deteksi dini stunting, wasting, status gizi umum, dan obesitas",
      "Fast Bulk Measurement Entry: Penginputan cepat data penimbangan massal hari-H tanpa harus reload membuka profil balita satu per satu",
      "Manajemen Pasien & Riwayat Imunisasi: Pengelolaan data terpadu balita, ibu hamil, & lansia beserta validasi peringatan duplikasi vitamin/vaksin",
      "Automasi Pelaporan & Export/Import: Rekapitulasi gizi bulanan puskesmas via Excel (PhpSpreadsheet) dan cetak raport rekam medis individual (DomPDF)",
      "Portal Publik & Kontak Kader: Portal edukasi artikel kesehatan terintegrasi jadwal posyandu per pos/wilayah dan kanal WhatsApp kader",
      "Multi-Tier RBAC & Audit Trail: Hak akses bertingkat (Superadmin, Admin, Kader) dengan pencatatan menyeluruh log aktivitas perubahan data"
    ],
    metrics: [
      { label: "Standard", value: "WHO 2006 LMS", color: "text-primary" },
      { label: "Antropometri", value: "4 Indeks Gizi", color: "text-palette-primary" },
      { label: "Pelaporan", value: "Instant PDF/XLSX", color: "text-palette-dark" },
      { label: "Audit Trail", value: "100% Logged", color: "text-primary" }
    ],
    thumbnail: posyanduImage,
    image: posyanduImage,
    links: {
      github: "https://github.com/Alarave/kenanga-posyandu",
    },
    chartType: null,
    codeSnippet: `/**
 * Kalkulasi 4 Indeks Antropometri WHO 2006 / Standar Kemenkes RI
 * Mengombinasikan Metode SD (BB/U) dan Formula Box-Cox LMS (TB/U, BB/TB, IMT/U)
 */
public function calculateAll(float $weight, float $height, int $ageMonths, string $gender): NutritionResult
{
    $gender = $this->normalizeGender($gender);

    // 1. BB/U (Weight-for-Age) menggunakan metode SD WHO
    $zWfa = $this->calculateWeightForAge($weight, $ageMonths, $gender);

    // 2. TB/U (Height-for-Age) - Deteksi Dini Stunting (LMS)
    $zHfa = $height > 0 ? $this->calculateHeightForAge($height, $ageMonths, $gender) : null;

    // 3. BB/TB (Weight-for-Height) - Deteksi Wasting / Gizi Buruk (LMS)
    $zWfh = ($weight > 0 && $height > 0) 
        ? $this->calculateWeightForHeight($weight, $height, $gender) 
        : null;

    // 4. IMT/U (BMI-for-Age) - Deteksi Risiko Obesitas Balita (LMS)
    $zBfa = ($weight > 0 && $height > 45) 
        ? $this->calculateBmiForAge($weight, $height, $ageMonths, $gender) 
        : null;

    return new NutritionResult(
        $zWfa, $this->classifyNutritionStatus($zWfa),
        $zHfa, $this->classifyStuntingStatus($zHfa),
        $zWfh, $this->classifyWastingStatus($zWfh),
        $zBfa, $this->classifyBmiStatus($zBfa)
    );
}`,
  },
  {
    id: "ai-recruiter-dashboard",
    title: "AI Recruiter Dashboard (Advanced RAG)",
    description: "Sistem rekrutmen berbasis AI dengan kemampuan RAG (Retrieval-Augmented Generation) untuk pencocokan kandidat otomatis.",
    category: "Data Science",
    technologies: ["Python", "LangChain", "OpenAI", "FAISS", "React", "PostgreSQL"],
    fullDescription: "Dashboard end-to-end yang membantu HR memproses ribuan resume dengan akurasi tinggi menggunakan model bahasa besar. Fitur utama meliputi ekstraksi entitas otomatis, pencarian semantik terhadap dataset resume, dan perangkingan kandidat berdasarkan kualifikasi spesifik.",
    features: [
      "Pencarian semantik (Vector Search)",
      "Ekstraksi data otomatis dari PDF/DOCX",
      "Perangkingan kandidat real-time",
      "Analisis kecocokan skill (Gap Analysis)"
    ],
    metrics: [
      { label: "Processing Speed", value: "2s/Resume", color: "text-primary" },
      { label: "Match Accuracy", value: "92%", color: "text-palette-primary" },
      { label: "Vector DB", value: "FAISS", color: "text-palette-dark" }
    ],
    thumbnail: aiRecruiterImage,
    image: aiRecruiterImage,
    links: {
      liveDemo: "#",
      github: "#",
      prd: "https://drive.google.com/file/d/1y0z3lhu_d5V-5WVL7y66cGlnx8Q2rLOT/view?usp=sharing"
    },
    chartType: "sentiment",
    codeSnippet: `# Advanced RAG with Hybrid Search
from langchain.retrievers import EnsembleRetriever
from langchain_community.retrievers import BM25Retriever

# Combine BM25 and Vector Search
ensemble_retriever = EnsembleRetriever(
    retrievers=[bm25_retriever, faiss_retriever],
    weights=[0.5, 0.5]
)`,
  },
  {
    id: "book-recommendation-system",
    title: "Book Recommendation System (Akurasi Cosine 94%)",
    description: "Sistem rekomendasi buku menggunakan Content-Based Filtering dan Collaborative Filtering untuk personalisasi bacaan.",
    category: "Data Science",
    technologies: ["Python", "Pandas", "Scikit-learn", "Flask", "Cosine Similarity"],
    fullDescription: "Aplikasi yang memberikan rekomendasi buku berdasarkan preferensi pengguna. Menggunakan matriks TF-IDF untuk representasi teks dan Cosine Similarity untuk menghitung kemiripan antar buku.",
    features: [
      "Rekomendasi berbasis genre dan penulis",
      "Visualisasi kemiripan data",
      "Search engine buku interaktif"
    ],
    metrics: [
      { label: "Accuracy", value: "94%", color: "text-primary" },
      { label: "Dataset Size", value: "50k Books", color: "text-palette-primary" },
      { label: "Model", value: "Cosine Sim", color: "text-palette-dark" }
    ],
    thumbnail: bookImage,
    image: bookImage,
    links: {
      github: "https://github.com/Alarave",
    },
    chartType: null,
    codeSnippet: `from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

tfidf = TfidfVectorizer(stop_words='english')
tfidf_matrix = tfidf.fit_transform(df['description'])
cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)`,
  },
  {
    id: "lstm-bbca-stock-prediction",
    title: "Prediksi Saham BBCA dengan Stacked LSTM (MAPE 2.67%)",
    description: "Memprediksi harga saham Bank Central Asia (BBCA) menggunakan deep learning Stacked LSTM dan 7 indikator teknikal dengan protokol Zero Data Leakage.",
    category: "Data Science",
    technologies: ["Python", "TensorFlow", "Keras", "Stacked LSTM", "Scikit-Learn", "yfinance", "Pandas", "NumPy", "Plotly"],
    fullDescription: "Membangun model time-series forecasting untuk saham BBCA (BBCA.JK) periode 2021–2025 (1.186 hari bursa). Mengimplementasikan arsitektur Stacked LSTM (128 & 64 units) dengan 7 indikator teknikal (SMA 20, EMA 20, RSI 14, MACD, Bollinger Bands) dan protokol Zero Data Leakage pada sliding window 60 hari. Hasil evaluasi out-of-sample (238 hari bursa): model mencapai MAPE 2.67%, R² 0.7010, RMSE 274.96, MAE IDR 216.35, serta Directional Accuracy 44.73% (+8.02% lift di atas Naive Baseline).",
    features: [
      "Arsitektur Deep Learning Stacked LSTM (128-64 units dengan Dropout & BatchNormalization)",
      "7 Indikator Teknikal Pasar (SMA 20, EMA 20, RSI 14, MACD, Bollinger Bands)",
      "Protokol Zero Data Leakage dengan isolasi penskalaan murni pada 80% data latih",
      "Sliding Window Tensor 60 hari bursa (~3 bulan) untuk dependensi temporal",
      "Evaluasi Kritis terhadap Naive Persistence Benchmark (+8.02% Directional Lift)",
      "Adaptive Callbacks (EarlyStopping, ReduceLROnPlateau, ModelCheckpoint)"
    ],
    metrics: [
      { label: "MAPE", value: "2.67%", color: "text-primary" },
      { label: "R-Squared", value: "0.7010", color: "text-palette-primary" },
      { label: "Directional Acc", value: "44.73%", color: "text-palette-dark" }
    ],
    thumbnail: BBCA,
    image: BBCA,
    links: {
      github: "https://github.com/Alarave/BBCA-Stock-Prediction",
    },
    chartType: null,
    codeSnippet: `import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout, BatchNormalization

# Arsitektur Stacked LSTM (Zero Data Leakage Pipeline)
model = Sequential([
    LSTM(128, return_sequences=True, input_shape=(60, 7)),
    Dropout(0.2),
    BatchNormalization(),
    LSTM(64, return_sequences=False),
    Dropout(0.2),
    BatchNormalization(),
    Dense(32, activation='relu'),
    Dropout(0.1),
    Dense(16, activation='relu'),
    Dense(1, activation='linear')
])

model.compile(
    optimizer=tf.keras.optimizers.Adam(learning_rate=1e-3),
    loss='mse',
    metrics=['mae']
)`,
  },
  {
    id: "dijkstra-shortest-path",
    title: "Dijkstra Shortest Path — Optimasi Rute Logistik",
    description: "Implementasi algoritma Dijkstra untuk menemukan rute terpendek dalam jaringan distribusi — dengan visualisasi interaktif step-by-step.",
    category: "Data Science",
    technologies: ["Python", "NetworkX", "Matplotlib", "Graph Theory", "Algorithms"],
    fullDescription: "Situasi: Sistem logistik membutuhkan optimasi rute pengiriman untuk meminimalkan biaya. Tugas: Mengimplementasikan algoritma shortest path yang efisien. Aksi: Implementasi Dijkstra dengan priority queue (Min-Heap), weighted graph, dan visualisasi step-by-step menggunakan NetworkX.",
    features: [
      "Konstruksi dan manajemen weighted graph",
      "Optimasi priority queue (Min-Heap)",
      "Visualisasi step-by-step"
    ],
    metrics: [
      { label: "Complexity", value: "O((V+E)logV)", color: "text-primary" },
      { label: "Graph Type", value: "Weighted", color: "text-palette-primary" },
      { label: "Visuals", value: "NetworkX", color: "text-palette-dark" }
    ],
    thumbnail: algoritma,
    image: algoritma,
    links: {
      liveDemo: "https://algoritmadijkstra.netlify.app/",
      github: "https://github.com/Alarave",
    },
    chartType: null,
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
