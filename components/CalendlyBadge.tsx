import { useEffect } from "react";

export default function CalendlyBadge() {
  useEffect(() => {
    // Add Calendly CSS if not already present
    if (!document.getElementById("calendly-badge-css")) {
      const link = document.createElement("link");
      link.id = "calendly-badge-css";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
    // Add Calendly script if not already present
    if (!document.getElementById("calendly-badge-script")) {
      const script = document.createElement("script");
      script.id = "calendly-badge-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        // @ts-ignore
        const Calendly: any = window.Calendly;
        if (Calendly) {
          Calendly.initBadgeWidget({
            url: "https://calendly.com/getarkdigital/discovery-call?primary_color=8a2be2&background_color=0f172a&text_color=ffffff",
            text: "Schedule Call",
            color: "#8a2be2",
            textColor: "#ffffff",
          });
        }
      };
      document.body.appendChild(script);
    } else {
      // @ts-ignore
      const Calendly: any = window.Calendly;
      if (Calendly) {
        Calendly.initBadgeWidget({
          url: "https://calendly.com/getarkdigital/discovery-call?primary_color=8a2be2&background_color=0f172a&text_color=ffffff",
          text: "Schedule Call",
          color: "#8a2be2",
          textColor: "#ffffff",
        });
      }
    }
  }, []);
  return null;
} 