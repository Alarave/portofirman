import bookImage from "@/assets/projects/book-recommendation.jpg";
import BBCA from "@/assets/projects/bbca_prediction_comparison.jpg";
import algoritma from "@/assets/projects/algoritma.jpg";
import aiRecruiterImage from "@/assets/projects/ai-assisten.png";


export const projectsData = [
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
      github: "https://github.com"
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
    title: "Prediksi Saham BBCA dengan LSTM (MAPE 2.53%)",
    description: "Memprediksi harga saham Bank Central Asia (BBCA) menggunakan deep learning LSTM — mencapai MAPE 2.53% dan R² 0.6871 pada data historis.",
    category: "Data Science",
    technologies: ["Python", "TensorFlow", "Keras", "Pandas", "NumPy", "yfinance", "Plotly"],
    fullDescription: "Membangun model time-series forecasting untuk saham BBCA. Mengimplementasikan LSTM (128-64 units) dengan 5 indikator teknikal, EarlyStopping, dan ReduceLROnPlateau. Hasil: Model mencapai MAE 214.05, RMSE 277.39, MAPE 2.53%, R² 0.6871, dan Direction Accuracy 47.11%.",
    features: [
      "Indikator Teknikal (MA, RSI, Bollinger)",
      "Prediksi harga 30 hari kedepan",
      "Dashboard interaktif Plotly"
    ],
    metrics: [
      { label: "MAPE", value: "2.53%", color: "text-primary" },
      { label: "R-Squared", value: "0.6871", color: "text-palette-primary" },
      { label: "RMSE", value: "277.39", color: "text-palette-dark" }
    ],
    thumbnail: BBCA,
    image: BBCA,
    links: {
      github: "https://github.com"
    },
    chartType: "financial",
    codeSnippet: `import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout

model = Sequential([
    LSTM(128, return_sequences=True, input_shape=(X_train.shape[1], 1)),
    Dropout(0.2),
    LSTM(64),
    Dense(1)
])`,
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
      liveDemo: "https://algoritmadijkstra.netlify.app/"
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
  {
    id: "ai-agent-automation",
    title: "AI Agent for Automated Customer Support",
    description: "Developing intelligent agents to automate customer support interactions, reducing ticket resolution time.",
    category: "AI Engineer",
    technologies: ["Python", "FastAPI", "OpenAI", "LangGraph"],
    fullDescription: "Built an AI-driven agentic workflow to handle customer inquiries, significantly improving response times and satisfaction.",
    features: ["Agentic workflows", "Automated ticketing", "Context-aware responses"],
    metrics: [{ label: "Reduction in Time", value: "60%", color: "text-primary" }],
    links: { github: "#" },
    chartType: null,
    codeSnippet: `def handle_inquiry(query):\n    # Agent logic here\n    pass`,
  },
  {
    id: "product-roadmap-optimization",
    title: "Product Roadmap Optimization for Fintech App",
    description: "Optimizing product roadmap features based on user feedback analysis and market trends.",
    category: "Product Management",
    technologies: ["Jira", "Mixpanel", "SQL"],
    fullDescription: "Strategically aligned feature releases with market demand and user behavior to maximize product adoption.",
    features: ["Roadmap prioritization", "User feedback synthesis", "KPI tracking"],
    metrics: [{ label: "Adoption Increase", value: "15%", color: "text-primary" }],
    links: { liveDemo: "#" },
    chartType: null,
    codeSnippet: `// Prioritization Matrix`,
  },
];
