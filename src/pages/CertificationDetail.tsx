import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";

// ✅ PERBAIKAN 1: Import path yang benar (gunakan @/ bukan @src/)
import sertif1 from "@/assets/sertif/Sertif1.png";
import sertif2 from "@/assets/sertif/Sertif2.png";
import sertif3 from "@/assets/sertif/Sertif3.jpg";
import sertif4 from "@/assets/sertif/Sertif4.jpg";
import sertif5 from "@/assets/sertif/Sertif5.jpg";

export const certificationsData = [
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
    icon: sertif1,  // Image import
    isImage: true,  // Flag untuk tahu ini gambar
    description: "Seminar tentang peran strategis Big Data dalam mewujudkan Asta Cita di sektor kesehatan dan pengembangan kerjasama antara Universitas Gunadarma, Kementerian Kesehatan, dan UNICEF. Membahas implementasi data analytics dalam sistem kesehatan nasional.",
    skills: ["Big Data", "Healthcare Analytics", "Data Strategy", "Public Health", "Data Governance"],
  },
  {
    id: "data-analysis-analytics",
    title: "Master in Data Analysis and Analytics",
    issuer: "Udemy",
    year: "2024",
    icon: sertif2,  // Emoji
    isImage: true,  // Flag untuk tahu ini emoji
    description: "In-depth certification focused on data analysis techniques, statistical methods, and analytics tools. Covers data visualization, exploratory data analysis, and deriving actionable insights from complex datasets.",
    skills: ["Data Analysis", "Statistics", "Data Visualization", "Excel", "SQL", "Power BI"],
  },
  {
    id: "sap-s4hana",
    title: "SAP S/4HANA Business Process Simulation Program",
    issuer: "SAP",
    year: "2024",
    icon: sertif1,  // Emoji
    isImage: true,  // Flag untuk tahu ini emoji
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
];

const CertificationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const cert = certificationsData.find((c) => c.id === id);

  // Debug: Cek di console browser apakah import berhasil
  console.log("Certificate Data:", cert);
  console.log("Sertif1 Import:", sertif1);

  if (!cert) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Certification Not Found</h1>
          <p className="text-muted-foreground mb-8">The certification you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/about">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to About
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  // ✅ PERBAIKAN 3: Function untuk render icon/image
  const renderIcon = (icon: any, isImage: boolean, size: string = "w-16 h-16") => {
    if (isImage) {
      return (
        <img
          src={icon}
          alt="Certificate"
          className={`${size} object-contain`}
          onError={(e) => {
            console.error("Image failed to load:", icon);
            e.currentTarget.style.display = "none";
          }}
        />
      );
    }
    return <span className="text-4xl">{icon}</span>;
  };

  return (
    <Layout>
      <section className="py-12 border-b border-border">
        <div className="container">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/about">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to About
            </Link>
          </Button>

          <div className="flex items-start gap-4">
            {/* ✅ Render icon/image dengan conditional */}
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
              {renderIcon(cert.icon, cert.isImage)}
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">
                {cert.issuer} · {cert.year}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">{cert.title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {/* ✅ Render certificate image di detail page */}
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden p-4">
                {cert.isImage ? (
                  <img
                    src={cert.icon}
                    alt={cert.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      console.error("Detail image failed to load:", cert.icon);
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement!.innerHTML = '<span className="text-6xl">📄</span>';
                    }}
                  />
                ) : (
                  <span className="text-6xl">{cert.icon}</span>
                )}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted/30 p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-4">Skills Covered</h3>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline"
                      className="hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Optional: Tombol download PDF jika ada */}
              {/* 
              <Button variant="outline" className="w-full" asChild>
                <a href={sertif1Pdf} target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Certificate
                </a>
              </Button>
              */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CertificationDetail;