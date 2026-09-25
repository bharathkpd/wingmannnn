"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const touch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (touch || reducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    setIsTouchDevice(false);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorEl = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorEl) {
        setCursorText(cursorEl.dataset.cursor || "");
        setIsHovered(true);
        return;
      }

      if (target.closest("button, a")) {
        setCursorText("");
        setIsHovered(true);
        return;
      }

      if (target.closest("img")) {
        setCursorText("EXPLORE");
        setIsHovered(true);
        return;
      }

      setCursorText("");
      setIsHovered(false);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[10000] mix-blend-difference transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div
        className={`flex items-center justify-center rounded-full transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 ${
          cursorText
            ? "h-16 w-16 bg-white text-[#171318]"
            : isHovered
            ? "h-8 w-8 bg-white/80"
            : "h-3.5 w-3.5 bg-white"
        }`}
      >
        {cursorText && (
          <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-black select-none">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
