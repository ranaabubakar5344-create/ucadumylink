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

          function mountWidget() {
            if (document.getElementById("website-enquiry-widget-launcher")) {
              return;
            }

            var frame = document.createElement("iframe");

            frame.id = "website-enquiry-widget-frame";
            frame.title = "Website Enquiry Chat";
            frame.referrerPolicy = "strict-origin";
            frame.setAttribute("allow", "clipboard-write");
            frame.loading = "lazy";

            frame.style.position = "fixed";
            frame.style.bottom = "14px";
            frame.style[widgetSide] = "14px";
            frame.style.width = "min(330px, calc(100vw - 16px))";
            frame.style.height = "min(500px, calc(100vh - 20px))";
            frame.style.border = "0";
            frame.style.borderRadius = "22px";
            frame.style.background = "transparent";
            frame.style.zIndex = "2147483000";
            frame.style.display = "none";
            frame.style.overflow = "hidden";
            frame.style.boxShadow = "0 18px 45px rgba(17,27,33,0.22)";

            var launcher = document.createElement("button");

            launcher.id = "website-enquiry-widget-launcher";
            launcher.type = "button";
            launcher.setAttribute("aria-label", "Open chat");
            launcher.setAttribute("aria-expanded", "false");

            launcher.innerHTML = \`
              <span style="
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 48px;
                height: 48px;
                border-radius: 999px;
                background: linear-gradient(135deg, #00C38A, #00A884);
                color: #ffffff;
                flex-shrink: 0;
                box-shadow: 0 10px 22px rgba(0,168,132,0.28);
              ">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/>
                  <path d="M8 9h8"/>
                  <path d="M8 13h5"/>
                </svg>

                <span style="
                  position: absolute;
                  top: -3px;
                  right: -3px;
                  min-width: 18px;
                  height: 18px;
                  padding: 0 5px;
                  border-radius: 999px;
                  background: #FF4D4F;
                  color: #ffffff;
                  font-size: 10px;
                  font-weight: 700;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border: 2px solid #ffffff;
                  line-height: 1;
                ">1</span>
              </span>

              <span style="
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                text-align: left;
                gap: 2px;
                min-width: 0;
              ">
                <span style="
                  font-size: 13px;
                  font-weight: 800;
                  color: #111B21;
                  line-height: 1.1;
                  white-space: nowrap;
                ">Hi there 👋</span>

                <span style="
                  font-size: 11px;
                  font-weight: 600;
                  color: #667781;
                  line-height: 1.2;
                  white-space: nowrap;
                ">Need help? Chat with us</span>
              </span>
            \`;

            launcher.style.position = "fixed";
            launcher.style.bottom = "16px";
            launcher.style[widgetSide] = "16px";
            launcher.style.minHeight = "64px";
            launcher.style.padding = "8px 14px 8px 10px";
            launcher.style.border = "1px solid rgba(0,168,132,0.12)";
            launcher.style.borderRadius = "999px";
            launcher.style.background = "#ffffff";
            launcher.style.cursor = "pointer";
            launcher.style.boxShadow = "0 14px 38px rgba(17,27,33,0.18)";
            launcher.style.zIndex = "2147483001";
            launcher.style.display = "inline-flex";
            launcher.style.alignItems = "center";
            launcher.style.justifyContent = "center";
            launcher.style.gap = "10px";
            launcher.style.maxWidth = "calc(100vw - 24px)";
            launcher.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";

            launcher.addEventListener("mouseenter", function () {
              launcher.style.transform = "translateY(-2px)";
              launcher.style.boxShadow = "0 18px 42px rgba(17,27,33,0.22)";
            });

            launcher.addEventListener("mouseleave", function () {
              launcher.style.transform = "translateY(0)";
              launcher.style.boxShadow = "0 14px 38px rgba(17,27,33,0.18)";
            });

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