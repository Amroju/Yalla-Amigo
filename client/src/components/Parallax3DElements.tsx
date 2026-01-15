import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import falafelImg from "@assets/generated_images/falafel_ball_isolated_cutout.png";
import shawarmaImg from "@assets/generated_images/shawarma_wrap_isolated_cutout.png";
import hummusImg from "@assets/generated_images/hummus_bowl_isolated_cutout.png";
import pitaImg from "@assets/generated_images/pita_bread_isolated_cutout.png";
import parsleyImg from "@assets/generated_images/parsley_leaves_isolated_cutout.png";
import chiliImg from "@assets/generated_images/red_chili_pepper_cutout.png";

interface Parallax3DItem {
  id: number;
  image: string;
  size: number;
  x: string;
  y: string;
  scrollSpeed: number;
  rotateStart: number;
  rotateEnd: number;
  scaleStart: number;
  scaleEnd: number;
  zIndex: number;
}

const parallaxItems: Parallax3DItem[] = [
  { id: 1, image: falafelImg, size: 120, x: "3%", y: "5%", scrollSpeed: 0.3, rotateStart: -30, rotateEnd: 30, scaleStart: 0.8, scaleEnd: 1.2, zIndex: 10 },
  { id: 2, image: shawarmaImg, size: 180, x: "85%", y: "8%", scrollSpeed: 0.5, rotateStart: 20, rotateEnd: -20, scaleStart: 0.9, scaleEnd: 1.1, zIndex: 20 },
  { id: 3, image: hummusImg, size: 150, x: "5%", y: "35%", scrollSpeed: 0.4, rotateStart: 15, rotateEnd: -25, scaleStart: 0.85, scaleEnd: 1.15, zIndex: 15 },
  { id: 4, image: pitaImg, size: 130, x: "88%", y: "40%", scrollSpeed: 0.6, rotateStart: -25, rotateEnd: 25, scaleStart: 0.9, scaleEnd: 1.2, zIndex: 25 },
  { id: 5, image: chiliImg, size: 80, x: "12%", y: "65%", scrollSpeed: 0.35, rotateStart: 45, rotateEnd: -45, scaleStart: 0.8, scaleEnd: 1.3, zIndex: 12 },
  { id: 6, image: parsleyImg, size: 100, x: "90%", y: "70%", scrollSpeed: 0.55, rotateStart: -40, rotateEnd: 40, scaleStart: 0.85, scaleEnd: 1.25, zIndex: 18 },
  { id: 7, image: falafelImg, size: 90, x: "8%", y: "85%", scrollSpeed: 0.45, rotateStart: 20, rotateEnd: -30, scaleStart: 0.9, scaleEnd: 1.15, zIndex: 14 },
  { id: 8, image: hummusImg, size: 110, x: "82%", y: "90%", scrollSpeed: 0.5, rotateStart: -20, rotateEnd: 35, scaleStart: 0.85, scaleEnd: 1.2, zIndex: 22 },
];

function Parallax3DItem({ item }: { item: Parallax3DItem }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * item.scrollSpeed, -100 * item.scrollSpeed]);
  const rotate = useTransform(scrollYProgress, [0, 1], [item.rotateStart, item.rotateEnd]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 15, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 10, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [item.scaleStart, item.scaleEnd, item.scaleStart]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 0.6, 0.6, 0.3]);

  return (
    <motion.div
      ref={ref}
      className="absolute hidden lg:block pointer-events-none"
      style={{
        left: item.x,
        top: item.y,
        width: item.size,
        height: item.size,
        zIndex: item.zIndex,
        y,
        rotate,
        rotateY,
        rotateX,
        scale,
        opacity,
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      <img
        src={item.image}
        alt=""
        className="w-full h-full object-contain"
        style={{
          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))",
          transform: "translateZ(50px)",
        }}
      />
    </motion.div>
  );
}

export function Parallax3DElements() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ perspective: "1200px", perspectiveOrigin: "50% 50%" }}
    >
      {parallaxItems.map((item) => (
        <Parallax3DItem key={item.id} item={item} />
      ))}
    </div>
  );
}

interface SectionParallax3DItem {
  id: number;
  image: string;
  size: number;
  x: string;
  initialY: number;
  scrollSpeed: number;
  rotateStart: number;
  rotateEnd: number;
  delay: number;
}

const sectionItems: SectionParallax3DItem[] = [
  { id: 101, image: falafelImg, size: 100, x: "2%", initialY: 50, scrollSpeed: 0.4, rotateStart: -20, rotateEnd: 20, delay: 0 },
  { id: 102, image: shawarmaImg, size: 140, x: "88%", initialY: 100, scrollSpeed: 0.6, rotateStart: 15, rotateEnd: -15, delay: 0.1 },
  { id: 103, image: hummusImg, size: 120, x: "5%", initialY: 300, scrollSpeed: 0.35, rotateStart: 25, rotateEnd: -25, delay: 0.2 },
  { id: 104, image: pitaImg, size: 110, x: "90%", initialY: 400, scrollSpeed: 0.5, rotateStart: -30, rotateEnd: 30, delay: 0.15 },
  { id: 105, image: chiliImg, size: 70, x: "8%", initialY: 550, scrollSpeed: 0.45, rotateStart: 40, rotateEnd: -40, delay: 0.25 },
  { id: 106, image: parsleyImg, size: 85, x: "92%", initialY: 650, scrollSpeed: 0.55, rotateStart: -35, rotateEnd: 35, delay: 0.3 },
];

function SectionParallax3DItem({ item, containerRef }: { item: SectionParallax3DItem; containerRef: React.RefObject<HTMLDivElement> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [item.initialY + 150, item.initialY - 150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [item.rotateStart, item.rotateEnd]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-20, 0, 20]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 0.5, 0.5, 0]);

  return (
    <motion.div
      className="absolute hidden lg:block pointer-events-none"
      style={{
        left: item.x,
        top: 0,
        width: item.size,
        height: item.size,
        y,
        rotate,
        rotateY,
        scale,
        opacity,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 0.5, scale: 1 }}
      transition={{ duration: 0.6, delay: item.delay }}
    >
      <img
        src={item.image}
        alt=""
        className="w-full h-full object-contain"
        style={{
          filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.25))",
        }}
      />
    </motion.div>
  );
}

export function SectionParallax3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {sectionItems.map((item) => (
        <SectionParallax3DItem key={item.id} item={item} containerRef={containerRef} />
      ))}
    </div>
  );
}
