import React from "react";

/** Compact icon: a circle with < / > */
export function LogoMark({ size = 28, stroke = 2, color = "currentColor", accent = "#F6C440" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-label="Logo"
      style={{ color }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth={stroke} />
      <path d="M16 30 L10 24 L16 18" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M32 18 L38 24 L32 30" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 16 L26 32" fill="none" stroke={accent} strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  );
}

/** Wordmark: JAX Studio (edit the tspan text to change the name) */
export function LogoWordmark({ height = 32, color = "currentColor", accent = "#F6C440" }) {
  return (
    <svg
      height={height}
      viewBox="0 0 320 56"
      role="img"
      aria-label="JAX Studio"
      style={{ color }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 18 L4 28 L12 38" />
        <path d="M308 18 L316 28 L308 38" />
        <path d="M152 12 L168 44" stroke={accent} />
      </g>
      <text x="160" y="27" textAnchor="middle" fill="currentColor"
            style={{ fontFamily: "Inter, Sora, Poppins, Segoe UI, system-ui, Arial, sans-serif", fontWeight: 800, fontSize: 22, letterSpacing: ".5px" }}>
        <tspan>JAX</tspan>
      </text>
      <text x="160" y="46" textAnchor="middle" fill="currentColor"
            style={{ fontFamily: "Inter, Sora, Poppins, Segoe UI, system-ui, Arial, sans-serif", fontWeight: 600, fontSize: 14, opacity: .95 }}>
        <tspan>Studio</tspan>
      </text>
    </svg>
  );
}
