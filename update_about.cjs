const fs = require("fs");
const path = "c:\\\\Users\\\\HP\\\\Documents\\\\porto\\\\src\\\\pages\\\\About.tsx";
let content = fs.readFileSync(path, "utf8");
let lines = content.split(/\r?\n/);

let startIndex = -1;
let endIndex = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("{/* Certifications */}")) {
    startIndex = i;
  }
  if (lines[i].includes("{/* CTA Section */}")) {
    endIndex = i - 1; // Before the CTA section
    break;
  }
}

if (startIndex !== -1 && endIndex !== -1) {
  const newContent = `      {/* Certifications & Workshops Tabbed Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 animate-fade-in opacity-0 fill-mode-forwards">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Certifications & Workshops</h2>
                <p className="text-sm text-muted-foreground">Professional Credentials & Development</p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="certifications" className="w-full animate-slide-up opacity-0 fill-mode-forwards" style={{ animationDelay: "0.2s" }}>
            <TabsList className="mb-8 grid w-full md:w-[400px] grid-cols-2">
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
              <TabsTrigger value="workshops">Workshops</TabsTrigger>
            </TabsList>
            
            <TabsContent value="certifications" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certificationsData.map((cert, i) => (
                  <Link
                    to={\`/certifications/\${cert.id}\`}
                    key={cert.id}
                    className="group"
                  >
                    <Card className="h-full hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                            {cert.isImage && cert.icon ? (
                              <img
                                src={cert.icon}
                                alt={cert.title}
                                className="w-10 h-10 object-contain"
                                onError={(e) => {
                                  e.currentTarget.style.display = "none";
                                  e.currentTarget.parentElement.innerHTML = \`<span class="text-2xl">📄</span>\`;
                                }}
                              />
                            ) : (
                              <span className="text-2xl">{cert.icon || "📄"}</span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <Badge variant="secondary" className="mb-2 text-xs">
                              {cert.issuer} · {cert.year}
                            </Badge>
                            <h3 className="font-semibold text-foreground text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2">
                              {cert.title}
                            </h3>
                          </div>
                        </div>
                        <div className="mt-auto pt-4 border-t border-border flex items-center justify-between text-sm text-primary font-medium group-hover:underline">
                          <span>View Details</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="workshops" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {conferences.map((conf, i) => (
                  <Card
                    key={conf.title}
                    className="group hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  >
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="text-xs">
                          {conf.year}
                        </Badge>
                        <Badge variant="outline" className="text-xs border-primary/30 text-primary bg-primary/5">
                          {conf.type}
                        </Badge>
                      </div>
                      <div className="mb-4">
                        <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {conf.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                          {conf.description}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-border mt-auto">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Award className="h-3 w-3 text-primary" />
                          <span>Professional Development</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
`;

  lines.splice(startIndex, endIndex - startIndex + 1, newContent);
  fs.writeFileSync(path, lines.join("\\n"));
  console.log("Replaced successfully! " + startIndex + " to " + endIndex);
} else {
  console.log("Could not find delimiters.");
}
