"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { profile } from "@/lib/data";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      className="relative py-12 px-6 mt-16"
      style={{
        borderTop: "1px solid rgba(250, 247, 240, 0.15)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* ── Left: Identity ── */}
        <div className="text-center md:text-left">
          <p
            className="font-bold text-[#FAF7F0] text-lg"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {profile.name}
          </p>
          <p className="text-sm text-[#D4CEC0]">
            {profile.title} · {profile.location}
          </p>
        </div>

        {/* ── Center: Socials ── */}
        <div className="flex items-center gap-5">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-all hover:scale-110"
          >
            <FaGithub size={18} className="text-[#D4CEC0] hover:text-[#B67E7D] transition-colors" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-all hover:scale-110"
          >
            <FaLinkedin size={18} className="text-[#D4CEC0] hover:text-[#B67E7D] transition-colors" />
          </a>
          <a
            href={profile.socials.x}
            target="_blank"
            rel="noreferrer"
            aria-label="X (Twitter)"
            className="transition-all hover:scale-110"
          >
            <FaXTwitter size={18} className="text-[#D4CEC0] hover:text-[#B67E7D] transition-colors" />
          </a>
          <a
            href={profile.contact.email.href}
            aria-label="Email"
            className="transition-all hover:scale-110"
          >
            <FaEnvelope size={18} className="text-[#D4CEC0] hover:text-[#B67E7D] transition-colors" />
          </a>
        </div>

        {/* ── Right: Copyright ── */}
        <p className="text-xs text-[#D4CEC0] text-center md:text-right">
          © {year ?? 2026} {profile.shortName}. All rights reserved.
        </p>

      </div>
    </footer>
  );
}