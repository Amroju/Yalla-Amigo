import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

import img1 from "@assets/IMG_8322_1768500457192.jpeg";
import img2 from "@assets/IMG_8325_1768500457192.jpeg";
import img3 from "@assets/IMG_8324_1768500457193.jpeg";
import img4 from "@assets/IMG_8327_1768500457193.jpeg";
import img5 from "@assets/IMG_8326_1768500457192.jpeg";
import img6 from "@assets/IMG_8328_1768500457193.jpeg";

const instagramImages = [
  { src: img1, alt: "Chef preparing shawarma" },
  { src: img2, alt: "Falafel with tahini" },
  { src: img3, alt: "Pita sandwiches" },
  { src: img4, alt: "Palestinian cuisine spread" },
  { src: img5, alt: "Customer enjoying food" },
  { src: img6, alt: "Anniversary celebration" },
];

// Set to true and add your embed code when you have one from EmbedSocial
const USE_EMBED_WIDGET = false;
const EMBED_WIDGET_SCRIPT = ""; // Paste the script src here
const EMBED_WIDGET_CLASS = ""; // Paste the class name here (e.g., "embedsocial-hashtag")

function EmbedWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (USE_EMBED_WIDGET && EMBED_WIDGET_SCRIPT) {
      const script = document.createElement("script");
      script.src = EMBED_WIDGET_SCRIPT;
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  if (!USE_EMBED_WIDGET || !EMBED_WIDGET_CLASS) {
    return null;
  }

  return (
    <div 
      ref={widgetRef}
      className={EMBED_WIDGET_CLASS}
      data-testid="instagram-embed-widget"
    />
  );
}

function FallbackGallery({ isInView }: { isInView: boolean }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-8"
      >
        {instagramImages.map((image, index) => (
          <motion.a
            key={index}
            href="https://www.instagram.com/yallaamigo.verona/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            className="relative aspect-square overflow-hidden rounded-lg group"
            data-testid={`img-instagram-${index}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <Instagram className="h-8 w-8 text-white" />
            </div>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <a
          href="https://www.instagram.com/yallaamigo.verona/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            variant="outline"
            className="gap-2"
            data-testid="button-instagram-follow"
          >
            <Instagram className="h-5 w-5" />
            Follow @yallaamigo.verona
          </Button>
        </a>
      </motion.div>
    </>
  );
}

export function InstagramSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="h-8 w-8 text-primary" />
            <h2 
              className="text-3xl md:text-5xl font-serif font-bold text-foreground"
              data-testid="text-instagram-title"
            >
              {t("instagram.title")}
            </h2>
          </div>
          <p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            data-testid="text-instagram-subtitle"
          >
            {t("instagram.subtitle")}
          </p>
        </motion.div>

        {USE_EMBED_WIDGET ? (
          <EmbedWidget />
        ) : (
          <FallbackGallery isInView={isInView} />
        )}
      </div>
    </section>
  );
}
