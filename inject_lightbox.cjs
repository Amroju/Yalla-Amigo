const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'client', 'src', 'components', 'MenuSection.tsx');
let content = fs.readFileSync(file, 'utf8');

// 1. Update imports
content = content.replace(
  'import { motion } from "framer-motion";',
  'import { motion, AnimatePresence } from "framer-motion";\nimport { X } from "lucide-react";'
);

// 2. Update MenuCardProps
content = content.replace(
  /interface MenuCardProps \{\n  item: MenuItem;\n  index: number;\n  language: "en" \| "it";\n\}/g,
  `interface MenuCardProps {\n  item: MenuItem;\n  index: number;\n  language: "en" | "it" | "ar";\n  onClick?: () => void;\n}`
);

// 3. Update MenuCard parameters and Card onClick
content = content.replace(
  /function MenuCard\(\{ item, index, language \}: MenuCardProps\) \{/g,
  `function MenuCard({ item, index, language, onClick }: MenuCardProps) {`
);

content = content.replace(
  /<Card className="overflow-hidden cursor-pointer h-full">/g,
  `<Card className="overflow-hidden cursor-pointer h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]" onClick={onClick}>`
);

// 4. Add state to MenuSection
content = content.replace(
  /const \[isNavSticky, setIsNavSticky\] = useState\(false\);/,
  `const [isNavSticky, setIsNavSticky] = useState(false);\n  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);`
);

// 5. Pass onClick to MenuCard in the map function
content = content.replace(
  /<MenuCard\n                    key=\{item.id\}\n                    item=\{item\}\n                    index=\{index\}\n                    language=\{language\}\n                  \/>/g,
  `<MenuCard\n                    key={item.id}\n                    item={item}\n                    index={index}\n                    language={language as any}\n                    onClick={() => setSelectedItem(item)}\n                  />`
);

// 6. Add the Lightbox modal at the end before closing section
const modalCode = `
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedItem(null)}>
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
`;

content = content.replace(/<\/section>/, modalCode);

fs.writeFileSync(file, content, 'utf8');
console.log('Lightbox successfully injected!');
