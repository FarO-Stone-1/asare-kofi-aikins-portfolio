"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const groups: { key: keyof typeof skills; label: string }[] = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "languages", label: "Languages" },
  { key: "security", label: "Networking & Security" },
  { key: "tools", label: "Tools" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Section Label ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[#B67E7D] text-sm font-semibold tracking-[0.3em] uppercase mb-4"
        >
          Skills
        </motion.p>

        {/* ── Section Heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-[#17402A] leading-tight mb-16 max-w-3xl"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          A full-stack toolkit across every layer of the stack.
        </motion.h2>

        {/* ── Skills Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                y: -6,
                borderColor: "#B67E7D",
                transition: { duration: 0.3 },
              }}
              className="group rounded-2xl p-6 md:p-7 cursor-default transition-all duration-300"
              style={{
                background: "rgba(250, 247, 240, 0.55)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(46, 107, 70, 0.2)",
                boxShadow: "0 10px 30px -20px rgba(23, 64, 42, 0.3)",
              }}
            >
              {/* ── Category Label ── */}
              <h3
                className="text-xs uppercase tracking-[0.25em] text-[#B67E7D] mb-5 font-semibold"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                {g.label}
              </h3>

              {/* ── Skill Pills ── */}
              <div className="flex flex-wrap gap-2">
                {skills[g.key].map((s) => (
                  <motion.span
                    key={s}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs px-3 py-1.5 rounded-full font-medium cursor-default"
                    style={{
                      background: "rgba(93, 168, 122, 0.18)",
                      color: "#17402A",
                      border: "1px solid rgba(46, 107, 70, 0.25)",
                    }}
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}