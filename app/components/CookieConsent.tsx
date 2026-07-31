"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie, Settings2, X } from "lucide-react";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "uca-cookie-consent";

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] =
    useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(STORAGE_KEY);

    if (!savedConsent) {
      const timer = window.setTimeout(() => {
        setIsVisible(true);
      }, 700);

      return () => window.clearTimeout(timer);
    }

    try {
      const parsedConsent = JSON.parse(savedConsent) as CookiePreferences;
      setPreferences(parsedConsent);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
      setIsVisible(true);
    }
  }, []);

  const saveConsent = (cookiePreferences: CookiePreferences) => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(cookiePreferences)
    );

    setPreferences(cookiePreferences);
    setShowSettings(false);
    setIsVisible(false);

    window.dispatchEvent(
      new CustomEvent("cookie-consent-updated", {
        detail: cookiePreferences,
      })
    );
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectNonEssential = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const savePreferences = () => {
    saveConsent(preferences);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showSettings ? 1 : 0 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[99998] bg-black/60 backdrop-blur-sm ${
              showSettings ? "pointer-events-auto" : "pointer-events-none"
            }`}
            onClick={() => setShowSettings(false)}
          />

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 70 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-[99999] px-3 pb-3 sm:px-5 sm:pb-5"
          >
            <div className="mx-auto max-w-7xl overflow-hidden border border-white/10 bg-[#0A1414] text-white shadow-[0_25px_90px_rgba(0,0,0,0.45)]">
              {!showSettings ? (
                <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#C8EB00] text-[#0A1414]">
                    <Cookie className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="font-garage text-[28px] font-black uppercase leading-none text-[#C8EB00] sm:text-[34px]">
                      We Use Cookies
                    </p>

                    <p className="mt-3 max-w-3xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                      We use necessary cookies to make this website work.
                      Analytics and marketing cookies help us understand how
                      visitors use the site and improve your experience.
                    </p>

                    {/* <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                      <a
                        href="/privacy-policy"
                        className="font-semibold text-[#C8EB00] underline underline-offset-4 hover:text-white"
                      >
                        Privacy Policy
                      </a>

                      <a
                        href="/cookie-policy"
                        className="font-semibold text-[#C8EB00] underline underline-offset-4 hover:text-white"
                      >
                        Cookie Policy
                      </a>
                    </div> */}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row lg:w-[470px] lg:flex-wrap lg:justify-end">
                    <button
                      type="button"
                      onClick={acceptAll}
                      className="font-garage inline-flex min-h-12 items-center justify-center bg-[#C8EB00] px-6 py-3 text-[16px] font-black uppercase text-[#0A1414] transition hover:bg-white"
                    >
                      Accept All
                    </button>

                    <button
                      type="button"
                      onClick={rejectNonEssential}
                      className="font-garage inline-flex min-h-12 items-center justify-center border border-white/25 px-6 py-3 text-[16px] font-black uppercase text-white transition hover:border-[#C8EB00] hover:text-[#C8EB00]"
                    >
                      Reject Non-Essential
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowSettings(true)}
                      className="font-garage inline-flex min-h-12 items-center justify-center gap-2 border border-white/25 px-6 py-3 text-[16px] font-black uppercase text-white transition hover:border-[#C8EB00] hover:text-[#C8EB00]"
                    >
                      <Settings2 className="h-4 w-4" />
                      Manage
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-6">
                    <div>
                      <p className="font-neue text-xs font-bold uppercase tracking-[0.24em] text-[#C8EB00]">
                        Cookie Preferences
                      </p>

                      <h2 className="font-garage mt-3 text-[34px] font-black uppercase leading-none sm:text-[42px]">
                        Manage Your Cookies
                      </h2>

                      <p className="mt-4 max-w-3xl leading-7 text-white/65">
                        Necessary cookies are always enabled. You can choose
                        whether analytics and marketing cookies may be used.
                      </p>
                    </div>

                    <button
                      type="button"
                      aria-label="Close cookie settings"
                      onClick={() => setShowSettings(false)}
                      className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 text-white transition hover:border-[#C8EB00] hover:text-[#C8EB00]"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="mt-6 grid gap-4 lg:grid-cols-3">
                    <CookieOption
                      title="Necessary Cookies"
                      description="Required for core website functions, security and accessibility."
                      checked
                      disabled
                      onChange={() => undefined}
                    />

                    <CookieOption
                      title="Analytics Cookies"
                      description="Help us understand website usage and improve performance."
                      checked={preferences.analytics}
                      onChange={(checked) =>
                        setPreferences((current) => ({
                          ...current,
                          analytics: checked,
                        }))
                      }
                    />

                    <CookieOption
                      title="Marketing Cookies"
                      description="Help us measure campaigns and provide relevant marketing."
                      checked={preferences.marketing}
                      onChange={(checked) =>
                        setPreferences((current) => ({
                          ...current,
                          marketing: checked,
                        }))
                      }
                    />
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-end">
                    <button
                      type="button"
                      onClick={rejectNonEssential}
                      className="font-garage inline-flex min-h-12 items-center justify-center border border-white/25 px-6 py-3 text-[16px] font-black uppercase text-white transition hover:border-[#C8EB00] hover:text-[#C8EB00]"
                    >
                      Reject Non-Essential
                    </button>

                    <button
                      type="button"
                      onClick={savePreferences}
                      className="font-garage inline-flex min-h-12 items-center justify-center bg-[#C8EB00] px-7 py-3 text-[16px] font-black uppercase text-[#0A1414] transition hover:bg-white"
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function CookieOption({
  title,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div className="border border-white/10 bg-white/[0.04] p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-garage text-[23px] font-black uppercase leading-none text-white">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/60">
            {description}
          </p>
        </div>

        <button
          type="button"
          role="switch"
          aria-checked={checked}
          disabled={disabled}
          onClick={() => onChange(!checked)}
          className={`relative h-7 w-12 shrink-0 rounded-full transition ${
            checked ? "bg-[#C8EB00]" : "bg-white/20"
          } ${disabled ? "cursor-not-allowed opacity-70" : ""}`}
        >
          <span
            className={`absolute top-1 h-5 w-5 rounded-full bg-[#0A1414] transition-transform ${
              checked ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>

      {disabled && (
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#C8EB00]">
          Always Active
        </p>
      )}
    </div>
  );
}