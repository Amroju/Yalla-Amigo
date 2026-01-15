import { motion } from "framer-motion";

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
  y: string;
  duration: number;
  delay: number;
  rotate: number;
}

const floatingFoods: FloatingFood[] = [
  { id: 1, image: falafelImg, size: 60, x: "5%", y: "25%", duration: 8, delay: 0, rotate: 360 },
  { id: 2, image: shawarmaImg, size: 90, x: "88%", y: "15%", duration: 10, delay: 1, rotate: -15 },
  { id: 3, image: hummusImg, size: 80, x: "8%", y: "70%", duration: 9, delay: 0.5, rotate: 20 },
  { id: 4, image: pitaImg, size: 70, x: "92%", y: "65%", duration: 7, delay: 2, rotate: -360 },
  { id: 5, image: parsleyImg, size: 50, x: "85%", y: "40%", duration: 6, delay: 1.5, rotate: 30 },
  { id: 6, image: chiliImg, size: 45, x: "12%", y: "45%", duration: 8, delay: 0.8, rotate: -45 },
  { id: 7, image: falafelImg, size: 40, x: "75%", y: "85%", duration: 7, delay: 2.5, rotate: 180 },
  { id: 8, image: parsleyImg, size: 35, x: "20%", y: "90%", duration: 9, delay: 1.2, rotate: -20 },
];

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingFoods.map((food) => (
        <motion.div
          key={food.id}
          className="absolute"
          style={{
            left: food.x,
            top: food.y,
            width: food.size,
            height: food.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.05, 1],
            y: [0, -25, 0, 25, 0],
            x: [0, 15, 0, -15, 0],
            rotate: [0, food.rotate / 4, 0, -food.rotate / 4, 0],
          }}
          transition={{
            opacity: { duration: food.duration, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: food.duration, repeat: Infinity, ease: "easeInOut" },
            y: { duration: food.duration, repeat: Infinity, ease: "easeInOut", delay: food.delay },
            x: { duration: food.duration * 1.3, repeat: Infinity, ease: "easeInOut", delay: food.delay },
            rotate: { duration: food.duration * 2, repeat: Infinity, ease: "easeInOut", delay: food.delay },
          }}
        >
          <img
            src={food.image}
            alt=""
            className="w-full h-full object-contain drop-shadow-lg"
            style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))" }}
          />
        </motion.div>
      ))}
    </div>
  );
}

interface HeroFloatingFood {
  id: number;
  image: string;
  size: number;
  x: string;
  y: string;
  duration: number;
  delay: number;
  rotate: number;
}

const heroFoods: HeroFloatingFood[] = [
  { id: 101, image: falafelImg, size: 80, x: "5%", y: "20%", duration: 6, delay: 0.2, rotate: 360 },
  { id: 102, image: shawarmaImg, size: 120, x: "85%", y: "15%", duration: 8, delay: 0.5, rotate: -20 },
  { id: 103, image: hummusImg, size: 100, x: "3%", y: "65%", duration: 7, delay: 0.8, rotate: 15 },
  { id: 104, image: pitaImg, size: 90, x: "90%", y: "70%", duration: 9, delay: 1, rotate: -360 },
  { id: 105, image: chiliImg, size: 50, x: "15%", y: "40%", duration: 5, delay: 0.3, rotate: 45 },
  { id: 106, image: parsleyImg, size: 60, x: "80%", y: "45%", duration: 6, delay: 0.6, rotate: -30 },
  { id: 107, image: falafelImg, size: 50, x: "70%", y: "25%", duration: 7, delay: 1.2, rotate: 180 },
  { id: 108, image: falafelImg, size: 45, x: "25%", y: "75%", duration: 8, delay: 0.9, rotate: -180 },
];

export function HeroFloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
      {heroFoods.map((food) => (
        <motion.div
          key={food.id}
          className="absolute"
          style={{
            left: food.x,
            top: food.y,
            width: food.size,
            height: food.size,
          }}
          initial={{ opacity: 0, scale: 0, rotate: -20 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            opacity: { duration: 1, delay: food.delay },
            scale: { duration: 0.8, delay: food.delay, type: "spring", stiffness: 200 },
            rotate: { duration: 0.6, delay: food.delay },
          }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0, 20, 0],
              x: [0, 12, 0, -12, 0],
              rotate: [0, food.rotate / 6, 0, -food.rotate / 6, 0],
              scale: [1, 1.08, 1, 0.95, 1],
            }}
            transition={{
              y: { duration: food.duration, repeat: Infinity, ease: "easeInOut" },
              x: { duration: food.duration * 1.2, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: food.duration * 1.5, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: food.duration * 0.8, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <img
              src={food.image}
              alt=""
              className="w-full h-full object-contain"
              style={{ 
                filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.4))",
              }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
