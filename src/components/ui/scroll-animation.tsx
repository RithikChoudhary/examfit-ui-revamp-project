
"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number; // 0-1, percentage of element that must be visible
  animation?: "fade-up" | "fade-in" | "slide-in" | "scale-up";
  delay?: number; // delay in ms
}

export const AnimateOnScroll = ({
  children,
  className,
  threshold = 0.1,
  animation = "fade-up",
  delay = 0,
}: AnimateOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationClasses = {
    "fade-up": "opacity-0 translate-y-8 transition-all duration-700 ease-out",
    "fade-in": "opacity-0 transition-opacity duration-700 ease-out",
    "slide-in": "opacity-0 -translate-x-8 transition-all duration-700 ease-out",
    "scale-up": "opacity-0 scale-95 transition-all duration-700 ease-out",
  };

  const visibleClasses = "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <div
      ref={ref}
      className={cn(
        animationClasses[animation],
        isVisible && visibleClasses,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
