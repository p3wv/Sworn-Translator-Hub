import { PageWrapper } from "@/components/layout/page-wrapper";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { FileText, Globe, Clock, ShieldCheck, CheckCircle2, ArrowRight, Landmark, Gavel, GraduationCap, PenLine, Plane } from "lucide-react";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { staggerChildren: 0.2 }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <PageWrapper>
      <div id="top" />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-card border-b border-border py-20 md:py-32 lg:py-40">
        <div className="container px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-widest">
              <ShieldCheck className="h-4 w-4" />
              <span>Certyfikowane i prawnie wiążące tłumaczenia przysięgłe</span>
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-[1.1] mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Twoje Dokumenty.<br />
              <span className="text-primary italic">Prawnie przetłumaczone.</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Gdy przekraczasz granice, Twoje dokumenty potrzebują niepodważalnej mocy prawnej. Dostarczam skrupulatne, certyfikowane tłumaczenia uznawane przez sądy, ambasady i urzędy na całym świecie.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/request#top" data-testid="button-hero-request">
                <Button size="lg" className="h-14 px-8 font-serif text-lg w-full sm:w-auto">
                  Wycena online <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about#top" data-testid="button-hero-about">
                <Button size="lg" variant="outline" className="h-14 px-8 font-serif text-lg w-full sm:w-auto bg-background/50 backdrop-blur-sm">
                  O mnie
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 border-b border-border bg-background">
        <div className="container px-4 md:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8">UZNAWANE I AKCEPTOWANE PRZEZ</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale mix-blend-multiply dark:mix-blend-screen">
            <span className="flex flex-col items-center gap-2 font-serif font-bold text-xl md:text-2xl">
              <Landmark className="h-8 w-8 mb-1" />
              Ambasady
            </span>
            <span className="flex flex-col items-center gap-2 font-serif font-bold text-xl md:text-2xl">
              <Gavel className="h-8 w-8 mb-1" />
              Sądy
            </span>
            <span className="flex flex-col items-center gap-2 font-serif font-bold text-xl md:text-2xl">
              <GraduationCap className="h-8 w-8 mb-1" />
              Uniwersytety
            </span>
            <span className="flex flex-col items-center gap-2 font-serif font-bold text-xl md:text-2xl">
              <PenLine className="h-8 w-8 mb-1" />
              Notariuszy
            </span>
            <span className="flex flex-col items-center gap-2 font-serif font-bold text-xl md:text-2xl">
              <Plane className="h-8 w-8 mb-1" />
              Urzędy imigracyjne
            </span>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-card">
        <div className="container px-4 md:px-8">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-16"
              initial={fadeIn.initial}
              whileInView={fadeIn.whileInView}
              viewport={fadeIn.viewport}
              transition={fadeIn.transition}
            >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Dlaczego wybrać tłumacza przysięgłego?</h2>
            <p className="text-muted-foreground text-lg">Zwykłe tłumaczenia nie mają mocy prawnej. Tłumaczenie przysięgłe posiada podpis, pieczęć i certyfikat gwarantujące absolutną wierność oryginałowi.</p>
          </motion.div>
          
          <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer} initial="initial" whileInView="whileInView">
            <motion.div variants={staggerItem} className="p-8 border border-border bg-background shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-sm flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Absolutna ważność prawna</h3>
              <p className="text-muted-foreground leading-relaxed">Każda strona jest opieczętowana, podpisana i zawiera oświadczenie o certyfikacji, zapewniając natychmiastową akceptację przez organy urzędowe.</p>
            </motion.div>
            <motion.div variants={staggerItem} className="p-8 border border-border bg-background shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-sm flex items-center justify-center mb-6">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Bezbłędna precyzja</h3>
              <p className="text-muted-foreground leading-relaxed">Dokumenty prawne nie pozostawiają miejsca na interpretacje. Zapewniam dokładną ekwiwalencję terminologiczną między różnymi systemami prawnymi.</p>
            </motion.div>
            <motion.div variants={staggerItem} className="p-8 border border-border bg-background shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-sm flex items-center justify-center mb-6">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Rygorystyczna punktualność</h3>
              <p className="text-muted-foreground leading-relaxed">Terminy prawne są nieubłagane. Gwarantuję sztywne terminy dostawy, w tym realizację ekspresową dla pilnych potrzeb administracyjnych.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={fadeIn.initial}
              whileInView={fadeIn.whileInView}
              viewport={fadeIn.viewport}
              transition={fadeIn.transition}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">Ekspertyza między jurysdykcjami</h2>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                Z ponad dekadą doświadczenia w skomplikowanej dokumentacji międzynarodowej specjalizuję się w tłumaczeniu kluczowych wydarzeń życiowych i biznesowych.
              </p>
              <ul className="space-y-4">
                {[
                  "Akta urodzenia, małżeństwa i zgonu",
                  "Dyplomy i suplementy akademickie",
                  "Akty założycielskie spółek",
                  "Umowy, oświadczenia, wyroki sądowe",
                  "Patenty i własność intelektualna",
                  "Dokumentacja medyczna i roszczenia ubezpieczeniowe"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/pricing#top" data-testid="button-view-pricing">
                  <Button variant="secondary" size="lg" className="h-14 px-8 font-serif text-lg">
                    Zobacz ceny & terminy
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop" 
                alt="Law books and official documents" 
                className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 border border-white/20 m-4 pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-8 text-center">
          <Globe className="h-12 w-12 mx-auto text-primary mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">Upełnomocnione pary językowe</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12">
            <div className="text-2xl md:text-3xl font-serif text-foreground/80 py-4 px-8 border border-border bg-card shadow-sm w-full md:w-auto">Angielski</div>
            <div className="hidden md:block h-px w-16 bg-border"></div>
            <div className="flex items-center justify-center text-primary font-bold uppercase tracking-widest bg-primary/5 px-6 py-2 rounded-full text-3xl md:text-4xl leading-none">
              ↔
            </div>
            <div className="hidden md:block h-px w-16 bg-border"></div>
            <div className="text-2xl md:text-3xl font-serif text-foreground/80 py-4 px-8 border border-border bg-card shadow-sm w-full md:w-auto">Polski</div>
          </div>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
            Oficjalnie zarejestrowany i zaprzysiężony przy Sądzie Apelacyjnym. Tłumaczenia w tych parach są bezwarunkowo uznawane prawnie.
          </p>
        </div>
      </section>

      {/* Fixes & Adjustments Info Section */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container px-4 md:px-8 max-w-3xl mx-auto">
          <div className="bg-card border border-primary/20 rounded-lg shadow-md p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-primary">Poprawki i dostosowania</h3>
            <p className="text-muted-foreground text-lg mb-2">Każda poprawka lub dostosowanie tłumaczenia jest wyceniana indywidualnie, w zależności od zakresu zmian i czasu realizacji.</p>
            <p className="text-muted-foreground text-lg mb-2">Drobne korekty są zazwyczaj bezpłatne, natomiast większe zmiany mogą wiązać się z dodatkową opłatą ustalaną przed realizacją.</p>
            <p className="text-muted-foreground text-lg">Wszelkie poprawki są realizowane priorytetowo, aby zapewnić pełną satysfakcję klienta.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container px-4 md:px-8">
          <div className="bg-primary text-primary-foreground p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Potrzebujesz certyfikowanego dokumentu?</h2>
              <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
                Prześlij swój dokument bezpiecznie już dziś i otrzymaj precyzyjną wycenę oraz termin realizacji w ciągu 2 godzin.
              </p>
              <Link href="/request#top" data-testid="button-bottom-cta">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="h-20 px-14 font-serif text-2xl shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-2 bg-gradient-to-r from-primary to-secondary text-white border-0 hover:scale-105 focus:ring-4 focus:ring-primary/40"
                >
                  ROZPOCZNIJ ZLECENIE <ArrowRight className="ml-4 h-8 w-8" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </PageWrapper>
  );
}
