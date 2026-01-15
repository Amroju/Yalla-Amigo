import { motion } from "framer-motion";

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  rotate?: number;
  className?: string;
}

function FloatingElement({ 
  children, 
  delay = 0, 
  duration = 4, 
  x = 10, 
  y = 15,
  rotate = 5,
  className = ""
}: FloatingElementProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{
        y: [0, -y, 0, y, 0],
        x: [0, x, 0, -x, 0],
        rotate: [0, rotate, 0, -rotate, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

function Star({ size = 24, color = "#D62027", opacity = 0.6 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} opacity={opacity}>
      <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z" />
    </svg>
  );
}

function Sparkle({ size = 16, color = "#5BA240", opacity = 0.5 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} opacity={opacity}>
      <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
    </svg>
  );
}

function Leaf({ size = 32, color = "#5BA240", opacity = 0.4 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} opacity={opacity}>
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.97C7.14 20 7.64 20 8.14 20C12.14 20 15.52 18.16 17.5 15.34C19.5 12.5 20 9.5 20 7C20 5 17 8 17 8Z" />
    </svg>
  );
}

function Diamond({ size = 20, color = "#D62027", opacity = 0.3 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} opacity={opacity}>
      <path d="M12 2L22 12L12 22L2 12L12 2Z" />
    </svg>
  );
}

function Circle({ size = 12, color = "#5BA240", opacity = 0.3 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} opacity={opacity}>
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function Dots({ size = 40, color = "#D62027", opacity = 0.2 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill={color} opacity={opacity}>
      <circle cx="5" cy="5" r="3" />
      <circle cx="20" cy="5" r="3" />
      <circle cx="35" cy="5" r="3" />
      <circle cx="5" cy="20" r="3" />
      <circle cx="20" cy="20" r="3" />
      <circle cx="35" cy="20" r="3" />
      <circle cx="5" cy="35" r="3" />
      <circle cx="20" cy="35" r="3" />
      <circle cx="35" cy="35" r="3" />
    </svg>
  );
}

export function HeroFloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingElement delay={0} duration={6} x={15} y={20} className="top-[15%] left-[5%]">
        <Star size={28} color="#D62027" opacity={0.5} />
      </FloatingElement>
      <FloatingElement delay={1} duration={5} x={12} y={18} className="top-[25%] right-[8%]">
        <Sparkle size={22} color="#5BA240" opacity={0.4} />
      </FloatingElement>
      <FloatingElement delay={2} duration={7} x={8} y={12} className="bottom-[30%] left-[10%]">
        <Leaf size={36} color="#5BA240" opacity={0.35} />
      </FloatingElement>
      <FloatingElement delay={0.5} duration={5.5} x={10} y={15} className="bottom-[20%] right-[12%]">
        <Star size={20} color="#D62027" opacity={0.4} />
      </FloatingElement>
      <FloatingElement delay={1.5} duration={6.5} x={14} y={10} className="top-[40%] left-[3%]">
        <Diamond size={18} color="#D62027" opacity={0.3} />
      </FloatingElement>
      <FloatingElement delay={2.5} duration={5} x={10} y={16} className="top-[60%] right-[5%]">
        <Circle size={14} color="#5BA240" opacity={0.35} />
      </FloatingElement>
    </div>
  );
}

export function MenuFloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingElement delay={0} duration={8} x={8} y={12} className="top-[5%] right-[3%]">
        <Leaf size={40} color="#5BA240" opacity={0.25} />
      </FloatingElement>
      <FloatingElement delay={1.5} duration={6} x={12} y={8} className="top-[20%] left-[2%]">
        <Sparkle size={18} color="#D62027" opacity={0.3} />
      </FloatingElement>
      <FloatingElement delay={3} duration={7} x={6} y={10} className="bottom-[15%] right-[5%]">
        <Star size={24} color="#D62027" opacity={0.25} />
      </FloatingElement>
      <FloatingElement delay={2} duration={9} x={10} y={14} className="bottom-[40%] left-[4%]">
        <Dots size={35} color="#5BA240" opacity={0.15} />
      </FloatingElement>
    </div>
  );
}

export function AboutFloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingElement delay={0.5} duration={7} x={10} y={15} className="top-[10%] left-[5%]">
        <Diamond size={22} color="#5BA240" opacity={0.3} />
      </FloatingElement>
      <FloatingElement delay={2} duration={6} x={8} y={12} className="top-[30%] right-[4%]">
        <Leaf size={32} color="#5BA240" opacity={0.25} />
      </FloatingElement>
      <FloatingElement delay={1} duration={8} x={12} y={10} className="bottom-[20%] left-[8%]">
        <Star size={20} color="#D62027" opacity={0.35} />
      </FloatingElement>
      <FloatingElement delay={3} duration={5.5} x={6} y={14} className="bottom-[35%] right-[6%]">
        <Sparkle size={16} color="#D62027" opacity={0.3} />
      </FloatingElement>
    </div>
  );
}

export function ReviewsFloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingElement delay={0} duration={6} x={12} y={18} className="top-[8%] right-[6%]">
        <Star size={26} color="#D62027" opacity={0.35} />
      </FloatingElement>
      <FloatingElement delay={1.5} duration={7} x={8} y={10} className="top-[25%] left-[3%]">
        <Circle size={16} color="#5BA240" opacity={0.3} />
      </FloatingElement>
      <FloatingElement delay={2.5} duration={5.5} x={10} y={14} className="bottom-[25%] right-[4%]">
        <Sparkle size={20} color="#5BA240" opacity={0.35} />
      </FloatingElement>
      <FloatingElement delay={1} duration={8} x={14} y={12} className="bottom-[10%] left-[6%]">
        <Diamond size={18} color="#D62027" opacity={0.25} />
      </FloatingElement>
    </div>
  );
}

export function OrderFloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingElement delay={0} duration={5} x={15} y={20} className="top-[15%] left-[8%]">
        <Star size={30} color="#D62027" opacity={0.4} />
      </FloatingElement>
      <FloatingElement delay={1} duration={6} x={10} y={15} className="top-[20%] right-[10%]">
        <Leaf size={38} color="#5BA240" opacity={0.3} />
      </FloatingElement>
      <FloatingElement delay={2} duration={7} x={12} y={10} className="bottom-[25%] left-[5%]">
        <Sparkle size={24} color="#5BA240" opacity={0.35} />
      </FloatingElement>
      <FloatingElement delay={0.5} duration={5.5} x={8} y={18} className="bottom-[15%] right-[8%]">
        <Star size={22} color="#D62027" opacity={0.35} />
      </FloatingElement>
    </div>
  );
}
