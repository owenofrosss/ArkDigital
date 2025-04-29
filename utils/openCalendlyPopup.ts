export function openCalendlyPopup() {
  const Calendly: any = (window as any).Calendly;
  if (Calendly) {
    Calendly.initPopupWidget({
      url: "https://calendly.com/getarkdigital/discovery-call?primary_color=8a2be2&background_color=0f172a&text_color=ffffff"
    });
  } else {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      const Calendly: any = (window as any).Calendly;
      if (Calendly) {
        Calendly.initPopupWidget({
          url: "https://calendly.com/getarkdigital/discovery-call?primary_color=8a2be2&background_color=0f172a&text_color=ffffff"
        });
      }
    };
    document.body.appendChild(script);
  }
} 