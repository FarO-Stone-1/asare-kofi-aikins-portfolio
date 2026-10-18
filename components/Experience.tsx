"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Section Label ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[#B67E7D] text-sm font-semibold tracking-[0.3em] uppercase mb-4"
        >
          Experience
        </motion.p>

        {/* ── Section Heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-[#FAF7F0] leading-tight mb-16 max-w-3xl"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          A decade of teaching, engineering, and building.
        </motion.h2>

        {/* ── Timeline ── */}
        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, rgba(182, 126, 125, 0.9), rgba(182, 126, 125, 0.4), rgba(182, 126, 125, 0.1), transparent)",
            }}
          />

          <div className="space-y-14 pl-8 md:pl-12">
            {experience.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative group"
              >

                {/* ── Dot on timeline ── */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="absolute -left-8 md:-left-12 top-2 w-3 h-3 rounded-full transition-all duration-300"
                  style={{
                    background: "#B67E7D",
                    boxShadow: "0 0 0 4px rgba(182, 126, 125, 0.2)",
                  }}
                />

                {/* ── Period ── */}
                <p className="text-xs uppercase tracking-[0.25em] text-[#B67E7D] font-semibold mb-2">
                  {e.period}
                </p>

                {/* ── Role ── */}
                <h3
                  className="text-xl md:text-2xl font-bold text-[#FAF7F0] mb-1 transition-colors duration-300 group-hover:text-[#B67E7D]"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {e.role}
                </h3>

                {/* ── Company ── */}
                <p className="text-[#5DA87A] font-medium mb-3 text-sm md:text-base">
                  {e.company}
                </p>

                {/* ── Description ── */}
                <p className="text-[#D4CEC0] leading-relaxed text-base max-w-2xl">
                  {e.description}
                </p>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}