import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
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
  Globe,
  MessageSquare,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "firmanpambudiansyah@gmail.com",
    href: "mailto:firmanpambudiansyah@gmail.com",
    description: "Response within 24 hours",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+62 859-7426-7164",
    href: "https://wa.me/6285974267164",
    description: "Available for quick chat",
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jakarta Pusat, Indonesia",
    href: "https://www.google.com/maps/search/?api=1&query=Jakarta+Pusat+Indonesia",
    description: "Open to global opportunities",
    color: "bg-orange-500/10 text-orange-500",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/firman-pambudiansyah/",
    className: "hover:bg-[#0077b5] hover:text-white border-[#0077b5]/20 hover:border-[#0077b5]",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Alarave",
    className: "hover:bg-foreground hover:text-background border-foreground/20 hover:border-foreground",
  },
];

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Message sent successfully!", {
      description: "Thank you for reaching out. I will get back to you soon.",
      icon: <CheckCircle2 className="h-5 w-5 text-emerald-500" />,
    });
    form.reset();
  }

  return (
    <Layout>
      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-bold animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Let's Build Something Great
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter animate-slide-up">
            Get in <span className="text-gradient">Touch.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Whether you have a question about data science, want to discuss a potential collaboration, 
            or just want to say hi — I'm always open to new connections.
          </p>
        </div>
      </section>

      {/* ── Contact Grid ── */}
      <section className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Form & Info */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Info Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {contactInfo.map((info, i) => (
                  <a 
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="h-full border-border/50 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                        <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", info.color)}>
                          <info.icon className="w-6 h-6" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{info.label}</p>
                          <p className="text-sm font-bold text-foreground line-clamp-1">{info.value}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>

              {/* Contact Form Card */}
              <Card className="border-border/50 shadow-2xl shadow-primary/5 overflow-hidden">
                <div className="bg-primary/5 border-b border-border/50 p-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Send a Message</h2>
                    <p className="text-sm text-muted-foreground font-medium">I'll get back to you as soon as possible.</p>
                  </div>
                </div>
                <CardContent className="p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-bold">Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" className="bg-muted/30 focus:bg-background transition-colors h-12" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-bold">Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="john@example.com" className="bg-muted/30 focus:bg-background transition-colors h-12" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-bold">Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="How can I help you?" className="bg-muted/30 focus:bg-background transition-colors h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-bold">Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Your message here..." 
                                className="min-h-[150px] bg-muted/30 focus:bg-background transition-colors resize-none" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold rounded-xl shadow-lg shadow-primary/20 group">
                        Send Message
                        <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Right: Map & Socials */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Location Card */}
              <Card className="overflow-hidden border-border/50 shadow-xl bg-card/50 backdrop-blur-sm group">
                <div className="aspect-video relative w-full overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.96780928653!2d106.7562105!3d-6.1862075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4190a0d1501%3A0x6671d61a4d9a0206!2sCentral%20Jakarta%20City%2C%20Central%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 contrast-125"
                    title="Jakarta Pusat Location"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-background/80 backdrop-blur-md text-foreground border-border/50 py-1.5 px-4 font-bold shadow-lg">
                      <MapPin className="w-3.5 h-3.5 mr-2 text-primary" />
                      Jakarta, Indonesia
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black">Base of <span className="text-primary">Operations</span></h3>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      Strategically located in Jakarta Pusat, working at the heart of Indonesia's 
                      technological and business center.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 space-y-1">
                      <Clock className="w-5 h-5 text-primary" />
                      <p className="text-xs font-bold text-muted-foreground uppercase">Working Hours</p>
                      <p className="text-sm font-bold">Mon - Fri, 9-6</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 space-y-1">
                      <Calendar className="w-5 h-5 text-primary" />
                      <p className="text-xs font-bold text-muted-foreground uppercase">Available for</p>
                      <p className="text-sm font-bold">Full-time & Project</p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full rounded-xl h-12 font-bold" asChild>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Jakarta+Pusat+Indonesia" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Globe className="mr-2 w-4 h-4" />
                      Open Google Maps
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Social Connections */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold px-1">Connect with me on Socials</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-3 p-4 rounded-2xl border transition-all duration-300 font-bold group",
                        social.className
                      )}
                    >
                      <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                      {social.label}
                      <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-40" />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Call to Action ── */}
      <section className="container pb-24">
        <Card className="bg-gradient-to-br from-primary to-cyan-600 border-none overflow-hidden rounded-[3rem] shadow-2xl shadow-primary/20">
          <CardContent className="p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
            {/* Abstract Decorative Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Ready to transform your <br className="hidden md:block" /> data into actionable insights?
              </h2>
              <p className="text-primary-foreground/90 max-w-xl mx-auto text-lg font-medium leading-relaxed">
                I'm currently accepting new projects and full-time opportunities. 
                Let's discuss how we can work together.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-lg font-bold shadow-xl">
                  Schedule a Call
                </Button>
                <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold bg-white text-primary hover:bg-white/90 border-none shadow-xl">
                  Check Resume
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default Contact;