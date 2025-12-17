import { useEffect, useRef, useState } from "react";

export default function ScrollProgressBar() {
  const [width, setWidth] = useState(0);
  const targetWidth = useRef(0); // desired width based on scroll

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    targetWidth.current = scrollPercent;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    let animationFrameId;

    const smoothUpdate = () => {
      // Linear interpolation: current width moves 10% toward target each frame
      setWidth((prev) => prev + (targetWidth.current - prev) * 0.1);
      animationFrameId = requestAnimationFrame(smoothUpdate);
    };

    smoothUpdate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[4px] bg-indigo-600 z-[9999] transition-all duration-150 ease-out"
      style={{ width: `${width}%` }}
    />
  );
}
