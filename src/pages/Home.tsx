import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, TrendingUp, Award, Briefcase, BookOpen, Star } from "lucide-react";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";
import cvFile from "@/assets/cv.pdf";
import dataScienceLogo from "@/assets/logo/data_science.png";
import bi from "@/assets/logo/bi.png";
import { cn } from "@/lib/utils";

// Animation classes helper
const fadeIn = "opacity-0 animate-fade-in fill-mode-forwards";
const slideUp = "opacity-0 animate-slide-up fill-mode-forwards";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 md:py-40 relative overflow-hidden">
        {/* Background Decor - Animated Bubbles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float translate-x-1/2 translate-y-1/2" style={{ animationDelay: "1s" }} />
        
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
              <div className={`${fadeIn}`} style={{ animationDelay: "0.1s" }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-primary font-bold tracking-wide uppercase text-xs">
                    Welcome to My Portfolio
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Hello, I'm{" "}
                  <br className="hidden md:block" />
                  <span className="text-gradient">Firman Pambudiansyah</span>
                </h1>
              </div>

              <div className={`${slideUp}`} style={{ animationDelay: "0.2s" }}>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Information Systems Student specializing in{" "}
                  <span className="text-foreground font-semibold">SAP S/4HANA</span>,{" "}
                  <span className="text-foreground font-semibold">Data Science</span>, and{" "}
                  <span className="text-foreground font-semibold">Business Intelligence</span>.
                </p>
              </div>

              <div className={`${slideUp} flex flex-wrap justify-center lg:justify-start gap-5 pt-4`} style={{ animationDelay: "0.3s" }}>
                <Button size="lg" asChild className="group h-14 px-8 rounded-full text-lg shadow-xl shadow-primary/20 active:scale-95 transition-all">
                  <Link to="/projects">
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="h-14 px-8 rounded-full text-lg border-2 hover:bg-primary/5 active:scale-95 transition-all">
                  <Link to="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Me
                  </Link>
                </Button>
              </div>

              {/* Quick Info Tags */}
              <div className={`${slideUp} flex flex-wrap justify-center lg:justify-start gap-3 pt-6`} style={{ animationDelay: "0.4s" }}>
                {["Available for Hire", "Open to Projects", "Remote Friendly"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 glass text-primary text-xs font-bold rounded-full border border-primary/20 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Profile Photo */}
            <div className={`${slideUp} order-1 lg:order-2 flex justify-center lg:justify-end animate-float`} style={{ animationDelay: "0.2s" }}>
              <div className="relative group">
                {/* Decorative Background Glow */}
                <div className="absolute inset-0 bg-primary/20 rounded-[2.5rem] blur-3xl group-hover:bg-primary/30 transition-colors duration-500" />
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] overflow-hidden border-8 border-background shadow-2xl skew-y-3 group-hover:skew-y-0 transition-all duration-700 ease-out">
                  <img
                    src={profilePhoto}
                    alt="Firman Pambudiansyah"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                {/* Float Badge */}
                <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl animate-float" style={{ animationDelay: "2s" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                      <Star className="w-6 h-6 text-white fill-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">3.88 GPA</p>
                      <p className="text-xs text-muted-foreground">Honors Student</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30 relative">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { 
                icon: Award, 
                value: "3.88", 
                label: "GPA", 
                sublabel: "Cum Laude",
                delay: "0.1s",
                color: "text-blue-500"
              },
              { 
                icon: BookOpen, 
                value: "10+", 
                label: "Projects", 
                sublabel: "Built with passion",
                delay: "0.2s",
                color: "text-purple-500"
              },
              { 
                icon: TrendingUp, 
                value: "4+", 
                label: "Certifications", 
                sublabel: "Industry Verified",
                delay: "0.3s",
                color: "text-green-500"
              },
              { 
                icon: Briefcase, 
                value: "2+", 
                label: "Exp Years", 
                sublabel: "In Data & IT",
                delay: "0.4s",
                color: "text-orange-500"
              },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`${slideUp} relative isolate p-8 rounded-3xl group overflow-hidden transition-all duration-500`}
                style={{ animationDelay: stat.delay }}
              >
                <div className="absolute inset-0 glass border-2 border-primary/5 group-hover:border-primary/20 transition-colors rounded-3xl -z-10" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500 bg-white dark:bg-zinc-900 border border-border")}>
                   <stat.icon className={cn("w-7 h-7", stat.color)} />
                </div>
                <p className="text-4xl lg:text-5xl font-black tracking-tight text-foreground">{stat.value}</p>
                <div className="mt-2 text-left">
                  <p className="text-sm font-bold text-foreground/80 uppercase tracking-widest">{stat.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.sublabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className={`${fadeIn} text-center mb-20`} style={{ animationDelay: "0.1s" }}>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Core Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Combining technical depth with business strategy to deliver powerful data-driven transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                logo: dataScienceLogo,
                title: "Data Science & Analytics",
                desc: "Harnessing the power of Python and SQL to uncover hidden patterns and predict future trends.",
                color: "from-blue-600/20 to-indigo-600/10",
                iconColor: "text-blue-600",
                delay: "0.2s"
              },
              {
                logo: bi,
                title: "Business Intelligence",
                desc: "Crafting beautiful, interactive dashboards that turn complex data into strategic business moves.",
                color: "from-emerald-600/20 to-teal-600/10",
                iconColor: "text-emerald-600",
                delay: "0.3s"
              },
              {
                emoji: "⚙️",
                title: "SAP S/4HANA",
                desc: "Mastering enterprise resource planning to optimize core business processes and digital workflows.",
                color: "from-purple-600/20 to-violet-600/10",
                iconColor: "text-purple-600",
                delay: "0.4s"
              },
            ].map((card, i) => (
              <div
                key={card.title}
                className={`${slideUp} group relative p-10 rounded-[2.5rem] border border-border/50 bg-gradient-to-br ${card.color} hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden`}
                style={{ animationDelay: card.delay }}
              >
                {/* Decorative background element */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors" />
                
                <div className="w-20 h-20 bg-background rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 overflow-hidden p-3 border-4 border-white dark:border-zinc-800">
                  {card.logo ? (
                    <img src={card.logo} alt={card.title} className="w-full h-full object-contain" />
                  ) : (
                    <span className="text-4xl">{card.emoji}</span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">{card.desc}</p>
                
                <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          <div className={`${fadeIn} mt-20 text-center`} style={{ animationDelay: "0.5s" }}>
            <Button variant="ghost" size="lg" asChild className="group hover:bg-primary/10 rounded-full px-8 text-primary font-bold">
              <Link to="/about">
                View All Skills & Background
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container">
          <div className="glass p-12 md:p-24 rounded-[4rem] text-center space-y-10 border-2 border-primary/10 shadow-3xl">
            <div className={`${fadeIn} max-w-3xl mx-auto space-y-6`} style={{ animationDelay: "0.1s" }}>
              <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">
                Let's Build Something <span className="text-gradient">Extraordinary</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                I'm currently looking for new opportunities and collaborations. 
                Whether you have a question or just want to say hi, my inbox is always open!
              </p>
              
              <div className={`${slideUp} flex flex-wrap justify-center gap-6 pt-10`} style={{ animationDelay: "0.2s" }}>
                <Button size="lg" asChild className="group h-16 px-12 rounded-full text-xl shadow-2xl shadow-primary/30 active:scale-95 transition-all">
                  <Link to="/contact">
                    Send a Message
                    <Mail className="ml-3 h-6 w-6" />
                  </Link>
                </Button>
                 <Button size="lg" variant="outline" asChild className="h-16 px-12 rounded-full text-xl border-2 hover:bg-primary/5 active:scale-95 transition-all">
                  <a 
                    href={cvFile} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-3 h-6 w-6" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;