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
          var widgetSide = "right";
          var launcherLabel = "Open chat support";

          function createLauncher() {
            var launcher = document.createElement("button");
            launcher.id = "website-enquiry-widget-launcher";
            launcher.type = "button";
            launcher.setAttribute("aria-label", launcherLabel);
            launcher.setAttribute("aria-expanded", "false");

            var avatarUrl = "/chat.png";

            launcher.innerHTML =
              '<span style="position:relative;display:flex;align-items:center;justify-content:center;width:64px;height:64px;border-radius:999px;background:#FFFFFF;box-shadow:0 0 0 2px rgba(200,235,0,0.95);flex-shrink:0;overflow:visible;">' +
                '<span style="display:block;width:58px;height:58px;border-radius:999px;overflow:hidden;background:#F7F5EE;">' +
                  '<img src="' + avatarUrl + '" alt="UCA Admissions Assistant" style="display:block;width:100%;height:100%;object-fit:cover;" />' +
                '</span>' +
                '<span style="position:absolute;right:-1px;bottom:2px;width:14px;height:14px;border-radius:999px;background:#C8EB00;border:2px solid #0A1414;box-shadow:0 0 0 2px #FFFFFF;"></span>' +
              '</span>' +

              '<span style="display:flex;min-width:0;flex:1;flex-direction:column;align-items:flex-start;justify-content:center;text-align:left;">' +
                '<span style="display:flex;align-items:center;gap:6px;font-size:17px;line-height:1.15;font-weight:800;color:#FFFFFF;white-space:nowrap;">Hi there <span aria-hidden="true">👋</span></span>' +
                '<span style="margin-top:5px;font-size:13px;line-height:1.35;font-weight:600;color:#D8DEDD;white-space:nowrap;">Need help?</span>' +
                '<span style="font-size:13px;line-height:1.35;font-weight:800;color:#C8EB00;white-space:nowrap;">Chat with us.</span>' +
              '</span>' +

              '<span style="display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:999px;border:2px solid #C8EB00;color:#C8EB00;flex-shrink:0;background:rgba(200,235,0,0.04);">' +
                '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
                  '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path>' +
                  '<path d="M8 10h8"></path>' +
                  '<path d="M8 14h5"></path>' +
                '</svg>' +
              '</span>' +

              '<span style="position:absolute;left:50%;bottom:-28px;transform:translateX(-50%);display:flex;align-items:center;gap:7px;padding:7px 12px;border-radius:10px;background:#FFFFFF;color:#0A1414;font-size:11px;font-weight:700;box-shadow:0 8px 24px rgba(10,20,20,0.14);white-space:nowrap;">' +
                '<span style="width:8px;height:8px;border-radius:999px;background:#C8EB00;"></span>' +
                'We&#39;re online' +
              '</span>';

            launcher.style.position = "fixed";
            launcher.style.bottom = "52px";
            launcher.style[widgetSide] = "18px";
            launcher.style.width = "min(330px, calc(100vw - 36px))";
            launcher.style.minHeight = "94px";
            launcher.style.padding = "14px 16px";
            launcher.style.border = "1px solid rgba(200,235,0,0.34)";
            launcher.style.borderRadius = "28px";
            launcher.style.background = "linear-gradient(135deg, #0A1414 0%, #113131 100%)";
            launcher.style.color = "#FFFFFF";
            launcher.style.fontFamily = "Inter, Arial, sans-serif";
            launcher.style.cursor = "pointer";
            launcher.style.boxShadow = "0 20px 48px rgba(10,20,20,0.30)";
            launcher.style.zIndex = "2147483001";
            launcher.style.display = "flex";
            launcher.style.alignItems = "center";
            launcher.style.gap = "14px";
            launcher.style.maxWidth = "calc(100vw - 36px)";
            launcher.style.transition =
              "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease";

            launcher.addEventListener("mouseenter", function () {
              launcher.style.transform = "translateY(-3px)";
              launcher.style.boxShadow = "0 24px 58px rgba(10,20,20,0.36)";
              launcher.style.borderColor = "rgba(200,235,0,0.72)";
            });

            launcher.addEventListener("mouseleave", function () {
              launcher.style.transform = "translateY(0)";
              launcher.style.boxShadow = "0 20px 48px rgba(10,20,20,0.30)";
              launcher.style.borderColor = "rgba(200,235,0,0.34)";
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
              launcher.style.display = "flex";
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