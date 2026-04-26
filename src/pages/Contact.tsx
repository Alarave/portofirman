import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Clock,
  Calendar,
  Send,
  Globe
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "firmanpambudiansyah@gmail.com",
    href: "mailto:firmanpambudiansyah@gmail.com",
    description: "Response within 24 hours",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+62 859-7426-7164",
    href: "https://wa.me/6285974267164",
    description: "Available on weekdays",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jakarta Pusat, Indonesia",
    href: "https://www.google.com/maps/search/?api=1&query=Jakarta+Pusat+Indonesia",
    description: "Open to remote work",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/firman-pambudiansyah/",
    color: "hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Alarave",
    color: "hover:bg-gray-900 hover:text-white hover:border-gray-900",
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

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
        <div className="container text-center space-y-4">
          <Badge variant="secondary" className="mb-4">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Let's Connect
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a question or want to work together? I'd love to hear from you.
            Feel free to reach out through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column - Contact Information */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                {contactInfo.map((item, index) => (
                  <Card 
                    key={item.label} 
                    className="group hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <CardContent className="p-6">
                      <a 
                        href={item.href || "#"} 
                        target={item.href?.startsWith("http") ? "_blank" : undefined}
                        rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-start gap-4"
                      >
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
                          <p className="text-lg font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                            {item.value}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                            <ExternalLink className="h-3 w-3" />
                            {item.description}
                          </p>
                        </div>
                        <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Availability Info */}
              <Card className="bg-muted/30 border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Availability
                  </h3>
                  <div className="space-y-3">
                    {availabilityInfo.map((info) => (
                      <div key={info.title} className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center shrink-0 border border-border">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{info.title}</p>
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Connect With Me</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-14 h-14 bg-muted rounded-xl flex items-center justify-center text-muted-foreground border border-border transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6 transition-transform group-hover:scale-110" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Google Maps */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">
                Location
              </h2>
              <Card className="overflow-hidden border-border/50 shadow-lg">
                <CardContent className="p-0">
                  {/* Google Maps Embed - Jakarta Pusat */}
                  <div className="aspect-square w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.96780928653!2d106.7562105!3d-6.1862075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4190a0d1501%3A0x6671d61a4d9a0206!2sCentral%20Jakarta%20City%2C%20Central%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "400px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                      title="Jakarta Pusat Location"
                    />
                  </div>
                  
                  {/* Map Info Footer */}
                  <div className="p-6 bg-background border-t border-border">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Jakarta Pusat</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Central Jakarta, DKI Jakarta, Indonesia
                        </p>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Jakarta+Pusat+Indonesia"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary hover:underline mt-2"
                        >
                          <Globe className="h-4 w-4" />
                          Open in Google Maps
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Action Card */}
              <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <Send className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      Ready to Start a Project?
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Let's discuss how I can help achieve your goals.
                    </p>
                  </div>
                  <Button asChild className="w-full md:w-auto">
                    <a href="mailto:firmanpambudiansyah@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;