"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "#events", label: "Events" },
    { href: "#about", label: "About" },
    { href: "#team", label: "Team" },
    { href: "#faq", label: "FAQ" },
    { href: "https://www.instagram.com/ubcclimbingclub/", label: "Instagram", external: true },
  ];

  const mobileNavLinks = [
    { href: "#", label: "home" },
    { href: "#events", label: "events" },
    { href: "#about", label: "about us" },
    { href: "#faq", label: "faq" },
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
                  className="w-28"
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
                    className="font-judson font-bold text-background text-xl transition-colors duration-300 relative group"
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
        {/* Mobile Nav Bar */}
        <nav
          className="fixed top-0 left-0 right-0 h-25 z-50"
          style={{
            backgroundImage: 'url(/paper.png), url(/paper.png)',
            backgroundRepeat: 'repeat-x, repeat-x',
            backgroundPosition: '0 0, 50px 0',
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

              {/* Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`font-judson text-xl px-6 ${isOpen ? "text-gray-400" : "text-background"}`}
              >
                menu
              </button>
            </div>
          </div>
        </nav>

        {/* Full-screen Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-white flex flex-col pt-28 px-6">
            {/* Navigation Links */}
            <nav className="flex-1">
              <ul className="space-y-2">
                {mobileNavLinks.map((link) => (
                  <li key={link.href + link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href === "#") {
                          e.preventDefault();
                          setIsOpen(false);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        } else {
                          setIsOpen(false);
                          handleNavClick(e, link.href);
                        }
                      }}
                      className="text-5xl font-serif text-background block py-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer with Instagram and Logo */}
            <div className="flex justify-between items-center pb-8">
              <a
                href="https://www.instagram.com/ubcclimbingclub/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/instagram-logo.svg" className="w-14" alt="Instagram" />
              </a>

              <img
                src="/logo.png"
                alt="UBCCC logo"
                className="w-32"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
