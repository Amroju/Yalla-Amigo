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

const leftFloatingFoods: FloatingFood[] = [
  { id: 1, image: falafelImg, size: 70, x: "-5%", y: "15%", duration: 7, delay: 0, rotate: 360 },
  { id: 2, image: hummusImg, size: 80, x: "-3%", y: "50%", duration: 8, delay: 0.5, rotate: 20 },
  { id: 3, image: parsleyImg, size: 50, x: "2%", y: "80%", duration: 6, delay: 1, rotate: -30 },
];

const rightFloatingFoods: FloatingFood[] = [
  { id: 4, image: shawarmaImg, size: 90, x: "92%", y: "10%", duration: 8, delay: 0.3, rotate: -20 },
  { id: 5, image: pitaImg, size: 70, x: "95%", y: "45%", duration: 7, delay: 0.8, rotate: -360 },
  { id: 6, image: chiliImg, size: 45, x: "90%", y: "75%", duration: 6, delay: 0.5, rotate: 45 },
];

function FloatingItem({ food }: { food: FloatingFood }) {
  return (
    <motion.div
      className="absolute hidden lg:block"
      style={{
        left: food.x,
        top: food.y,
        width: food.size,
        height: food.size,
      }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 0.25, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        opacity: { duration: 0.8, delay: food.delay },
        scale: { duration: 0.6, delay: food.delay, type: "spring", stiffness: 200 },
      }}
    >
      <motion.div
        animate={{
          y: [0, -20, 0, 20, 0],
          x: [0, 10, 0, -10, 0],
          rotate: [0, food.rotate / 8, 0, -food.rotate / 8, 0],
        }}
        transition={{
          y: { duration: food.duration, repeat: Infinity, ease: "easeInOut" },
          x: { duration: food.duration * 1.2, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: food.duration * 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <img
          src={food.image}
          alt=""
          className="w-full h-full object-contain"
          style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))" }}
        />
      </motion.div>
    </motion.div>
  );
}

export function SectionFloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {leftFloatingFoods.map((food) => (
        <FloatingItem key={food.id} food={food} />
      ))}
      {rightFloatingFoods.map((food) => (
        <FloatingItem key={food.id} food={food} />
      ))}
    </div>
  );
}
