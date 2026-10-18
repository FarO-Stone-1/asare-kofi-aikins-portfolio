"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Section Label ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[#B67E7D] text-sm font-semibold tracking-[0.3em] uppercase mb-4"
        >
          About
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
          From the classroom to the codebase.
        </motion.h2>

        {/* ── Two-column layout ── */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">

          {/* ── Left: Story Paragraphs ── */}
          <div className="md:col-span-2 space-y-6">
            {about.paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="text-[#17402A] text-base md:text-lg leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* ── Right: Quick Facts ── */}
          <div className="space-y-6">
            {about.facts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 6 }}
                className="pl-5 cursor-default"
                style={{
                  borderLeft: "2px solid #B67E7D",
                }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[#2E6B46] mb-1.5 font-medium">
                  {fact.label}
                </p>
                <p className="text-[#17402A] font-semibold text-base md:text-lg">
                  {fact.value}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}