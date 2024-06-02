"use client";

import { useEffect, useRef } from "react";
import { useAnimate } from "framer-motion";

export default function WavingHand() {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      scope.current,
      { transform: "rotateZ(15deg)" },
      { repeat: Infinity, duration: 0.4, repeatType: "reverse" }
    );
  }, [animate, scope]);
  return (
    <span
      ref={scope}
      style={{
        transformOrigin: "bottom right",
      }}
      role="img"
      aria-labelledby="wave"
    >
      👋🏻
    </span>
  );
}
