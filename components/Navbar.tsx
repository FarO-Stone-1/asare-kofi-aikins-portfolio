"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`anim-fade-down fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
      style={{
        background: scrolled ? "rgba(250, 247, 240, 0.75)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(46, 107, 70, 0.15)"
          : "1px solid transparent",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* ── Brand ── */}
        <a
          href="#"
          className="link-underline font-bold text-lg tracking-tight text-[#17402A]"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          {profile.shortName}
        </a>

        {/* ── Desktop Links ── */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-underline text-[#2E6B46] hover:text-[#17402A] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Socials (Desktop) ── */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors text-[#2E6B46] hover:text-[#B67E7D]"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors text-[#2E6B46] hover:text-[#B67E7D]"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={profile.socials.x}
            target="_blank"
            rel="noreferrer"
            aria-label="X (Twitter)"
            className="transition-colors text-[#2E6B46] hover:text-[#B67E7D]"
          >
            <FaXTwitter size={18} />
          </a>
        </div>

        {/* ── Mobile Toggle ── */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#17402A]"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      {open && (
        <div
          className="md:hidden mt-4 px-6 py-4 space-y-3 anim-fade-in"
          style={{
            background: "rgba(250, 247, 240, 0.95)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderTop: "1px solid rgba(46, 107, 70, 0.15)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-[#2E6B46] hover:text-[#17402A] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}