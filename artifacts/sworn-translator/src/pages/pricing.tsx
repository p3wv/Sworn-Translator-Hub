import { PageWrapper } from "@/components/layout/page-wrapper";
import { motion } from "framer-motion";
import { Check, Info, FileText, Mail } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const pricingItems = [
    {
      category: "Dokumenty stanu cywilnego",
      examples: "Akta Urodzenia, Małżeństwa, Zgonu, Zaświadczenia o niekaralności, Dowody osobiste",
      price: "100PLN",
      unit: "za dokument (do 2 stron)",
      turnaround: "2-3 dni robocze"
    },
    {
      category: "Akademickie & Profesjonalne",
      examples: "Dyplomy, Transkrypty, Uprawnienia zawodowe, Listy rekomendacyjne",
      price: "175PLN",
      unit: "za dokument (do 3 stron)",
      turnaround: "3-4 dni robocze"
    },
    {
      category: "Prawne i korporacyjne",
      examples: "Umowy, wyroki sądowe, akty założycielskie, oświadczenia",
      price: "15PLN",
      unit: "za słowo źródłowe",
      turnaround: "zależnie od objętości",
      highlight: true
    },
    {
      category: "Medyczne i specjalistyczne",
      examples: "Dokumentacja medyczna, roszczenia ubezpieczeniowe, patenty techniczne",
      price: "20PLN",
      unit: "za słowo źródłowe",
      turnaround: "zależnie od objętości"
    }
  ];

  return (
    <PageWrapper>
      <div id="top" />
      <div className="bg-card border-b border-border py-12 md:py-20">
        <div className="container px-4 md:px-8">
          <motion.div className="max-w-4xl" {...fadeIn}>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground tracking-tight">
              Przejrzyste ceny
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Brak ukrytych opłat. Każde tłumaczenie przysięgłe zawiera certyfikację, fizyczną pieczątkę i dostawę cyfrową.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-8">
          
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            <div className="lg:col-span-2 space-y-8">
              {pricingItems.map((item, idx) => (
                <motion.div 
                  key={idx}
                  className={`p-6 md:p-8 border ${item.highlight ? 'border-primary bg-primary/5 shadow-md' : 'border-border bg-card shadow-sm'} relative`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {item.highlight && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 uppercase tracking-wider">
                      Najczęściej wybierane
                    </div>
                  )}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif font-bold text-foreground">{item.category}</h3>
                      <p className="text-sm text-muted-foreground max-w-md flex items-start gap-2">
                        <FileText className="h-4 w-4 mt-0.5 shrink-0 opacity-50" />
                        {item.examples}
                      </p>
                    </div>
                    <div className="text-left md:text-right shrink-0">
                      <div className="text-3xl font-serif font-bold text-primary">{item.price}</div>
                      <div className="text-sm text-muted-foreground mt-1">{item.unit}</div>
                      <div className="text-xs font-medium text-foreground mt-2 bg-background inline-block px-2 py-1 rounded border border-border">
                        ⏱ {item.turnaround}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="bg-muted p-6 border-l-4 border-secondary flex gap-4">
                <Info className="h-6 w-6 text-secondary shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <strong className="text-foreground block mb-1">Dostępna usługa ekspresowa</strong>
                  Potrzebujesz pilnie? Realizacja w 24h i 48h dostępna za dodatkowe 50%. Wybierz 'Ekspres' w formularzu.
                </div>
              </div>
            </div>

            <motion.div 
              className="bg-card border border-border p-8 sticky top-24"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-serif font-bold mb-6">Co jest w cenie?</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Precyzyjne tłumaczenie przez tłumacza przysięgłego",
                  "Formatowanie identyczne z oryginałem",
                  "Oficjalna pieczęć i podpis na każdej stronie",
                  "Oświadczenie o certyfikacji",
                  "Cyfrowa kopia PDF (prawnie ważna)",
                  "Fizyczna kopia przesyłką priorytetową",
                  "Ścisła poufność",
                  "Drobne poprawki i korekty w cenie"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/request#top" data-testid="button-pricing-request">
                <Button className="w-full font-serif text-lg h-14">Otrzymaj wiążącą wycenę</Button>
              </Link>
              <p className="text-xs text-center text-muted-foreground mt-4">Wyceny są darmowe i wysyłane w ciągu 2 godzin.</p>
            </motion.div>

          </div>

        </div>
      </section>


      {/* FAQ + Sidebar */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container px-4 md:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-left md:text-center">Najczęściej zadawane pytania</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-bold mb-2">Czy potrzebny jest oryginalny dokument fizyczny?</h4>
                  <p className="text-muted-foreground">W większości przypadków wysokiej jakości skan lub zdjęcie wystarcza do rozpoczęcia tłumaczenia. Tłumaczenie będzie wskazywać, że wykonano je z kopii. Jeśli urząd wymaga tłumaczenia z oryginału, musisz go wysłać do mojego biura.</p>
                </div>
                <hr className="border-border" />
                <div>
                  <h4 className="text-lg font-bold mb-2">Czy to tłumaczenie będzie akceptowane w innym kraju?</h4>
                  <p className="text-muted-foreground">Tak. Tłumaczenia przysięgłe wykonane w Polsce są akceptowane w UE i na całym świecie. W niektórych krajach może być potrzebna dodatkowa apostille z Kancelarii Państwowej, którą mogę załatwić za opłatą administracyjną.</p>
                </div>
                <hr className="border-border" />
                <div>
                  <h4 className="text-lg font-bold mb-2">Jak odbywa się płatność?</h4>
                  <p className="text-muted-foreground">Po przejrzeniu dokumentów wyślę wiążącą wycenę. Tłumaczenie rozpocznie się po otrzymaniu płatności przelewem bankowym, kartą kredytową lub gotówką po spotkaniu z klientem. Dla klientów korporacyjnych z dużymi wolumenami dostępna jest faktura miesięczna.</p>
                </div>
              </div>
            </div>
            <div className="bg-background border border-primary/20 rounded-lg shadow-md p-8 flex flex-col gap-6">
              <h3 className="text-xl font-serif font-bold text-primary mb-2">Masz inne pytania?</h3>
              <p className="text-muted-foreground text-base">Skontaktuj się bezpośrednio, aby uzyskać indywidualną wycenę, konsultację lub pomoc w nietypowych przypadkach.</p>
              <Button
                type="button"
                size="lg"
                variant="default"
                className="w-full font-serif text-lg h-14"
                onClick={() => window.open('mailto:epschroeder@op.pl', '_blank')}
                aria-label="Napisz maila"
              >
                <Mail className="mr-2 h-5 w-5" /> Napisz maila
              </Button>
              <div className="text-xs text-muted-foreground mt-2">
                <strong>Godziny pracy:</strong><br />Poniedziałek – Piątek 9:00 – 17:00<br />Sobota 10:00 – 14:00
              </div>
              <div className="text-xs text-muted-foreground">
                <strong>Telefon:</strong> <a href="tel:+48123456789" className="underline">+48 609 457 039</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
