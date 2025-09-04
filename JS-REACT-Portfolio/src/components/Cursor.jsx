// src/components/Cursor.jsx
import React, { useEffect, useRef } from "react";

const INTERACTIVE =
  "a, button, [role='button'], .projbutton, .chip, .icon-link, input, textarea, select, summary";

export default function Cursor() {
  const halo = useRef(null);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const f = useRef({ x: pos.current.x, y: pos.current.y });
  const raf = useRef(null);

  useEffect(() => {
    const el = halo.current;
    if (!el) return;

    const set = (x, y) => {
      // 24px halo → offset 12px to center on pointer
      el.style.setProperty("--hx", `${x - 12}px`);
      el.style.setProperty("--hy", `${y - 12}px`);
    };

    const onMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      el.classList.add("hover-halo--visible");

      if (e.target.closest(INTERACTIVE)) {
        el.classList.add("hover-halo--hover");
      } else {
        el.classList.remove("hover-halo--hover");
      }
    };

    const onDown = () => el.classList.add("hover-halo--down");
    const onUp = () => el.classList.remove("hover-halo--down");
    const onLeave = () => el.classList.remove("hover-halo--visible");

    const tick = () => {
      // smooth follow
      f.current.x += (pos.current.x - f.current.x) * 0.22;
      f.current.y += (pos.current.y - f.current.y) * 0.22;
      set(f.current.x, f.current.y);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("touchstart", () => el.classList.add("hover-halo--hide"), { passive: true });

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <div ref={halo} className="hover-halo" aria-hidden="true" />;
}
