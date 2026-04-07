import { ReactNode, useEffect } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

export function PageWrapper({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    // Wait for DOM update
    setTimeout(() => {
      if (window.location.hash) {
        const el = document.getElementById(window.location.hash.substring(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }, 0);
  }, [location]);

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main 
          key={location}
          className="flex-1 flex flex-col"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
