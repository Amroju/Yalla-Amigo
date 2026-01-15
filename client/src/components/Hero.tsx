import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";
import heroImage from "@assets/IMG_6636_1768487668571.jpeg";
import logoImage from "@assets/yalla_amigo-removebg-preview_1768486710592.png";

export function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <img
          src={heroImage}
          alt="Yalla Amigo Restaurant"
          className="w-full h-full object-cover"
          data-testid="img-hero-background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <img
            src={logoImage}
            alt="Yalla Amigo Logo"
            className="h-32 md:h-40 lg:h-48 mx-auto drop-shadow-2xl"
            data-testid="img-hero-logo"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/90 text-lg md:text-xl font-medium tracking-wider uppercase mb-4"
          data-testid="text-hero-tagline"
        >
          {t("hero.tagline")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6"
          data-testid="text-hero-title"
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          data-testid="text-hero-subtitle"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <ScrollLink to="menu" smooth={true} duration={500} offset={-80}>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white min-w-[200px]"
              data-testid="button-explore-menu"
            >
              {t("hero.cta")}
            </Button>
          </ScrollLink>
          <a
            href="https://deliveroo.it/en/menu/verona/verona-centro/yalla-amigo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="min-w-[200px]"
              data-testid="button-order-glovo-hero"
            >
              {t("hero.order")}
            </Button>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ScrollLink to="menu" smooth={true} duration={500} offset={-80}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            data-testid="button-scroll-down"
          >
            <ChevronDown className="h-8 w-8 text-white/70" />
          </motion.div>
        </ScrollLink>
      </motion.div>
    </section>
  );
}
