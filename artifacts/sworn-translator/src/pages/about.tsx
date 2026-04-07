import { PageWrapper } from "@/components/layout/page-wrapper";
import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, MapPin } from "lucide-react";

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <PageWrapper>
      <div id="top" />
      <div className="bg-card border-b border-border py-12 md:py-20">
        <div className="container px-4 md:px-8">
          <motion.div
            className="max-w-4xl"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground tracking-tight">
              O Tłumaczu
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed italic">
              <em>
                "Integralność, precyzja i głębokie zrozumienie prawa. Przysięgły tłumacz to nie tylko osoba dwujęzyczna, ale prawny pośrednik."
              </em>
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative p-4 bg-card border border-border shadow-md">
                <div className="aspect-[3/4] relative overflow-hidden bg-muted flex items-center justify-center">
                  <span className="text-8xl font-bold text-muted-foreground">?</span>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 shadow-xl w-48 hidden md:block">
                  <p className="font-serif font-bold text-lg leading-tight mb-2">Zarejestrowany ekspert</p>
                  <p className="text-xs opacity-80 uppercase tracking-wider">od 2012</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-7 space-y-10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Elżbieta Schröder</h2>
                <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                  <p>
                    XYZ – Informacje o tłumaczu (placeholder).
                  </p>
                  <p>
                    XYZ – Opis świadczonych usług (placeholder).
                  </p>
                  <p>
                    XYZ – Gwarancja jakości (placeholder).
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-border">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-sm text-primary">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif font-bold text-xl">Wykształcenie</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li><strong>XYZ Wykształcenie</strong><br/>XYZ Uczelnia</li>
                    <li><strong>XYZ Stopień</strong><br/>XYZ Instytucja</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-sm text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif font-bold text-xl">Akredytacje</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>XYZ Akredytacja 1</li>
                    <li>XYZ Akredytacja 2</li>
                    <li>XYZ Akredytacja 3</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-sm text-primary">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif font-bold text-xl">Języki</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li><strong>Angielski</strong> (native speaker/C2)</li>
                    {/* <li><strong>French</strong> (Native/C2)</li> */}
                    {/* <li><strong>German</strong> (C1 Legal Proficiency)</li> */}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-sm text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif font-bold text-xl">Jurysdykcje</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>XYZ Jurysdykcja 1</li>
                    <li>XYZ Jurysdykcja 2</li>
                    <li>XYZ Jurysdykcja 3</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
