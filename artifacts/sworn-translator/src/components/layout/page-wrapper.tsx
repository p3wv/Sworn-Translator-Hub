import { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

export function PageWrapper({ children }: { children: ReactNode }) {
  const [location] = useLocation();

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
