import { PageWrapper } from "@/components/layout/page-wrapper";
import { motion } from "framer-motion";
import { Check, Info, FileText } from "lucide-react";
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
      category: "Standard Civil Documents",
      examples: "Birth, Marriage, Death Certificates, Police Clearances, ID Cards",
      price: "€65",
      unit: "per document (up to 2 pages)",
      turnaround: "2-3 business days"
    },
    {
      category: "Academic & Professional",
      examples: "Diplomas, Transcripts, Professional Licenses, Recommendation Letters",
      price: "€85",
      unit: "per document (up to 3 pages)",
      turnaround: "3-4 business days"
    },
    {
      category: "Legal & Corporate",
      examples: "Contracts, Court Decrees, Articles of Incorporation, Affidavits",
      price: "€0.15",
      unit: "per source word",
      turnaround: "Varies by volume",
      highlight: true
    },
    {
      category: "Medical & Specialized",
      examples: "Medical Records, Insurance Claims, Technical Patents",
      price: "€0.18",
      unit: "per source word",
      turnaround: "Varies by volume"
    }
  ];

  return (
    <PageWrapper>
      <div className="bg-card border-b border-border py-12 md:py-20">
        <div className="container px-4 md:px-8">
          <motion.div className="max-w-4xl" {...fadeIn}>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground tracking-tight">
              Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              No hidden fees. Every sworn translation includes certification, physical stamping, and digital delivery.
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
                      Most Common
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
                  <strong className="text-foreground block mb-1">Express Service Available</strong>
                  Need it urgently? 24-hour and 48-hour express turnarounds are available for an additional 50% and 30% surcharge respectively. Select 'Express' on the request form.
                </div>
              </div>
            </div>

            <motion.div 
              className="bg-card border border-border p-8 sticky top-24"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-serif font-bold mb-6">What is included?</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Exact translation by sworn expert",
                  "Formatting mirroring the original",
                  "Official seal & signature on every page",
                  "Certification statement",
                  "Digital PDF copy (legally valid)",
                  "Physical copy via priority mail",
                  "Strict confidentiality"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/request" data-testid="button-pricing-request">
                <Button className="w-full font-serif text-lg h-14">Get an Exact Quote</Button>
              </Link>
              <p className="text-xs text-center text-muted-foreground mt-4">Quotes are free and provided within 2 hours.</p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container px-4 md:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold mb-2">Do you need the original physical document?</h4>
              <p className="text-muted-foreground">In most cases, a high-quality scan or photo is sufficient to begin the translation. The translated document will state it was translated from a copy. If the authority requires translation from the original, you must mail it to my office.</p>
            </div>
            <hr className="border-border" />
            <div>
              <h4 className="text-lg font-bold mb-2">Will this translation be accepted in another country?</h4>
              <p className="text-muted-foreground">Yes. Sworn translations done in Switzerland are accepted across the EU and globally. For certain countries, you may need an additional Apostille from the State Chancellery, which I can arrange for an administrative fee.</p>
            </div>
            <hr className="border-border" />
            <div>
              <h4 className="text-lg font-bold mb-2">How is payment handled?</h4>
              <p className="text-muted-foreground">Once I review your documents, I will send a firm quote. Translation begins upon receipt of payment via bank transfer, credit card, or TWINT. For corporate clients with high volumes, monthly invoicing is available.</p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
