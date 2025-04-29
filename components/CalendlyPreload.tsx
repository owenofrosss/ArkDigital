"use client";
import { useEffect } from "react";

export default function CalendlyPreload() {
  useEffect(() => {
    // Preload CSS
    if (!document.getElementById("calendly-preload-css")) {
      const link = document.createElement("link");
      link.id = "calendly-preload-css";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
    // Preload JS
    if (!document.getElementById("calendly-preload-js")) {
      const script = document.createElement("script");
      script.id = "calendly-preload-js";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
  return null;
} 