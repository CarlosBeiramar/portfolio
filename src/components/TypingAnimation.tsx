"use client";

import { useEffect, useState } from "react";
import { cn } from "../lib/utils.ts";
import React from "react";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function TypingAnimation({
  text,
  duration = 200,
  className,
  variant = "h5",
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);

  const variantClasses = {
    h1: "text-5xl leading-[3.5rem]",
    h2: "text-4xl leading-[3rem]",
    h3: "text-3xl leading-[2.5rem]",
    h4: "text-2xl leading-[2rem]",
    h5: "text-xl leading-[1.5rem]",
    h6: "text-lg leading-[1.25rem]",
  };

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, text]);

  return (
    <div
      className={cn(
        "font-display text-center font-bold tracking-[-0.02em] drop-shadow-sm",
        variantClasses[variant],
        className,
      )}
    >
      {displayedText ? displayedText : text}
    </div>
  );
}
