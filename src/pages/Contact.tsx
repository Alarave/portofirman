import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  LinkedinIcon,
  GithubIcon,
  ExternalLink,
  Clock,
  Calendar,
  Send,
  Globe,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Custom Gmail icon component (SVG)
const GmailIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.545l8.073-6.052C21.69 2.28 24 3.434 24 5.457z" />
  </svg>
);

// Custom WhatsApp icon component (SVG)
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Custom Google Maps icon component (SVG)
const GoogleMapsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 0C7.802 0 4.403 3.399 4.403 7.597c0 5.697 7.597 16.403 7.597 16.403s7.597-10.706 7.597-16.403C19.597 3.399 16.198 0 12 0zm0 11.5a3.903 3.903 0 110-7.806 3.903 3.903 0 010 7.806z" />
  </svg>
);

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "firmanpambudiansyah@gmail.com";
const rawWhatsApp = import.meta.env.VITE_CONTACT_WHATSAPP;
const waDisplayValue = rawWhatsApp
  ? (rawWhatsApp.startsWith("+") ? rawWhatsApp : `+${rawWhatsApp}`)
  : "Chat via WhatsApp";
const waHref = rawWhatsApp
  ? `https://wa.me/${rawWhatsApp.replace(/[^0-9]/g, "")}`
  : "#contact-form";
const contactLocation = import.meta.env.VITE_CONTACT_LOCATION || "Jakarta Pusat, Indonesia";

const contactInfo = [
  {
    icon: GmailIcon,
    label: "Email",
    value: contactEmail,
    href: `mailto:${contactEmail}`,
    description: "Response within 24 hours",
    color: "from-red-500/10 to-orange-500/10",
    iconColor: "text-red-600",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: waDisplayValue,
    href: waHref,
    description: "Available on weekdays",
    color: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-600",
  },
  {
    icon: GoogleMapsIcon,
    label: "Location",
    value: contactLocation,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactLocation)}`,
    description: "Open to remote work",
    color: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600",
  },
];

const socialLinks = [
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/firman-pambudiansyah/",
    color: "hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]",
    bgColor: "bg-[#0077b5]/10",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/Alarave",
    color: "hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 hover:border-gray-900 dark:hover:border-white",
    bgColor: "bg-gray-900/10",
  },
];

const availabilityInfo = [
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Fri, 9:00 AM - 6:00 PM WIB",
  },
  {
    icon: Calendar,
    title: "Availability",
    value: "Open for Full-time & Freelance",
  },
];

const whyContactMe = [
  {
    icon: CheckCircle2,
    text: "Fast response time (usually within 24 hours)",
  },
  {
    icon: CheckCircle2,
    text: "Open to discuss project requirements",
  },
  {
    icon: CheckCircle2,
    text: "Flexible for remote collaboration",
  },
];

export const ContactSection = () => {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="py-16 md:py-24 relative">

        <div className="container relative text-center space-y-5">

          <div className="animate-slide-up opacity-0 pt-2" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight leading-tight">
              Let's build something<br /><em className="not-italic text-primary">great together.</em>
            </h1>
          </div>
          <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.15s" }}>
            <span className="inline-block text-xs sm:text-sm font-semibold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              Available for opportunities
            </span>
          </div>
          <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.3s" }}>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
              Open to full-time roles, freelance projects, and collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Content ── */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* ── Left Column: Direct Channels & Socials ── */}
            <div className="space-y-8">
              {/* Section Title */}
              <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-1 h-7 bg-primary rounded-full" aria-hidden="true" />
                  Contact Information
                </h2>
                <p className="text-sm text-muted-foreground">
                  Choose your preferred way to reach out
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((item, idx) => (
                  <div
                    key={item.label}
                    className="animate-slide-up opacity-0"
                    style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                  >
                    <Card className="group hover:border-primary/40 hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <CardContent className="p-0">
                        <a
                          href={item.href || "#"}
                          target={item.href?.startsWith("http") ? "_blank" : undefined}
                          rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-start gap-4 p-5 md:p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
                          aria-label={`Contact via ${item.label}: ${item.value}`}
                        >
                          <div
                            className={cn(
                              "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br",
                              item.color
                            )}
                          >
                            <item.icon
                              className={cn("h-6 w-6", item.iconColor)}
                              aria-hidden="true"
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">
                              {item.label}
                            </p>
                            <p className="text-base md:text-lg font-bold text-foreground truncate group-hover:text-primary transition-colors">
                              {item.value}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1.5 flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3 text-primary" aria-hidden="true" />
                              {item.description}
                            </p>
                          </div>

                          <ExternalLink
                            className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                            aria-hidden="true"
                          />
                        </a>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Availability Info */}
              <div
                className="animate-slide-up opacity-0"
                style={{ animationDelay: "0.5s" }}
              >
                <Card className="bg-gradient-to-br from-muted/50 to-muted/20 border-border/50">
                  <CardContent className="p-5 md:p-6">
                    <h3 className="font-bold text-foreground mb-4 flex items-center gap-2 text-base">
                      <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                      Availability
                    </h3>
                    <div className="space-y-3">
                      {availabilityInfo.map((info) => (
                        <div key={info.title} className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-background rounded-xl flex items-center justify-center shrink-0 border border-border shadow-sm">
                            <info.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">{info.title}</p>
                            <p className="text-sm text-muted-foreground mt-0.5">{info.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Links */}
              <div
                className="animate-slide-up opacity-0"
                style={{ animationDelay: "0.6s" }}
              >
                <h3 className="font-bold text-foreground mb-4 text-base">Connect With Me</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "group w-14 h-14 rounded-2xl flex items-center justify-center text-muted-foreground border-2 border-border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                        social.bgColor,
                        social.color
                      )}
                      aria-label={`Visit my ${social.label} profile`}
                    >
                      <social.icon
                        className="h-6 w-6 transition-transform group-hover:scale-110 group-hover:rotate-6"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right Column: Location & Quick Action ── */}
            <div className="space-y-6">
              {/* Section Title */}
              <div
                className="animate-fade-in opacity-0"
                style={{ animationDelay: "0.2s" }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2">
                  <span className="w-1 h-7 bg-primary rounded-full" aria-hidden="true" />
                  Location
                </h2>
              </div>

              {/* Google Maps Card */}
              <div
                className="animate-slide-up opacity-0"
                style={{ animationDelay: "0.3s" }}
              >
                <Card className="overflow-hidden border-border/50 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    {/* Google Maps Embed */}
                    <div className="aspect-square w-full relative">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.96780928653!2d106.7562105!3d-6.1862075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4190a0d1501%3A0x6671d61a4d9a0206!2sCentral%20Jakarta%20City%2C%20Central%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: "400px" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                        title="Jakarta Pusat Location Map"
                      />
                      {/* Overlay gradient for better visual */}
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 to-transparent" />
                    </div>

                    {/* Map Info Footer */}
                    <div className="p-5 md:p-6 bg-background border-t border-border">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                          <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-foreground text-base">Jakarta Pusat</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Central Jakarta, DKI Jakarta, Indonesia
                          </p>
                          <a
                            href="https://www.google.com/maps/search/?api=1&query=Jakarta+Pusat+Indonesia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-primary hover:underline mt-2 font-medium group"
                          >
                            <Globe className="h-4 w-4 transition-transform group-hover:rotate-12" aria-hidden="true" />
                            Open in Google Maps
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Action Card */}
              <div
                className="animate-slide-up opacity-0"
                style={{ animationDelay: "0.4s" }}
              >
                <Card className="bg-gradient-to-br from-primary/10 via-cyan-500/5 to-transparent border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 md:p-8 text-center space-y-5">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg animate-float">
                      <Send className="h-8 w-8 text-primary-foreground" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-extrabold text-foreground">
                        Ready to Start a Project?
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        Let's discuss how I can help achieve your data-driven goals with predictive analytics and BI solutions.
                      </p>
                    </div>
                    <Button
                      asChild
                      size="lg"
                      className="w-full md:w-auto rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-95 transition-all"
                    >
                      <a href={`mailto:${contactEmail}`}>
                        <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                        Send Email Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <Layout>
      <ContactSection />
    </Layout>
  );
};

export default Contact;
