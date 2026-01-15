import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";
import logoImage from "@assets/IMG_8316_1768488179238.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "nav.home", to: "hero" },
    { key: "nav.menu", to: "menu" },
    { key: "nav.about", to: "about" },
    { key: "nav.reviews", to: "reviews" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "it" : "en");
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer flex items-center gap-2"
            data-testid="link-logo"
          >
            <img
              src={logoImage}
              alt="Yalla Amigo"
              className="h-12 md:h-14 w-auto mix-blend-multiply dark:mix-blend-screen"
              data-testid="img-logo"
            />
          </ScrollLink>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.key}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-foreground/80 font-medium cursor-pointer transition-colors"
                data-testid={`link-${item.to}`}
              >
                {t(item.key)}
              </ScrollLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2"
              data-testid="button-language-toggle"
            >
              <Globe className="h-4 w-4" />
              <span className="font-semibold">{language.toUpperCase()}</span>
            </Button>
            <ScrollLink to="order" smooth={true} duration={500} offset={-80}>
              <Button
                data-testid="button-order-header"
              >
                {t("nav.order")}
              </Button>
            </ScrollLink>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              data-testid="button-language-toggle-mobile"
            >
              <Globe className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background/95 backdrop-blur-md border-t"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <ScrollLink
                    key={item.key}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-foreground/80 transition-colors cursor-pointer"
                    data-testid={`link-mobile-${item.to}`}
                  >
                    {t(item.key)}
                  </ScrollLink>
                ))}
                <div className="px-4 pt-2">
                  <ScrollLink to="order" smooth={true} duration={500} offset={-80}>
                    <Button
                      className="w-full"
                      onClick={() => setIsMobileMenuOpen(false)}
                      data-testid="button-order-mobile"
                    >
                      {t("nav.order")}
                    </Button>
                  </ScrollLink>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
