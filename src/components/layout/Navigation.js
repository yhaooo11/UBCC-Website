"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_HEIGHT = 120;
const PAPER_BACKGROUND = {
  backgroundImage: "url(/paper.png), url(/paper.png)",
  backgroundRepeat: "repeat-x, repeat-x",
  backgroundPosition: "0 0, 50px 0",
  backgroundSize: "auto 100%",
  backgroundColor: "transparent",
};

const navLinks = [
  { href: "/#events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/#faq", label: "FAQ" },
  { href: "https://www.instagram.com/ubcclimbingclub/", label: "Instagram", external: true },
];

const mobileNavLinks = [
  { href: "/", label: "home" },
  { href: "/#events", label: "events" },
  { href: "/#about", label: "about us" },
  { href: "/team", label: "team" },
  { href: "/#faq", label: "faq" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/" || typeof window === "undefined") return;

    const hash = window.location.hash?.slice(1);
    if (!hash) return;

    const scrollToTarget = () => {
      const target = document.getElementById(hash);
      if (!target) return false;

      const targetPosition = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
      return true;
    };

    let timeoutId;
    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!scrollToTarget()) {
          timeoutId = setTimeout(scrollToTarget, 100);
        }
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNavClick = (event, href) => {
    const isHashLink = href.startsWith("#") || href.startsWith("/#");

    if (!isHashLink) return;
    if (typeof window !== "undefined" && window.location.pathname !== "/") return;

    event.preventDefault();
    const targetId = href.split("#")[1];
    const targetElement = document.getElementById(targetId);

    if (!targetElement) return;

    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="hidden md:block">
        <nav
          className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-visible"
          style={PAPER_BACKGROUND}
        >
          <div className="absolute w-full h-1/2 bg-white" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-4 relative z-10">
            <div className="flex items-center justify-between h-20">
              <Link
                href="/"
                className="flex items-center"
                onClick={(event) => {
                  if (typeof window !== "undefined" && window.location.pathname === "/") {
                    event.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                <Image
                  src="/logo.png"
                  alt="UBCCC logo"
                  width={112}
                  height={60}
                  className="w-28"
                />
              </Link>

              <div className="flex items-center gap-8">
                {navLinks.map((link) => {
                  const underline = (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E4B834] transition-all duration-300 group-hover:w-full" />
                  );
                  const className =
                    "font-judson font-bold text-background text-xl transition-colors duration-300 relative group";

                  if (link.external) {
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={className}
                      >
                        {link.label}
                        {underline}
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(event) => handleNavClick(event, link.href)}
                      className={className}
                    >
                      {link.label}
                      {underline}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="md:hidden">
        <nav
          className="fixed top-0 left-0 right-0 h-25 z-50"
          style={PAPER_BACKGROUND}
        >
          <div className="absolute w-full h-1/2 bg-white" />
          <div className="px-4 pb-4 relative z-10">
            <div className="flex items-center justify-between h-20">
              <Link
                href="/"
                className="flex items-center"
                onClick={(event) => {
                  setIsOpen(false);

                  if (typeof window !== "undefined" && window.location.pathname === "/") {
                    event.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                <Image
                  src="/logo.png"
                  alt="UBCCC logo"
                  width={104}
                  height={56}
                  className="w-26"
                />
              </Link>

              <button
                onClick={() => setIsOpen((current) => !current)}
                className={`font-judson text-xl px-6 ${isOpen ? "text-gray-400" : "text-background"}`}
              >
                menu
              </button>
            </div>
          </div>
        </nav>

        {isOpen && (
          <div className="fixed inset-0 z-40 bg-white flex flex-col pt-28 px-6">
            <nav className="flex-1">
              <ul className="space-y-2">
                {mobileNavLinks.map((link) => (
                  <li key={link.href + link.label}>
                    <a
                      href={link.href}
                      onClick={(event) => {
                        setIsOpen(false);
                        handleNavClick(event, link.href);
                      }}
                      className="text-5xl font-serif text-background block py-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex justify-between items-center pb-8">
              <a
                href="https://www.instagram.com/ubcclimbingclub/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/instagram-logo.svg"
                  alt="Instagram"
                  width={56}
                  height={56}
                  className="w-14"
                />
              </a>

              <Image
                src="/logo.png"
                alt="UBCCC logo"
                width={128}
                height={68}
                className="w-32"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
