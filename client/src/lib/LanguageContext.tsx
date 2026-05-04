import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Language = "en" | "it" | "ar";

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
    "hero.tagline": "Flavor worth traveling for",
    "hero.title": "   ",
    "hero.subtitle": "   ",
    "hero.cta": "Explore Menu",
    "hero.order": "Order on Glovo",
    "hero.rating": "4.9 on Google",
    "hero.address": "Piazza Cittadella 14",
    "hero.hours": "Open until 23:00",
    "hero.delivery": "Delivery by glovo",
    "hero.featured.popular": "Popular",
    "hero.featured.name": "Classic Shawarma",
    "hero.featured.price": "€6.00",
    "hero.scroll": "Scroll to explore",
    "menu.title": "Our Menu",
    "menu.subtitle": "Discover the rich flavors of Palestinian tradition, prepared with authentic recipes passed down through generations",
    "menu.category.wraps": "Signature Wraps",
    "menu.category.plates": "Main Plates",
    "menu.category.appetizers": "Appetizers",
    "menu.category.salads": "Salads",
    "menu.category.desserts": "Desserts",
    "about.title": "Visit Us",
    "about.subtitle": "We are in the heart of Verona",
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
    "reviews.google": "+2K Reviews on Google",
    "footer.tagline": "Palestinain cuisine since 2023",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.hours": "Hours",
    "footer.followUs": "Follow Us",
    "footer.rights": "All rights reserved",
    "order.button": "Order on Glovo",
    "order.cta": "Hungry habibi? Order Now!",
    "order.description": "Get your favorite dishes delivered to your door",
    "order.delivery": "Fast Delivery Available",
    "instagram.title": "Follow Us",
    "instagram.subtitle": "Stay updated with our latest dishes and behind-the-scenes moments",
    "instagram.follow": "Follow @yallaamigo.verona",
  },
  it: {
    "nav.home": "Home",
    "nav.menu": "Menu",
    "nav.about": "Info",
    "nav.reviews": "Recensioni",
    "nav.order": "Ordina Ora",
    "hero.tagline": "Un sapore che vale il viaggio",
    "hero.title": "    ",
    "hero.subtitle": "    ",
    "hero.cta": "Scopri il Menu",
    "hero.order": "Ordina su Glovo",
    "hero.rating": "4.9 su Google",
    "hero.address": "Piazza Cittadella 14",
    "hero.hours": "Aperto fino alle 23:00",
    "hero.delivery": "Consegna con glovo",
    "hero.featured.popular": "Popolare",
    "hero.featured.name": "Shawarma Classico",
    "hero.featured.price": "€6.00",
    "hero.scroll": "Scorri per scoprire",
    "menu.title": "Il Nostro Menu",
    "menu.subtitle": "Scopri i ricchi sapori del tradizionale Palestinese, preparati con ricette autentiche tramandate di generazione in generazione",
    "menu.category.wraps": "Panini",
    "menu.category.plates": "Piatti Unici",
    "menu.category.appetizers": "Piatti Tipici",
    "menu.category.salads": "Insalate",
    "menu.category.desserts": "Dolci",
    "about.title": "Vieni a Trovarci",
    "about.subtitle": "Siamo nel cuore di Verona",
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
    "reviews.google": "+2000 Recensioni su Google",
    "footer.tagline": "Cucina Palestinese dal 2023",
    "footer.quickLinks": "Link Rapidi",
    "footer.contact": "Contatti",
    "footer.hours": "Orari",
    "footer.followUs": "Seguici",
    "footer.rights": "Tutti i diritti riservati",
    "order.button": "Ordina su Glovo",
    "order.cta": "Hai Fame Habibi? Ordina Ora!",
    "order.description": "Ricevi i tuoi piatti preferiti a casa tua",
    "order.delivery": "Consegna Veloce Disponibile",
    "instagram.title": "Seguici",
    "instagram.subtitle": "Resta aggiornato sui nostri ultimi piatti e momenti dietro le quinte",
    "instagram.follow": "Segui @yallaamigo.verona",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.menu": "المنيو",
    "nav.about": "معلوماتنا",
    "nav.reviews": "التقييمات",
    "nav.order": "اطلب الآن",
    "hero.tagline": "Flavor worth traveling for",
    "hero.title": "   ",
    "hero.subtitle": "   ",
    "hero.cta": "تصفح المنيو",
    "hero.order": "اطلب عبر Glovo",
    "hero.rating": "4.9 على جوجل",
    "hero.address": "Piazza Cittadella 14",
    "hero.hours": "مفتوح حتى 23:00",
    "hero.delivery": "توصيل عبر Glovo",
    "hero.featured.popular": "الأكثر طلباً",
    "hero.featured.name": "شاورما كلاسيك",
    "hero.featured.price": "€6.00",
    "hero.scroll": "انزل للأسفل",
    "menu.title": "منيو المطعم",
    "menu.subtitle": "جرب أطيب الأكلات الفلسطينية على اصولها",
    "menu.category.wraps": "سندويشات",
    "menu.category.plates": "أطباق رئيسية",
    "menu.category.appetizers": "أطباق تقليدية",
    "menu.category.salads": "سلطات",
    "menu.category.desserts": "حلويات",
    "about.title": "بنستناك تزورنا",
    "about.subtitle": "موقعنا في قلب فيرونا",
    "about.hours": "ساعات العمل",
    "about.address": "موقعنا",
    "about.phone": "اتصل بنا",
    "about.monday": "الاثنين",
    "about.tuesday": "الثلاثاء",
    "about.wednesday": "الأربعاء",
    "about.thursday": "الخميس",
    "about.friday": "الجمعة",
    "about.saturday": "السبت",
    "about.sunday": "الأحد",
    "about.closed": "مغلق",
    "reviews.title": "آراء زباينّا",
    "reviews.subtitle": "آراء حقيقية من الزباين",
    "reviews.google": "+2000 تقييم على جوجل",
    "footer.tagline": "أكل فلسطيني أصيل منذ 2023",
    "footer.quickLinks": "روابط سريعة",
    "footer.contact": "تواصل معنا",
    "footer.hours": "ساعات العمل",
    "footer.followUs": "تابعنا",
    "footer.rights": "جميع الحقوق محفوظة",
    "order.button": "اطلب من Glovo",
    "order.cta": "جوعان؟ اطلب الآن!",
    "order.description": "اطلب اللي بتحبه وبيوصلك لعندك",
    "order.delivery": "يتوفر توصيل سريع",
    "instagram.title": "تابعنا",
    "instagram.subtitle": "تابع كل جديد عنا وشوف شو بصير ورا الكواليس",
    "instagram.follow": "تابع @yallaamigo.verona",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language");
      if (saved === "en" || saved === "it" || saved === "ar") return saved as Language;
    }
    return "it";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
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
