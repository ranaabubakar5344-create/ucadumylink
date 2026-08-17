import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "./components/Footer";
import AnnouncementPopup from "./components/AnnouncementPopup";
import WhatsAppFloat from "./components/WhatsAppFloat";
import CookieConsent from "./components/CookieConsent";
import Script from "next/script";
const garageFallback = Oswald({

  variable: "--font-garage",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const neueFallback = Inter({
  variable: "--font-neue",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "UCA Delivered By FEUC UAQ | University for the Creative Arts",
  description:
    "Study creative arts, business, computing, design, and media programmes at UCA Delivered By FEUC UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${garageFallback.variable} ${neueFallback.variable} h-full antialiased`}
    >

    <body className="min-h-full flex flex-col font-neue">
  <AnnouncementPopup />

  <Navbar />

  <WhatsAppFloat />

  {children}

  <CookieConsent />

  <Footer />

  <Script id="website-enquiry-widget" strategy="afterInteractive">
    {`
(function () {
  if (window.__websiteEnquiryWidgetLoaded) {
    return;
  }

  window.__websiteEnquiryWidgetLoaded = true;

  var widgetUrl = "https://whatsapp-enquiry-platform.vercel.app/widget/cmsdnxkg30001gstymoiwsz75";
  var widgetColor = "#0aceff";
  var launcherText = "Chat with us";
  var widgetSide = "left";

  function mountWidget() {
    if (
      document.getElementById(
        "website-enquiry-widget-launcher"
      )
    ) {
      return;
    }

    var frame = document.createElement("iframe");

    frame.id =
      "website-enquiry-widget-frame";

    frame.title =
      "Website Enquiry Chat";

    frame.referrerPolicy =
      "strict-origin";

    frame.setAttribute(
      "allow",
      "clipboard-write"
    );

    frame.loading = "lazy";

    frame.style.position = "fixed";
    frame.style.bottom = "88px";
    frame.style[widgetSide] = "16px";
    frame.style.width =
      "min(440px, calc(100vw - 24px))";
    frame.style.height =
      "min(760px, calc(100vh - 104px))";
    frame.style.border = "0";
    frame.style.borderRadius = "28px";
    frame.style.background = "transparent";
    frame.style.zIndex = "2147483000";
    frame.style.display = "none";

    var launcher =
      document.createElement("button");

    launcher.id =
      "website-enquiry-widget-launcher";

    launcher.type = "button";
    launcher.textContent = launcherText;

    launcher.setAttribute(
      "aria-label",
      launcherText
    );

    launcher.setAttribute(
      "aria-expanded",
      "false"
    );

    launcher.style.position = "fixed";
    launcher.style.bottom = "18px";
    launcher.style[widgetSide] = "18px";
    launcher.style.minHeight = "54px";
    launcher.style.maxWidth =
      "calc(100vw - 36px)";
    launcher.style.padding = "0 20px";
    launcher.style.border = "0";
    launcher.style.borderRadius = "999px";
    launcher.style.background = widgetColor;
    launcher.style.color = "#ffffff";
    launcher.style.fontFamily =
      "Arial, sans-serif";
    launcher.style.fontSize = "14px";
    launcher.style.fontWeight = "700";
    launcher.style.cursor = "pointer";
    launcher.style.boxShadow =
      "0 14px 40px rgba(15,23,42,0.24)";
    launcher.style.zIndex = "2147483001";

    var frameLoaded = false;

    launcher.addEventListener(
      "click",
      function () {
        var currentlyOpen =
          frame.style.display !== "none";

        if (currentlyOpen) {
          frame.style.display = "none";
          launcher.textContent = launcherText;

          launcher.setAttribute(
            "aria-label",
            launcherText
          );

          launcher.setAttribute(
            "aria-expanded",
            "false"
          );

          return;
        }

        if (!frameLoaded) {
          frame.src = widgetUrl;
          frameLoaded = true;
        }

        frame.style.display = "block";
        launcher.textContent = "Close chat";

        launcher.setAttribute(
          "aria-label",
          "Close chat"
        );

        launcher.setAttribute(
          "aria-expanded",
          "true"
        );
      }
    );

    document.body.appendChild(frame);
    document.body.appendChild(launcher);
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      mountWidget,
      { once: true }
    );
  } else {
    mountWidget();
  }
})();
    `}
  </Script>
</body>
    </html>
  );
}