"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav after scrolling past the hero section
      setShowStickyNav(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#events", label: "Events" },
    { href: "#about", label: "About" },
    { href: "#team", label: "Team" },
    { href: "#faq", label: "FAQ" },
    { href: "https://www.instagram.com/ubcclimbingclub/", label: "Instagram", external: true },
  ];

  return (
    <>
      {/* Original vertical nav - absolute, scrolls with hero */}
      <nav className="absolute top-8 right-8 z-10">
        <div className="flex flex-col items-end text-white">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
              className="flex items-center gap-2 group"
            >
              <span className="text-2xl text-[#E4B834] opacity-0 group-hover:opacity-100 transition-opacity">
                ★
              </span>
              <span className="font-sans font-bold text-lg">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </nav>

      {/* Sticky horizontal nav - appears after scrolling past hero */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50  backdrop-blur-lg py-4 px-8 transition-transform duration-300 ${
          showStickyNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-row justify-end gap-6 text-white">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
              className="font-sans font-bold text-lg hover:text-[#E4B834] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
