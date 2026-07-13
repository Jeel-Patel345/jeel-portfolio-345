import { useEffect, useState } from "react";

/**
 * Counts up from 0 to `target` over `duration` ms once `start` is true.
 * Supports numeric strings like "10+" by stripping the suffix.
 */
export function useCounter(target: string, duration = 1800, start = false) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!start) return;

    // Extract numeric part and suffix (e.g. "10+" → num=10, suffix="+")
    const match = target.match(/^(\d+)(.*)$/);
    if (!match) { setDisplay(target); return; }

    const num = parseInt(match[1], 10);
    const suffix = match[2];

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * num) + suffix);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return display;
}
