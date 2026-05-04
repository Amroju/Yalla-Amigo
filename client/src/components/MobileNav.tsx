import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Home, Menu as MenuIcon, ShoppingBag, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export function MobileNav() {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="md:hidden fixed bottom-4 left-4 right-4 bg-background/80 backdrop-blur-xl border border-white/20 z-[60] px-6 py-3 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
        >
          <div className="flex items-center justify-between">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={800}
              offset={-80}
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors p-2"
              activeClass="text-primary"
              spy={true}
            >
              <Home className="h-5 w-5" />
              <span className="text-[10px] font-medium">{t("nav.home")}</span>
            </ScrollLink>

            <ScrollLink
              to="menu"
              smooth={true}
              duration={800}
              offset={-80}
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors p-2"
              activeClass="text-primary"
              spy={true}
            >
              <MenuIcon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{t("nav.menu")}</span>
            </ScrollLink>

            <ScrollLink
              to="order"
              smooth={true}
              duration={800}
              offset={-80}
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors p-2"
              activeClass="text-primary"
              spy={true}
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="text-[10px] font-medium">{t("nav.order")}</span>
            </ScrollLink>

            <a
              href="tel:+390458030123"
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors p-2"
            >
              <Phone className="h-5 w-5" />
              <span className="text-[10px] font-medium">{language === "ar" ? "اتصل" : language === "it" ? "Chiama" : "Call"}</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
