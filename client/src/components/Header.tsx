import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function LanguageDropdown({ isMobile = false }: { isMobile?: boolean }) {
  const { language, setLanguage } = useLanguage();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size={isMobile ? "icon" : "sm"}
          className={isMobile ? "" : "flex items-center gap-2"}
          data-testid={isMobile ? "button-language-toggle-mobile" : "button-language-toggle"}
        >
          <Globe className={isMobile ? "h-5 w-5 text-primary" : "h-4 w-4 text-primary"} />
          {!isMobile && <span className="font-semibold text-primary">{language.toUpperCase()}</span>}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage('en' as any)} className={language === 'en' ? 'bg-primary/10 flex gap-2 items-center' : 'flex gap-2 items-center'}>
          <img src="https://flagcdn.com/w20/gb.png" srcSet="https://flagcdn.com/w40/gb.png 2x" width="20" alt="English" className="rounded-sm shadow-sm" /> English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('it' as any)} className={language === 'it' ? 'bg-primary/10 flex gap-2 items-center' : 'flex gap-2 items-center'}>
          <img src="https://flagcdn.com/w20/it.png" srcSet="https://flagcdn.com/w40/it.png 2x" width="20" alt="Italiano" className="rounded-sm shadow-sm" /> Italiano
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('ar' as any)} className={language === 'ar' ? 'bg-primary/10 flex gap-2 items-center' : 'flex gap-2 items-center'}>
          <img src="https://flagcdn.com/w20/ps.png" srcSet="https://flagcdn.com/w40/ps.png 2x" width="20" alt="العربية" className="rounded-sm shadow-sm" /> العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function NavLink({ item, t }: { item: { key: string; to: string }; t: (key: string) => string }) {
  return (
    <ScrollLink
      to={item.to}
      smooth={true}
      duration={800}
      offset={-80}
      className="text-foreground/80 font-medium cursor-pointer hover:text-foreground transition-colors py-1"
      data-testid={`link-${item.to}`}
    >
      {t(item.key)}
    </ScrollLink>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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


  return (
    <>
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
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] bg-primary origin-left z-[60]"
        style={{ scaleX }}
      />
      <nav className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <ScrollLink
            to="hero"
            smooth={true}
            duration={800}
            className="cursor-pointer flex items-center gap-2"
            data-testid="link-logo"
          >
            <div className="font-serif font-bold text-primary leading-[1.1] text-lg md:text-xl tracking-tight">
              <div>Yalla</div>
              <div>Amigo</div>
            </div>
          </ScrollLink>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.key} item={item} t={t} />
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <LanguageDropdown />
            <ScrollLink to="order" smooth={true} duration={800} offset={-80}>
              <Button
                data-testid="button-order-header"
              >
                {t("nav.order")}
              </Button>
            </ScrollLink>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <LanguageDropdown isMobile={true} />
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
      </nav>
    </motion.header>

    <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Dark Overlay Background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Sliding Sidebar */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="md:hidden fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] z-[100] bg-background shadow-2xl flex flex-col"
              >
                <div className="h-20 px-4 flex items-center justify-end border-b border-border/50">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-full"
                  >
                    <X className="h-6 w-6 text-foreground" />
                  </Button>
                </div>

                <div className="flex-1 overflow-y-auto py-8 px-6 space-y-6">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i + 0.1 }}
                    >
                      <ScrollLink
                        to={item.to}
                        smooth={true}
                        duration={800}
                        offset={-80}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-2xl font-serif font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
                        data-testid={`link-mobile-${item.to}`}
                      >
                        {t(item.key)}
                      </ScrollLink>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="pt-6 border-t border-border/50"
                  >
                    <ScrollLink to="order" smooth={true} duration={800} offset={-80}>
                      <Button
                        size="lg"
                        className="w-full rounded-xl py-6 text-lg font-bold shadow-lg shadow-primary/20"
                        onClick={() => setIsMobileMenuOpen(false)}
                        data-testid="button-order-mobile"
                      >
                        {t("nav.order")}
                      </Button>
                    </ScrollLink>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
    </>
  );
}
