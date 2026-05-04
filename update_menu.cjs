const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'client', 'src', 'components', 'MenuSection.tsx');
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  '  nameIt: string;\n  descriptionEn: string;',
  '  nameIt: string;\n  nameAr?: string;\n  descriptionEn: string;'
);
content = content.replace(
  '  descriptionIt: string;\n  price: string;',
  '  descriptionIt: string;\n  descriptionAr?: string;\n  price: string;'
);
content = content.replace(
  '  imageFilter?: string;\n  allergens?: string;\n}',
  '  imageFilter?: string;\n  allergens?: string;\n}\n\ninterface Category {\n  key: string;\n  labelEn: string;\n  labelIt: string;\n  labelAr?: string;\n  noteEn?: string;\n  noteIt?: string;\n  noteAr?: string;\n}'
);
content = content.replace(
  'const categories = [',
  'const categories: Category[] = ['
);

content = content.replace(
  '{ key: "sandwiches", labelEn: "Sandwiches with Pita", labelIt: "Panini con Pita", noteEn: "+€0.50 for wrap", noteIt: "+€0,50 per il wrap" }',
  '{ key: "sandwiches", labelEn: "Sandwiches with Pita", labelIt: "Panini con Pita", labelAr: "سندويشات مع بخبز البيتا", noteEn: "+€0.50 for wrap", noteIt: "+€0,50 per il wrap", noteAr: "+€0.50 لخبز الصاج" }'
);
content = content.replace('{ key: "piattiUnici", labelEn: "Main Plates", labelIt: "Piatti Unici" }', '{ key: "piattiUnici", labelEn: "Main Plates", labelIt: "Piatti Unici", labelAr: "أطباق رئيسية" }');
content = content.replace('{ key: "piattiTipici", labelEn: "Traditional Dishes", labelIt: "Piatti Tipici" }', '{ key: "piattiTipici", labelEn: "Traditional Dishes", labelIt: "Piatti Tipici", labelAr: "أطباق تقليدية" }');
content = content.replace('{ key: "boxAmigo", labelEn: "Box Amigo", labelIt: "Box Amigo" }', '{ key: "boxAmigo", labelEn: "Box Amigo", labelIt: "Box Amigo", labelAr: "بوكس أميجو" }');
content = content.replace('{ key: "insalate", labelEn: "Salads", labelIt: "Insalate" }', '{ key: "insalate", labelEn: "Salads", labelIt: "Insalate", labelAr: "سلطات" }');
content = content.replace('{ key: "riso", labelEn: "Rice Dishes", labelIt: "Riso" }', '{ key: "riso", labelEn: "Rice Dishes", labelIt: "Riso", labelAr: "أطباق أرز" }');
content = content.replace(
  '{ key: "dolci", labelEn: "Desserts", labelIt: "Dolci", noteEn: "Additional desserts may be available daily — ask us what\'s on today!", noteIt: "Potrebbero esserci altri dolci disponibili ogni giorno — chiedici cosa c\'è oggi!" }',
  '{ key: "dolci", labelEn: "Desserts", labelIt: "Dolci", labelAr: "حلويات", noteEn: "Additional desserts may be available daily — ask us what\'s on today!", noteIt: "Potrebbero esserci altri dolci disponibili ogni giorno — chiedici cosa c\'è oggi!", noteAr: "قد تتوفر حلويات إضافية يومياً — اسألنا عن المتوفر اليوم!" }'
);
content = content.replace('{ key: "bevande", labelEn: "Drinks", labelIt: "Bevande" }', '{ key: "bevande", labelEn: "Drinks", labelIt: "Bevande", labelAr: "مشروبات" }');

content = content.replace(
  /\{language === "en" \? item\.nameEn : item\.nameIt\}/g,
  '{language === "ar" ? (item.nameAr || item.nameEn) : language === "en" ? item.nameEn : item.nameIt}'
);

content = content.replace(
  /\{language === "en" \? item\.descriptionEn : item\.descriptionIt\}/g,
  '{language === "ar" ? (item.descriptionAr || item.descriptionEn) : language === "en" ? item.descriptionEn : item.descriptionIt}'
);

content = content.replace(
  /\{language === "en" \? category\.labelEn : category\.labelIt\}/g,
  '{language === "ar" ? (category.labelAr || category.labelEn) : language === "en" ? category.labelEn : category.labelIt}'
);

content = content.replace(
  /\{language === "en" \? category\.noteEn : category\.noteIt\}/g,
  '{language === "ar" ? (category.noteAr || category.noteEn) : language === "en" ? category.noteEn : category.noteIt}'
);

content = content.replace(
  /\{language === "en" \? "Allergens" : "Allergeni"\}/g,
  '{language === "ar" ? "مسببات الحساسية" : language === "en" ? "Allergens" : "Allergeni"}'
);

fs.writeFileSync(file, content, 'utf8');
console.log('MenuSection.tsx structure updated.');
