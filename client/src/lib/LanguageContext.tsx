import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Language = "en" | "it";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.menu": "Menu",
    "nav.about": "About",
    "nav.reviews": "Reviews",
    "nav.order": "Order Now",
    "hero.tagline": " Flavor worth traveling for  ",
    "hero.title": "  ",
    "hero.subtitle": " ",
    "hero.cta": "Explore Menu",
    "hero.order": "Order on Glovo",
    "menu.title": "Our Menu",
    "menu.subtitle": "Discover the rich flavors of tradition, prepared with authentic recipes passed down through generations",
    "menu.category.wraps": "Signature Wraps",
    "menu.category.plates": "Main Plates",
    "menu.category.appetizers": "Appetizers",
    "menu.category.salads": "Salads",
    "menu.category.desserts": "Desserts",
    "about.title": "Visit Us",
    "about.subtitle": "We look forward to welcoming you",
    "about.hours": "Opening Hours",
    "about.address": "Our Location",
    "about.phone": "Call Us",
    "about.monday": "Monday",
    "about.tuesday": "Tuesday",
    "about.wednesday": "Wednesday",
    "about.thursday": "Thursday",
    "about.friday": "Friday",
    "about.saturday": "Saturday",
    "about.sunday": "Sunday",
    "about.closed": "Closed",
    "reviews.title": "What Our Guests Say",
    "reviews.subtitle": "Read reviews from our satisfied customers",
    "reviews.google": "Reviews from Google",
    "footer.tagline": "Authentic Middle Eastern cuisine since 2022",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.hours": "Hours",
    "footer.followUs": "Follow Us",
    "footer.rights": "All rights reserved",
    "order.button": "Order on Glovo",
    "order.cta": "Hungry? Order Now!",
    "order.description": "Get your favorite dishes delivered to your door",
    "order.delivery": "Fast Delivery Available",
  },
  it: {
    "nav.home": "Home",
    "nav.menu": "Menu",
    "nav.about": "Info",
    "nav.reviews": "Recensioni",
    "nav.order": "Ordina Ora",
    "hero.tagline": " Un sapore che vale il viaggio ",
    "hero.title": "  ",
    "hero.subtitle": "  ",
    "hero.cta": "Scopri il Menu",
    "hero.order": "Ordina su Glovo",
    "menu.title": "Il Nostro Menu",
    "menu.subtitle": "Scopri i ricchi sapori del tradizionale, preparati con ricette autentiche tramandate di generazione in generazione",
    "menu.category.wraps": "Panini",
    "menu.category.plates": "Piatti Unici",
    "menu.category.appetizers": "Piatti Tipici",
    "menu.category.salads": "Insalate",
    "menu.category.desserts": "Dolci",
    "about.title": "Vieni a Trovarci",
    "about.subtitle": "Ti aspettiamo con piacere",
    "about.hours": "Orari di Apertura",
    "about.address": "Dove Siamo",
    "about.phone": "Chiamaci",
    "about.monday": "Lunedì",
    "about.tuesday": "Martedì",
    "about.wednesday": "Mercoledì",
    "about.thursday": "Giovedì",
    "about.friday": "Venerdì",
    "about.saturday": "Sabato",
    "about.sunday": "Domenica",
    "about.closed": "Chiuso",
    "reviews.title": "Cosa Dicono i Nostri Ospiti",
    "reviews.subtitle": "Leggi le recensioni dei nostri clienti soddisfatti",
    "reviews.google": "Recensioni da Google",
    "footer.tagline": "Cucina mediorientale autentica dal 2022",
    "footer.quickLinks": "Link Rapidi",
    "footer.contact": "Contatti",
    "footer.hours": "Orari",
    "footer.followUs": "Seguici",
    "footer.rights": "Tutti i diritti riservati",
    "order.button": "Ordina su Glovo",
    "order.cta": "Hai Fame? Ordina Ora!",
    "order.description": "Ricevi i tuoi piatti preferiti a casa tua",
    "order.delivery": "Consegna Veloce Disponibile",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language");
      if (saved === "en" || saved === "it") return saved;
    }
    return "it";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
