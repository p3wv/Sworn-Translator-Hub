import { PageWrapper } from "@/components/layout/page-wrapper";
import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, MapPin } from "lucide-react";

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <PageWrapper>
      <div className="bg-card border-b border-border py-12 md:py-20">
        <div className="container px-4 md:px-8">
          <motion.div className="max-w-4xl" {...fadeIn}>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground tracking-tight">
              About the Translator
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Integrity, precision, and deep legal comprehension. A sworn translator is not merely bilingual, but a legal intermediary recognized by the state.
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
                <div className="aspect-[3/4] relative overflow-hidden bg-muted">
                  {/* Using the generated image */}
                  <img 
                    src="/translator-portrait.png" 
                    alt="Marcus V. Aurelius, Sworn Translator" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 shadow-xl w-48 hidden md:block">
                  <p className="font-serif font-bold text-lg leading-tight mb-2">Registered Expert</p>
                  <p className="text-xs opacity-80 uppercase tracking-wider">Since 2012</p>
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
                <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Marcus V. Aurelius</h2>
                <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                  <p>
                    I am a certified sworn translator appointed by the High Court of Appeals. With over 12 years of dedicated experience in legal and administrative linguistics, I provide bridging solutions for individuals and corporations navigating cross-border legalities.
                  </p>
                  <p>
                    Translation of official documents is a matter of absolute trust. A misplaced comma or an incorrect terminological choice in a contract or a birth certificate can lead to administrative rejection, financial loss, or legal jeopardy. My practice is built on the rigorous foundation of comparative law—understanding not just the words, but the legal frameworks from which they originate.
                  </p>
                  <p>
                    Every document carrying my stamp and signature is guaranteed to be accepted by governmental agencies, embassies, notaries, and academic institutions worldwide.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-border">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-sm text-primary">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif font-bold text-xl">Education</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li><strong>M.A. in Legal Translation</strong><br/>University of Geneva</li>
                    <li><strong>L.L.B. (Bachelor of Laws)</strong><br/>University of London</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-sm text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif font-bold text-xl">Accreditations</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>Sworn Expert at the Court of Appeals</li>
                    <li>Member of the Association of Certified Translators</li>
                    <li>Registered with the State Chancellery</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-sm text-primary">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif font-bold text-xl">Languages</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li><strong>English</strong> (Native/C2)</li>
                    <li><strong>French</strong> (Native/C2)</li>
                    <li><strong>German</strong> (C1 Legal Proficiency)</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-sm text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif font-bold text-xl">Jurisdictions</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>Switzerland & EU</li>
                    <li>United Kingdom</li>
                    <li>United States</li>
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
