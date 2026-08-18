import Script from "next/script";

const WIDGET_KEY = "cmsdnxkg30001gstymoiwsz75";
const CRM_URL = "https://whatsapp-enquiry-platform.vercel.app";

export default function WebsiteEnquiryWidget() {
  return (
    <Script id="website-enquiry-widget" strategy="afterInteractive">
      {`
        (function () {
          if (window.__websiteEnquiryWidgetLoaded) {
            return;
          }

          window.__websiteEnquiryWidgetLoaded = true;

          var widgetUrl = "${CRM_URL}/widget/${WIDGET_KEY}";
          var widgetOrigin = new URL(widgetUrl).origin;
          var widgetSide = "left";
          var launcherLabel = "Open chat support";

          function createLauncher() {
            var launcher = document.createElement("button");
            launcher.id = "website-enquiry-widget-launcher";
            launcher.type = "button";
            launcher.setAttribute("aria-label", launcherLabel);
            launcher.setAttribute("aria-expanded", "false");

            launcher.innerHTML =
              '<span style="position:relative;display:flex;align-items:center;justify-content:center;width:52px;height:52px;border-radius:999px;background:#C8EB00;box-shadow:0 12px 30px rgba(200,235,0,0.35);flex-shrink:0;">' +
                '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#0A1414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
                  '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path>' +
                  '<path d="M8 10h8"></path>' +
                  '<path d="M8 14h5"></path>' +
                '</svg>' +
                '<span style="position:absolute;top:-2px;right:-2px;min-width:20px;height:20px;padding:0 6px;border-radius:999px;background:#0A1414;color:#FFFFFF;font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center;border:2px solid #ffffff;">1</span>' +
              '</span>' +
              '<span style="display:flex;flex-direction:column;align-items:flex-start;line-height:1.1;min-width:0;">' +
                '<span style="font-size:14px;font-weight:800;color:#FFFFFF;white-space:nowrap;">Hi there 👋</span>' +
                '<span style="font-size:12px;font-weight:700;color:#C8EB00;white-space:nowrap;">Need help? Chat with us</span>' +
              '</span>';

            launcher.style.position = "fixed";
            launcher.style.bottom = "18px";
            launcher.style[widgetSide] = "18px";
            launcher.style.minHeight = "68px";
            launcher.style.padding = "8px 18px 8px 8px";
            launcher.style.border = "1px solid rgba(200,235,0,0.18)";
            launcher.style.borderRadius = "999px";
            launcher.style.background = "linear-gradient(135deg, #0A1414 0%, #113131 100%)";
            launcher.style.color = "#ffffff";
            launcher.style.fontFamily = "Inter, Arial, sans-serif";
            launcher.style.cursor = "pointer";
            launcher.style.boxShadow = "0 18px 45px rgba(10,20,20,0.32)";
            launcher.style.zIndex = "2147483001";
            launcher.style.display = "inline-flex";
            launcher.style.alignItems = "center";
            launcher.style.gap = "12px";
            launcher.style.maxWidth = "calc(100vw - 32px)";
            launcher.style.transition = "transform 0.18s ease, box-shadow 0.18s ease";

            launcher.addEventListener("mouseenter", function () {
              launcher.style.transform = "translateY(-2px)";
              launcher.style.boxShadow = "0 22px 50px rgba(10,20,20,0.36)";
            });

            launcher.addEventListener("mouseleave", function () {
              launcher.style.transform = "translateY(0)";
              launcher.style.boxShadow = "0 18px 45px rgba(10,20,20,0.32)";
            });

            return launcher;
          }

          function createFrame() {
            var frame = document.createElement("iframe");
            frame.id = "website-enquiry-widget-frame";
            frame.title = "Website Enquiry Chat";
            frame.referrerPolicy = "strict-origin";
            frame.setAttribute("allow", "clipboard-write");
            frame.loading = "lazy";
            frame.style.position = "fixed";
            frame.style.bottom = "18px";
            frame.style[widgetSide] = "18px";
            frame.style.width = "min(340px, calc(100vw - 16px))";
            frame.style.height = "min(520px, calc(100vh - 20px))";
            frame.style.border = "0";
            frame.style.borderRadius = "22px";
            frame.style.background = "transparent";
            frame.style.zIndex = "2147483000";
            frame.style.display = "none";
            frame.style.overflow = "hidden";
            frame.style.boxShadow = "none";
            return frame;
          }

          function mountWidget() {
            if (document.getElementById("website-enquiry-widget-launcher")) {
              return;
            }

            var frame = createFrame();
            var launcher = createLauncher();
            var frameLoaded = false;

            launcher.addEventListener("click", function () {
              if (!frameLoaded) {
                frame.src = widgetUrl;
                frameLoaded = true;
              }

              frame.style.display = "block";
              launcher.style.display = "none";
              launcher.setAttribute("aria-expanded", "true");
            });

            window.addEventListener("message", function (event) {
              if (
                event.origin !== widgetOrigin ||
                !event.data ||
                event.data.type !== "website-enquiry-widget-close"
              ) {
                return;
              }

              if (frame.contentWindow && event.source !== frame.contentWindow) {
                return;
              }

              frame.style.display = "none";
              launcher.style.display = "inline-flex";
              launcher.setAttribute("aria-expanded", "false");
            });

            document.body.appendChild(frame);
            document.body.appendChild(launcher);
          }

          if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", mountWidget, { once: true });
          } else {
            mountWidget();
          }
        })();
      `}
    </Script>
  );
}