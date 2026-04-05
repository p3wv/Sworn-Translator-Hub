import { PageWrapper } from "@/components/layout/page-wrapper";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { FileText, Globe, Clock, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
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
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-card border-b border-border py-20 md:py-32 lg:py-40">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] mix-blend-multiply pointer-events-none" />
        <div className="container px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-widest">
              <ShieldCheck className="h-4 w-4" />
              <span>Certified & Legally Binding</span>
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-[1.1] mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Your Documents.<br />
              <span className="text-primary italic">Legally Translated.</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              When crossing borders, your documents need indisputable legal weight. I provide meticulous, certified translations recognized by courts, embassies, and authorities worldwide.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/request" data-testid="button-hero-request">
                <Button size="lg" className="h-14 px-8 font-serif text-lg w-full sm:w-auto">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about" data-testid="button-hero-about">
                <Button size="lg" variant="outline" className="h-14 px-8 font-serif text-lg w-full sm:w-auto bg-background/50 backdrop-blur-sm">
                  About My Credentials
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 border-b border-border bg-background">
        <div className="container px-4 md:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8">Recognized and accepted by</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale mix-blend-multiply dark:mix-blend-screen">
            {/* Logos represented by text for simplicity, in a real scenario these would be SVG icons */}
            <span className="font-serif font-bold text-xl md:text-2xl">Embassies</span>
            <span className="font-serif font-bold text-xl md:text-2xl">Courts of Law</span>
            <span className="font-serif font-bold text-xl md:text-2xl">Universities</span>
            <span className="font-serif font-bold text-xl md:text-2xl">Notaries</span>
            <span className="font-serif font-bold text-xl md:text-2xl">Immigration</span>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-card">
        <div className="container px-4 md:px-8">
          <motion.div className="text-center max-w-2xl mx-auto mb-16" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Why choose a Sworn Translator?</h2>
            <p className="text-muted-foreground text-lg">Regular translations carry no legal weight. A sworn translation bears a signature, stamp, and certification that guarantees absolute fidelity to the original.</p>
          </motion.div>
          
          <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer} initial="initial" whileInView="whileInView">
            <motion.div variants={staggerItem} className="p-8 border border-border bg-background shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-sm flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Absolute Validity</h3>
              <p className="text-muted-foreground leading-relaxed">Each page is stamped, signed, and accompanied by a declaration of certification, ensuring immediate acceptance by official bodies.</p>
            </motion.div>
            <motion.div variants={staggerItem} className="p-8 border border-border bg-background shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-sm flex items-center justify-center mb-6">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Flawless Precision</h3>
              <p className="text-muted-foreground leading-relaxed">Legal documents leave no room for interpretation. I ensure exact terminological equivalence between distinct legal systems.</p>
            </motion.div>
            <motion.div variants={staggerItem} className="p-8 border border-border bg-background shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-sm flex items-center justify-center mb-6">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Rigorous Punctuality</h3>
              <p className="text-muted-foreground leading-relaxed">Legal deadlines are unforgiving. I commit to firm delivery times, including express turnaround for urgent administrative needs.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">Expertise across jurisdictions.</h2>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                With over a decade of experience navigating complex international documentation, I specialize in translating critical life and business events.
              </p>
              <ul className="space-y-4">
                {[
                  "Birth, Marriage, and Death Certificates",
                  "Academic Diplomas and Transcripts",
                  "Corporate Articles of Incorporation",
                  "Contracts, Affidavits, and Court Decrees",
                  "Patents and Intellectual Property",
                  "Medical Records and Insurance Claims"
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-center gap-3 text-lg"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/pricing" data-testid="button-view-pricing">
                  <Button variant="secondary" size="lg" className="h-14 px-8 font-serif text-lg">
                    View Pricing & Timelines
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">Authorized Language Pairs</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12">
            <div className="text-2xl md:text-3xl font-serif text-foreground/80 py-4 px-8 border border-border bg-card shadow-sm w-full md:w-auto">English</div>
            <div className="hidden md:block h-px w-16 bg-border"></div>
            <div className="text-primary text-sm font-bold uppercase tracking-widest bg-primary/5 px-4 py-2 rounded-full">Both Directions</div>
            <div className="hidden md:block h-px w-16 bg-border"></div>
            <div className="text-2xl md:text-3xl font-serif text-foreground/80 py-4 px-8 border border-border bg-card shadow-sm w-full md:w-auto">French & German</div>
          </div>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
            Officially registered and sworn at the Court of Appeals. Translations provided in these pairs are legally recognized unconditionally.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container px-4 md:px-8">
          <div className="bg-primary text-primary-foreground p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Need a document certified?</h2>
              <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
                Upload your document securely today to receive a precise quote and delivery timeline within 2 hours.
              </p>
              <Link href="/request" data-testid="button-bottom-cta">
                <Button variant="secondary" size="lg" className="h-16 px-10 font-serif text-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                  Start Your Request <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </PageWrapper>
  );
}
