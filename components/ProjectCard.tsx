"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaClock } from "react-icons/fa";

type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  year: string;
  status: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveUrl: string | null;
  repoUrl: string | null;
  featured: boolean;
  flagship?: boolean;
};

export default function ProjectCard({
  project: p,
  index: i,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the user is on a mobile device
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current || isMobile) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 3;
    const rotateX = -((y - centerY) / centerY) * 3;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: i * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isMobile ? "none" : `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transformStyle: "preserve-3d",
        transition: "transform 0.15s ease-out",
        
        /* THE FIX: Solid dark background so text pops on mobile */
        background: "#17402A", 
        border: "1px solid rgba(250, 247, 240, 0.15)",
        boxShadow: "0 20px 40px -20px rgba(0, 0, 0, 0.5)",
      }}
      className="rounded-3xl p-6 md:p-10"
    >

      {/* ── Header Row ── */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3
              className="text-xl md:text-2xl font-bold text-[#FAF7F0]"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              {p.title}
            </h3>
          </div>
          <p className="text-sm text-[#D4CEC0]">
            {p.category} · {p.year}
          </p>
        </div>

        {/* ── Badges ── */}
        <div className="flex flex-wrap gap-2">
          {p.flagship && (
            <span
              className="text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider"
              style={{
                background: "rgba(182, 126, 125, 0.35)",
                color: "#FAF7F0",
                border: "1px solid #B67E7D",
              }}
            >
              Flagship
            </span>
          )}
          {p.status.includes("Active") && (
            <span
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider"
              style={{
                background: "rgba(250, 200, 100, 0.25)",
                color: "#FAF7F0",
                border: "1px solid rgba(250, 200, 100, 0.8)",
                animation: "ringPulse 3s ease-out infinite",
              }}
            >
              <FaClock size={10} />
              In Development
            </span>
          )}
        </div>
      </div>

      {/* ── Description ── */}
      <p className="text-[#F5F1E8] leading-relaxed mb-6 text-base">
        {p.description}
      </p>

      {/* ── Highlights ── */}
      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-7">
        {p.highlights.slice(0, 6).map((h, idx) => (
          <motion.li
            key={h}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.2 + idx * 0.05 }}
            className="text-sm text-[#F5F1E8] flex gap-2 leading-relaxed"
          >
            <span className="text-[#B67E7D] mt-1 flex-shrink-0 font-bold">▸</span>
            <span>{h}</span>
          </motion.li>
        ))}
      </ul>

      {/* ── Tech Tags ── */}
      <div className="flex flex-wrap gap-2 mb-7">
        {p.tech.map((t) => (
          <motion.span
            key={t}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="text-xs px-3 py-1.5 rounded-full font-medium cursor-default"
            style={{
              background: "rgba(93, 168, 122, 0.3)",
              color: "#FAF7F0",
              border: "1px solid rgba(93, 168, 122, 0.6)",
            }}
          >
            {t}
          </motion.span>
        ))}
      </div>

      {/* ── Action Buttons ── */}
      <div className="flex flex-wrap gap-3">
        {p.repoUrl ? (
          <a
            href={p.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="hover-lift inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full font-medium transition-colors"
            style={{
              background: "rgba(250, 247, 240, 0.15)",
              color: "#FAF7F0",
              border: "1px solid rgba(250, 247, 240, 0.4)",
            }}
          >
            <FaGithub size={14} />
            View Code
          </a>
        ) : (
          <span
            className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full font-medium"
            style={{
              background: "rgba(250, 247, 240, 0.05)",
              color: "#D4CEC0",
              border: "1px solid rgba(250, 247, 240, 0.15)",
            }}
          >
            <FaGithub size={14} />
            Private Repo
          </span>
        )}

        {p.liveUrl && (
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="hover-lift inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full font-medium transition-colors"
            style={{
              background: "#B67E7D",
              color: "#17402A",
            }}
          >
            <FaExternalLinkAlt size={12} />
            Live Demo
          </a>
        )}
      </div>

    </motion.article>
  );
}