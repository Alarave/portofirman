import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Calendar,
  MapPin,
  Users,
  TrendingUp,
  Award,
  Building2,
  Star,
  Target,
  CheckCircle2,
  ArrowRight,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// --- Type Definitions ---
interface ExperienceData {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  icon: string;
  color: string;
  description: string;
  responsibilities: string[];
  achievements?: string[]; // Optional property untuk organization
}

// --- Work Experience Data ---
const workExperiences: ExperienceData[] = [
  {
    id: 1,
    title: "Data Entry Agent",
    company: "PT. Pegadaian",
    location: "Jakarta, Indonesia",
    period: "2025 - Present",
    type: "Part-time",
    icon: "🏦",
    color: "from-blue-500 to-blue-600",
    description:
      "Responsible for accurate data entry and management of customer records in the company's database system. Ensuring data integrity and compliance with company policies.",
    responsibilities: [
      "Managing and processing large volumes of customer data with high accuracy",
      "Performing quality checks on entered data to maintain database integrity",
      "Collaborating with team members to streamline data entry processes",
      "Generating reports on data entry metrics and performance",
    ],
  },
  {
    id: 2,
    title: "Project Manager",
    company: "Information Systems Project",
    location: "Gunadarma University",
    period: "2024",
    type: "Academic Project",
    icon: "🎓",
    color: "from-purple-500 to-purple-600",
    description:
      "Led a team project for Information Systems course, overseeing project planning, execution, and delivery of a comprehensive system solution.",
    responsibilities: [
      "Coordinating team activities and managing project timeline",
      "Facilitating communication between team members and stakeholders",
      "Ensuring project deliverables meet quality standards and deadlines",
      "Documenting project progress and creating final presentations",
    ],
  },
];

// --- Organization Experience Data ---
const organizationExperiences: ExperienceData[] = [
  {
    id: 3,
    title: "Coordinator of Commission VI MPK",
    company: "SMA Negeri 5 Jakarta",
    location: "Jakarta, Indonesia",
    period: "August 2020 - September 2022",
    type: "Student Leadership",
    icon: "🏛️",
    color: "from-green-500 to-emerald-600",
    description:
      "Oversaw and evaluated the strategic execution of Student Council (OSIS) programs, specifically within the Communication, ICT, and Entrepreneurship divisions.",
    responsibilities: [
      "Facilitated cross-functional alignment between OSIS divisions and related extracurricular clubs to ensure resource synergy and conflict resolution",
      "Provided strategic advisory to division heads, ensuring all initiatives adhered to organizational standards and student aspirations",
      "Led commission meetings and performance evaluations for 3+ divisions",
      "Coordinated with school administration for program approval and budget allocation",
    ],
    achievements: [
      "Successfully managed 15+ school events and programs",
      "Improved inter-division collaboration by 40%",
      "Recognized as Outstanding Student Leader 2022",
    ],
  },
];

// --- Animated Timeline Item Component ---
const TimelineItem = ({
  exp,
  index,
  isOrganization = false
}: {
  exp: ExperienceData;
  index: number;
  isOrganization?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative pl-8 md:pl-0 md:grid md:grid-cols-12 md:gap-8 animate-slide-up opacity-0 fill-mode-forwards transition-all duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Date Column (Desktop) */}
      <div className="hidden md:block md:col-span-3 text-right">
        <div className="sticky top-24 space-y-2">
          <Badge variant="secondary" className="text-xs px-3 py-1">
            {exp.type}
          </Badge>
          <p className="text-sm text-muted-foreground flex items-center justify-end gap-2">
            <Calendar className="h-4 w-4" />
            {exp.period}
          </p>
        </div>
      </div>

      {/* Timeline Dot (Desktop) */}
      <div className="hidden md:flex md:col-span-1 justify-center relative">
        <div
          className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} mt-2 ring-4 ring-background shadow-lg`}
        />
        {index <
          (isOrganization
            ? organizationExperiences.length - 1
            : workExperiences.length - 1) && (
          <div className="absolute top-6 w-px h-full bg-border" style={{ left: "50%" }} />
        )}
      </div>

      {/* Content Column */}
      <div className="md:col-span-8">
        <Card className="group hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden">
          <CardContent className="p-6 md:p-8">
            {/* Mobile Date */}
            <div className="flex items-center gap-2 mb-4 md:hidden">
              <Badge variant="secondary" className="text-xs">
                {exp.type}
              </Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {exp.period}
              </span>
            </div>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl">{exp.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {exp.description}
            </p>

            {/* Responsibilities */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                Key Responsibilities
              </h4>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground flex items-start gap-3 animate-slide-up opacity-0 fill-mode-forwards"
                    style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements (Organization Only) */}
            {exp.achievements && exp.achievements.length > 0 && (
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-3"
                    >
                      <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// --- Stats Card Component ---
const StatsCard = ({
  icon: Icon,
  value,
  label,
  delay
}: {
  icon: any;
  value: string;
  label: string;
  delay: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card
      className={`group hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-slide-up opacity-0 fill-mode-forwards ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ animationDelay: delay }}
    >
      <CardContent className="p-6 text-center space-y-2">
        <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
        <div className="text-3xl font-bold text-foreground">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  );
};

// --- Main Experience Page Component ---
const Experience = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 animate-fade-in opacity-0 fill-mode-forwards">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Career Journey
            </h1>
            <p className="text-xl text-muted-foreground">
              Work & Organization Experience
            </p>
            <p className="text-muted-foreground">
              A timeline of my professional journey and leadership roles that have shaped my skills and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="flex items-center gap-3 mb-12 animate-fade-in opacity-0 fill-mode-forwards">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-bold text-foreground">Work Experience</h2>
              <p className="text-sm text-muted-foreground">Professional roles and projects</p>
            </div>
          </div>

          <div className="space-y-8">
            {workExperiences.map((exp, index) => (
              <TimelineItem
                key={exp.id}
                exp={exp}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Organization Experience Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container">
          <div className="flex items-center gap-3 mb-12 animate-fade-in opacity-0 fill-mode-forwards">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-bold text-foreground">Organization Experience</h2>
              <p className="text-sm text-muted-foreground">Leadership and student activities</p>
            </div>
          </div>

          <div className="space-y-8">
            {organizationExperiences.map((exp, index) => (
              <TimelineItem
                key={exp.id}
                exp={exp}
                index={index}
                isOrganization={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Summary Stats Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatsCard
              icon={Briefcase}
              value="2+"
              label="Work Experiences"
              delay="0.1s"
            />
            <StatsCard
              icon={Users}
              value="2+"
              label="Years Leadership"
              delay="0.2s"
            />
            <StatsCard
              icon={Award}
              value="15+"
              label="Events Managed"
              delay="0.3s"
            />
            <StatsCard
              icon={MapPin}
              value="Jakarta"
              label="Based In"
              delay="0.4s"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-t border-border/50">
        <div className="container">
          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20 animate-fade-in opacity-0 fill-mode-forwards">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Want to Work Together?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  I'm always open to discussing new opportunities, collaborations, or ways to contribute to your team.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">
                    View My Skills
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;