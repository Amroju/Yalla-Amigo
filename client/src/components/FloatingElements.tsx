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

function Crescent({ size = 28, color = "#D62027", opacity = 0.4 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} opacity={opacity}>
      <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9c.83 0 1.62-.12 2.39-.34-1.52-1.42-2.39-3.45-2.39-5.66 0-4.42 3.58-8 8-8 .34 0 .68.02 1.01.07C19.64 4.89 16.14 3 12 3z" />
    </svg>
  );
}

function Hexagon({ size = 24, color = "#5BA240", opacity = 0.3 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} opacity={opacity}>
      <path d="M12 2L21.5 7.5V16.5L12 22L2.5 16.5V7.5L12 2Z" />
    </svg>
  );
}

function Triangle({ size = 20, color = "#D62027", opacity = 0.35 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} opacity={opacity}>
      <path d="M12 2L22 20H2L12 2Z" />
    </svg>
  );
}

function Ring({ size = 24, color = "#5BA240", opacity = 0.3 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" opacity={opacity}>
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

function Cross({ size = 20, color = "#D62027", opacity = 0.25 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} opacity={opacity}>
      <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
    </svg>
  );
}

function Pepper({ size = 28, color = "#D62027", opacity = 0.4 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} opacity={opacity}>
      <path d="M14 2C12.89 2 12 2.89 12 4V6.59L9.71 4.29L8.29 5.71L11 8.41V10C11 12.21 9.21 14 7 14C4.79 14 3 15.79 3 18V22H7C9.21 22 11 20.21 11 18V14.41L13.29 16.71L14.71 15.29L12 12.59V4C12 2.89 12.89 2 14 2Z" />
    </svg>
  );
}

function Spice({ size = 24, color = "#5BA240", opacity = 0.35 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} opacity={opacity}>
      <circle cx="7" cy="7" r="2" />
      <circle cx="17" cy="7" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

export function HeroFloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
      <FloatingElement delay={0} duration={6} x={15} y={20} className="top-[10%] left-[5%]">
        <Star size={32} color="#D62027" opacity={0.5} />
      </FloatingElement>
      <FloatingElement delay={1} duration={5} x={12} y={18} className="top-[20%] right-[8%]">
        <Sparkle size={26} color="#5BA240" opacity={0.45} />
      </FloatingElement>
      <FloatingElement delay={2} duration={7} x={8} y={12} className="bottom-[35%] left-[8%]">
        <Leaf size={40} color="#5BA240" opacity={0.4} />
      </FloatingElement>
      <FloatingElement delay={0.5} duration={5.5} x={10} y={15} className="bottom-[25%] right-[10%]">
        <Star size={24} color="#D62027" opacity={0.45} />
      </FloatingElement>
      <FloatingElement delay={1.5} duration={6.5} x={14} y={10} className="top-[45%] left-[3%]">
        <Crescent size={30} color="#D62027" opacity={0.35} />
      </FloatingElement>
      <FloatingElement delay={2.5} duration={5} x={10} y={16} className="top-[55%] right-[5%]">
        <Circle size={18} color="#5BA240" opacity={0.4} />
      </FloatingElement>
      <FloatingElement delay={3} duration={7} x={18} y={12} className="top-[30%] left-[12%]">
        <Hexagon size={22} color="#5BA240" opacity={0.3} />
      </FloatingElement>
      <FloatingElement delay={0.8} duration={6} x={14} y={20} className="bottom-[15%] left-[15%]">
        <Sparkle size={20} color="#D62027" opacity={0.4} />
      </FloatingElement>
      <FloatingElement delay={1.8} duration={5.5} x={10} y={14} className="top-[65%] right-[15%]">
        <Diamond size={20} color="#5BA240" opacity={0.35} />
      </FloatingElement>
      <FloatingElement delay={2.2} duration={8} x={16} y={18} className="bottom-[40%] right-[3%]">
        <Star size={18} color="#D62027" opacity={0.35} />
      </FloatingElement>
      <FloatingElement delay={3.5} duration={6.5} x={8} y={10} className="top-[15%] left-[20%]">
        <Ring size={26} color="#5BA240" opacity={0.3} />
      </FloatingElement>
      <FloatingElement delay={1.2} duration={7.5} x={12} y={16} className="bottom-[50%] left-[2%]">
        <Pepper size={24} color="#D62027" opacity={0.3} />
      </FloatingElement>
    </div>
  );
}

export function MenuFloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingElement delay={0} duration={8} x={8} y={12} className="top-[3%] right-[3%]">
        <Leaf size={44} color="#5BA240" opacity={0.3} />
      </FloatingElement>
      <FloatingElement delay={1.5} duration={6} x={12} y={8} className="top-[15%] left-[2%]">
        <Sparkle size={22} color="#D62027" opacity={0.35} />
      </FloatingElement>
      <FloatingElement delay={3} duration={7} x={6} y={10} className="bottom-[10%] right-[5%]">
        <Star size={28} color="#D62027" opacity={0.3} />
      </FloatingElement>
      <FloatingElement delay={2} duration={9} x={10} y={14} className="bottom-[35%] left-[3%]">
        <Dots size={40} color="#5BA240" opacity={0.2} />
      </FloatingElement>
      <FloatingElement delay={0.5} duration={7} x={14} y={16} className="top-[30%] right-[2%]">
        <Crescent size={26} color="#D62027" opacity={0.25} />
      </FloatingElement>
      <FloatingElement delay={2.5} duration={6.5} x={8} y={12} className="top-[50%] left-[4%]">
        <Hexagon size={20} color="#5BA240" opacity={0.25} />
      </FloatingElement>
      <FloatingElement delay={4} duration={8} x={10} y={10} className="bottom-[20%] left-[6%]">
        <Pepper size={28} color="#D62027" opacity={0.2} />
      </FloatingElement>
      <FloatingElement delay={1} duration={7.5} x={12} y={14} className="top-[70%] right-[4%]">
        <Spice size={22} color="#5BA240" opacity={0.25} />
      </FloatingElement>
      <FloatingElement delay={3.5} duration={6} x={6} y={8} className="top-[8%] left-[8%]">
        <Diamond size={18} color="#D62027" opacity={0.2} />
      </FloatingElement>
      <FloatingElement delay={2.8} duration={9} x={14} y={12} className="bottom-[55%] right-[3%]">
        <Circle size={16} color="#5BA240" opacity={0.3} />
      </FloatingElement>
    </div>
  );
}

export function AboutFloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingElement delay={0.5} duration={7} x={10} y={15} className="top-[8%] left-[4%]">
        <Diamond size={26} color="#5BA240" opacity={0.35} />
      </FloatingElement>
      <FloatingElement delay={2} duration={6} x={8} y={12} className="top-[25%] right-[4%]">
        <Leaf size={36} color="#5BA240" opacity={0.3} />
      </FloatingElement>
      <FloatingElement delay={1} duration={8} x={12} y={10} className="bottom-[15%] left-[6%]">
        <Star size={24} color="#D62027" opacity={0.4} />
      </FloatingElement>
      <FloatingElement delay={3} duration={5.5} x={6} y={14} className="bottom-[30%] right-[5%]">
        <Sparkle size={20} color="#D62027" opacity={0.35} />
      </FloatingElement>
      <FloatingElement delay={0} duration={7.5} x={14} y={18} className="top-[45%] left-[3%]">
        <Crescent size={24} color="#D62027" opacity={0.3} />
      </FloatingElement>
      <FloatingElement delay={1.5} duration={6.5} x={10} y={12} className="top-[60%] right-[6%]">
        <Ring size={22} color="#5BA240" opacity={0.3} />
      </FloatingElement>
      <FloatingElement delay={2.5} duration={8} x={8} y={10} className="bottom-[50%] left-[8%]">
        <Hexagon size={18} color="#5BA240" opacity={0.25} />
      </FloatingElement>
      <FloatingElement delay={3.5} duration={6} x={12} y={16} className="top-[15%] right-[8%]">
        <Circle size={14} color="#D62027" opacity={0.3} />
      </FloatingElement>
    </div>
  );
}

export function ReviewsFloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingElement delay={0} duration={6} x={12} y={18} className="top-[5%] right-[5%]">
        <Star size={30} color="#D62027" opacity={0.4} />
      </FloatingElement>
      <FloatingElement delay={1.5} duration={7} x={8} y={10} className="top-[20%] left-[3%]">
        <Circle size={20} color="#5BA240" opacity={0.35} />
      </FloatingElement>
      <FloatingElement delay={2.5} duration={5.5} x={10} y={14} className="bottom-[20%] right-[4%]">
        <Sparkle size={24} color="#5BA240" opacity={0.4} />
      </FloatingElement>
      <FloatingElement delay={1} duration={8} x={14} y={12} className="bottom-[8%] left-[5%]">
        <Diamond size={22} color="#D62027" opacity={0.3} />
      </FloatingElement>
      <FloatingElement delay={0.5} duration={6.5} x={16} y={20} className="top-[40%] right-[3%]">
        <Crescent size={26} color="#D62027" opacity={0.3} />
      </FloatingElement>
      <FloatingElement delay={2} duration={7.5} x={10} y={14} className="top-[55%] left-[4%]">
        <Leaf size={30} color="#5BA240" opacity={0.25} />
      </FloatingElement>
      <FloatingElement delay={3} duration={6} x={8} y={16} className="bottom-[40%] right-[6%]">
        <Star size={18} color="#D62027" opacity={0.35} />
      </FloatingElement>
      <FloatingElement delay={1.8} duration={8.5} x={12} y={10} className="top-[70%] left-[8%]">
        <Ring size={20} color="#5BA240" opacity={0.3} />
      </FloatingElement>
      <FloatingElement delay={3.5} duration={5} x={6} y={12} className="top-[12%] left-[10%]">
        <Hexagon size={16} color="#5BA240" opacity={0.25} />
      </FloatingElement>
    </div>
  );
}

export function OrderFloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingElement delay={0} duration={5} x={15} y={20} className="top-[10%] left-[6%]">
        <Star size={34} color="white" opacity={0.4} />
      </FloatingElement>
      <FloatingElement delay={1} duration={6} x={10} y={15} className="top-[15%] right-[8%]">
        <Leaf size={42} color="white" opacity={0.3} />
      </FloatingElement>
      <FloatingElement delay={2} duration={7} x={12} y={10} className="bottom-[20%] left-[5%]">
        <Sparkle size={28} color="white" opacity={0.4} />
      </FloatingElement>
      <FloatingElement delay={0.5} duration={5.5} x={8} y={18} className="bottom-[10%] right-[6%]">
        <Star size={26} color="white" opacity={0.35} />
      </FloatingElement>
      <FloatingElement delay={1.5} duration={6.5} x={14} y={12} className="top-[35%] left-[10%]">
        <Crescent size={30} color="white" opacity={0.3} />
      </FloatingElement>
      <FloatingElement delay={2.5} duration={5} x={10} y={16} className="top-[50%] right-[5%]">
        <Diamond size={22} color="white" opacity={0.35} />
      </FloatingElement>
      <FloatingElement delay={3} duration={7.5} x={16} y={14} className="bottom-[35%] left-[8%]">
        <Circle size={18} color="white" opacity={0.3} />
      </FloatingElement>
      <FloatingElement delay={0.8} duration={6} x={12} y={20} className="top-[65%] right-[10%]">
        <Hexagon size={20} color="white" opacity={0.25} />
      </FloatingElement>
      <FloatingElement delay={1.8} duration={8} x={8} y={10} className="bottom-[50%] right-[3%]">
        <Sparkle size={20} color="white" opacity={0.35} />
      </FloatingElement>
      <FloatingElement delay={2.8} duration={5.5} x={14} y={18} className="top-[25%] left-[3%]">
        <Ring size={24} color="white" opacity={0.3} />
      </FloatingElement>
    </div>
  );
}
