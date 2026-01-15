import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/LanguageContext";

import shawarma1 from "@assets/stock_images/shawarma_wrap_middle_ce6a63b6.jpg";
import shawarma2 from "@assets/stock_images/shawarma_wrap_middle_9b7c859b.jpg";
import shawarma3 from "@assets/stock_images/shawarma_wrap_middle_889b938e.jpg";
import falafel1 from "@assets/stock_images/falafel_plate_medite_962e0dd7.jpg";
import falafel2 from "@assets/stock_images/falafel_plate_medite_5ca0c0a6.jpg";
import falafel3 from "@assets/stock_images/falafel_plate_medite_07fcb1ef.jpg";
import hummus1 from "@assets/stock_images/hummus_appetizer_mid_da2ec780.jpg";
import hummus2 from "@assets/stock_images/hummus_appetizer_mid_bc39e6af.jpg";
import kebab1 from "@assets/stock_images/grilled_meat_kebab_s_a205dca6.jpg";
import kebab2 from "@assets/stock_images/grilled_meat_kebab_s_96351961.jpg";
import salad1 from "@assets/stock_images/fresh_salad_mediterr_9c126eeb.jpg";
import salad2 from "@assets/stock_images/fresh_salad_mediterr_483e9a35.jpg";
import baklava from "@assets/stock_images/baklava_dessert_midd_33faf062.jpg";
import pita from "@assets/stock_images/pita_bread_fresh_bak_cee59f0b.jpg";

interface MenuItem {
  id: string;
  nameEn: string;
  nameIt: string;
  descriptionEn: string;
  descriptionIt: string;
  image: string;
  category: string;
  popular?: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    nameEn: "Classic Chicken Shawarma",
    nameIt: "Shawarma di Pollo Classico",
    descriptionEn: "Tender marinated chicken, fresh vegetables, garlic sauce, wrapped in warm pita",
    descriptionIt: "Pollo marinato tenero, verdure fresche, salsa all'aglio, avvolto in pita calda",
    image: shawarma1,
    category: "wraps",
    popular: true,
  },
  {
    id: "2",
    nameEn: "Beef Shawarma Deluxe",
    nameIt: "Shawarma di Manzo Deluxe",
    descriptionEn: "Premium beef slices, pickles, tahini, tomatoes in freshly baked bread",
    descriptionIt: "Fette di manzo premium, sottaceti, tahini, pomodori in pane appena sfornato",
    image: shawarma2,
    category: "wraps",
  },
  {
    id: "3",
    nameEn: "Mixed Shawarma Special",
    nameIt: "Shawarma Misto Speciale",
    descriptionEn: "Best of both worlds with chicken and beef, hummus, fresh herbs",
    descriptionIt: "Il meglio di entrambi con pollo e manzo, hummus, erbe fresche",
    image: shawarma3,
    category: "wraps",
    popular: true,
  },
  {
    id: "4",
    nameEn: "Falafel Plate",
    nameIt: "Piatto di Falafel",
    descriptionEn: "Crispy homemade falafel, hummus, tahini, fresh salad, warm pita",
    descriptionIt: "Falafel croccante fatto in casa, hummus, tahini, insalata fresca, pita calda",
    image: falafel1,
    category: "plates",
    popular: true,
  },
  {
    id: "5",
    nameEn: "Falafel Wrap",
    nameIt: "Wrap di Falafel",
    descriptionEn: "Golden falafel, creamy hummus, crunchy vegetables in lavash bread",
    descriptionIt: "Falafel dorato, hummus cremoso, verdure croccanti in pane lavash",
    image: falafel2,
    category: "wraps",
  },
  {
    id: "6",
    nameEn: "Falafel Bowl",
    nameIt: "Bowl di Falafel",
    descriptionEn: "Falafel over rice, with grilled vegetables, tahini dressing",
    descriptionIt: "Falafel su riso, con verdure grigliate, condimento tahini",
    image: falafel3,
    category: "plates",
  },
  {
    id: "7",
    nameEn: "Hummus Classic",
    nameIt: "Hummus Classico",
    descriptionEn: "Creamy chickpea dip with olive oil, paprika, served with warm pita",
    descriptionIt: "Crema di ceci con olio d'oliva, paprika, servito con pita calda",
    image: hummus1,
    category: "appetizers",
  },
  {
    id: "8",
    nameEn: "Hummus with Meat",
    nameIt: "Hummus con Carne",
    descriptionEn: "Our signature hummus topped with seasoned ground beef, pine nuts",
    descriptionIt: "Il nostro hummus signature con carne macinata condita, pinoli",
    image: hummus2,
    category: "appetizers",
    popular: true,
  },
  {
    id: "9",
    nameEn: "Mixed Grill Platter",
    nameIt: "Piatto Misto alla Griglia",
    descriptionEn: "Assortment of grilled meats, kebabs, served with rice and grilled vegetables",
    descriptionIt: "Assortimento di carni grigliate, kebab, servito con riso e verdure grigliate",
    image: kebab1,
    category: "plates",
    popular: true,
  },
  {
    id: "10",
    nameEn: "Lamb Kebab",
    nameIt: "Kebab di Agnello",
    descriptionEn: "Tender lamb skewers, aromatic spices, served with fresh salad",
    descriptionIt: "Spiedini di agnello tenero, spezie aromatiche, servito con insalata fresca",
    image: kebab2,
    category: "plates",
  },
  {
    id: "11",
    nameEn: "Fattoush Salad",
    nameIt: "Insalata Fattoush",
    descriptionEn: "Fresh vegetables, crispy pita chips, sumac dressing",
    descriptionIt: "Verdure fresche, pita croccante, condimento al sumac",
    image: salad1,
    category: "salads",
  },
  {
    id: "12",
    nameEn: "Tabbouleh",
    nameIt: "Tabulè",
    descriptionEn: "Parsley, bulgur, tomatoes, mint, lemon-olive oil dressing",
    descriptionIt: "Prezzemolo, bulgur, pomodori, menta, condimento limone-olio d'oliva",
    image: salad2,
    category: "salads",
  },
  {
    id: "13",
    nameEn: "Baklava",
    nameIt: "Baklava",
    descriptionEn: "Layers of flaky phyllo, walnuts, pistachios, honey syrup",
    descriptionIt: "Strati di pasta fillo sfogliata, noci, pistacchi, sciroppo di miele",
    image: baklava,
    category: "desserts",
  },
  {
    id: "14",
    nameEn: "Fresh Pita Basket",
    nameIt: "Cestino di Pita Fresca",
    descriptionEn: "Freshly baked pita bread, perfect for sharing",
    descriptionIt: "Pane pita appena sfornato, perfetto da condividere",
    image: pita,
    category: "appetizers",
  },
];

interface MenuCardProps {
  item: MenuItem;
  index: number;
  language: "en" | "it";
}

function MenuCard({ item, index, language }: MenuCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden hover-elevate cursor-pointer h-full">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt={language === "en" ? item.nameEn : item.nameIt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {item.popular && (
            <Badge
              className="absolute top-3 right-3 bg-primary text-primary-foreground"
              data-testid={`badge-popular-${item.id}`}
            >
              Popular
            </Badge>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardContent className="p-4">
          <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {language === "en" ? item.nameEn : item.nameIt}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {language === "en" ? item.descriptionEn : item.descriptionIt}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function MenuSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    { key: "wraps", label: t("menu.category.wraps") },
    { key: "plates", label: t("menu.category.plates") },
    { key: "appetizers", label: t("menu.category.appetizers") },
    { key: "salads", label: t("menu.category.salads") },
    { key: "desserts", label: t("menu.category.desserts") },
  ];

  return (
    <section id="menu" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            {t("menu.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("menu.subtitle")}
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => {
          const categoryItems = menuItems.filter(
            (item) => item.category === category.key
          );
          if (categoryItems.length === 0) return null;

          return (
            <div key={category.key} className="mb-16 last:mb-0">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="text-2xl font-serif font-semibold mb-8 text-foreground border-l-4 border-primary pl-4"
                data-testid={`text-category-${category.key}`}
              >
                {category.label}
              </motion.h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryItems.map((item, index) => (
                  <MenuCard
                    key={item.id}
                    item={item}
                    index={index}
                    language={language}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
