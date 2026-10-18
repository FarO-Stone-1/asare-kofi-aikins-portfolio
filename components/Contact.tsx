"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { profile } from "@/lib/data";

const items = [
  { key: "callWhatsApp",     icon: FaWhatsapp },
  { key: "businessWhatsApp", icon: FaWhatsapp },
  { key: "callLine2",        icon: FaPhoneAlt },
  { key: "email",            icon: FaEnvelope },
] as const;

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Section Label ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[#B67E7D] text-sm font-semibold tracking-[0.3em] uppercase mb-4"
        >
          Contact
        </motion.p>

        {/* ── Section Heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-[#FAF7F0] leading-tight mb-6 max-w-3xl"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          Let's build something together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#D4CEC0] mb-14 max-w-xl leading-relaxed"
        >
          Open to full-time roles, freelance work, and collaborations. Reach out . I respond quickly.
        </motion.p>

        {/* ── Contact Grid ── */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
          {items.map(({ key, icon: Icon }, i) => {
            const c = profile.contact[key];
            return (
              <motion.a
                key={key}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group flex items-center gap-4 rounded-2xl p-6 transition-all duration-300"
                style={{
                  background: "rgba(250, 247, 240, 0.12)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(250, 247, 240, 0.2)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "rgba(182, 126, 125, 0.25)",
                    color: "#B67E7D",
                    border: "1px solid rgba(182, 126, 125, 0.4)",
                  }}
                >
                  <Icon size={20} />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#D4CEC0] mb-1 font-medium">
                    {c.label}
                  </p>
                  <p className="text-[#FAF7F0] font-semibold truncate">
                    {c.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}