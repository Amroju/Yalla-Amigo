import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Leaf, Search } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { MenuFloatingElements } from "@/components/FloatingElements";

import shawarma1 from "@assets/IMG_0135_1773765940849.jpeg";
import chickenShawarmaImg from "@assets/chickenSh.jpg";
import shawarma2 from "@assets/stock_images/shawarma_wrap_middle_9b7c859b.jpg";
import beefShawarmaImg from "@assets/beefShawrma4.jpg";
import hummusImg from "@assets/Hummus_1773859151190.jpeg";
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
import newFajitaImg from "@assets/Fahita.jpg";
import newMsabbahaImg from "@assets/Musbaha.jpg";
import newMtabalImg from "@assets/Mutabal.jpg";
import newCrispyChickenImg from "@assets/PolloCrispy.jpg";
import newChickenShawarmaImg from "@assets/ShawarmaPollo.jpg";
import newBabaGhanougImg from "@assets/BabaGhanoug.jpg";
import newHummusImg from "@assets/HommusNew.jpg";
import newEggplantChickpeasImg from "@assets/Melanzane.jpg";
import newMuhammaraImg from "@assets/Muhamara.jpg";
import newMejadaraImg from "@assets/mujadara new3.jpg";
import newRisoVerdureImg from "@assets/Riso con Verdure2.jpg";
import newRisoSpicyImg from "@assets/Riso Spicy2.jpg";
import newRisoBiancoImg from "@assets/Riso bianco2.jpg";
import newFalafelSandwichImg from "@assets/falafel sandwich.jpg";
import newFalafelHalloumiImg from "@assets/falafel Halloumi.jpg";
import newPizzaPolloImg from "@assets/pizza pollo.jpg";
import newHalloumiImg from "@assets/Halloumi.jpg";
import newSpecialChickenImg from "@assets/Shawarma special pollo.jpg";
import newSpecialBeefImg from "@assets/Shawarma special manzo.jpg";
import newLambBeefPlateImg from "@assets/Lamb and Beef Plate.jpg";
import newFalafelHalloumiPlateImg from "@assets/Falafel Halloumi2.jpg";
import newFalafelImg from "@assets/Falafel2.jpg";
import newChickenPlateImg from "@assets/Generated Image April 27, 2026 - 11_18PM.jpg";
import newFalafelPlateRealImg from "@assets/Falafel Plate v2.jpg";
import newFalafelHalloumiPlateRealImg from "@assets/falafel halloumi plate v2.jpg";
import newRisoSpicyManzoImg from "@assets/Riso spicy con manzo.jpg";
import newChickenRiceImg from "@assets/Chicken with Rice.jpg";
import newFalafelRisoImg from "@assets/Falafel Con Riso2 v2.jpg";
import newKidsMenuImg from "@assets/Menu Bambini.jpg";
import newChickenRiceNewImg from "@assets/Chicken Rice v2.jpg";
import newBeefRiceImg from "@assets/beef rice v2.jpg";
import newFoglieDiViteImg from "@assets/folgie di vite.jpg";
import newHummusManzoImg from "@assets/Hummus Manzo.jpg";
import newAvocadoImg from "@assets/Avocado.jpg";
import newMixPiattiTipiciImg from "@assets/Mix piatti tipici.jpg";
import newTabboulehImg from "@assets/Tabbouleh.jpg";
import newInsalataAmigoImg from "@assets/Insalata Amigo.jpg";
import newInsalataGazaImg from "@assets/Insalata Gaza.jpg";
import newBaklavaImg from "@assets/Baklava.jpg";
import newBasbousaImg from "@assets/Basbousa.jpg";
import newWaterImg from "@assets/water.jpg";
import newSoftDrinksImg from "@assets/Soft drinks.png";
import newBoxChickenImg from "@assets/Box chicken.jpg";
import newBoxManzoImg from "@assets/Box Manzo.jpg";
import newCrispyWingsImg from "@assets/crispy wings.jpg";
import newCrispyBreastImg from "@assets/crispy breast.png";
interface MenuItem {
  id: string;
  nameEn: string;
  nameIt: string;
  nameAr?: string;
  descriptionEn: string;
  descriptionIt: string;
  descriptionAr?: string;
  price: string;
  image: string;
  category: string;
  popular?: boolean;
  vegetarian?: boolean;
  vegan?: boolean;
  imagePosition?: string;
  imageScale?: number;
  imageFilter?: string;
  allergens?: string;
}

interface Category {
  key: string;
  labelEn: string;
  labelIt: string;
  labelAr?: string;
  noteEn?: string;
  noteIt?: string;
  noteAr?: string;
}

const menuItems: MenuItem[] = [
  // SANDWICHES
  {
    id: "1",
    nameEn: "Chicken Shawarma",
    nameIt: "Shawarma Pollo",
    nameAr: "شاورما دجاج",
    descriptionEn: "Garlic, Tahini, Red Cabbage, Onion",
    descriptionIt: "Aglio, Tahina, Cappuccio Rosso, Cipolla",
    descriptionAr: "ثوم، طحينة، ملفوف أحمر، بصل",
    price: "€6.50",
    image: newChickenShawarmaImg,
    category: "sandwiches",
    popular: true,
    imagePosition: "center 75%",
    imageScale: 1.05,
  },
  {
    id: "2",
    nameEn: "Lamb/Beef Shawarma",
    nameIt: "Shawarma Agnello/Manzo",
    nameAr: "شاورما لحم وعجل",
    descriptionEn: "Hummus, Tahini, Onion, Tomato.",
    descriptionIt: "Hummus, Tahina, Cipolla, Pomodoro",
    descriptionAr: "طحينة، بقدونس، بندورة، بصل، حمص، مخلل لفت",
    price: "€8.50",
    image: beefShawarmaImg,
    category: "sandwiches",
    popular: true,
    imagePosition: "center 75%",
    imageScale: 1.05,
  },
  {
    id: "3",
    nameEn: "Falafel",
    nameIt: "Falafel",
    nameAr: "فلافل",
    descriptionEn: "Hummus, Tahini, Eggplant, Mixed Salad",
    descriptionIt: "Hummus, Tahina, Melanzane, Insalata Mix",
    descriptionAr: "حمص، مخلل، أفوكادو، طحينة، سلطة مشكلة",
    price: "€5.90",
    image: newFalafelImg,
    category: "sandwiches",
    vegan: true,
    imagePosition: "center 75%",
    imageScale: 1.05,
  },
  {
    id: "4",
    nameEn: "Halloumi",
    nameIt: "Halloumi",
    nameAr: "حلومي",
    descriptionEn: "Avocado, Eggplant, Mixed Salad",
    descriptionIt: "Avocado, Melanzane, Insalata Mix",
    descriptionAr: "حلومي، مخلل، طحينة، سلطة مشكلة",
    price: "€6.00",
    image: newHalloumiImg,
    category: "sandwiches",
    vegetarian: true,
    imagePosition: "center 75%",
    imageScale: 1.05,
  },
  {
    id: "5",
    nameEn: "Falafel and Halloumi",
    nameIt: "Falafel e Halloumi",
    nameAr: "فلافل وحلومي",
    descriptionEn: "Hummus, Avocado, Eggplant, Mixed Salad",
    descriptionIt: "Hummus, Avocado, Melanzane, Insalata Mix",
    descriptionAr: "حمص، أفوكادو، باذنجان، سلطة مشكلة",
    price: "€6.90",
    image: newFalafelHalloumiPlateImg,
    category: "sandwiches",
    vegetarian: true,
    imagePosition: "center 75%",
    imageScale: 1.05,
  },
  {
    id: "9",
    nameEn: "Fajita (Fino)",
    nameIt: "Fahita (Fino)",
    nameAr: "فاهيتا",
    descriptionEn: "Chicken, Mixed Peppers, Corn, Mushrooms, Mozzarella",
    descriptionIt: "Pollo, Peperoni mix, Mais, Funghi, Mozzarella",
    descriptionAr: "دجاج، فليفلة مشكلة، ذرة، فطر، جبنة موزاريلا",
    price: "€9.00",
    image: newFajitaImg,
    category: "sandwiches",
    imagePosition: "center 55%",
    imageScale: 1.05,
  },
  {
    id: "10",
    nameEn: "Crispy Chicken (Fino)",
    nameIt: "Pollo Crispy (Fino)",
    nameAr: "دجاج كرسبي",
    descriptionEn: "Chicken, Coleslaw Salad, Pickled Cucumbers, Potatoes",
    descriptionIt: "Pollo, Coleslaw salad, Cetrioli sotto Aceto, Patate",
    descriptionAr: "دجاج كرسبي، سلطة كولسلو، مخلل خيار، بطاطا",
    price: "€8.00",
    image: newCrispyChickenImg,
    category: "sandwiches",
    imagePosition: "center 55%",
    imageScale: 1.05,
  },
  {
    id: "11",
    nameEn: "Special Chicken Shawarma",
    nameIt: "Shawarma Special Pollo",
    nameAr: "شاورما دجاج سبيشال",
    descriptionEn: "200g Chicken, Garlic, Tahini, Red Cabbage, Onion, Crunchy Pita",
    descriptionIt: "200g Pollo, Aglio, Tahina, Cappuccio Rosso, Cipolla, Pita Crunchy",
    descriptionAr: "دجاج 200غ، ثوم، طحينة، ملفوف أحمر، بصل، خبز بيتا محمص",
    price: "€9.90",
    image: newSpecialChickenImg,
    category: "sandwiches",
    popular: true,
    imagePosition: "center 55%",
    imageScale: 1.05,
  },
  {
    id: "12",
    nameEn: "Special Lamb/Beef Shawarma",
    nameIt: "Shawarma Special Agnello/Manzo",
    nameAr: "شاورما لحم سبيشال",
    descriptionEn: "200g Lamb/Beef, Hummus, Tahini, Onion, Tomato, Crunchy Pita",
    descriptionIt: "200g Agnello/Manzo, Hummus, Tahina, Cipolla, Pomodoro, Pita Crunchy",
    descriptionAr: "لحم 200غ، حمص، طحينة، بصل، بندورة، خبز بيتا محمص",
    price: "€11.90",
    image: newSpecialBeefImg,
    category: "sandwiches",
    popular: true,
    imagePosition: "center 55%",
    imageScale: 1.05,
  },
  {
    id: "6",
    nameEn: "Chicken Pizza (Fino)",
    nameIt: "Pollo Pizza (Fino)",
    nameAr: "بيتزا دجاج",
    descriptionEn: "Chicken, Cream, Mixed Peppers, Mushrooms, Black Olives, Mozzarella",
    descriptionIt: "Pollo, Crema, Peperoni mix, Funghi, Oliva Nera, Mozzarella",
    descriptionAr: "دجاج، كريمة، فليفلة مشكلة، فطر، زيتون أسود، جبنة موزاريلا",
    price: "€8.00",
    image: newPizzaPolloImg,
    category: "sandwiches",
    imagePosition: "center 55%",
    imageScale: 1.05,
  },

  // PIATTI UNICI
  {
    id: "13",
    nameEn: "Chicken Plate",
    nameIt: "Pollo",
    nameAr: "طبق شاورما دجاج",
    descriptionEn: "Chicken, Hummus, Pickles, French Fries, Mixed Salad, Sesame Sauce, Bread",
    descriptionIt: "Pollo, Hummus, Sottaceti, Patatine fritte, Insalata Mix, Salsa di Sesamo, Pane",
    descriptionAr: "شاورما دجاج، حمص، مخلل، بطاطا مقلية، سلطة مشكلة، طحينة، خبز",
    price: "€10.50",
    image: newChickenPlateImg,
    category: "piattiUnici",
    popular: true,
    imagePosition: "center 55%",
    imageScale: 1.05,
  },
  {
    id: "14",
    nameEn: "Lamb and Beef Plate",
    nameIt: "Agnello e Manzo",
    nameAr: "طبق شاورما لحم",
    descriptionEn: "Beef, Hummus, Pickles, French Fries, Mixed Salad, Sesame Sauce, Bread",
    descriptionIt: "Manzo, Hummus, Sottaceti, Patatine fritte, Insalata Mix, Salsa di Sesamo, Pane",
    descriptionAr: "شاورما لحم، حمص، مخلل، بطاطا مقلية، سلطة مشكلة، طحينة، خبز",
    price: "€11.50",
    image: newLambBeefPlateImg,
    category: "piattiUnici",
    popular: true,
    imagePosition: "center 55%",
    imageScale: 1.05,
  },
  {
    id: "15",
    nameEn: "Falafel and Halloumi Plate",
    nameIt: "Falafel e Halloumi",
    nameAr: "طبق فلافل وحلومي",
    descriptionEn: "Halloumi (1 pc), Falafel (5 pcs), Hummus, Pickles, Avocado, Vegetables, Sesame Sauce, Bread",
    descriptionIt: "Halloumi (1 pz), Falafel (5 pz), Hummus, Sottaceti, Avocado, Verdure, Salsa di Sesamo, Pane",
    descriptionAr: "حلومي (1 قطعة)، فلافل (5 حبات)، حمص، مخلل، أفوكادو، خضار، طحينة، خبز",
    price: "€11.50",
    image: newFalafelHalloumiPlateRealImg,
    category: "piattiUnici",
    vegetarian: true,
    imagePosition: "center 55%",
    imageScale: 1.05,
  },
  {
    id: "45",
    nameEn: "Falafel Plate",
    nameIt: "Falafel Plate",
    nameAr: "طبق فلافل",
    descriptionEn: "Falafel 5 pcs, Hummus, Pickles, French fries, Mixed salad, Sesame sauce, Bread",
    descriptionIt: "Falafel 5 pz, Hummus, Sottaceti, Patatine fritte, Insalata mix, Salsa di Sesamo, Pane",
    descriptionAr: "فلافل (5 حبات)، حمص، مخلل، بطاطا مقلية، سلطة مشكلة، طحينة، خبز",
    price: "€9.50",
    image: newFalafelPlateRealImg,
    category: "piattiUnici",
    vegan: true,
    imagePosition: "center 55%",
    imageScale: 1.05,
  },
  {
    id: "42",
    nameEn: "Chicken with Rice, Vegetables and Drink",
    nameIt: "Pollo con Riso Verdure e Bibita",
    nameAr: "دجاج مع أرز بالخضار ومشروب",
    descriptionEn: "Chicken, Rice, Mixed salad, Hummus, Tahini, Drink of your choice",
    descriptionIt: "Pollo, Riso, Insalata mix, Hummus, Tahina, Bibita a scelta",
    descriptionAr: "دجاج، أرز، سلطة مشكلة، حمص، طحينة، مشروب من اختيارك",
    price: "€11.00",
    image: newChickenRiceNewImg,
    category: "piattiUnici",
    imagePosition: "center 55%",
    imageScale: 1.05,
  },
  {
    id: "43",
    nameEn: "Lamb and Beef with Spicy Rice and Drink",
    nameIt: "Agnello e Manzo con Riso piccante e Bibita",
    nameAr: "لحم مع أرز حار ومشروب",
    descriptionEn: "Lamb and Beef, Rice, Mixed salad, Hummus, Tahini, Drink of your choice",
    descriptionIt: "Agnello e Manzo, Riso, Insalata mix, Hummus, Tahina, Bibita a scelta",
    descriptionAr: "لحم، أرز، سلطة مشكلة، حمص، طحينة، مشروب من اختيارك",
    price: "€12.00",
    image: newBeefRiceImg,
    category: "piattiUnici",
    imagePosition: "center 55%",
    imageScale: 1.05,
  },
  {
    id: "44",
    nameEn: "Falafel with Rice Lentils and Drink",
    nameIt: "Falafel con Riso Lenticchie e Bibita",
    nameAr: "فلافل مع أرز وعدس ومشروب",
    descriptionEn: "Falafel 5 pcs, Rice, Hummus, Mixed salad, Drink of your choice",
    descriptionIt: "Falafel 5 pz, Riso, Hummus, Insalata mix, Bibita a scelta",
    descriptionAr: "فلافل (5 حبات)، أرز، حمص، سلطة مشكلة، مشروب من اختيارك",
    price: "€11.00",
    image: newFalafelRisoImg,
    category: "piattiUnici",
    vegan: true,
    imagePosition: "center 55%",
    imageScale: 1.05,
  },
  {
    id: "17",
    nameEn: "Kids Menu",
    nameIt: "Menù Bimbi",
    nameAr: "وجبة أطفال",
    descriptionEn: "Nuggets (4pcs), Fries, Ketchup, Mayonnaise",
    descriptionIt: "Nuggets (4pz), Patate, Ketchup, Maionese",
    descriptionAr: "ناجتس (4 قطع)، بطاطا مقلية، كاتشب، مايونيز",
    price: "€6.00",
    image: newKidsMenuImg,
    category: "piattiUnici",
    imagePosition: "center 75%",
    imageScale: 1.05,
  },

  // PIATTI TIPICI
  {
    id: "18",
    nameEn: "Hummus",
    nameIt: "Hummus",
    nameAr: "حمص",
    descriptionEn: "Chickpea hummus and bread",
    descriptionIt: "Hummus di ceci e pane",
    descriptionAr: "حمص مع خبز",
    price: "€5.90",
    image: newHummusImg,
    category: "piattiTipici",
    popular: true,
    vegan: true,
    imagePosition: "center 75%",
    imageScale: 1.05,
  },
  {
    id: "19",
    nameEn: "Hummus with Beef",
    nameIt: "Hummus di manzo",
    nameAr: "حمص باللحمة",
    descriptionEn: "Chickpea hummus, beef and bread",
    descriptionIt: "Hummus di ceci, manzo e pane",
    descriptionAr: "حمص باللحمة مع خبز",
    price: "€8.90",
    image: newHummusManzoImg,
    category: "piattiTipici",
    popular: true,
    imagePosition: "center 75%",
    imageScale: 1.05,
  },
  {
    id: "20",
    nameEn: "Avocado",
    nameIt: "Avocado",
    nameAr: "أفوكادو",
    descriptionEn: "Avocado, Garlic, Green Peppers, Tomato, Lemon Juice",
    descriptionIt: "Avocado, Aglio, Peperoni verdi, Pomodoro, Succo di limone",
    descriptionAr: "أفوكادو، ثوم، فليفلة خضراء، بندورة، عصير ليمون",
    price: "€7.00",
    image: newAvocadoImg,
    category: "piattiTipici",
    vegan: true,
    imagePosition: "center 75%",
    imageScale: 1.05,
  },
  {
    id: "21",
    nameEn: "Baba Ghanouge",
    nameIt: "Baba Ghanouge",
    nameAr: "بابا غنوج",
    descriptionEn: "Eggplant cream, Tahini, Mint, Bread",
    descriptionIt: "Crema di melanzane, Tahina, Menta, Pane",
    descriptionAr: "باذنجان مشوي، طحينة، نعناع، خبز",
    price: "€5.90",
    image: newBabaGhanougImg,
    category: "piattiTipici",
    vegan: true,
    imagePosition: "center 75%",
    imageScale: 1.05,
  },
  {
    id: "23",
    nameEn: "Mtabal",
    nameIt: "Mtabal",
    nameAr: "متبل",
    descriptionEn: "Eggplant, Tomato, Tahini, Yogurt, Garlic, Spices",
    descriptionIt: "Melanzane, Pomodoro, Tahina, Yogurt, Aglio, Spizzi",
    descriptionAr: "باذنجان، طحينة، لبن، ثوم، بهارات",
    price: "€5.90",
    image: newMtabalImg,
    category: "piattiTipici",
    imagePosition: "center 75%",
    imageScale: 1.05,
  },
  {
    id: "24",
    nameEn: "Muhammara",
    nameIt: "Muhammara",
    nameAr: "محمرة",
    descriptionEn: "Pepper cream, walnuts and bread",
    descriptionIt: "Crema di peperoni, noci e pane",
    descriptionAr: "فليفلة حمراء حلوة، جوز، خبز",
    price: "€5.90",
    image: newMuhammaraImg,
    category: "piattiTipici",
    vegan: true,
    imagePosition: "center 75%",
    imageScale: 1.05,
  },
  {
    id: "25",
    nameEn: "Eggplant with Chickpeas and Tomatoes",
    nameIt: "Melanzane con ceci e pomodori",
    nameAr: "باذنجان مع حمص وبندورة",
    descriptionEn: "Eggplant, Onion, Chickpeas, Tomato and Bread",
    descriptionIt: "Melanzane, Cipolla, Ceci, Pomodoro e Pane",
    descriptionAr: "باذنجان، بصل، حمص، بندورة، خبز",
    price: "€5.90",
    image: newEggplantChickpeasImg,
    category: "piattiTipici",
    vegan: true,
    imagePosition: "center 75%",
    imageScale: 1.05,
  },

  {
    id: "27",
    nameEn: "Msabbaha",
    nameIt: "Msabbaha",
    nameAr: "مسبحة",
    descriptionEn: "Hummus, Chickpeas, Extra Sesame Sauce",
    descriptionIt: "Hummus, Ceci, Salsa extra di sesamo",
    descriptionAr: "حمص، حبوب الحمص، صوص طحينة إضافي",
    price: "€5.90",
    image: newMsabbahaImg,
    category: "piattiTipici",
    vegan: true,
    imagePosition: "center 75%",
    imageScale: 1.05,
  },
  {
    id: "28",
    nameEn: "Mixed Traditional Plates",
    nameIt: "Mix piatti tipici",
    nameAr: "تشكيلة أطباق تقليدية",
    descriptionEn: "Babaganoush, Hummus, Muhammara, Bread",
    descriptionIt: "Babaganoush, Hummus, Muhammara, Pane",
    descriptionAr: "بابا غنوج، حمص، محمرة، خبز",
    price: "€8.00",
    image: newMixPiattiTipiciImg,
    category: "piattiTipici",
    popular: true,
    vegan: true,
    imagePosition: "center 75%",
    imageScale: 1.05,
  },
  {
    id: "22",
    nameEn: "Grape Leaves",
    nameIt: "Foglie di vite",
    nameAr: "ورق عنب",
    descriptionEn: "Rice, Mint, Green Onion, Parsley, Tomatoes, Spices",
    descriptionIt: "Riso, Menta, Cipolla verde, Prezzemolo, Pomodori, Spizzi",
    descriptionAr: "أرز، نعناع، بصل أخضر، بقدونس، بندورة، بهارات",
    price: "€5.00",
    image: newFoglieDiViteImg,
    category: "piattiTipici",
    vegan: true,
    imagePosition: "center 75%",
    imageScale: 1.05,
  },

  // BOX AMIGO
  {
    id: "box1",
    nameEn: "Yalla Amigo Chicken",
    nameIt: "Yalla Amigo Pollo",
    nameAr: "بوكس أميجو دجاج",
    descriptionEn: "Chicken piadina, Potatoes, Crispy breast (1pc.), Special falafel (1pc.), Tahini, Coleslaw salad, Sauce of choice",
    descriptionIt: "Piadina di pollo, Patate, Petto Crispy (1pz.), Special falafel (1pz.), Tahina, Coleslaw salad, Salsa a scelta",
    descriptionAr: "ساندويش دجاج، بطاطا مقلية، صدر دجاج كرسبي (قطعة)، فلافل سبيشال (قطعة)، طحينة، سلطة كولسلو، صوص من اختيارك",
    price: "€12.90",
    image: newBoxChickenImg,
    category: "boxAmigo",
    allergens: "1, 7, 8, 11",
    imagePosition: "center 85%",
    imageScale: 1.05,
  },
  {
    id: "box2",
    nameEn: "Yalla Amigo Beef",
    nameIt: "Yalla Amigo Manzo",
    nameAr: "بوكس أميجو لحم",
    descriptionEn: "Beef piadina, Potatoes, Crispy breast (1pc.), Special falafel (1pc.), Tahini, Coleslaw salad, Sauce of choice",
    descriptionIt: "Piadina di manzo, Patate, Petto Crispy (1pz.), Special falafel (1pz.), Tahina, Coleslaw salad, Salsa a scelta",
    descriptionAr: "ساندويش لحم، بطاطا مقلية، صدر دجاج كرسبي (قطعة)، فلافل سبيشال (قطعة)، طحينة، سلطة كولسلو، صوص من اختيارك",
    price: "€14.90",
    image: newBoxManzoImg,
    category: "boxAmigo",
    allergens: "1, 7, 10, 11",
    imagePosition: "center 85%",
    imageScale: 1.05,
  },
  {
    id: "box3",
    nameEn: "Special Amigo Crispy Wings",
    nameIt: "Special Amigo Alette Crispy",
    nameAr: "أجنحة دجاج كرسبي سبيشال",
    descriptionEn: "Crispy chicken wings (4pcs.), Potatoes, Coleslaw salad, Pickled cucumbers, Sauce of choice",
    descriptionIt: "Crispy Alette di pollo (4pz.), Patate, Coleslaw salad, Cetrioli sotto aceto, Salsa a scelta",
    descriptionAr: "أجنحة دجاج كرسبي (4 قطع)، بطاطا مقلية، سلطة كولسلو، مخلل خيار، صوص من اختيارك",
    price: "€9.90",
    image: newCrispyWingsImg,
    category: "boxAmigo",
    allergens: "1, 3, 7",
    imagePosition: "center 85%",
    imageScale: 1.05,
  },
  {
    id: "box4",
    nameEn: "Special Amigo Crispy Breast",
    nameIt: "Special Amigo Petto Crispy",
    nameAr: "صدر دجاج كرسبي سبيشال",
    descriptionEn: "Crispy chicken breast (4pcs.), Potatoes, Coleslaw salad, Pickled cucumbers, Sauce of choice",
    descriptionIt: "Crispy Petto di pollo (4pz.), Patate, Coleslaw salad, Cetrioli sotto aceto, Salsa a scelta",
    descriptionAr: "صدر دجاج كرسبي (4 قطع)، بطاطا مقلية، سلطة كولسلو، مخلل خيار، صوص من اختيارك",
    price: "€11.90",
    image: newCrispyBreastImg,
    category: "boxAmigo",
    allergens: "1, 3, 7",
    imagePosition: "center 85%",
    imageScale: 1.05,
  },

  // INSALATE
  {
    id: "29",
    nameEn: "Amigo Salad",
    nameIt: "Amigo",
    nameAr: "سلطة أميجو",
    descriptionEn: "Crunchy Bread, Onion, Tomato, Cucumbers, Tahini, Yogurt, Lemon Juice",
    descriptionIt: "Pane Croccante, Cipolla, Pomodoro, Cetrioli, Tahina, Yogurt, Succo di Limone",
    descriptionAr: "خبز محمص، بصل، بندورة، خيار، طحينة، لبن، عصير ليمون",
    price: "€6.00",
    image: newInsalataAmigoImg,
    category: "insalate",
    popular: true,
    vegetarian: true,
    imagePosition: "center 60%",
    imageScale: 1.15,
  },

  {
    id: "31",
    nameEn: "Tabbouleh",
    nameIt: "Tabbouleh",
    nameAr: "تبولة",
    descriptionEn: "Parsley, Tomato, Onion, Mint, Bulgur, Olive Oil, Lemon Juice",
    descriptionIt: "Prezzemolo, Pomodoro, Cipolla, Menta, Bulgur, Olio d'oliva, Succo di limone",
    descriptionAr: "بقدونس، بندورة، بصل، نعناع، برغل، زيت زيتون، عصير ليمون",
    price: "€6.00",
    image: newTabboulehImg,
    category: "insalate",
    vegan: true,
    imagePosition: "center 60%",
    imageScale: 1.15,
  },
  {
    id: "32",
    nameEn: "Gazza Salad",
    nameIt: "Insalata Gazza",
    nameAr: "سلطة غزة",
    descriptionEn: "Tomato, Cucumbers, Onion, Green Dill, Lemon Juice",
    descriptionIt: "Pomodoro, Cetrioli, Cipolla, Aneto Verde, Succo di Limone",
    descriptionAr: "بندورة، فليفلة حارة، شبت، فليفلة خضراء، عصير ليمون، ثوم",
    price: "€6.00",
    image: newInsalataGazaImg,
    category: "insalate",
    vegan: true,
    imagePosition: "center 60%",
    imageScale: 1.15,
  },


  // RISO
  {
    id: "34",
    nameEn: "Mejadara",
    nameIt: "Mejadara",
    nameAr: "مجدرة",
    descriptionEn: "Rice, Lentils, Fried Onions",
    descriptionIt: "Riso, Lenticchie, Cipolle fritte",
    descriptionAr: "أرز، عدس، بصل مقلي",
    price: "€5.50",
    image: newMejadaraImg,
    category: "riso",
    vegan: true,
    imagePosition: "center 75%",
    imageScale: 1.05,
    imageFilter: "sepia(20%) saturate(130%) brightness(95%) contrast(105%)"
  },
  {
    id: "35",
    nameEn: "Rice with Vegetables",
    nameIt: "Riso con Verdure",
    nameAr: "أرز مع خضار",
    descriptionEn: "Rice, Vegetables (Carrots, Corn, Peas), Caramelized Onion",
    descriptionIt: "Riso, Verdure (Carote, Mais Piselli), Cipolla caramellata",
    descriptionAr: "أرز، خضار (جزر، ذرة، بازيلاء)، بصل مكرمل",
    price: "€5.50",
    image: newRisoVerdureImg,
    category: "riso",
    vegan: true,
    imagePosition: "center 75%",
    imageScale: 1.05,
    imageFilter: "sepia(20%) saturate(130%) brightness(95%) contrast(105%)"
  },
  {
    id: "36",
    nameEn: "Spicy Rice",
    nameIt: "Riso Piccante",
    nameAr: "أرز حار",
    descriptionEn: "Rice, Carrots, Caramelized Onion, Spicy",
    descriptionIt: "Riso, Carote, Cipolla caramellata, Piccante",
    descriptionAr: "أرز، جزر، بصل مكرمل، حار",
    price: "€5.50",
    image: newRisoSpicyImg,
    category: "riso",
    vegan: true,
    imagePosition: "center 75%",
    imageScale: 1.05,
    imageFilter: "sepia(20%) saturate(130%) brightness(95%) contrast(105%)"
  },
  {
    id: "37",
    nameEn: "White Rice with Angel Hair",
    nameIt: "Riso Bianco con Capelli d'Angelo",
    nameAr: "أرز أبيض مع شعيرية",
    descriptionEn: "Rice, Angel Hair Pasta",
    descriptionIt: "Riso, Capelli d'Angelo",
    descriptionAr: "أرز أبيض، شعيرية",
    price: "€5.50",
    image: newRisoBiancoImg,
    category: "riso",
    vegan: true,
    imagePosition: "center 75%",
    imageScale: 1.05,
    imageFilter: "sepia(20%) saturate(130%) brightness(95%) contrast(105%)"
  },

  // DOLCI
  {
    id: "38",
    nameEn: "Basbousa",
    nameIt: "Basbousa",
    nameAr: "بسبوسة",
    descriptionEn: "Traditional Middle Eastern semolina cake",
    descriptionIt: "Dolce tradizionale mediorientale alla semola",
    descriptionAr: "كيكة سميد فلسطينية تقليدية",
    price: "€2.00",
    image: newBasbousaImg,
    category: "dolci",
    imagePosition: "center 65%",
    imageScale: 1.05,
  },
  {
    id: "39",
    nameEn: "Baklava",
    nameIt: "Baklava",
    nameAr: "بقلاوة",
    descriptionEn: "Layers of flaky phyllo, walnuts, pistachios, honey syrup",
    descriptionIt: "Strati di pasta fillo sfogliata, noci, pistacchi, sciroppo di miele",
    descriptionAr: "معجنات حلوة مع مكسرات وعسل",
    price: "€2.00",
    image: newBaklavaImg,
    category: "dolci",
    imagePosition: "center 65%",
    imageScale: 1.05,
  },

  // BEVANDE
  {
    id: "40",
    nameEn: "Water",
    nameIt: "Acqua",
    nameAr: "ماء",
    descriptionEn: "Still or sparkling water",
    descriptionIt: "Acqua naturale o frizzante",
    descriptionAr: "ماء عادي أو غازي",
    price: "€1.50",
    image: newWaterImg,
    category: "bevande",
    imagePosition: "center",
    imageScale: 1.05,
  },
  {
    id: "41",
    nameEn: "Soft Drink",
    nameIt: "Bibita",
    nameAr: "مشروبات غازية",
    descriptionEn: "Selection of soft drinks",
    descriptionIt: "Selezione di bibite",
    descriptionAr: "تشكيلة من المشروبات الغازية",
    price: "€2.50",
    image: newSoftDrinksImg,
    category: "bevande",
    imagePosition: "center 75%",
    imageScale: 1.2,
  },
];

interface MenuCardProps {
  item: MenuItem;
  index: number;
  language: "en" | "it" | "ar";
  onClick?: () => void;
}

function MenuCard({ item, index, language, onClick }: MenuCardProps) {
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
      <Card className="overflow-hidden cursor-pointer h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]" onClick={onClick}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt={language === "ar" ? (item.nameAr || item.nameEn) : language === "en" ? item.nameEn : item.nameIt}
            className="w-full h-full object-cover"
            style={{
              ...(item.imagePosition ? { objectPosition: item.imagePosition } : {}),
              ...(item.imageScale ? { transform: `scale(${item.imageScale})` } : {}),
              ...(item.imageFilter ? { filter: item.imageFilter } : {})
            }}
            data-testid={`img-menu-item-${item.id}`}
          />
          {item.popular && (
            <Badge
              className="absolute top-3 right-3 bg-primary text-primary-foreground shadow-md"
              data-testid={`badge-popular-${item.id}`}
            >
              <Star className="h-3 w-3 mr-1 fill-yellow-300 text-yellow-300" />
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
              {language === "ar" ? (item.nameAr || item.nameEn) : language === "en" ? item.nameEn : item.nameIt}
            </h3>
            <span 
              className="text-primary font-bold whitespace-nowrap text-base md:text-lg"
              data-testid={`text-menu-item-price-${item.id}`}
            >
              {item.price}
            </span>
          </div>
          <p 
            className="text-muted-foreground text-sm leading-relaxed"
            data-testid={`text-menu-item-description-${item.id}`}
          >
            {language === "ar" ? (item.descriptionAr || item.descriptionEn) : language === "en" ? item.descriptionEn : item.descriptionIt}
          </p>

          {(item.vegan || item.vegetarian) && (
            <div className="flex gap-2 mt-3" data-testid={`dietary-badges-${item.id}`}>
              {item.vegan && (
                <Badge 
                  variant="outline" 
                  className="text-xs border-primary text-primary bg-primary/10"
                  data-testid={`badge-vegan-${item.id}`}
                >
                  <Leaf className="h-3 w-3 mr-1" />
                  Vegan
                </Badge>
              )}
              {item.vegetarian && !item.vegan && (
                <Badge 
                  variant="outline" 
                  className="text-xs border-primary text-primary bg-primary/10"
                  data-testid={`badge-vegetarian-${item.id}`}
                >
                  <Leaf className="h-3 w-3 mr-1" />
                  Vegetarian
                </Badge>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

const categories: Category[] = [
  { key: "sandwiches", labelEn: "Sandwiches with Pita", labelIt: "Panini con Pita", labelAr: "سندويشات بالخبز العربي", noteEn: "+€0.50 for wrap", noteIt: "+€0,50 per il wrap", noteAr: "+€0.50 لخبز الصاج" },
  { key: "piattiUnici", labelEn: "Main Plates", labelIt: "Piatti Unici", labelAr: "وجبات كاملة" },
  { key: "piattiTipici", labelEn: "Traditional Dishes", labelIt: "Piatti Tipici", labelAr: "أطباق فلسطينية" },
  { key: "boxAmigo", labelEn: "Box Amigo", labelIt: "Box Amigo", labelAr: "بوكس أميجو" },
  { key: "insalate", labelEn: "Salads", labelIt: "Insalate", labelAr: "سلطات" },
  { key: "riso", labelEn: "Rice Dishes", labelIt: "Riso", labelAr: "أطباق أرز" },
  { key: "dolci", labelEn: "Desserts", labelIt: "Dolci", labelAr: "حلويات", noteEn: "Additional desserts may be available daily — ask us what's on today!", noteIt: "Potrebbero esserci altri dolci disponibili ogni giorno — chiedici cosa c'è oggi!", noteAr: "قد تتوفر حلويات إضافية يومياً — اسألنا عن المتوفر اليوم!" },
  { key: "bevande", labelEn: "Drinks", labelIt: "Bevande", labelAr: "مشروبات" },
];

export function MenuSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(categories[0].key);
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isSurprising, setIsSurprising] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Notify other components (e.g. HungerMeter) when lightbox is open
  useEffect(() => {
    if (selectedItem) {
      document.body.classList.add("lightbox-open");
    } else {
      document.body.classList.remove("lightbox-open");
    }
    return () => document.body.classList.remove("lightbox-open");
  }, [selectedItem]);
  const navRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const pickSurprise = () => {
    setIsSurprising(true);
    setTimeout(() => {
      // Only premium/complete meals — no rice, salads, drinks, or individual appetizers
      const pool = menuItems.filter((i) =>
        i.category === "sandwiches" ||
        i.category === "piattiUnici" ||
        i.category === "boxAmigo" ||
        (i.category === "piattiTipici" && i.id === "28") // only Mix Piatti Tipici
      );
      const random = pool[Math.floor(Math.random() * pool.length)];
      setSelectedItem(random);
      setIsSurprising(false);
    }, 600);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const navTop = navRef.current.getBoundingClientRect().top;
        setIsNavSticky(navTop <= 80);
      }

      const viewportCenter = window.innerHeight / 3;
      
      for (let i = categories.length - 1; i >= 0; i--) {
        const category = categories[i];
        const element = categoryRefs.current[category.key];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= viewportCenter) {
            setActiveCategory(category.key);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCategory = (categoryKey: string) => {
    const element = categoryRefs.current[categoryKey];
    if (element) {
      const offset = 140;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
      setActiveCategory(categoryKey);
    }
  };

  return (
    <section id="menu" className="pt-4 pb-16 md:pt-4 md:pb-24 bg-background relative overflow-x-clip">
      <MenuFloatingElements />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
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

          {/* Surprise Me Button */}
          <motion.button
            onClick={pickSurprise}
            disabled={isSurprising}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm md:text-base shadow-lg hover:shadow-primary/40 transition-shadow duration-300 disabled:opacity-70"
          >
            <motion.span
              animate={isSurprising ? { rotate: [0, 20, -20, 20, -20, 0] } : {}}
              transition={{ duration: 0.5 }}
              className="text-xl"
            >
              🎲
            </motion.span>
            {isSurprising
              ? (language === "ar" ? "...جاري الاختيار" : language === "it" ? "Sto scegliendo..." : "Picking for you...")
              : (language === "ar" ? "اختار لي!" : language === "it" ? "Scegli per me!" : "Pick for me!")
            }
          </motion.button>
        </motion.div>

        <div 
          ref={navRef}
          className={`sticky top-[80px] z-40 -mx-4 md:-mx-8 px-4 md:px-8 py-4 mb-8 transition-all duration-300 ${
            isNavSticky ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
          }`}
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-4" dir={language === "ar" ? "rtl" : "ltr"}>
            <div className={`absolute inset-y-0 ${language === "ar" ? "right-0 pr-3" : "left-0 pl-3"} flex items-center pointer-events-none`}>
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder={language === "ar" ? "ابحث في المنيو..." : language === "it" ? "Cerca nel menu..." : "Search menu..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`block w-full ${language === "ar" ? "pr-10 pl-3" : "pl-10 pr-3"} py-2 border border-border rounded-full leading-5 bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-shadow`}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
            style={{
              maskImage: "linear-gradient(to right, black 85%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, black 85%, transparent 100%)"
            }}
            data-testid="nav-menu-categories"
          >
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={activeCategory === category.key ? "default" : "outline"}
                onClick={() => scrollToCategory(category.key)}
                className={`rounded-full px-5 py-5 text-sm md:text-base whitespace-nowrap flex-shrink-0 transition-all duration-200 border-border border-[1.5px] ${
                  activeCategory === category.key 
                    ? "shadow-md bg-primary text-primary-foreground border-primary" 
                    : "hover:bg-primary/10"
                }`}
                data-testid={`button-category-${category.key}`}
              >
                {language === "ar" ? (category.labelAr || category.labelEn) : language === "en" ? category.labelEn : category.labelIt}
              </Button>
            ))}
          </motion.div>
        </div>

        {categories.map((category, categoryIndex) => {
          const categoryItems = menuItems.filter((item) => {
            if (item.category !== category.key) return false;
            if (!searchQuery) return true;
            
            const q = searchQuery.toLowerCase();
            return (
              item.nameEn.toLowerCase().includes(q) ||
              item.nameIt.toLowerCase().includes(q) ||
              (item.nameAr && item.nameAr.toLowerCase().includes(q)) ||
              item.descriptionEn.toLowerCase().includes(q) ||
              item.descriptionIt.toLowerCase().includes(q) ||
              (item.descriptionAr && item.descriptionAr.toLowerCase().includes(q))
            );
          });
          if (categoryItems.length === 0) return null;

          return (
            <div 
              key={category.key} 
              id={`menu-${category.key}`}
              ref={(el) => { categoryRefs.current[category.key] = el; }}
              className="mb-16 last:mb-0 scroll-mt-40"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="mb-8 border-l-4 border-primary pl-4"
              >
                <h3 
                  className="text-2xl font-serif font-semibold text-foreground"
                  data-testid={`text-category-${category.key}`}
                >
                  {language === "ar" ? (category.labelAr || category.labelEn) : language === "en" ? category.labelEn : category.labelIt}
                </h3>
                {(category.noteEn || category.noteIt) && (
                  <p className="text-sm text-muted-foreground mt-1 italic">
                    {language === "ar" ? (category.noteAr || category.noteEn) : language === "en" ? category.noteEn : category.noteIt}
                  </p>
                )}
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryItems.map((item, index) => (
                  <MenuCard
                    key={item.id}
                    item={item}
                    index={index}
                    language={language as any}
                    onClick={() => setSelectedItem(item)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedItem(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row bg-background rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
                onClick={() => setSelectedItem(null)}
              >
                <X className="h-5 w-5" />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-full min-h-[300px] relative overflow-hidden bg-muted">
                <img
                  src={selectedItem.image}
                  alt={language === "ar" ? (selectedItem.nameAr || selectedItem.nameEn) : language === "en" ? selectedItem.nameEn : selectedItem.nameIt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  style={{
                    ...(selectedItem.imagePosition ? { objectPosition: selectedItem.imagePosition } : {}),
                    ...(selectedItem.imageFilter ? { filter: selectedItem.imageFilter } : {})
                  }}
                />
              </div>

              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center max-h-full overflow-y-auto">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                    {language === "ar" ? (selectedItem.nameAr || selectedItem.nameEn) : language === "en" ? selectedItem.nameEn : selectedItem.nameIt}
                  </h3>
                  <span className="text-xl md:text-2xl font-bold text-primary whitespace-nowrap">
                    {selectedItem.price}
                  </span>
                </div>
                
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {language === "ar" ? (selectedItem.descriptionAr || selectedItem.descriptionEn) : language === "en" ? selectedItem.descriptionEn : selectedItem.descriptionIt}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {selectedItem.popular && (
                    <Badge className="bg-primary text-primary-foreground text-sm py-1 px-3">
                      <Star className="h-4 w-4 mr-1.5 fill-yellow-300 text-yellow-300" />
                      {language === "ar" ? "الأكثر طلباً" : language === "en" ? "Popular" : "Popolare"}
                    </Badge>
                  )}
                  {selectedItem.vegan && (
                    <Badge variant="outline" className="border-primary text-primary bg-primary/10 text-sm py-1 px-3">
                      <Leaf className="h-4 w-4 mr-1.5" /> 
                      {language === "ar" ? "نباتي صِرف" : language === "en" ? "Vegan" : "Vegano"}
                    </Badge>
                  )}
                  {selectedItem.vegetarian && !selectedItem.vegan && (
                    <Badge variant="outline" className="border-primary text-primary bg-primary/10 text-sm py-1 px-3">
                      <Leaf className="h-4 w-4 mr-1.5" /> 
                      {language === "ar" ? "نباتي" : language === "en" ? "Vegetarian" : "Vegetariano"}
                    </Badge>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>

  );
}
