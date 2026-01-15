import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

export function OrderSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="order" className="py-16 md:py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_white_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_white_0%,_transparent_40%)]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-4"
          >
            {t("order.cta")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-primary-foreground/80 text-lg mb-8"
          >
            {t("order.description")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="https://glovoapp.com/it/en/milano/yalla-amigo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 font-semibold"
                data-testid="button-order-glovo-section"
              >
                <span>{t("order.button")}</span>
                <ExternalLink className="h-5 w-5 ml-2" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
