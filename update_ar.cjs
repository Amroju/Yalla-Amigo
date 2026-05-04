const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'client', 'src', 'components', 'MenuSection.tsx');
let content = fs.readFileSync(file, 'utf8');

const updates = {
  "3": { nameAr: "فلافل", descriptionAr: "حمص، مخلل، أفوكادو، طحينة، سلطة مشكلة" },
  "5": { nameAr: "فلافل وحلومي", descriptionAr: "حمص، أفوكادو، باذنجان، سلطة مشكلة" },
  "20": { nameAr: "أفوكادو", descriptionAr: "أفوكادو، ثوم، فليفلة خضراء، بندورة، عصير ليمون" },
  "21": { nameAr: "بابا غنوج", descriptionAr: "باذنجان مشوي، طحينة، نعناع، خبز" },
  "23": { nameAr: "متبل", descriptionAr: "باذنجان، طحينة، لبن، ثوم، بهارات" },
  "24": { nameAr: "محمرة", descriptionAr: "فليفلة حمراء حلوة، جوز، خبز" },
  "25": { nameAr: "باذنجان مع حمص وبندورة", descriptionAr: "باذنجان، بصل، حمص، بندورة، خبز" },
  "34": { nameAr: "مجدرة", descriptionAr: "أرز، عدس، بصل مقلي" },
  "35": { nameAr: "أرز مع خضار", descriptionAr: "أرز، خضار (جزر، ذرة، بازيلاء)، بصل مكرمل" },
  "36": { nameAr: "أرز حار", descriptionAr: "أرز، جزر، بصل مكرمل، حار" },
  "37": { nameAr: "أرز أبيض مع شعيرية", descriptionAr: "أرز أبيض، شعيرية" }
};

const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  const match = lines[i].match(/id: "(.*?)"/);
  if (match) {
    const id = match[1];
    if (updates[id]) {
      // Find and replace nameAr and descriptionAr within this block
      for (let j = i; j < i + 15; j++) {
        if (lines[j].includes('nameAr:')) {
          lines[j] = `    nameAr: "${updates[id].nameAr}",`;
        }
        if (lines[j].includes('descriptionAr:')) {
          lines[j] = `    descriptionAr: "${updates[id].descriptionAr}",`;
        }
        if (lines[j].includes('nameIt:') && !lines.slice(i, i+15).some(l => l.includes('nameAr:'))) {
          // If nameAr is missing, inject it
          lines.splice(j + 1, 0, `    nameAr: "${updates[id].nameAr}",`);
        }
        if (lines[j].includes('descriptionIt:') && !lines.slice(i, i+15).some(l => l.includes('descriptionAr:'))) {
          // If descriptionAr is missing, inject it
          lines.splice(j + 1, 0, `    descriptionAr: "${updates[id].descriptionAr}",`);
        }
        if (lines[j].includes('price:')) {
          break; // end of item
        }
      }
    }
  }
}

fs.writeFileSync(file, lines.join('\n'), 'utf8');
console.log('Arabic updates applied successfully!');
