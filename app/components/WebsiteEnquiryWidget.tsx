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

          var widgetUrl =
            "${CRM_URL}/widget/${WIDGET_KEY}";
          var widgetOrigin = new URL(widgetUrl).origin;
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

            frame.id = "website-enquiry-widget-frame";
            frame.title = "Website Enquiry Chat";
            frame.referrerPolicy = "strict-origin";
            frame.setAttribute("allow", "clipboard-write");
            frame.loading = "lazy";

            frame.style.position = "fixed";
            frame.style.bottom = "14px";
            frame.style[widgetSide] = "14px";
            frame.style.width =
              "min(330px, calc(100vw - 16px))";
            frame.style.height =
              "min(500px, calc(100vh - 20px))";
            frame.style.border = "0";
            frame.style.borderRadius = "22px";
            frame.style.background = "transparent";
            frame.style.zIndex = "2147483000";
            frame.style.display = "none";
            frame.style.overflow = "hidden";

            var launcher = document.createElement("button");

            launcher.id =
              "website-enquiry-widget-launcher";
            launcher.type = "button";
            launcher.setAttribute(
              "aria-label",
              launcherText
            );
            launcher.setAttribute(
              "aria-expanded",
              "false"
            );

            launcher.innerHTML =
              '<span style="display:flex;width:30px;height:30px;border-radius:999px;align-items:center;justify-content:center;background:#ffffff;color:#00A884;font-size:17px;line-height:1">●</span>' +
              '<span>' + launcherText + '</span>';

            launcher.style.position = "fixed";
            launcher.style.bottom = "16px";
            launcher.style[widgetSide] = "16px";
            launcher.style.minHeight = "50px";
            launcher.style.padding = "0 18px 0 10px";
            launcher.style.border = "1px solid rgba(0,168,132,0.12)";
            launcher.style.borderRadius = "999px";
            launcher.style.background = "#ffffff";
            launcher.style.color = "#111B21";
            launcher.style.fontFamily =
              "Arial, sans-serif";
            launcher.style.fontSize = "13px";
            launcher.style.fontWeight = "700";
            launcher.style.cursor = "pointer";
            launcher.style.boxShadow =
              "0 12px 34px rgba(17,27,33,0.18)";
            launcher.style.zIndex = "2147483001";
            launcher.style.display = "inline-flex";
            launcher.style.alignItems = "center";
            launcher.style.justifyContent = "center";
            launcher.style.gap = "9px";

            var frameLoaded = false;

            launcher.addEventListener(
              "click",
              function () {
                if (!frameLoaded) {
                  frame.src = widgetUrl;
                  frameLoaded = true;
                }

                frame.style.display = "block";
                launcher.style.display = "none";
                launcher.setAttribute(
                  "aria-expanded",
                  "true"
                );
              }
            );

            window.addEventListener(
              "message",
              function (event) {
                if (
                  event.origin !== widgetOrigin ||
                  !event.data ||
                  event.data.type !==
                    "website-enquiry-widget-close"
                ) {
                  return;
                }

                if (
                  frame.contentWindow &&
                  event.source !== frame.contentWindow
                ) {
                  return;
                }

                frame.style.display = "none";
                launcher.style.display = "inline-flex";
                launcher.setAttribute(
                  "aria-expanded",
                  "false"
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
  );
}