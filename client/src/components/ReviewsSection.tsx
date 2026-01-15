import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { SiGoogle } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLanguage } from "@/lib/LanguageContext";
import { ReviewsFloatingElements } from "@/components/FloatingElements";

interface Review {
  id: string;
  nameEn: string;
  nameIt: string;
  reviewEn: string;
  reviewIt: string;
  rating: number;
  initials: string;
}

const reviews: Review[] = [
  {
    id: "1",
    nameEn: "Marco B.",
    nameIt: "Marco B.",
    reviewEn: "The best kebab in all of Verona! Generous portions, fresh ingredients, and incredibly flavorful. The staff is super friendly and the location in Piazza Cittadella is perfect.",
    reviewIt: "Il miglior kebab di tutta Verona! Porzioni generose, ingredienti freschi e incredibilmente saporito. Lo staff è super gentile e la posizione in Piazza Cittadella è perfetta.",
    rating: 5,
    initials: "MB",
  },
  {
    id: "2",
    nameEn: "Sarah L.",
    nameIt: "Sarah L.",
    reviewEn: "Amazing falafel and hummus! Everything is prepared fresh daily. The chicken shawarma is juicy and perfectly spiced. A must-visit for anyone who loves authentic Middle Eastern cuisine.",
    reviewIt: "Falafel e hummus fantastici! Tutto viene preparato fresco ogni giorno. Lo shawarma di pollo è succoso e perfettamente speziato. Da visitare per chi ama la cucina mediorientale autentica.",
    rating: 5,
    initials: "SL",
  },
  {
    id: "3",
    nameEn: "Giuseppe R.",
    nameIt: "Giuseppe R.",
    reviewEn: "Excellent value for money! The piadina with shawarma is incredible. Quick service even when busy, and the quality never drops. I come here at least once a week.",
    reviewIt: "Ottimo rapporto qualità-prezzo! La piadina con shawarma è incredibile. Servizio veloce anche quando c'è fila, e la qualità non cala mai. Vengo qui almeno una volta a settimana.",
    rating: 5,
    initials: "GR",
  },
  {
    id: "4",
    nameEn: "Elena M.",
    nameIt: "Elena M.",
    reviewEn: "Finally authentic halal cuisine in Verona! The beef kebab is tender and flavorful. Great variety of sauces and the fresh vegetables make every bite perfect.",
    reviewIt: "Finalmente cucina halal autentica a Verona! Il kebab di manzo è tenero e saporito. Grande varietà di salse e le verdure fresche rendono ogni morso perfetto.",
    rating: 5,
    initials: "EM",
  },
  {
    id: "5",
    nameEn: "Alessandro P.",
    nameIt: "Alessandro P.",
    reviewEn: "Hidden gem in the heart of Verona! The mixed plate with falafel, hummus and shawarma is perfect for sharing. Authentic flavors that remind me of my travels to the Middle East.",
    reviewIt: "Gioiello nascosto nel cuore di Verona! Il piatto misto con falafel, hummus e shawarma è perfetto da condividere. Sapori autentici che mi ricordano i miei viaggi in Medio Oriente.",
    rating: 5,
    initials: "AP",
  },
  {
    id: "6",
    nameEn: "Francesca D.",
    nameIt: "Francesca D.",
    reviewEn: "Great vegetarian options! The falafel wrap is now my go-to lunch. Fresh ingredients, wonderful spices, and the staff always remembers my usual order. Highly recommend!",
    reviewIt: "Ottime opzioni vegetariane! Il wrap di falafel è ora il mio pranzo preferito. Ingredienti freschi, spezie meravigliose, e lo staff ricorda sempre il mio ordine abituale. Consigliatissimo!",
    rating: 5,
    initials: "FD",
  },
];

interface AnimatedStarsProps {
  rating: number;
  delay?: number;
}

function AnimatedStars({ rating, delay = 0 }: AnimatedStarsProps) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.3, 
            delay: delay + i * 0.1,
            type: "spring",
            stiffness: 300
          }}
        >
          <Star
            className={`h-4 w-4 ${
              i < rating
                ? "text-yellow-500 fill-yellow-500"
                : "text-muted"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
}

interface ReviewCardProps {
  review: Review;
  index: number;
  language: "en" | "it";
}

function ReviewCard({ review, index, language }: ReviewCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-testid={`card-review-${review.id}`}
    >
      <Card className="h-full">
        <CardContent className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <Avatar className="h-12 w-12 bg-primary/10 ring-2 ring-primary/20" data-testid={`avatar-reviewer-${review.id}`}>
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                {review.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h4 
                className="font-semibold text-foreground"
                data-testid={`text-reviewer-name-${review.id}`}
              >
                {language === "en" ? review.nameEn : review.nameIt}
              </h4>
              <div data-testid={`rating-stars-${review.id}`}>
                {isInView && <AnimatedStars rating={review.rating} delay={index * 0.1 + 0.3} />}
              </div>
            </div>
            <Quote className="h-8 w-8 text-primary/20" />
          </div>
          <p 
            className="text-muted-foreground leading-relaxed italic"
            data-testid={`text-review-content-${review.id}`}
          >
            "{language === "en" ? review.reviewEn : review.reviewIt}"
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ReviewsSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <ReviewsFloatingElements />
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 
            className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4"
            data-testid="text-reviews-title"
          >
            {t("reviews.title")}
          </h2>
          <p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            data-testid="text-reviews-subtitle"
          >
            {t("reviews.subtitle")}
          </p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-3 mt-6 px-6 py-3 bg-card rounded-full shadow-md border"
            data-testid="rating-google-overall"
          >
            <SiGoogle className="h-5 w-5 text-[#4285F4]" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <span className="font-semibold text-foreground">4.9</span>
            <span className="text-muted-foreground text-sm">
              1,748 {t("reviews.google")}
            </span>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard
              key={review.id}
              review={review}
              index={index}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
