import { Link as ScrollLink } from "react-scroll";
import { Facebook, Instagram, Phone, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import logoImage from "@assets/IMG_8316_1768488179238.png";

export function Footer() {
  const { t, language } = useLanguage();

  const quickLinks = [
    { key: "nav.home", to: "hero" },
    { key: "nav.menu", to: "menu" },
    { key: "nav.about", to: "about" },
    { key: "nav.reviews", to: "reviews" },
  ];

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <img
              src={logoImage}
              alt="Yalla Amigo"
              className="h-20 w-auto mb-4"
              data-testid="img-footer-logo"
            />
            <p className="text-background/70 text-sm leading-relaxed" data-testid="text-footer-tagline">
              {t("footer.tagline")}
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com/yallaamigoverona"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-md transition-colors"
                data-testid="link-facebook"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/yallaamigo.verona"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-md transition-colors"
                data-testid="link-instagram"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4" data-testid="text-footer-quicklinks-title">{t("footer.quickLinks")}</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <ScrollLink
                  key={link.key}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="block text-background/70 cursor-pointer transition-colors"
                  data-testid={`link-footer-${link.to}`}
                >
                  {t(link.key)}
                </ScrollLink>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4" data-testid="text-footer-contact-title">{t("footer.contact")}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-background/70 text-sm" data-testid="text-footer-address">
                  Piazza Cittadella, 14<br />
                  37122 Verona VR, Italia
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+390458030123"
                  className="text-background/70 transition-colors text-sm"
                  data-testid="link-footer-phone"
                >
                  +39 045 803 0123
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4" data-testid="text-footer-hours-title">{t("footer.hours")}</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span className="text-background/70" data-testid="text-hours-weekday">
                  {language === "en" ? "Mon - Thu" : "Lun - Gio"}: 12:00 - 23:00
                </span>
              </div>
              <div className="flex items-center gap-2 pl-6">
                <span className="text-background/70" data-testid="text-hours-weekend">
                  {language === "en" ? "Fri - Sat" : "Ven - Sab"}: 12:00 - 23:30
                </span>
              </div>
              <div className="flex items-center gap-2 pl-6">
                <span className="text-background/70" data-testid="text-hours-sunday">
                  {language === "en" ? "Sunday" : "Domenica"}: 12:00 - 22:00
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-8 text-center">
          <p className="text-background/50 text-sm" data-testid="text-footer-copyright">
            © {new Date().getFullYear()} Yalla Amigo. {t("footer.rights")}.
          </p>
        </div>
      </div>
    </footer>
  );
}
