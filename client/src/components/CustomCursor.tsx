import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// The shawarma emoji SVG as a custom cursor (desktop only)
// On mobile: touch ripple effect instead

interface RippleItem {
  id: number;
  x: number;
  y: number;
}

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [ripples, setRipples] = useState<RippleItem[]>([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if it's a touch device
    const hasTouch = window.matchMedia("(hover: none)").matches;
    setIsTouchDevice(hasTouch);
  }, []);

  // Desktop: custom cursor
  useEffect(() => {
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleHoverIn = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[data-hoverable]")
      ) {
        setIsHovering(true);
      }
    };

    const handleHoverOut = () => setIsHovering(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleHoverIn);
    document.addEventListener("mouseout", handleHoverOut);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleHoverIn);
      document.removeEventListener("mouseout", handleHoverOut);
    };
  }, [isTouchDevice, isVisible]);

  // Mobile: touch ripple
  const handleTouch = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x: touch.clientX, y: touch.clientY }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 700);
  }, []);

  useEffect(() => {
    if (!isTouchDevice) return;
    window.addEventListener("touchstart", handleTouch);
    return () => window.removeEventListener("touchstart", handleTouch);
  }, [isTouchDevice, handleTouch]);

  return (
    <>
      {/* Desktop Custom Cursor */}
      {!isTouchDevice && isVisible && (
        <motion.div
          className="fixed z-[9999] pointer-events-none select-none"
          animate={{
            x: pos.x - (isHovering ? 24 : 16),
            y: pos.y - (isHovering ? 24 : 16),
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
          style={{ top: 0, left: 0 }}
        >
          <span
            style={{
              fontSize: isHovering ? "32px" : "22px",
              display: "block",
              transition: "font-size 0.2s",
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
            }}
          >
            🥙
          </span>
        </motion.div>
      )}

      {/* Mobile Touch Ripple */}
      {isTouchDevice && (
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.div
              key={ripple.id}
              className="fixed z-[9999] pointer-events-none rounded-full"
              style={{
                left: ripple.x - 20,
                top: ripple.y - 20,
                width: 40,
                height: 40,
                background: "radial-gradient(circle, rgba(214,32,39,0.35) 0%, transparent 70%)",
                border: "2px solid rgba(214,32,39,0.5)",
              }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          ))}
        </AnimatePresence>
      )}
    </>
  );
}
