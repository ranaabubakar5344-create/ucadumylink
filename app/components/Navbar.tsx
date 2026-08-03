'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ReactNode, SVGProps } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, Search, Menu, X } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
/*
UCA BRAND COLORS
Black: #0A1414
Green: #C8EB00
Fluro: #F0FF00
White: #FFFFFF

Fonts:
Headings/Nav/Button: Garage Gothic fallback
Body: Neue Haas Grotesk fallback
*/

type NavItem = {
  label: string;
  href: string;
  display?: ReactNode;
};

type Programme = { label: string; href: string };
type SubCategory = { label: string; href: string; items: Programme[] };
type MegaSection = {
  label: string;
  href: string;
  image: string;
  columns: {
    title: string;
    lists: SubCategory[];
  }[];
};

const headingFont =
  "[font-family:'Garage_Gothic','Arial_Narrow',Impact,sans-serif]";
const bodyFont =
  "[font-family:'Neue_Haas_Grotesk',Arial,Helvetica,sans-serif]";

const MEGA_MENUS: Record<string, MegaSection> = {
PROGRAMMES: {
  label: "PROGRAMMES",
  href: "/programmes",
  image: "/teamwork.jpg",
  columns: [
    {
      title: "",
      lists: [
        {
          label: "Undergraduate Programmes",
          href: "#",
          items: [
            {
              label: "BSc (Hons) Computer Science",
              href: "/programmes/computer-science",
            },
            {
              label: "BSc (Hons) Games Development",
              href: "/programmes/game-development",
            },
            {
              label: "BA (Hons) Graphic Design",
              href: "/programmes/graphic-design",
            },
            {
              label: "BA (Hons) Business & Management",
              href: "/programmes/business-management",
            },
            {
              label: "BA (Hons) Visual Communication",
              href: "/programmes/visual-communication",
            },
            {
              label: "BA (Hons) Digital Marketing & Social Media",
              href: "/programmes/digitalmarketing-socialmedia",
            },
          ],
        },
      ],
    },
    {
      title: "",
      lists: [
        {
          label: "Postgraduate Programmes",
          href: "#",
          items: [
            {
              label: "MBA",
              href: "/programmes/mba",
            },
          ],
        },
      ],
    },
    {
      title: "",
      lists: [
        {
          label: "Entry Routes",
          href: "#",
          items: [
            {
              label: "Integrated Foundation Year",
              href: "/programmes/integrated-foundation",
            },
            {
              label: "Integrated Pre-Masters",
              href: "/programmes/integrated-premasters",
            },
          ],
        },
      ],
    },
  ],
},
  EXPERIENCE: {
    label: "EXPERIENCE",
    href: "#",
    image: "/cew.jpg",
    columns: [
      {
        title: "Campus",
        lists: [
          {
            label: "Life at Campus",
            href: "#",
            items: [
              { label: "Academic Support", href: "/academicsupport" },
              { label: "Student Well Being", href: "/studentwellbeing" },
              { label: "Student Clubs", href: "/studentclubs" },
            ],
          },
        ],
      },
     
    ],
  },

  ADMISSIONS: {
    label: "ADMISSIONS",
    href: "#",
    image: "/adm.webp",
    columns: [
      {
        title: "Apply",
        lists: [
          {
            label: "How to Apply",
            href: "#",
            items: [
              { label: "Entry Requirements", href: "/entry-requirements" },
          { label: "English Language Requirements", href: "/english-language-requirements" },
          { label: "Tuition Fees", href: "/tuition-fees" },

              { label: "Contact Admissions", href: "/admissions" },

            ],
          },
        ],
      },
    
    ],
  },



  SCHOLARSHIPS: {
    label: "SCHOLARSHIPS",
    href: "#",
    image: "/CampusFront.jpg",
    columns: [
      {
        title: "",
        lists: [
          {
            label: "FIND SCHOLARSHIPS",
            href: "#",
            items: [
              { label: "SCHOLARSHIPS", href: "/scholarships" },
           
            ],
          },
        ],
      },
    
    ],
  },


  "CONNECT": {
    label: "CONNECT",
    href: "#",
    image: "/indus.webp",
    columns: [
      {
        title: "",
        lists: [
          {
            label: "CONNECT",
            href: "",
            items: [
              { label: "School Partnerships", href: "/schoolpatnership" },
              { label: "Community Engagements", href: "/communityengagements" },
            ],
          },
        ],
      },
    ],
  },

  "ABOUT US": {
    label: "ABOUT US",
    href: "#",
    image: "/about.jpg",
    columns: [
      {
        title: "Who We Are",
        lists: [
          {
            label: "About",
            href: "#",
            items: [
              { label: "About UCA FEUC", href: "/about-feuc" },
              { label: "UCA UK", href: "/about-uca-uk" },
              // { label: "Why Choose UCA-UAE", href: "/whychooseus" },
              { label: "Policies & Regulations", href: "/policies" },
            ],
          },
        ],
      },
    
    ],
  },
};

const navItems: NavItem[] = [
  { label: "PROGRAMMES", href: "#", display: <>PROGRAMMES</> },
  { label: "EXPERIENCE", href: "#" },
  { label: "ADMISSIONS", href: "/admissions" },
  { label: "SCHOLARSHIPS", href: "#" },

  { label: "CONNECT", href: "#" },

  { label: "ABOUT US", href: "#", display: <>ABOUT US</> },
];

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.7 5.3c1 .9 2.2 1.4 3.5 1.5V10c-1.4 0-2.8-.4-4-1.2v6.4c0 3.2-2.6 5.8-5.8 5.8S4.6 18.4 4.6 15.2c0-3.2 2.6-5.8 5.8-5.8.3 0 .6 0 .9.1v3.3c-.3-.2-.6-.3-1-.3-1.4 0-2.6 1.1-2.6 2.6s1.1 2.6 2.6 2.6 2.6-1.1 2.6-2.6V3.9h3.8c.1.5.4 1 .7 1.4z" />
    </svg>
  );
}

function WeChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9.7 4.5C5.8 4.5 2.6 7 2.6 10.2c0 1.8 1 3.4 2.6 4.4l-.7 2.1 2.3-1.2c.8.2 1.5.3 2.3.3.2 0 .4 0 .6 0-.5-.7-.8-1.5-.8-2.4 0-2.9 2.8-5.2 6.2-5.2.3 0 .5 0 .8 0C15.6 6.1 12.9 4.5 9.7 4.5zm-2 4.2c.5 0 .9.3.9.8s-.4.8-.9.8-.9-.3-.9-.8.4-.8.9-.8zm4 0c.5 0 .9.3.9.8s-.4.8-.9.8-.9-.3-.9-.8.4-.8.9-.8z" />
      <path d="M15.2 8.9c-3 0-5.5 1.9-5.5 4.4s2.5 4.4 5.5 4.4c.6 0 1.2-.1 1.8-.2l2 1-.6-1.8c1.2-.8 2-2 2-3.4 0-2.5-2.5-4.4-5.2-4.4zM13.4 12c.4 0 .8.3.8.7s-.3.7-.8.7-.8-.3-.8-.7.3-.7.8-.7zm3.4 0c.4 0 .8.3.8.7s-.3.7-.8.7-.8-.3-.8-.7.3-.7.8-.7z" />
    </svg>
  );
}

function DesktopMegaNav({
  openKey,
  setOpenKey,
  cancelClose,
  scheduleClose,
}: {
  openKey: string | null;
  setOpenKey: (v: string | null) => void;
  cancelClose: () => void;
  scheduleClose: () => void;
}) {
  return (
<nav className="hidden w-full items-center justify-between gap-3 whitespace-nowrap lg:flex xl:gap-5">      {navItems.map((item) => {
        const isOpen = openKey === item.label;

        return (
          <div
            key={item.label}
            className="relative shrink-0"
            onMouseEnter={() => {
              cancelClose();
              setOpenKey(item.label);
            }}
            onMouseLeave={scheduleClose}
          >
            <Link
              href={item.href}
              className={`${headingFont} relative inline-flex items-center gap-2 whitespace-nowrap text-white hover:text-[#C8EB00] text-[16px] xl:text-[18px] 2xl:text-[20px] font-black uppercase tracking-[-0.02em] leading-none transition-colors`}
            >
              <span>{item.display ?? item.label}</span>
              <span className="text-[#C8EB00] leading-none -translate-y-[1px]">
                +
              </span>

              <span
                className={`absolute left-0 -bottom-3 h-[3px] w-full bg-[#C8EB00] transition-opacity ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
              />
            </Link>
          </div>
        );
      })}
    </nav>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileOpenKey, setMobileOpenKey] = useState<string | null>(null);
  const [showFloatingApply, setShowFloatingApply] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);
const [isMainSticky, setIsMainSticky] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenKey(null), 130);  
  };      

  const closeAll = () => {
    setOpen(false);
    setMobileOpenKey(null);
    setOpenKey(null);
  };
useEffect(() => {
  const handleScroll = () => {
    setIsMainSticky(window.scrollY > 44);
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingApply(window.scrollY > 44);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mega = openKey ? MEGA_MENUS[openKey] : null;

  return (
    <>
      {showFloatingApply && (
<a
  href="https://admissions.uca.feuc.ae/registration"
  target="_blank"
  rel="noopener noreferrer"
  className={`${headingFont} fixed right-0 top-1/2 -translate-y-1/2 z-[9999] flex items-center justify-center bg-[#C8EB00] text-[#0A1414] w-[46px] min-h-[112px] px-3 py-3 rounded-l-[14px] shadow-[0_14px_34px_rgba(0,0,0,0.28)] font-black uppercase tracking-[0.08em] text-[14px] border border-white/10 border-r-0 hover:bg-[#F0FF00] transition-all duration-300`}
  style={{
    writingMode: "vertical-rl",
    textOrientation: "mixed",
  }}
>
  Apply Now

  
</a>


      )}
 
  
      <header className={`${bodyFont} w-full`}>
<div className="bg-[#C8EB00] border-b border-[#0A1414]">
  <div className="mx-auto max-w-7xl px-4">

    {/* DESKTOP */}
<div className="flex h-11 w-full items-center px-3 sm:px-5">
  {/* DESKTOP */}
  <div className="hidden w-full items-center justify-between md:flex">
    {/* LEFT SIDE */}
    <div className="flex h-11 items-center text-[#0A1414]">
  <div className="flex items-center gap-4 px-5">
    <Link
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="TikTok"
      className="transition-colors duration-300 hover:text-white"
    >
      <TikTokIcon className="h-5 w-5" />
    </Link>

    <Link
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="transition-colors duration-300 hover:text-white"
    >
      <FaFacebookF className="h-5 w-5" />
    </Link>

    <Link
      href="https://www.instagram.com/uca.uae/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="transition-colors duration-300 hover:text-white"
    >
      <FaInstagram className="h-5 w-5" />
    </Link>

    <Link
      href="https://www.linkedin.com/company/uca-feuc-ae/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="transition-colors duration-300 hover:text-white"
    >
      <FaLinkedinIn className="h-5 w-5" />
    </Link>

    <Link
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="YouTube"
      className="transition-colors duration-300 hover:text-white"
    >
      <FaYoutube className="h-5 w-5" />
    </Link>
  </div>
</div>

    {/* RIGHT SIDE BUTTONS */}
    <div className="flex h-11 items-center gap-3">
    <Link  href="https://admissions.uca.feuc.ae/"
    target="blank"
  className={`${headingFont} flex h-11 items-center justify-center bg-[#0A1414] px-9 text-[14px] font-black uppercase tracking-[0.04em] text-[#C8EB00] transition hover:bg-white hover:text-[#0A1414]`}
>
  Staff Login
</Link>
     <Link
        href="https://lms.uca.feuc.ae/login/index.php"
        target="_blank"
        rel="noopener noreferrer"
        className={`${headingFont} flex h-11 items-center justify-center bg-[#0A1414] px-9 text-[14px] font-black uppercase tracking-[0.04em] text-[#C8EB00] transition hover:bg-white hover:text-[#0A1414]`}
      >
        Student Login
      </Link>
      <Link
        href="https://admissions.uca.feuc.ae/registration"
        target="_blank"
        rel="noopener noreferrer"
        className={`${headingFont} flex h-11 items-center justify-center bg-[#0A1414] px-9 text-[14px] font-black uppercase tracking-[0.04em] text-[#C8EB00] transition hover:bg-white hover:text-[#0A1414]`}
      >
        Apply Now
      </Link>

      <Link
        href="https://admissions.uca.feuc.ae/enquiry_form"
        target="_blank"
        rel="noopener noreferrer"
        className={`${headingFont} flex h-11 items-center justify-center bg-[#0A1414] px-9 text-[14px] font-black uppercase tracking-[0.04em] text-[#C8EB00] transition hover:bg-white hover:text-[#0A1414]`}
      >
        Enquire Now
      </Link>

  
    </div>
  </div>

  {/* MOBILE */}
 {/* MOBILE TOP BAR */}
{/* MOBILE TOP BAR */}
<div className="flex h-11 w-full items-center justify-end bg-[#C8EB00] px-3 md:hidden">
  <div className="flex items-center gap-5">
    {/* STAFF */}
    <Link
      href="https://admissions.uca.feuc.ae/"
      target="_blank"
      rel="noopener noreferrer"
      className={`${headingFont} flex h-8 w-[58px] items-center justify-center rounded-[2px] border border-[#0A1414] bg-[#0A1414] text-[9px] font-black uppercase leading-none text-[#C8EB00]`}
    >
      Staff
    </Link>

    {/* STUDENT LOGIN */}
    <Link
      href="lms.uca.feuc.ae/login/index.php"
      target="_blank"
      rel="noopener noreferrer"
      className={`${headingFont} flex h-8 w-[112px] items-center justify-center whitespace-nowrap rounded-[2px] bg-[#0A1414] px-2 text-[9px] font-black uppercase leading-none text-[#C8EB00]`}
    >
      Student Login
    </Link>

    {/* ENQUIRE */}
    <Link
      href="https://admissions.uca.feuc.ae/enquiry_form"
      target="_blank"
      rel="noopener noreferrer"
      className={`${headingFont} flex h-8 w-[76px] items-center justify-center rounded-[2px] bg-[#0A1414] text-[9px] font-black uppercase leading-none text-[#C8EB00]`}
    >
      Enquire
    </Link>
  </div>
</div>
</div>
  </div>
</div>
<div
  className={`z-[9999] bg-[#0A1414] transition-all duration-300 ${
    isMainSticky
      ? "fixed left-0 right-0 top-0 shadow-[0_12px_35px_rgba(0,0,0,0.25)]"
      : "relative"
  }`}
>  <div className="bg-[#0A1414] relative border-b border-[#C8EB00]">
<div className="mx-auto w-full max-w-[1500px] px-4 lg:px-6">          
         <div className="flex h-[92px] min-w-0 items-center gap-4 md:h-[104px]">
<Link href="/" className="w-[210px] shrink-0 xl:w-[235px]">  
<Image
    src="/logo2.png"
    alt="UCA Logo"
    width={260}
    height={80}
    className="object-contain"
  />
  
</Link>

<div className="hidden min-w-0 flex-1 items-center justify-start pl-2 lg:flex xl:pl-4">                  <DesktopMegaNav
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    cancelClose={cancelClose}
                    scheduleClose={scheduleClose}
                  />
                </div>

                <button
                  className="lg:hidden ml-auto text-white hover:text-[#C8EB00] transition"
                  onClick={() => setOpen((v) => !v)}
                  aria-label="Toggle menu"
                >
                  {open ? (
                    <X className="h-7 w-7" />
                  ) : (
                    <Menu className="h-7 w-7" />
                  )}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {mega ? (
                <motion.div
                  key={openKey}
                  className="absolute left-0 right-0 top-full"
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
<div className="border-t border-[#C8EB00]/20 bg-[linear-gradient(180deg,#071010_0%,#081414_45%,#0A1414_100%)] shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">                    <motion.div
className="mx-auto h-[3px] w-48 rounded-full bg-[#C8EB00] shadow-[0_0_20px_rgba(200,235,0,0.7)] sm:w-72 md:w-96"                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      style={{ transformOrigin: "center" }}
                    />

                    <div className="mx-auto max-w-7xl px-4">
                      <div className="grid grid-cols-12 gap-0 py-8">
                        <motion.div
                          className="col-span-3 pr-6"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -8 }}
                          transition={{ duration: 0.12, ease: "easeOut" }}
                        >
<div className="relative h-[290px] overflow-hidden rounded-[26px] border border-[#C8EB00]/20 bg-[#0A1414] shadow-[0_18px_50px_rgba(0,0,0,0.35)]">                            <Image
                              src={mega.image}
                              alt={mega.label}
                              fill
                              className="object-cover"
                              sizes="320px"
                            />
<div className="absolute inset-0 bg-gradient-to-t from-[#0A1414] via-[#0A1414]/45 to-[#0A1414]/10" />
<div className="absolute bottom-5 left-5 right-5">                             
  <div className="text-[#C8EB00] text-[11px] font-semibold uppercase tracking-[0.24em]">
  Explore
</div>
<div
  className={`${headingFont} mt-2 text-white font-black text-[34px] leading-[0.9] uppercase tracking-[-0.03em]`}
>
  {mega.label}
</div>
                          
                            </div>
                          </div>
                        </motion.div>

<div className="col-span-9 grid grid-cols-3 bg-white/[0.02] rounded-[24px] border border-white/3 overflow-hidden">                            {mega.columns.map((col, idx) => (
                            <motion.div
                              key={col.title + idx}
className="p-9 border-l border-white/8 bg-transparent"
                              initial={{ opacity: 0, x: idx === 0 ? -8 : 8 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: idx === 0 ? -8 : 8 }}
                              transition={{ duration: 0.12, ease: "easeOut" }}
                            >
                              <div
                                className={`${headingFont} text-[#C8EB00] text-lg uppercase tracking-[0.02em] mb-4`}
                              >
                                {col.title}
                              </div>

                              <div className="space-y-5">
                                {col.lists.map((list) => (
                                  <div key={list.label}>
                                    <Link
                                      href={list.href}
                                      onClick={closeAll}
                                    className="block text-[#C8EB00] text-[18px] font-semibold leading-snug hover:text-white transition-colors"
                                    >
                                      {list.label}
                                    </Link>

                                    <div className="mt-2 space-y-1">
                                      {list.items.map((it) => (
                                        <Link
                                          key={it.href}
                                          href={it.href}
                                          onClick={closeAll}
                                          className="block rounded-xl px-3 py-2 text-sm text-white  hover:text-[#0A1414] hover:bg-[#C8EB00] transition-colors"
                                        >
                                          {it.label}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>

            {open && (
              <div className="lg:hidden bg-[#0A1414] border-t border-[#C8EB00]/25">
                <div className="mx-auto max-w-7xl px-4 pb-6">
                  <div className="rounded-2xl bg-white/[0.04] ring-1 ring-[#C8EB00]/20 overflow-hidden">
                    {navItems.map((item) => {
                      const megaSection = MEGA_MENUS[item.label];
                      const isActive = mobileOpenKey === item.label;

                      return (
                        <div key={item.label} className="border-b border-white/10">
                          <button
                            className={`${headingFont} w-full flex items-center justify-between px-4 py-4 text-white hover:text-[#C8EB00] font-black text-[20px] uppercase tracking-[-0.02em]`}
                            onClick={() =>
                              setMobileOpenKey(isActive ? null : item.label)
                            }
                          >
                            <span>{item.display ?? item.label}</span>
                            <span className="text-[#C8EB00] text-2xl">
                              {isActive ? "−" : "+"}
                            </span>
                          </button>

                          {isActive && megaSection && (
                            <div className="px-4 pb-4 space-y-6">
                              {megaSection.columns.map((col) => (
                                <div key={col.title}>
                                  <div
                                    className={`${headingFont} text-[#C8EB00] text-lg uppercase tracking-[0.02em] mb-2`}
                                  >
                                    {col.title}
                                  </div>

                                  {col.lists.map((list) => (
                                    <div key={list.label} className="mb-3">
                                      <Link
                                        href={list.href}
                                        onClick={closeAll}
                                        className="block text-white font-bold text-sm"
                                      >
                                        {list.label}
                                      </Link>

                                      <div className="mt-2 pl-3 space-y-1">
                                        {list.items.map((it) => (
                                          <Link
                                            key={it.href}
                                            href={it.href}
                                            onClick={closeAll}
                                            className="block text-white/75 hover:text-[#C8EB00] text-sm py-1 transition-colors"
                                          >
                                            {it.label}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}