import { Layout } from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { useState } from "react";
import { cn } from "@/lib/utils";
import bookImage from "@/assets/projects/book-recommendation.jpg";
import BBCA from "@/assets/projects/bbca_prediction_comparison.jpg";
import algoritma from "@/assets/projects/algoritma.jpg";

// Pastikan semua project memiliki struktur yang konsisten
export const projectsData = [
  {
    id: "book-recommendation-system",
    title: "Book Recommendation System",
    description:
      "A content-based book recommendation system that helps users find relevant books based on description and category similarity.",
    category: "Data Science",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "TF-IDF",
      "Cosine Similarity",
      "React",
      "TypeScript",
    ],
    fullDescription:
      "Developed a content-based filtering book recommendation system that analyzes book descriptions, categories, and metadata to generate relevant recommendations. The system uses TF-IDF vectorization and cosine similarity to find books with similar content, providing users with personalized suggestions based on their interests.",
    features: [
      "Book search based on title or keywords",
      "Book recommendations based on content similarity",
     "Displays similarity scores between books",
     "Interactive and responsive web interface",
     "Consistent recommendation results without requiring user login",
    ],
    thumbnail: bookImage, // Untuk Card
    image: bookImage,     // Untuk Detail Page (bisa resolusi lebih tinggi)
    links: {
      liveDemo: "https://icarusbookai.netlify.app/",
      github: "https://github.com/Alarave/Icarus-AI",
    },
  },
  {
    id: "lstm-bbca-stock-prediction",
    title: "LSTM-Based BBCA Stock Price Prediction",
    description:
      "Deep learning project leveraging LSTM networks to forecast Bank Central Asia (BBCA) stock prices using historical data and technical indicators.",
    category: "Data Science",
    technologies: [  "Python", 
    "TensorFlow", 
    "Keras", 
    "Pandas", 
    "NumPy", 
    "yfinance", 
    "Plotly", 
    "Scikit-learn"],
    fullDescription:
      "LSTM (Long Short-Term Memory) model to predict BBCA (Bank Central Asia Tbk) stock prices on the Indonesia Stock Exchange. The project combines technical analysis indicators with deep learning to forecast stock price movements based on historical data.",
    features: [
    "Time-series forecasting using LSTM architecture (128-64 units)",
    "Feature engineering with 5 technical indicators",
    "Model evaluation (MAE, RMSE, MAPE, R², Direction Accuracy)",
    "Interactive visualization with Plotly",
    "Data pipeline via Yahoo Finance API",
    "EarlyStopping & ReduceLROnPlateau callbacks"
    ],
    // Tambahkan placeholder atau image asli jika ada
    thumbnail: BBCA, // Untuk Card
    image: BBCA,     // Untuk Detail Page
    links: {
      github: "https://github.com/Alarave/BBCA-Stock-Prediction.git",
    },
  },
  {
    id: "sap-inventory",
    title: "SAP Inventory Management",
    description:
      "ERP system implementation for inventory tracking and management using SAP S/4HANA modules.",
    category: "SAP/ERP",
    technologies: ["SAP S/4HANA", "ABAP", "SAP Fiori", "SQL"],
    fullDescription:
      "Configured and customized SAP S/4HANA modules for efficient inventory management.",
    features: [
      "Real-time inventory tracking",
      "Automated reorder notifications",
      "Warehouse management integration",
      "Stock valuation reports",
    ],
    thumbnail: undefined,
    image: undefined,
    links: {},
  },
  {
    id: "sentiment-analysis",
    title: "Social Media Sentiment Analysis",
    description:
      "NLP project analyzing social media sentiment using Python and machine learning techniques.",
    category: "Data Science",
    technologies: ["Python", "NLTK", "TensorFlow", "Pandas"],
    fullDescription:
      "Built a sentiment analysis model to analyze customer opinions from social media platforms.",
    features: [
      "Text preprocessing and cleaning",
      "Sentiment classification model",
      "Trend analysis dashboard",
      "Brand perception insights",
    ],
    thumbnail: undefined,
    image: undefined,
    links: {},
  },
  {
    id: "financial-reporting",
    title: "Financial Reporting Dashboard",
    description:
      "Looker Studio dashboard for financial reporting and analysis with automated data refresh.",
    category: "Business Intelligence",
    technologies: ["Looker Studio", "BigQuery", "SQL", "Google Sheets"],
    fullDescription:
      "Created an automated financial reporting dashboard that pulls data from BigQuery.",
    features: [
      "Automated data refresh",
      "P &L statement visualization",
      "Budget vs actual comparison",
      "Cash flow analysis",
    ],
    thumbnail: undefined,
    image: undefined,
    links: {},
  },
  {
    id: "dijkstra-shortest-path",
    title: "Dijkstra Shortest Path Algorithm",
    description:
      "Graph theory implementation to find the shortest path between nodes using Dijkstra's algorithm with interactive visualization.",
    category: "Data Science",
    technologies: [
      "Python",
      "NetworkX",
      "Matplotlib",
      "Graph Theory",
      "Algorithms",
      "Data Structures",
    ],
    fullDescription:
      "Implemented Dijkstra's algorithm to solve the single-source shortest path problem for graph data structures. The project includes a weighted graph representation, priority queue optimization, and step-by-step path visualization. This tool demonstrates fundamental algorithmic concepts used in network routing, GPS navigation systems, and logistics optimization.",
    features: [
      "Weighted graph construction and management",
      "Priority queue optimization (Min-Heap)",
      "Shortest path calculation between any two nodes",
      "Step-by-step algorithm execution trace",
    ],
    thumbnail: algoritma, // Ganti dengan import gambar jika ada (contoh: dijkstraImage)
    image: algoritma,     // Ganti dengan import gambar jika ada
    links: {
      liveDemo: "https://algoritmadijkstra.netlify.app/",
    },
  },
];

const categories = ["All", "Data Science", "Business Intelligence", "SAP/ERP"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category.includes(activeCategory));

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured Projects
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Koleksi proyek terbaik yang mencakup Data Science, Business Intelligence, dan System Implementation.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border/50">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-background text-muted-foreground border-border hover:bg-muted hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-20">
        <div className="container">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  category={project.category}
                  technologies={project.technologies}
                  thumbnail={project.thumbnail}
                  image={project.image}
                  links={project.links}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-muted/20 rounded-xl border border-dashed">
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;