"use client";
import { useEffect, useState } from "react";

export default function CalendlyPreload() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div
      className="calendly-inline-widget hidden"
      data-url="https://calendly.com/owenofross/discovery-call?primary_color=8a2be2&background_color=0f172a&text_color=ffffff"
      style={{ minWidth: 320, height: 10 }}
    ></div>
  );
} 