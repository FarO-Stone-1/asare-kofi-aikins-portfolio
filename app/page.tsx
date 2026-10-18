import { profile } from "@/lib/data";
import Image from "next/image";
import { Download } from "lucide-react";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <SmoothScroll>
      <Loader />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />

      <main className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden">

        {/* ── Ambient Background Orbs ── */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="orb anim-drift"
            style={{
              width: 400,
              height: 400,
              background: "#B67E7D",
              top: "10%",
              left: "5%",
            }}
          />
          <div
            className="orb anim-drift"
            style={{
              width: 500,
              height: 500,
              background: "#5DA87A",
              bottom: "5%",
              right: "0%",
              animationDelay: "-8s",
              opacity: 0.3,
            }}
          />
        </div>

        <div className="text-center max-w-3xl mx-auto relative z-10">

          {/* ── Profile Photo ── */}
          <div className="anim-scale-in relative inline-block mb-10">
            <span
              className="absolute inset-0 rounded-full border-2 pointer-events-none"
              style={{
                borderColor: "#B67E7D",
                animation: "ringPulse 2.5s ease-out infinite",
              }}
            />

            <div
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden anim-float"
              style={{
                border: "3px solid #5DA87A",
                boxShadow: "0 20px 60px -15px rgba(23, 64, 42, 0.4)",
                background: "#EFEAD9",
              }}
            >
              <Image
                src="/profile.jpg"
                alt={profile.name}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* ── Title ── */}
          <p className="anim-fade-up delay-200 text-[#B67E7D] text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-5">
            {profile.title}
          </p>

          {/* ── Name ── */}
          <h1 className="anim-fade-up delay-300 text-5xl md:text-7xl font-bold tracking-tight text-[#17402A] leading-[1.05]">
            {profile.name}
          </h1>

          {/* ── Divider ── */}
          <div
            className="anim-fade-in delay-500 h-px w-20 mx-auto my-8"
            style={{ background: "#B67E7D" }}
          />

          {/* ── Tagline ── */}
          <p className="anim-fade-up delay-600 text-[#17402A] text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-medium">
            {profile.tagline}
          </p>

          {/* ── CTAs ── */}
          <div className="anim-fade-up delay-700 mt-12 flex flex-wrap gap-4 justify-center">

            {/* View My Work */}
            <a
              href="#projects"
              className="hover-lift inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-[#FAF7F0] transition-all"
              style={{ background: "#17402A" }}
            >
              View My Work
            </a>

            {/* Download CV */}
            <a
              href="/resume.pdf"
              download
              className="hover-lift inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border-2 transition-all"
              style={{
                borderColor: "#B67E7D",
                color: "#B67E7D",
                background: "transparent",
              }}
            >
              <Download size={16} />
              Download CV
            </a>

            {/* Hire Me */}
            <a
              href={profile.contact.callWhatsApp.href}
              target="_blank"
              rel="noreferrer"
              className="hover-lift inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border-2 transition-all"
              style={{
                borderColor: "#17402A",
                color: "#17402A",
                background: "transparent",
              }}
            >
              Hire Me
            </a>

          </div>

        </div>
      </main>

      {/* ── Sections ── */}
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      {/* ── Footer ── */}
      <Footer />

    </SmoothScroll>
  );
}