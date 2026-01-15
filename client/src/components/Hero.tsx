import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";
import { HeroFloatingElements } from "@/components/FloatingElements";
import heroImage from "@assets/IMG_8313_1768487989358.jpeg";

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
          className="w-full h-full object-cover object-[40%_center] md:object-center"
          data-testid="img-hero-background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#D62027]/20 via-transparent to-[#5BA240]/20" />
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)"
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
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
          <h2 
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tight"
            style={{
              textShadow: "0 4px 30px rgba(0,0,0,0.5), 0 2px 10px rgba(0,0,0,0.3)"
            }}
            data-testid="text-hero-brand"
          >
            <span className="text-white">Yalla </span>
            <span className="text-[#D62027] drop-shadow-[0_0_30px_rgba(214,32,39,0.5)]">Amigo</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/90 text-lg md:text-xl font-medium tracking-[0.2em] uppercase mb-4"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
          data-testid="text-hero-tagline"
        >
          {t("hero.tagline")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6"
          style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
          data-testid="text-hero-title"
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
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
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white min-w-[200px] shadow-lg"
              data-testid="button-explore-menu"
            >
              {t("hero.cta")}
            </Button>
          </ScrollLink>
          <a
            href="https://glovoapp.com/it/it/verona/stores/yalla-amigo-ver"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="min-w-[200px] shadow-lg shadow-primary/30"
              data-testid="button-order-glovo-hero"
            >
              {t("hero.order")}
            </Button>
          </a>
        </motion.div>
      </motion.div>

      <HeroFloatingElements />

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
            className="cursor-pointer p-2 rounded-full bg-white/10 backdrop-blur-sm"
            data-testid="button-scroll-down"
          >
            <ChevronDown className="h-8 w-8 text-white/70" />
          </motion.div>
        </ScrollLink>
      </motion.div>
    </section>
  );
}
