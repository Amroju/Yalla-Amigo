import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/LanguageContext";
import { AboutFloatingElements } from "@/components/FloatingElements";

const openingHours = {
  en: [
    { day: "Monday", hours: "12:00 - 23:00" },
    { day: "Tuesday", hours: "12:00 - 23:00" },
    { day: "Wednesday", hours: "12:00 - 23:00" },
    { day: "Thursday", hours: "12:00 - 23:00" },
    { day: "Friday", hours: "12:00 - 23:30" },
    { day: "Saturday", hours: "12:00 - 23:30" },
    { day: "Sunday", hours: "12:00 - 22:00" },
  ],
  it: [
    { day: "Lunedì", hours: "12:00 - 23:00" },
    { day: "Martedì", hours: "12:00 - 23:00" },
    { day: "Mercoledì", hours: "12:00 - 23:00" },
    { day: "Giovedì", hours: "12:00 - 23:00" },
    { day: "Venerdì", hours: "12:00 - 23:30" },
    { day: "Sabato", hours: "12:00 - 23:30" },
    { day: "Domenica", hours: "12:00 - 22:00" },
  ],
};

export function AboutSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hours = language === "en" ? openingHours.en : openingHours.it;

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <AboutFloatingElements />
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
            data-testid="text-about-title"
          >
            {t("about.title")}
          </h2>
          <p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            data-testid="text-about-subtitle"
          >
            {t("about.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[300px] md:h-[400px] lg:h-full min-h-[300px] rounded-md overflow-hidden shadow-lg"
            data-testid="container-google-maps"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.0!2d10.9924!3d45.4385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f5fed249e6c55%3A0x7c06b4daebea3c41!2sYalla%20Amigo!5e0!3m2!1sit!2sit!4v1704067200000!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Yalla Amigo Location"
              className="absolute inset-0"
              data-testid="iframe-google-maps"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <Card className="overflow-hidden" data-testid="card-address">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-md">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 
                      className="font-semibold text-lg mb-2"
                      data-testid="text-address-title"
                    >
                      {t("about.address")}
                    </h3>
                    <p 
                      className="text-muted-foreground"
                      data-testid="text-address-content"
                    >
                      Piazza Cittadella, 14<br />
                      37122 Verona VR, Italia
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden" data-testid="card-phone">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-md">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 
                      className="font-semibold text-lg mb-2"
                      data-testid="text-phone-title"
                    >
                      {t("about.phone")}
                    </h3>
                    <a
                      href="tel:+390458030123"
                      className="text-primary text-lg font-medium"
                      data-testid="link-phone"
                    >
                      +39 045 803 0123
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden" data-testid="card-hours">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-md shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="font-semibold text-lg mb-4"
                      data-testid="text-hours-title"
                    >
                      {t("about.hours")}
                    </h3>
                    <div className="space-y-2" data-testid="list-opening-hours">
                      {hours.map((schedule, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-1 border-b border-border/50 last:border-0"
                          data-testid={`row-hours-${index}`}
                        >
                          <span className="text-muted-foreground">{schedule.day}</span>
                          <span className="font-medium text-foreground">
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
