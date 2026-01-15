import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLanguage } from "@/lib/LanguageContext";

interface Review {
  id: string;
  nameEn: string;
  nameIt: string;
  reviewEn: string;
  reviewIt: string;
  rating: number;
  date: string;
  initials: string;
}

const reviews: Review[] = [
  {
    id: "1",
    nameEn: "Marco B.",
    nameIt: "Marco B.",
    reviewEn: "The best shawarma I've ever had in Milan! The meat is perfectly seasoned and the portions are generous. Definitely coming back!",
    reviewIt: "Il miglior shawarma che abbia mai mangiato a Milano! La carne è perfettamente condita e le porzioni sono generose. Tornerò sicuramente!",
    rating: 5,
    date: "2024-01-15",
    initials: "MB",
  },
  {
    id: "2",
    nameEn: "Sarah L.",
    nameIt: "Sarah L.",
    reviewEn: "Amazing falafel, crispy on the outside and perfectly soft inside. The hummus is incredibly creamy. A must-try for anyone who loves Middle Eastern food!",
    reviewIt: "Falafel incredibile, croccante fuori e perfettamente morbido dentro. L'hummus è incredibilmente cremoso. Da provare per chiunque ami il cibo mediorientale!",
    rating: 5,
    date: "2024-01-10",
    initials: "SL",
  },
  {
    id: "3",
    nameEn: "Giuseppe R.",
    nameIt: "Giuseppe R.",
    reviewEn: "Friendly staff, quick service, and delicious food. The mixed grill platter is perfect for sharing. Great value for money!",
    reviewIt: "Staff cordiale, servizio veloce e cibo delizioso. Il piatto misto alla griglia è perfetto da condividere. Ottimo rapporto qualità-prezzo!",
    rating: 5,
    date: "2024-01-08",
    initials: "GR",
  },
  {
    id: "4",
    nameEn: "Elena M.",
    nameIt: "Elena M.",
    reviewEn: "I ordered through Glovo and was impressed by how fresh everything was. The chicken shawarma was juicy and flavorful. Highly recommend!",
    reviewIt: "Ho ordinato tramite Glovo e sono rimasta colpita da quanto fosse fresco tutto. Lo shawarma di pollo era succoso e saporito. Lo consiglio vivamente!",
    rating: 5,
    date: "2024-01-05",
    initials: "EM",
  },
  {
    id: "5",
    nameEn: "Alessandro P.",
    nameIt: "Alessandro P.",
    reviewEn: "Authentic flavors that remind me of my travels to the Middle East. The baklava is the perfect way to end the meal!",
    reviewIt: "Sapori autentici che mi ricordano i miei viaggi in Medio Oriente. La baklava è il modo perfetto per concludere il pasto!",
    rating: 5,
    date: "2024-01-02",
    initials: "AP",
  },
  {
    id: "6",
    nameEn: "Francesca D.",
    nameIt: "Francesca D.",
    reviewEn: "Great vegetarian options! The falafel plate and fattoush salad are now my go-to lunch. Fresh ingredients and wonderful spices.",
    reviewIt: "Ottime opzioni vegetariane! Il piatto di falafel e l'insalata fattoush sono ora il mio pranzo preferito. Ingredienti freschi e spezie meravigliose.",
    rating: 5,
    date: "2023-12-28",
    initials: "FD",
  },
];

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
            <Avatar className="h-12 w-12 bg-primary/10" data-testid={`avatar-reviewer-${review.id}`}>
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
              <div 
                className="flex items-center gap-1 mt-1"
                data-testid={`rating-stars-${review.id}`}
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-muted"
                    }`}
                  />
                ))}
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
    <section id="reviews" className="py-16 md:py-24 bg-background">
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
          <div 
            className="flex items-center justify-center gap-2 mt-4"
            data-testid="rating-google-overall"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <span className="text-muted-foreground">
              5.0 - {t("reviews.google")}
            </span>
          </div>
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
