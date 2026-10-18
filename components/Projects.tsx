"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Section Label ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[#B67E7D] text-sm font-semibold tracking-[0.3em] uppercase mb-4"
        >
          Projects
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
          Real systems, built end to end.
        </motion.h2>

        {/* ── Projects Stack ── */}
        <div className="space-y-8" style={{ perspective: "1200px" }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}