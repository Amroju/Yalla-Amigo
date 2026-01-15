import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/LanguageContext";
import { SectionFloatingElements } from "@/components/SectionFloatingElements";

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
  price: string;
  image: string;
  category: string;
  popular?: boolean;
}

const menuItems: MenuItem[] = [
  // SANDWICHES
  {
    id: "1",
    nameEn: "Chicken Shawarma",
    nameIt: "Shawarma Pollo",
    descriptionEn: "Garlic, Tahini, Red Cabbage, Onion",
    descriptionIt: "Aglio, Tahina, Cappuccio Rosso, Cipolla",
    price: "€6.50",
    image: shawarma1,
    category: "sandwiches",
    popular: true,
  },
  {
    id: "2",
    nameEn: "Lamb/Beef Shawarma",
    nameIt: "Shawarma Agnello/Manzo",
    descriptionEn: "Hummus, Tahini, Onion, Tomato.",
    descriptionIt: "Hummus, Tahina, Cipolla, Pomodoro",
    price: "€8.50",
    image: shawarma2,
    category: "sandwiches",
    popular: true,
  },
  {
    id: "3",
    nameEn: "Falafel",
    nameIt: "Falafel",
    descriptionEn: "Hummus, Tahini, Eggplant, Mixed Salad",
    descriptionIt: "Hummus, Tahina, Melanzane, Insalata Mix",
    price: "€5.90",
    image: falafel2,
    category: "sandwiches",
  },
  {
    id: "4",
    nameEn: "Halloumi",
    nameIt: "Halloumi",
    descriptionEn: "Avocado, Eggplant, Mixed Salad",
    descriptionIt: "Avocado, Melanzane, Insalata Mix",
    price: "€6.00",
    image: shawarma3,
    category: "sandwiches",
  },
  {
    id: "5",
    nameEn: "Falafel & Halloumi",
    nameIt: "Falafel & Halloumi",
    descriptionEn: "Hummus, Avocado, Eggplant, Mixed Salad",
    descriptionIt: "Hummus, Avocado, Melanzane, Insalata Mix",
    price: "€6.90",
    image: falafel1,
    category: "sandwiches",
  },
  {
    id: "6",
    nameEn: "Chicken Pizza (Fino)",
    nameIt: "Pollo Pizza (Fino)",
    descriptionEn: "Chicken, Cream, Mixed Peppers, Mushrooms, Black Olives, Mozzarella",
    descriptionIt: "Pollo, Crema, Peperoni mix, Funghi, Oliva Nera, Mozzarella",
    price: "€8.00",
    image: kebab1,
    category: "sandwiches",
  },
  {
    id: "7",
    nameEn: "Philadelphia (Fino)",
    nameIt: "Philadelphia (Fino)",
    descriptionEn: "Beef, Onion, Mixed Peppers, Mozzarella, Mushrooms",
    descriptionIt: "Manzo, Cipolla, Peperoni mix, Mozzarella, Funghi",
    price: "€9.00",
    image: kebab2,
    category: "sandwiches",
  },
  {
    id: "8",
    nameEn: "Arayes Kafta (4pcs)",
    nameIt: "Arayes Kafta (4pz)",
    descriptionEn: "Meat, Parsley, Onion, Spices",
    descriptionIt: "Carne, Prezzemolo, Cipolla, Spizzi",
    price: "€5.00",
    image: pita,
    category: "sandwiches",
  },
  {
    id: "9",
    nameEn: "Fajita (Fino)",
    nameIt: "Fahita (Fino)",
    descriptionEn: "Chicken, Mixed Peppers, Corn, Mushrooms, Mozzarella",
    descriptionIt: "Pollo, Peperoni mix, Mais, Funghi, Mozzarella",
    price: "€9.00",
    image: shawarma1,
    category: "sandwiches",
  },
  {
    id: "10",
    nameEn: "Crispy Chicken (Fino)",
    nameIt: "Pollo Crispy (Fino)",
    descriptionEn: "Chicken, Coleslaw Salad, Pickled Cucumbers, Potatoes",
    descriptionIt: "Pollo, Coleslaw salad, Cetrioli sotto Aceto, Patate",
    price: "€8.00",
    image: kebab1,
    category: "sandwiches",
  },
  {
    id: "11",
    nameEn: "Special Chicken Shawarma",
    nameIt: "Shawarma Special Pollo",
    descriptionEn: "200g Chicken, Garlic, Tahini, Red Cabbage, Onion, Crunchy Pita",
    descriptionIt: "200g Pollo, Aglio, Tahina, Cappuccio Rosso, Cipolla, Pita Crunchy",
    price: "€9.90",
    image: shawarma1,
    category: "sandwiches",
    popular: true,
  },
  {
    id: "12",
    nameEn: "Special Lamb/Beef Shawarma",
    nameIt: "Shawarma Special Agnello/Manzo",
    descriptionEn: "200g Lamb/Beef, Hummus, Tahini, Onion, Tomato, Crunchy Pita",
    descriptionIt: "200g Agnello/Manzo, Hummus, Tahina, Cipolla, Pomodoro, Pita Crunchy",
    price: "€11.90",
    image: shawarma2,
    category: "sandwiches",
    popular: true,
  },

  // PIATTI UNICI
  {
    id: "13",
    nameEn: "Chicken Plate",
    nameIt: "Pollo",
    descriptionEn: "Chicken, Hummus, Pickles, French Fries, Mixed Salad, Sesame Sauce, Bread",
    descriptionIt: "Pollo, Hummus, Sottaceti, Patatine fritte, Insalata Mix, Salsa di Sesamo, Pane",
    price: "€10.50",
    image: kebab1,
    category: "piattiUnici",
    popular: true,
  },
  {
    id: "14",
    nameEn: "Lamb and Beef Plate",
    nameIt: "Agnello e Manzo",
    descriptionEn: "Beef, Hummus, Pickles, French Fries, Mixed Salad, Sesame Sauce, Bread",
    descriptionIt: "Manzo, Hummus, Sottaceti, Patatine fritte, Insalata Mix, Salsa di Sesamo, Pane",
    price: "€11.50",
    image: kebab2,
    category: "piattiUnici",
    popular: true,
  },
  {
    id: "15",
    nameEn: "Falafel & Halloumi Plate",
    nameIt: "Falafel & Halloumi",
    descriptionEn: "Halloumi (1 pc), Falafel (5 pcs), Hummus, Pickles, Avocado, Vegetables, Sesame Sauce, Bread",
    descriptionIt: "Halloumi (1 pz), Falafel (5 pz), Hummus, Sottaceti, Avocado, Verdure, Salsa di Sesamo, Pane",
    price: "€11.50",
    image: falafel1,
    category: "piattiUnici",
  },
  {
    id: "16",
    nameEn: "Schnitzel",
    nameIt: "Shnitzel",
    descriptionEn: "Chicken Breast, Coleslaw Salad, Lemon, Garlic Sauce",
    descriptionIt: "Petto di Pollo, Insalata Coleslaw, Limone, Salsa all'Aglio",
    price: "€13.00",
    image: kebab1,
    category: "piattiUnici",
  },
  {
    id: "17",
    nameEn: "Nuggets & Fries",
    nameIt: "Nuggets & Patate",
    descriptionEn: "Nuggets (4pcs), Fries, Ketchup",
    descriptionIt: "Nuggets (4pz), Patate, Ketchup",
    price: "€6.00",
    image: kebab2,
    category: "piattiUnici",
  },

  // PIATTI TIPICI
  {
    id: "18",
    nameEn: "Hummus",
    nameIt: "Hummus",
    descriptionEn: "Chickpea hummus and bread",
    descriptionIt: "Hummus di ceci e pane",
    price: "€5.90",
    image: hummus1,
    category: "piattiTipici",
    popular: true,
  },
  {
    id: "19",
    nameEn: "Hummus with Beef",
    nameIt: "Hummus di manzo",
    descriptionEn: "Chickpea hummus, beef and bread",
    descriptionIt: "Hummus di ceci, manzo e pane",
    price: "€8.90",
    image: hummus2,
    category: "piattiTipici",
    popular: true,
  },
  {
    id: "20",
    nameEn: "Avocado",
    nameIt: "Avocado",
    descriptionEn: "Avocado, Garlic, Green Peppers, Tomato, Lemon Juice",
    descriptionIt: "Avocado, Aglio, Peperoni verdi, Pomodoro, Succo di limone",
    price: "€7.00",
    image: salad1,
    category: "piattiTipici",
  },
  {
    id: "21",
    nameEn: "Baba Ghanouge",
    nameIt: "Baba Ghanouge",
    descriptionEn: "Eggplant cream, Tahini, Mint, Bread",
    descriptionIt: "Crema di melanzane, Tahina, Menta, Pane",
    price: "€5.90",
    image: hummus1,
    category: "piattiTipici",
  },
  {
    id: "22",
    nameEn: "Grape Leaves",
    nameIt: "Foglie di vite",
    descriptionEn: "Rice, Mint, Green Onion, Parsley, Tomatoes, Spices",
    descriptionIt: "Riso, Menta, Cipolla verde, Prezzemolo, Pomodori, Spizzi",
    price: "€5.00",
    image: pita,
    category: "piattiTipici",
  },
  {
    id: "23",
    nameEn: "Mtabal",
    nameIt: "Mtabal",
    descriptionEn: "Eggplant, Tomato, Tahini, Yogurt, Garlic, Spices",
    descriptionIt: "Melanzane, Pomodoro, Tahina, Yogurt, Aglio, Spizzi",
    price: "€5.90",
    image: hummus2,
    category: "piattiTipici",
  },
  {
    id: "24",
    nameEn: "Muhammara",
    nameIt: "Muhammara",
    descriptionEn: "Pepper cream, walnuts and bread",
    descriptionIt: "Crema di peperoni, noci e pane",
    price: "€5.90",
    image: hummus1,
    category: "piattiTipici",
  },
  {
    id: "25",
    nameEn: "Eggplant with Chickpeas and Tomatoes",
    nameIt: "Melanzane con ceci e pomodori",
    descriptionEn: "Eggplant, Onion, Chickpeas, Tomato and Bread",
    descriptionIt: "Melanzane, Cipolla, Ceci, Pomodoro e Pane",
    price: "€5.90",
    image: pita,
    category: "piattiTipici",
  },
  {
    id: "26",
    nameEn: "Fried Vegetable Mix",
    nameIt: "Mix verdure fritte",
    descriptionEn: "Eggplant, Cauliflower, Potatoes, Green Chili",
    descriptionIt: "Melanzane, Cavolfiore, Patate, Piccante Verde",
    price: "€8.00",
    image: falafel3,
    category: "piattiTipici",
  },
  {
    id: "27",
    nameEn: "Msabbaha",
    nameIt: "Msabbaha",
    descriptionEn: "Hummus, Chickpeas, Extra Sesame Sauce",
    descriptionIt: "Hummus, Ceci, Salsa extra di sesamo",
    price: "€5.90",
    image: hummus2,
    category: "piattiTipici",
  },
  {
    id: "28",
    nameEn: "Mixed Traditional Plates",
    nameIt: "Mix piatti tipici",
    descriptionEn: "Babaganoush, Hummus, Muhammara, Bread",
    descriptionIt: "Babaganoush, Hummus, Muhammara, Pane",
    price: "€8.00",
    image: hummus1,
    category: "piattiTipici",
    popular: true,
  },

  // INSALATE
  {
    id: "29",
    nameEn: "Amigo Salad",
    nameIt: "Amigo",
    descriptionEn: "Crunchy Bread, Onion, Tomato, Cucumbers, Tahini, Yogurt, Lemon Juice",
    descriptionIt: "Pane Croccante, Cipolla, Pomodoro, Cetrioli, Tahina, Yogurt, Succo di Limone",
    price: "€6.00",
    image: salad1,
    category: "insalate",
    popular: true,
  },
  {
    id: "30",
    nameEn: "Arugula Salad",
    nameIt: "Insalata di Rucola",
    descriptionEn: "Arugula, Avocado, Pomegranate, Olive Oil, Lemon Juice, Pomegranate Sauce",
    descriptionIt: "Rucola, Avocado, Melograno, Olio d'oliva, Succo di limone, Salsa di Melograno",
    price: "€6.00",
    image: salad2,
    category: "insalate",
  },
  {
    id: "31",
    nameEn: "Lentils and Chickpeas",
    nameIt: "Lenticchie e Ceci",
    descriptionEn: "Parsley, Tomato, Salad, Lentils, Chickpeas, Cucumbers, Onion, Mint, Bulgur",
    descriptionIt: "Prezzemolo, Pomodoro, Insalata, Lenticchie, Ceci, Cetrioli, Cipolla, Menta, Bulgur",
    price: "€5.90",
    image: salad1,
    category: "insalate",
  },
  {
    id: "32",
    nameEn: "Gazza Salad",
    nameIt: "Insalata Gazza",
    descriptionEn: "Tomato, Cucumbers, Onion, Green Dill, Lemon Juice",
    descriptionIt: "Pomodoro, Cetrioli, Cipolla, Aneto Verde, Succo di Limone",
    price: "€6.00",
    image: salad2,
    category: "insalate",
  },
  {
    id: "33",
    nameEn: "Tabbouleh",
    nameIt: "Tabbouleh",
    descriptionEn: "Parsley, Tomato, Salad, Cucumbers, Onion, Mint, Bulgur",
    descriptionIt: "Prezzemolo, Pomodoro, Insalata, Cetrioli, Cipolla, Menta, Bulgur",
    price: "€6.00",
    image: salad1,
    category: "insalate",
  },

  // RISO
  {
    id: "34",
    nameEn: "Mejadara",
    nameIt: "Mejadara",
    descriptionEn: "Rice, Lentils, Fried Onions",
    descriptionIt: "Riso, Lenticchie, Cipolle fritte",
    price: "€5.50",
    image: falafel3,
    category: "riso",
  },
  {
    id: "35",
    nameEn: "Rice with Vegetables",
    nameIt: "Riso con Verdure",
    descriptionEn: "Rice, Vegetables (Carrots, Corn, Peas), Caramelized Onion",
    descriptionIt: "Riso, Verdure (Carote, Mais Piselli), Cipolla caramellata",
    price: "€5.50",
    image: falafel1,
    category: "riso",
  },
  {
    id: "36",
    nameEn: "Spicy Rice",
    nameIt: "Riso Piccante",
    descriptionEn: "Rice, Carrots, Caramelized Onion, Spicy",
    descriptionIt: "Riso, Carote, Cipolla caramellata, Piccante",
    price: "€5.50",
    image: falafel2,
    category: "riso",
  },
  {
    id: "37",
    nameEn: "White Rice with Angel Hair",
    nameIt: "Riso Bianco con Capelli d'Angelo",
    descriptionEn: "Rice, Angel Hair Pasta",
    descriptionIt: "Riso, Capelli d'Angelo",
    price: "€5.50",
    image: pita,
    category: "riso",
  },

  // DOLCI
  {
    id: "38",
    nameEn: "Basbousa",
    nameIt: "Basbousa",
    descriptionEn: "Traditional Middle Eastern semolina cake",
    descriptionIt: "Dolce tradizionale mediorientale alla semola",
    price: "€2.00",
    image: baklava,
    category: "dolci",
  },
  {
    id: "39",
    nameEn: "Baklava",
    nameIt: "Baklava",
    descriptionEn: "Layers of flaky phyllo, walnuts, pistachios, honey syrup",
    descriptionIt: "Strati di pasta fillo sfogliata, noci, pistacchi, sciroppo di miele",
    price: "€2.00",
    image: baklava,
    category: "dolci",
  },

  // BEVANDE
  {
    id: "40",
    nameEn: "Water",
    nameIt: "Acqua",
    descriptionEn: "Still or sparkling water",
    descriptionIt: "Acqua naturale o frizzante",
    price: "€1.50",
    image: salad2,
    category: "bevande",
  },
  {
    id: "41",
    nameEn: "Soft Drink",
    nameIt: "Bibita",
    descriptionEn: "Selection of soft drinks",
    descriptionIt: "Selezione di bibite",
    price: "€2.50",
    image: salad1,
    category: "bevande",
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
      data-testid={`card-menu-item-${item.id}`}
    >
      <Card className="overflow-hidden cursor-pointer h-full">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt={language === "en" ? item.nameEn : item.nameIt}
            className="w-full h-full object-cover"
            data-testid={`img-menu-item-${item.id}`}
          />
          {item.popular && (
            <Badge
              className="absolute top-3 right-3 bg-primary text-primary-foreground"
              data-testid={`badge-popular-${item.id}`}
            >
              Popular
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start gap-2 mb-2">
            <h3 
              className="font-serif text-lg font-semibold text-foreground"
              data-testid={`text-menu-item-name-${item.id}`}
            >
              {language === "en" ? item.nameEn : item.nameIt}
            </h3>
            <span 
              className="text-primary font-bold whitespace-nowrap"
              data-testid={`text-menu-item-price-${item.id}`}
            >
              {item.price}
            </span>
          </div>
          <p 
            className="text-muted-foreground text-sm leading-relaxed"
            data-testid={`text-menu-item-description-${item.id}`}
          >
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
    { key: "sandwiches", labelEn: "Sandwiches", labelIt: "Panini", noteEn: "+€0.50 for wrap", noteIt: "+€0,50 per la piadina" },
    { key: "piattiUnici", labelEn: "Main Plates", labelIt: "Piatti Unici" },
    { key: "piattiTipici", labelEn: "Traditional Dishes", labelIt: "Piatti Tipici" },
    { key: "insalate", labelEn: "Salads", labelIt: "Insalate" },
    { key: "riso", labelEn: "Rice Dishes", labelIt: "Riso" },
    { key: "dolci", labelEn: "Desserts", labelIt: "Dolci" },
    { key: "bevande", labelEn: "Drinks", labelIt: "Bevande" },
  ];

  return (
    <section id="menu" className="py-16 md:py-24 bg-background relative">
      <SectionFloatingElements />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 
            className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4"
            data-testid="text-menu-title"
          >
            {t("menu.title")}
          </h2>
          <p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            data-testid="text-menu-subtitle"
          >
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
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="mb-8 border-l-4 border-primary pl-4"
              >
                <h3 
                  className="text-2xl font-serif font-semibold text-foreground"
                  data-testid={`text-category-${category.key}`}
                >
                  {language === "en" ? category.labelEn : category.labelIt}
                </h3>
                {(category.noteEn || category.noteIt) && (
                  <p className="text-sm text-muted-foreground mt-1 italic">
                    {language === "en" ? category.noteEn : category.noteIt}
                  </p>
                )}
              </motion.div>
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
