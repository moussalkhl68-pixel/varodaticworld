"use client";

export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/447476603520?text=Hello%2C%20I%20need%20help%20with%20Varodatic%20IPTV"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="32"
        height="32"
        fill="white"
      >
        <path d="M24 4C12.95 4 4 12.95 4 24c0 3.6.97 7 2.64 9.95L4 44l10.3-2.6A19.93 19.93 0 0 0 24 44c11.05 0 20-8.95 20-20S35.05 4 24 4zm0 36c-3.1 0-6.03-.8-8.57-2.2l-.6-.36-6.12 1.55 1.6-5.96-.4-.62A15.94 15.94 0 0 1 8 24c0-8.84 7.16-16 16-16s16 7.16 16 16-7.16 16-16 16zm8.73-11.9c-.48-.24-2.82-1.39-3.26-1.55-.44-.16-.76-.24-1.08.24-.32.48-1.24 1.55-1.52 1.87-.28.32-.56.36-1.04.12-.48-.24-2.02-.74-3.85-2.36-1.42-1.26-2.38-2.82-2.66-3.3-.28-.48-.03-.74.21-.98.22-.22.48-.56.72-.84.24-.28.32-.48.48-.8.16-.32.08-.6-.04-.84-.12-.24-1.08-2.6-1.48-3.56-.38-.92-.78-.8-1.08-.8h-.92c-.32 0-.84.12-1.28.6-.44.48-1.68 1.64-1.68 4s1.72 4.64 1.96 4.96c.24.32 3.38 5.16 8.2 7.24 1.14.5 2.04.8 2.74 1.02 1.15.36 2.2.3 3.02.18.92-.14 2.82-1.15 3.22-2.27.4-1.12.4-2.08.28-2.28-.12-.2-.44-.32-.92-.56z"/>
      </svg>
    </a>
  );
}
