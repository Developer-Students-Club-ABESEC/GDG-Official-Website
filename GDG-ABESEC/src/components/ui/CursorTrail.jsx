import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const cursorX = useRef(0);
  const cursorY = useRef(0);

  const delayedX = useRef(0);
  const delayedY = useRef(0);

  const dotX = useRef(0);
  const dotY = useRef(0);

  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      cursorX.current = e.clientX;
      cursorY.current = e.clientY;
    };

    window.addEventListener("mousemove", handleMove);

    const loop = () => {
      delayedX.current += (cursorX.current - delayedX.current) * 0.18;
      delayedY.current += (cursorY.current - delayedY.current) * 0.18;

      dotX.current += (cursorX.current - dotX.current) * 0.3;
      dotY.current += (cursorY.current - dotY.current) * 0.3;

      const dx = dotX.current - delayedX.current;
      const dy = dotY.current - delayedY.current;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const maxDistance = 30; 

      if (distance > maxDistance) {
        const ratio = maxDistance / distance;
        dotX.current = delayedX.current + dx * ratio;
        dotY.current = delayedY.current + dy * ratio;
      }

      if (cursorRef.current) {
        cursorRef.current.style.left = delayedX.current + "px";
        cursorRef.current.style.top = delayedY.current + "px";
      }

      if (dotRef.current) {
        dotRef.current.style.left = dotX.current + "px";
        dotRef.current.style.top = dotY.current + "px";
      }

      requestAnimationFrame(loop);
    };

    loop();

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-[999999]"
        style={{
          left: 0,
          top: 0,
          transform: "translate(-50%, -50%)",
          filter: "drop-shadow(0px 6px 10px rgba(255, 215, 0, 0.5))",
        }}
      >
        <div className="w-6 h-6 border-[2px] border-[#7db7ff] rounded-full" />
      </div>

      
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[999999]"
        style={{
          left: 0,
          top: 0,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-[5px] h-[5px] bg-[#a6cfff] rounded-full" />
      </div>
    </>
  );
}
