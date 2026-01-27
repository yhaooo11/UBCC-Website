"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  const handleNavClick = (e, href) => {
    // Only handle internal anchor links
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Get the nav bar height (h-20 = 80px + pb-4 = 16px = ~96px, adding extra padding)
        const navHeight = 120;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    }
    // External links will use default behavior
  };

  return (
    <>
      <div className="hidden md:block">
        <nav
          className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-visible"
          style={{
            backgroundImage: 'url(/paper.png), url(/paper.png)',
            backgroundRepeat: 'repeat-x, repeat-x',
            backgroundPosition: '0 0, 50px 0', // The second layer is shifted 40px
            backgroundSize: 'auto 100%',
            backgroundColor: 'transparent'
          }}
        >
          <div className="absolute w-full h-1/2 bg-white"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-4 relative z-10">
            <div className="flex items-center justify-between h-20">
              {/* Logo/Brand */}
              <a
                href="#"
                className="flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <img
                  src="/logo.png"
                  alt="UBCCC logo"
                  className="w-26"
                />
              </a>

              {/* Navigation Links */}
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                    onClick={(e) => !link.external && handleNavClick(e, link.href)}
                    className="font-judson font-bold text-background transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#E4B834] transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-[#E4B834]" : "bg-[#E4B834]"
                        }`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>





      <div className="md:hidden">
        <nav
          className="fixed top-0 left-0 right-0 h-25 z-50"
          style={{
            backgroundImage: 'url(/paper.png), url(/paper.png)',
            backgroundRepeat: 'repeat-x, repeat-x',
            backgroundPosition: '0 0, 50px 0', // The second layer is shifted 40px
            backgroundSize: 'auto 100%',
            backgroundColor: 'transparent'
          }}
        >
          <div className="absolute w-full h-1/2 bg-white"></div>
          <div className="px-4 pb-4 relative z-10">
            <div className="flex items-center justify-between h-20">
              <a
                href="#"
                className="flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <img
                  src="/logo.png"
                  alt="UBCCC logo"
                  className="w-26"
                />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
