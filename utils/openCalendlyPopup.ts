export function openCalendlyPopup() {
  const Calendly: any = (window as any).Calendly;
  const url = "https://calendly.com/getarkdigital/discovery-call?primary_color=8a2be2&background_color=0f172a&text_color=ffffff";
  if (Calendly) {
    Calendly.initPopupWidget({
      url,
      // Calendly does not have a direct height option, but we can try to set the modal height after opening
    });
    setTimeout(() => {
      const modal = document.querySelector('.calendly-popup') as HTMLElement;
      if (modal) {
        modal.style.height = '90vh';
        modal.style.maxHeight = '90vh';
      }
      const iframe = document.querySelector('.calendly-popup iframe') as HTMLElement;
      if (iframe) {
        iframe.style.height = '90vh';
        iframe.style.maxHeight = '90vh';
      }
    }, 100);
  } else {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      const Calendly: any = (window as any).Calendly;
      if (Calendly) {
        Calendly.initPopupWidget({ url });
        setTimeout(() => {
          const modal = document.querySelector('.calendly-popup') as HTMLElement;
          if (modal) {
            modal.style.height = '90vh';
            modal.style.maxHeight = '90vh';
          }
          const iframe = document.querySelector('.calendly-popup iframe') as HTMLElement;
          if (iframe) {
            iframe.style.height = '90vh';
            iframe.style.maxHeight = '90vh';
          }
        }, 100);
      }
    };
    document.body.appendChild(script);
  }
} 