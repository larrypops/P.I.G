"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "default" | "soft" | "card";
};

export function Reveal({ children, className = "", delay = 0, variant = "default" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const hiddenState =
    variant === "card"
      ? "translate-y-5 scale-[0.985] opacity-0"
      : variant === "soft"
        ? "translate-y-4 opacity-0"
        : "translate-y-8 opacity-0";

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${visible ? "translate-y-0 scale-100 opacity-100" : hiddenState} motion-reduce:transform-none motion-reduce:opacity-100 ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
