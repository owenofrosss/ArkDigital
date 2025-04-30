"use client";
import { useEffect } from "react";

export default function CalendlyStandalonePage() {
  useEffect(() => {
    // Load Calendly script
    if (!document.getElementById("calendly-standalone-js")) {
      const script = document.createElement("script");
      script.id = "calendly-standalone-js";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
      <div className="w-full max-w-2xl p-4">
        <div
          className="calendly-inline-widget w-full"
          data-url="https://calendly.com/getarkdigital/discovery-call?primary_color=8a2be2&background_color=0f172a&text_color=ffffff"
          style={{ minWidth: 0, height: 800, maxWidth: '100vw', background: '#0f172a', borderRadius: 12 }}
        ></div>
      </div>
    </div>
  );
} 