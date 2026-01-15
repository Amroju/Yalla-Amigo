import { motion } from "framer-motion";

interface FloatingShape {
  id: number;
  size: number;
  x: string;
  y: string;
  duration: number;
  delay: number;
  type: "circle" | "star" | "dot" | "ring";
  color: "primary" | "accent" | "muted";
}

const shapes: FloatingShape[] = [
  { id: 1, size: 12, x: "10%", y: "20%", duration: 6, delay: 0, type: "circle", color: "primary" },
  { id: 2, size: 8, x: "85%", y: "15%", duration: 8, delay: 1, type: "star", color: "accent" },
  { id: 3, size: 6, x: "75%", y: "60%", duration: 7, delay: 2, type: "dot", color: "primary" },
  { id: 4, size: 16, x: "5%", y: "70%", duration: 9, delay: 0.5, type: "ring", color: "accent" },
  { id: 5, size: 10, x: "90%", y: "80%", duration: 6, delay: 1.5, type: "circle", color: "muted" },
  { id: 6, size: 8, x: "20%", y: "85%", duration: 8, delay: 2.5, type: "star", color: "primary" },
  { id: 7, size: 14, x: "60%", y: "10%", duration: 7, delay: 0, type: "ring", color: "muted" },
  { id: 8, size: 6, x: "40%", y: "75%", duration: 5, delay: 1, type: "dot", color: "accent" },
];

function Star({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" />
    </svg>
  );
}

function Circle({ size, color }: { size: number; color: string }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: color,
      }}
    />
  );
}

function Dot({ size, color }: { size: number; color: string }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: color,
      }}
    />
  );
}

function Ring({ size, color }: { size: number; color: string }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        border: `2px solid ${color}`,
        backgroundColor: "transparent",
      }}
    />
  );
}

function ShapeComponent({ type, size, color }: { type: FloatingShape["type"]; size: number; color: string }) {
  switch (type) {
    case "star":
      return <Star size={size} color={color} />;
    case "circle":
      return <Circle size={size} color={color} />;
    case "dot":
      return <Dot size={size} color={color} />;
    case "ring":
      return <Ring size={size} color={color} />;
    default:
      return <Circle size={size} color={color} />;
  }
}

export function FloatingElements() {
  const getColor = (colorName: FloatingShape["color"]) => {
    switch (colorName) {
      case "primary":
        return "hsl(var(--primary) / 0.6)";
      case "accent":
        return "hsl(var(--accent) / 0.5)";
      case "muted":
        return "hsl(var(--muted-foreground) / 0.3)";
      default:
        return "hsl(var(--primary) / 0.5)";
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 10, 0, -10, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1, 0.9, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            animate={{
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: shape.duration / 2,
              delay: shape.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ShapeComponent
              type={shape.type}
              size={shape.size}
              color={getColor(shape.color)}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export function HeroFloatingElements() {
  const heroShapes: FloatingShape[] = [
    { id: 101, size: 20, x: "8%", y: "30%", duration: 5, delay: 0, type: "star", color: "primary" },
    { id: 102, size: 14, x: "92%", y: "25%", duration: 7, delay: 0.5, type: "ring", color: "accent" },
    { id: 103, size: 10, x: "15%", y: "70%", duration: 6, delay: 1, type: "circle", color: "accent" },
    { id: 104, size: 16, x: "88%", y: "65%", duration: 8, delay: 1.5, type: "star", color: "primary" },
    { id: 105, size: 8, x: "25%", y: "45%", duration: 5, delay: 0.3, type: "dot", color: "muted" },
    { id: 106, size: 12, x: "78%", y: "40%", duration: 6, delay: 0.8, type: "ring", color: "muted" },
  ];

  const getColor = (colorName: FloatingShape["color"]) => {
    switch (colorName) {
      case "primary":
        return "rgba(214, 32, 39, 0.7)";
      case "accent":
        return "rgba(91, 162, 64, 0.6)";
      case "muted":
        return "rgba(255, 255, 255, 0.4)";
      default:
        return "rgba(255, 255, 255, 0.5)";
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {heroShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0, 15, 0],
            x: [0, 8, 0, -8, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: shape.delay },
            scale: { duration: 0.8, delay: shape.delay },
            y: {
              duration: shape.duration,
              delay: shape.delay + 1,
              repeat: Infinity,
              ease: "easeInOut",
            },
            x: {
              duration: shape.duration * 1.2,
              delay: shape.delay + 1,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: shape.duration * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <ShapeComponent
              type={shape.type}
              size={shape.size}
              color={getColor(shape.color)}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
