import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export function NightHungerMode() {
  const { language } = useLanguage();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("nightToastShown")) return;

    const checkAndShow = () => {
      const hour = new Date().getHours();
      const shouldShow = hour >= 21 && hour < 23;

      // Force show for demo — remove in production
      const forceDemo = true;

      if (shouldShow || forceDemo) {
        sessionStorage.setItem("nightToastShown", "true");
        // Small delay so page loads first
        setTimeout(() => {
          setShow(true);
          // Auto-dismiss after 5 seconds
          setTimeout(() => setShow(false), 5000);
        }, 1500);
      }
    };

    checkAndShow();
  }, []);

  const content = {
    ar: "🌙 بيسكروا بعد قليل — اطلب هلق على Glovo!",
    it: "🌙 Stiamo per chiudere — Ordina ora su Glovo!",
    en: "🌙 We're closing soon — Order now on Glovo!",
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 250 }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] cursor-pointer"
          onClick={() => {
            window.open("https://glovoapp.com/it/it/verona/yalla-amigo-ver/", "_blank");
            setShow(false);
          }}
        >
          <div className="flex items-center gap-3 px-5 py-3 bg-slate-900 text-white rounded-full shadow-2xl border border-white/10 whitespace-nowrap hover:bg-slate-800 transition-colors">
            <Moon className="h-4 w-4 text-yellow-300 flex-shrink-0" />
            <span className="text-sm font-semibold">
              {content[language] || content.en}
            </span>
          </div>

          {/* Auto-dismiss progress bar */}
          <motion.div
            className="h-0.5 bg-primary rounded-full mt-1 mx-2"
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 5, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
