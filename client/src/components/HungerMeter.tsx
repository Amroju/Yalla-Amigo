import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Utensils } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

// Each answer carries tags that determine the final recommendation
interface Answer {
  label: { ar: string; it: string; en: string };
  tags: string[]; // e.g. ["meat", "very-hungry", "long-time"]
}

interface Question {
  id: string;
  ar: string;
  it: string;
  en: string;
  answers: Answer[];
}

const questions: Question[] = [
  {
    id: "hunger",
    ar: "قدّيش مستوى جوعك الان؟",
    it: "Quanto sei affamato?",
    en: "How hungry are you right now?",
    answers: [
      { label: { ar: "شوي بس 🙂", it: "Un po' 🙂", en: "A little 🙂" }, tags: ["low-hunger"] },
      { label: { ar: "جوعان 😐", it: "Abbastanza 😐", en: "Quite hungry 😐" }, tags: ["medium-hunger"] },
      { label: { ar: "جوعان كتير! 😤", it: "Molto! 😤", en: "Very hungry! 😤" }, tags: ["high-hunger"] },
      { label: { ar: "مش شايف من الجوع 😵", it: "Non ci vedo dalla fame 😵", en: "Starving! 😵" }, tags: ["starving"] },
    ],
  },
  {
    id: "preference",
    ar: "شو بتحب أكثر؟",
    it: "Cosa preferisci?",
    en: "What do you prefer?",
    answers: [
      { label: { ar: "لحم 🥩", it: "Carne 🥩", en: "Meat 🥩" }, tags: ["meat"] },
      { label: { ar: "دجاج 🍗", it: "Pollo 🍗", en: "Chicken 🍗" }, tags: ["chicken"] },
      { label: { ar: "نباتي 🥗", it: "Vegetariano 🥗", en: "Vegetarian 🥗" }, tags: ["vegetarian"] },
      { label: { ar: "كل شيء! 🤷", it: "Tutto! 🤷", en: "Everything! 🤷" }, tags: ["anything"] },
    ],
  },
  {
    id: "lastEat",
    ar: "آخر مرة أكلت متى؟",
    it: "Quando hai mangiato l'ultima volta?",
    en: "When did you last eat?",
    answers: [
      { label: { ar: "قبل ساعة", it: "Un'ora fa", en: "An hour ago" }, tags: ["recent"] },
      { label: { ar: "قبل 3 ساعات", it: "3 ore fa", en: "3 hours ago" }, tags: ["moderate-wait"] },
      { label: { ar: "من الصبح!", it: "Dal mattino!", en: "Since morning!" }, tags: ["long-wait"] },
      { label: { ar: "ما أتذكر 😅", it: "Non ricordo 😅", en: "Can't remember 😅" }, tags: ["very-long-wait"] },
    ],
  },
];

interface Recommendation {
  emoji: string;
  title: { ar: string; it: string; en: string };
  dish: { ar: string; it: string; en: string };
  funnyLine: { ar: string; it: string; en: string };
}

function getRecommendation(tags: string[]): Recommendation {
  const has = (t: string) => tags.includes(t);

  const isVeg = has("vegetarian");
  const isMeat = has("meat");
  const isChicken = has("chicken");

  const isHungry = has("high-hunger") || has("starving");
  const isLongWait = has("long-wait") || has("very-long-wait");
  const needsBig = isHungry || isLongWait;

  // Vegetarian path
  if (isVeg) {
    if (needsBig) {
      return {
        emoji: "🥙",
        title: { ar: "طبق فلافل كامل!", it: "Piatto Falafel completo!", en: "Full Falafel Plate!" },
        dish: { ar: "فلافل وحلومي، حمص، أفوكادو، سلطة مشكلة — وجبة كاملة بدون لحم", it: "Falafel e Halloumi — pasto completo!", en: "Falafel & Halloumi, hummus, avocado — filling veggie meal!" },
        funnyLine: { ar: "والله إنت صابر! جعان وبدك نباتي — ذوقك أقوى من جوعك 😄", it: "Affamato ma vegetariano? Rispettiamo!", en: "Starving but still going veggie? Respect! 🥗" },
      };
    }
    return {
      emoji: "🧆",
      title: { ar: "سندويش فلافل وحلومي!", it: "Panino Falafel e Halloumi!", en: "Falafel & Halloumi Wrap!" },
      dish: { ar: "حمص، أفوكادو، باذنجان، سلطة مشكلة — خيار نباتي خفيف وزاكي", it: "Falafel e Halloumi nel pane — ottimo vegetariano!", en: "Hummus, avocado, eggplant, mixed salad — light & tasty!" },
      funnyLine: { ar: "يا زلمة نباتي؟ هيك الصحة بتيجي! 🌿", it: "Leggero e vegetariano — ottimo gusto!", en: "Light and veggie — classy choice! 😎" },
    };
  }

  // Meat path
  if (isMeat) {
    const bigHunger = has("high-hunger") || has("starving");
    const midHunger = has("medium-hunger");

    if (bigHunger) {
      const random = Math.random() < 0.5;
      return random
        ? {
            emoji: "🥩",
            title: { ar: "طبق شاورما لحم مع أرز!", it: "Piatto Shawarma Manzo con Riso!", en: "Lamb/Beef Shawarma Plate with Rice!" },
            dish: { ar: "لحم، أرز حار، سلطة مشكلة، حمص، طحينة، مشروب من اختيارك", it: "Agnello e Manzo con Riso piccante e Bibita — pasto completo!", en: "Lamb & Beef, spicy rice, mixed salad, hummus, tahini + drink" },
            funnyLine: { ar: "ولك إنت جعان بجد! روح اطلب هلق قبل ما تغمى عليك 😂", it: "Mamma mia, sei davvero affamato!", en: "Wow, you're REALLY hungry — order before you faint! 😂" },
          }
        : {
            emoji: "🥙",
            title: { ar: "شاورما لحم سبيشال!", it: "Special Shawarma Agnello/Manzo!", en: "Special Lamb/Beef Shawarma!" },
            dish: { ar: "200غ لحم، بيتا محمصة، حمص، طحينة، بصل، بندورة", it: "200g Agnello/Manzo, Pita croccante, Hummus, Tahina", en: "200g Lamb/Beef, crunchy pita, hummus, tahini, onion, tomato" },
            funnyLine: { ar: "اللحم ما بينضاف عليه — ذوقك ما بيغلط أبداً 😏", it: "Solo carne! Il tuo gusto non mente 😏", en: "Nothing but meat! Your taste never lies 😏" },
          };
    }
    if (midHunger) {
      return {
        emoji: "🥙",
        title: { ar: "شاورما لحم بالصاج!", it: "Shawarma Agnello/Manzo nel Fino!", en: "Lamb/Beef Shawarma in Wrap!" },
        dish: { ar: "لحم، خبز صاج، حمص، طحينة، بصل، بندورة", it: "Agnello/Manzo nel pane fino, Hummus, Tahina", en: "Lamb/Beef in wrap, hummus, tahini, onion, tomato" },
        funnyLine: { ar: "لا كتير ولا قليل — إنت عارف شو بدك! 👌", it: "Un po' affamato — il fino è perfetto!", en: "Moderately hungry — a wrap will sort you right out! 👌" },
      };
    }
    return {
      emoji: "🥙",
      title: { ar: "شاورما لحم بالبيتا!", it: "Shawarma Agnello/Manzo nel Pane Pita!", en: "Lamb/Beef Shawarma in Pita!" },
      dish: { ar: "لحم، خبز بيتا، حمص، طحينة، بصل، بندورة", it: "Agnello/Manzo nel pane Pita, Hummus, Tahina", en: "Lamb/Beef in pita, hummus, tahini, onion, tomato" },
      funnyLine: { ar: "شوي جعان وبدك لحم؟ هاد اسمه ذوق رفيع 😄", it: "Poca fame ma vuoi carne — ottimo gusto!", en: "Not that hungry but still want meat? Classy! 😄" },
    };
  }

  // Chicken path
  if (isChicken) {
    const bigHunger = has("high-hunger") || has("starving");
    const midHunger = has("medium-hunger");

    if (bigHunger) {
      const random = Math.random() < 0.5;
      return random
        ? {
            emoji: "🍗",
            title: { ar: "دجاج مع أرز بالخضار ومشروب!", it: "Pollo con Riso e Verdure e Bibita!", en: "Chicken with Rice, Vegetables & Drink!" },
            dish: { ar: "دجاج، أرز بالخضار، سلطة مشكلة، حمص، طحينة، مشروب من اختيارك", it: "Pollo, Riso con Verdure, Insalata mix, Hummus, Bibita", en: "Chicken, vegetable rice, mixed salad, hummus, tahini + drink" },
            funnyLine: { ar: "يا زلمة! واضح إنك ما أكلت من الصبح — يلا اطلب هلق! 😅", it: "Non mangi da stamattina? Ci vuole un piatto completo!", en: "Haven't eaten since morning?! A full plate is the only answer! 😱" },
          }
        : {
            emoji: "🥙",
            title: { ar: "شاورما دجاج سبيشال!", it: "Special Shawarma Pollo!", en: "Special Chicken Shawarma!" },
            dish: { ar: "200غ دجاج، بيتا محمصة، ثوم، طحينة، ملفوف أحمر، بصل", it: "200g Pollo, Pita croccante, Aglio, Tahina, Cappuccio", en: "200g chicken, crunchy pita, garlic, tahini, red cabbage, onion" },
            funnyLine: { ar: "جعان كتير؟ السبيشال هو اللي ينقذك هالمرة! 💪", it: "Molta fame? Lo special è fatto per te!", en: "Very hungry? The special was made just for you! 💪" },
          };
    }
    if (midHunger) {
      return {
        emoji: "🥙",
        title: { ar: "شاورما دجاج بالصاج!", it: "Shawarma Pollo nel Fino!", en: "Chicken Shawarma in Wrap!" },
        dish: { ar: "دجاج، خبز صاج، ثوم، طحينة، ملفوف أحمر، بصل", it: "Pollo nel pane fino, Aglio, Tahina, Cappuccio", en: "Chicken in wrap, garlic, tahini, red cabbage, onion" },
        funnyLine: { ar: "جوعك معقول — هاد الصاج بيعمل شغلته كويس 😋", it: "Un po' affamato — il fino ti accontenta!", en: "Not too hungry — the wrap will hit the spot! 😋" },
      };
    }
    return {
      emoji: "🥙",
      title: { ar: "شاورما دجاج بالبيتا!", it: "Shawarma Pollo nel Pane Pita!", en: "Chicken Shawarma in Pita!" },
      dish: { ar: "دجاج، خبز بيتا، ثوم، طحينة، ملفوف أحمر، بصل", it: "Pollo nel pane Pita, Aglio, Tahina, Cappuccio", en: "Chicken in pita, garlic, tahini, red cabbage, onion" },
      funnyLine: { ar: "شوي جعان؟ البيتا خفيفة وبتكفي والله 😊", it: "Poca fame? La pita è leggera ma soddisfacente!", en: "Just a little hungry? Pita is light but satisfying! 😊" },
    };
  }

  // Anything / default path
  if (needsBig) {
    return {
      emoji: "📦",
      title: { ar: "Box Amigo!", it: "Box Amigo!", en: "Box Amigo!" },
      dish: { ar: "دجاج أو لحم، أرز، سلطة، حمص، طحينة — كل شيء بصندوق واحد!", it: "Box Amigo — il pasto completo con tutto dentro!", en: "Chicken or Meat, rice, salad, hummus, tahini — all in one box!" },
      funnyLine: { ar: "ولك إنت جعان لدرجة إنك تاكل كل شيء! Box Amigo هو الحل 😂", it: "Affamato di tutto — Box Amigo è la risposta!", en: "You'd eat literally anything — Box Amigo it is! 😂" },
    };
  }
  return {
    emoji: "🥙",
    title: { ar: "شاورما دجاج كلاسيك!", it: "Shawarma Pollo Classico!", en: "Classic Chicken Shawarma!" },
    dish: { ar: "دجاج، ثوم، طحينة، ملفوف أحمر، بصل — الأكثر طلباً عندنا", it: "Pollo, Aglio, Tahina, Cappuccio — il più ordinato!", en: "Chicken, garlic, tahini, red cabbage, onion — our most ordered!" },
    funnyLine: { ar: "ما قررت شو بدك؟ عادي — الدجاج دايماً الاختيار المضمون 👍", it: "Non sai cosa vuoi? Il pollo è sempre la scelta sicura!", en: "Can't decide? Chicken is always the safe bet! 👍" },
  };
}


export function HungerMeter() {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [collectedTags, setCollectedTags] = useState<string[]>([]);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Watch for lightbox-open class on body
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setLightboxOpen(document.body.classList.contains("lightbox-open"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Show button only when #menu section is in view
  useEffect(() => {
    const menuEl = document.getElementById("menu");
    if (!menuEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => setMenuVisible(entry.isIntersecting),
      { threshold: 0.01 } // very low threshold so it works on all screen sizes
    );
    observer.observe(menuEl);
    return () => observer.disconnect();
  }, []);

  const handleAnswer = (tags: string[]) => {
    const newTags = [...collectedTags, ...tags];
    if (currentQ < questions.length - 1) {
      setCollectedTags(newTags);
      setCurrentQ(currentQ + 1);
    } else {
      setRecommendation(getRecommendation(newTags));
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setCollectedTags([]);
    setRecommendation(null);
  };

  const close = () => {
    setOpen(false);
    setTimeout(reset, 400);
  };

  const q = questions[currentQ];
  const progress = (currentQ / questions.length) * 100;
  const label = (obj: { ar: string; it: string; en: string }) =>
    language === "ar" ? obj.ar : language === "it" ? obj.it : obj.en;

  return (
    <>
      {/* Floating trigger — hidden when lightbox is open */}
      <AnimatePresence>
        {menuVisible && !lightboxOpen && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-56 right-4 z-50 flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-primary/40 transition-shadow font-semibold text-sm"
          >
            <Utensils className="h-4 w-4" />
            {language === "ar" ? "جوعان؟" : language === "it" ? "Fame?" : "Hungry?"}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm bg-card rounded-2xl shadow-2xl overflow-hidden border border-border"
            >
              {/* Header */}
              <div className="bg-primary px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🌡️</span>
                  <span className="text-primary-foreground font-bold text-lg">
                    {language === "ar" ? "عداد الجوع" : language === "it" ? "Misuratore della Fame" : "Hunger Meter"}
                  </span>
                </div>
                <button onClick={close} className="p-1 rounded-full hover:bg-white/20 transition-colors">
                  <X className="h-5 w-5 text-primary-foreground" />
                </button>
              </div>

              <div className="p-5">
                <AnimatePresence mode="wait">
                  {!recommendation ? (
                    <motion.div
                      key={`q-${currentQ}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      {/* Progress bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-xs text-muted-foreground mb-1">
                          <span>
                            {language === "ar"
                              ? `سؤال ${currentQ + 1} من ${questions.length}`
                              : language === "it"
                              ? `Domanda ${currentQ + 1} di ${questions.length}`
                              : `Question ${currentQ + 1} of ${questions.length}`}
                          </span>
                        </div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-primary rounded-full"
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.4 }}
                          />
                        </div>
                      </div>

                      <p className="font-semibold text-foreground mb-4 text-center text-base">
                        {label(q)}
                      </p>

                      <div className="space-y-2">
                        {q.answers.map((ans, i) => (
                          <motion.button
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleAnswer(ans.tags)}
                            className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all text-sm font-medium text-foreground"
                          >
                            <span>{label(ans.label)}</span>
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center"
                    >
                      <motion.div
                        animate={{ rotate: [0, -10, 10, -5, 5, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6 }}
                        className="text-6xl mb-3"
                      >
                        {recommendation.emoji}
                      </motion.div>

                      <p className="text-sm font-medium text-primary mb-3 leading-relaxed">
                        {label(recommendation.funnyLine)}
                      </p>

                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {label(recommendation.title)}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                        {label(recommendation.dish)}
                      </p>

                      <div className="flex flex-col gap-2">
                        <a 
                          href="https://glovoapp.com/it/it/verona/yalla-amigo-ver/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-xl text-sm"
                          >
                            {language === "ar" ? "اطلب الآن 🛵" : language === "it" ? "Ordina ora 🛵" : "Order Now 🛵"}
                          </motion.button>
                        </a>
                        <button
                          onClick={reset}
                          className="w-full py-2 text-muted-foreground text-sm hover:text-foreground transition-colors"
                        >
                          {language === "ar" ? "حاول مجدداً" : language === "it" ? "Riprova" : "Try again"}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
