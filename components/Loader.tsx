"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: "#17402A" }}
        >
          <div className="text-center">
            {/* ── Initials ── */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-sora)",
                color: "#FAF7F0",
              }}
            >
              KA
            </motion.p>

            {/* ── Progress Line ── */}
            <div
              className="w-40 h-[2px] mx-auto overflow-hidden rounded-full"
              style={{ background: "rgba(250, 247, 240, 0.15)" }}
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-full"
                style={{ background: "#B67E7D" }}
              />
            </div>

            {/* ── Label ── */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-xs uppercase tracking-[0.3em]"
              style={{ color: "#5DA87A" }}
            >
              Loading Portfolio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}