import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

import falafelImg from "@assets/generated_images/falafel_ball_isolated_cutout.png";
import shawarmaImg from "@assets/generated_images/shawarma_wrap_isolated_cutout.png";
import hummusImg from "@assets/generated_images/hummus_bowl_isolated_cutout.png";
import pitaImg from "@assets/generated_images/pita_bread_isolated_cutout.png";
import parsleyImg from "@assets/generated_images/parsley_leaves_isolated_cutout.png";
import chiliImg from "@assets/generated_images/red_chili_pepper_cutout.png";

interface FloatingFood {
  id: number;
  image: string;
  size: number;
  x: string;
  topOffset: number;
  duration: number;
  delay: number;
  rotate: number;
}

const floatingFoods: FloatingFood[] = [
  { id: 1, image: falafelImg, size: 80, x: "3%", topOffset: 200, duration: 8, delay: 0, rotate: 360 },
  { id: 2, image: shawarmaImg, size: 120, x: "85%", topOffset: 400, duration: 10, delay: 1, rotate: -15 },
  { id: 3, image: hummusImg, size: 100, x: "5%", topOffset: 800, duration: 9, delay: 0.5, rotate: 20 },
  { id: 4, image: pitaImg, size: 90, x: "90%", topOffset: 1200, duration: 7, delay: 2, rotate: -360 },
  { id: 5, image: parsleyImg, size: 60, x: "88%", topOffset: 1600, duration: 6, delay: 1.5, rotate: 30 },
  { id: 6, image: chiliImg, size: 55, x: "8%", topOffset: 2000, duration: 8, delay: 0.8, rotate: -45 },
  { id: 7, image: falafelImg, size: 70, x: "92%", topOffset: 2400, duration: 7, delay: 2.5, rotate: 180 },
  { id: 8, image: parsleyImg, size: 50, x: "4%", topOffset: 2800, duration: 9, delay: 1.2, rotate: -20 },
  { id: 9, image: shawarmaImg, size: 100, x: "87%", topOffset: 3200, duration: 8, delay: 0.3, rotate: 25 },
  { id: 10, image: hummusImg, size: 85, x: "6%", topOffset: 3600, duration: 10, delay: 1.8, rotate: -30 },
  { id: 11, image: chiliImg, size: 45, x: "90%", topOffset: 4000, duration: 6, delay: 0.6, rotate: 60 },
  { id: 12, image: pitaImg, size: 75, x: "3%", topOffset: 4400, duration: 9, delay: 2.2, rotate: -180 },
];

export function FloatingElements() {
  const [heroHeight, setHeroHeight] = useState(0);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);

  useEffect(() => {
    const heroElement = document.getElementById("hero");
    if (heroElement) {
      setHeroHeight(heroElement.offsetHeight);
    }
  }, []);

  return (
    <motion.div 
      className="absolute pointer-events-none overflow-visible z-0"
      style={{ 
        top: heroHeight || "100vh",
        left: 0,
        right: 0,
        opacity 
      }}
    >
      {floatingFoods.map((food) => (
        <motion.div
          key={food.id}
          className="absolute"
          style={{
            left: food.x,
            top: food.topOffset,
            width: food.size,
            height: food.size,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.4, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: food.delay * 0.2 }}
        >
          <motion.div
            animate={{
              y: [0, -30, 0, 30, 0],
              x: [0, 20, 0, -20, 0],
              rotate: [0, food.rotate / 4, 0, -food.rotate / 4, 0],
              scale: [1, 1.1, 1, 0.95, 1],
            }}
            transition={{
              y: { duration: food.duration, repeat: Infinity, ease: "easeInOut" },
              x: { duration: food.duration * 1.3, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: food.duration * 2, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: food.duration * 0.8, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <img
              src={food.image}
              alt=""
              className="w-full h-full object-contain"
              style={{ filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.15))" }}
            />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
