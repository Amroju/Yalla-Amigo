import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

export function FloatingOrderButton() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const menuSection = document.getElementById("menu");
      const orderSection = document.getElementById("order");
      
      if (menuSection && orderSection) {
        const menuRect = menuSection.getBoundingClientRect();
        const orderRect = orderSection.getBoundingClientRect();
        
        const isInMenuArea = menuRect.top <= window.innerHeight / 2 && orderRect.top > window.innerHeight;
        setIsVisible(isInMenuArea);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <a
            href="https://glovoapp.com/it/en/milano/yalla-amigo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="shadow-lg"
              data-testid="button-floating-order"
            >
              <span className="hidden sm:inline">{t("order.button")}</span>
              <span className="sm:hidden">{t("nav.order")}</span>
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
