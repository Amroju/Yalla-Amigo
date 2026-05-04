const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'client', 'src', 'components', 'MenuSection.tsx');
let content = fs.readFileSync(file, 'utf8');

const translations = {
  "1": { nameAr: "شاورما دجاج", descriptionAr: "ثوم، طحينة، ملفوف أحمر، بصل" },
  "2": { nameAr: "شاورما لحم وعجل", descriptionAr: "طحينة، بقدونس، بندورة، بصل، حمص، مخلل لفت" },
  "3": { nameAr: "فلافل", descriptionAr: "فلافل (3 حبات)، حمص، مخلل، أفوكادو، طحينة، سلطة مشكلة" },
  "4": { nameAr: "حلومي", descriptionAr: "حلومي، مخلل، طحينة، سلطة مشكلة" },
  "7": { nameAr: "فلافل وحلومي", descriptionAr: "فلافل، حلومي، مخلل، طحينة، أفوكادو، سلطة مشكلة" },
  "8": { nameAr: "حمص وفلافل", descriptionAr: "حمص، أفوكادو، باذنجان، سلطة مشكلة" },
  "9": { nameAr: "فاهيتا", descriptionAr: "دجاج، فليفلة مشكلة، ذرة، فطر، جبنة موزاريلا" },
  "10": { nameAr: "دجاج كرسبي", descriptionAr: "دجاج كرسبي، سلطة كولسلو، مخلل خيار، بطاطا" },
  "11": { nameAr: "شاورما دجاج سبيشال", descriptionAr: "دجاج 200غ، ثوم، طحينة، ملفوف أحمر، بصل، خبز بيتا محمص" },
  "12": { nameAr: "شاورما لحم سبيشال", descriptionAr: "لحم 200غ، حمص، طحينة، بصل، بندورة، خبز بيتا محمص" },
  "6": { nameAr: "بيتزا دجاج", descriptionAr: "دجاج، كريمة، فليفلة مشكلة، فطر، زيتون أسود، جبنة موزاريلا" },
  "13": { nameAr: "طبق شاورما دجاج", descriptionAr: "شاورما دجاج، حمص، مخلل، بطاطا مقلية، سلطة مشكلة، طحينة، خبز" },
  "14": { nameAr: "طبق شاورما لحم", descriptionAr: "شاورما لحم، حمص، مخلل، بطاطا مقلية، سلطة مشكلة، طحينة، خبز" },
  "15": { nameAr: "طبق فلافل وحلومي", descriptionAr: "حلومي (1 قطعة)، فلافل (5 حبات)، حمص، مخلل، أفوكادو، خضار، طحينة، خبز" },
  "45": { nameAr: "طبق فلافل", descriptionAr: "فلافل (5 حبات)، حمص، مخلل، بطاطا مقلية، سلطة مشكلة، طحينة، خبز" },
  "42": { nameAr: "دجاج مع أرز وخضار ومشروب", descriptionAr: "دجاج، أرز، سلطة مشكلة، حمص، طحينة، مشروب من اختيارك" },
  "43": { nameAr: "لحم مع أرز حار ومشروب", descriptionAr: "لحم، أرز، سلطة مشكلة، حمص، طحينة، مشروب من اختيارك" },
  "44": { nameAr: "فلافل مع أرز وعدس ومشروب", descriptionAr: "فلافل (5 حبات)، أرز، حمص، سلطة مشكلة، مشروب من اختيارك" },
  "17": { nameAr: "وجبة أطفال", descriptionAr: "ناجتس (4 قطع)، بطاطا مقلية، كاتشب، مايونيز" },
  "18": { nameAr: "حمص", descriptionAr: "حمص مع خبز" },
  "19": { nameAr: "حمص باللحمة", descriptionAr: "حمص باللحمة مع خبز" },
  "20": { nameAr: "بابا غنوج", descriptionAr: "باذنجان مشوي، بقدونس، فليفلة حلوة مشكلة، ثوم، ليمون، دبس رمان، خبز" },
  "21": { nameAr: "متبل", descriptionAr: "باذنجان مشوي، طحينة، لبن، ثوم، ليمون، خبز" },
  "23": { nameAr: "محمرة", descriptionAr: "فليفلة حمراء حلوة، جوز، بقسماط، دبس رمان، خبز" },
  "24": { nameAr: "مجدرة", descriptionAr: "عدس، برغل، بصل مقلي، كمون" },
  "25": { nameAr: "باذنجان مع حمص وبندورة", descriptionAr: "باذنجان، بصل، حمص، بندورة، خبز" },
  "27": { nameAr: "مسبحة", descriptionAr: "حمص، حبوب الحمص، صوص طحينة إضافي" },
  "28": { nameAr: "تشكيلة أطباق تقليدية", descriptionAr: "بابا غنوج، حمص، محمرة، خبز" },
  "22": { nameAr: "ورق عنب", descriptionAr: "أرز، نعناع، بصل أخضر، بقدونس، بندورة، بهارات" },
  "box1": { nameAr: "بوكس أميجو دجاج", descriptionAr: "ساندويش دجاج، بطاطا مقلية، صدر دجاج كرسبي (قطعة)، فلافل سبيشال (قطعة)، طحينة، سلطة كولسلو، صوص من اختيارك" },
  "box2": { nameAr: "بوكس أميجو لحم", descriptionAr: "ساندويش لحم، بطاطا مقلية، صدر دجاج كرسبي (قطعة)، فلافل سبيشال (قطعة)، طحينة، سلطة كولسلو، صوص من اختيارك" },
  "box3": { nameAr: "أجنحة دجاج كرسبي سبيشال", descriptionAr: "أجنحة دجاج كرسبي (4 قطع)، بطاطا مقلية، سلطة كولسلو، مخلل خيار، صوص من اختيارك" },
  "box4": { nameAr: "صدر دجاج كرسبي سبيشال", descriptionAr: "صدر دجاج كرسبي (4 قطع)، بطاطا مقلية، سلطة كولسلو، مخلل خيار، صوص من اختيارك" },
  "29": { nameAr: "سلطة أميجو", descriptionAr: "خبز محمص، بصل، بندورة، خيار، طحينة، لبن، عصير ليمون" },
  "31": { nameAr: "تبولة", descriptionAr: "بقدونس، بندورة، بصل، نعناع، برغل، زيت زيتون، عصير ليمون" },
  "32": { nameAr: "سلطة غزة", descriptionAr: "بندورة، فليفلة حارة، شبت، فليفلة خضراء، عصير ليمون، ثوم" },
  "34": { nameAr: "أرز أبيض", descriptionAr: "أرز بسمتي أبيض" },
  "35": { nameAr: "أرز مع خضار", descriptionAr: "أرز بسمتي مع خضار" },
  "36": { nameAr: "أرز حار", descriptionAr: "أرز بسمتي حار" },
  "38": { nameAr: "بسبوسة", descriptionAr: "كيكة سميد فلسطينية تقليدية" },
  "39": { nameAr: "بقلاوة", descriptionAr: "معجنات حلوة مع مكسرات وعسل" },
  "40": { nameAr: "ماء", descriptionAr: "ماء عادي أو غازي" },
  "41": { nameAr: "مشروبات غازية", descriptionAr: "تشكيلة من المشروبات الغازية" }
};

const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('id: "')) {
    const idMatch = line.match(/id: "(.*?)"/);
    if (idMatch && translations[idMatch[1]]) {
      const id = idMatch[1];
      const t = translations[id];
      
      // Look ahead to find nameIt and descriptionIt to inject nameAr and descriptionAr
      for (let j = i + 1; j < i + 10; j++) {
        if (lines[j].includes('nameIt:')) {
          lines.splice(j + 1, 0, `    nameAr: "${t.nameAr}",`);
        }
        if (lines[j].includes('descriptionIt:')) {
          lines.splice(j + 1, 0, `    descriptionAr: "${t.descriptionAr}",`);
          break;
        }
      }
    }
  }
}

fs.writeFileSync(file, lines.join('\n'), 'utf8');
console.log('Menu items translated.');
