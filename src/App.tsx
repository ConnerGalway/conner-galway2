import { useState } from "react";
import { ArrowUpRight, Award, Crown, X } from "lucide-react";

const NAV_LINKS = ["Projects", "Studio", "Offerings", "Inquire"];

const STATS = [
  { value: "250+", label: "Brands Transformed" },
  { value: "95%", label: "Client Retention" },
  { value: "10+", label: "Years in the Game" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
      />

      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Page content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Navbar */}
        <header className="flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16 lg:py-7">
          <a
            href="#"
            className="font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl"
          >
            Conner Galway
          </a>

          {/* Desktop nav links */}
          <nav className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="font-inter text-sm uppercase tracking-widest text-white/80 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://calendly.com/conner-galway/introductory-call-conner?month=2026-06"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 border border-white/30 px-6 py-3 font-inter text-xs uppercase tracking-widest text-white transition-colors hover:border-white/60 hover:bg-white/10 md:flex"
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4" />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="space-y-1.5 md:hidden"
          >
            <div className="h-0.5 w-6 bg-white" />
            <div className="h-0.5 w-6 bg-white" />
            <div className="h-0.5 w-4 bg-white" />
          </button>
        </header>

        {/* Mobile menu overlay */}
        <div
          className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm transition-all duration-500 md:hidden ${
            menuOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 sm:px-10">
            <span className="font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl">
              Conner Galway
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <X className="h-7 w-7 text-white" />
            </button>
          </div>

          <nav className="flex h-[calc(100%-88px)] flex-col items-center justify-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="font-podium text-4xl uppercase text-white sm:text-5xl"
                style={{
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  transitionDelay: `${i * 80 + 100}ms`,
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                }}
              >
                {link}
              </a>
            ))}

            <a
              href="https://calendly.com/conner-galway/introductory-call-conner?month=2026-06"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center gap-2 border border-white/30 px-8 py-4 font-inter text-xs uppercase tracking-widest text-white transition-colors hover:border-white/60 hover:bg-white/10"
              style={{
                transition: "opacity 0.5s ease, transform 0.5s ease",
                transitionDelay: `${NAV_LINKS.length * 80 + 100}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              }}
            >
              Get in Touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>

        {/* Hero content */}
        <main className="flex flex-1 items-center px-6 sm:px-10 lg:px-16">
          <div>
            {/* Tagline */}
            <div className="animate-fade-up mb-6 flex items-center gap-3 lg:mb-8">
              <Crown className="h-4 w-4 text-white/70" />
              <span className="font-inter text-xs uppercase tracking-[0.3em] text-white/70 sm:text-sm">
                Do More With AI
              </span>
            </div>

            {/* Main heading */}
            <h1 className="animate-fade-up-delay-1 font-podium uppercase leading-[0.92] tracking-tight text-white">
              <span className="block text-[clamp(2.8rem,8vw,7rem)]">Learn.</span>
              <span className="block text-[clamp(2.8rem,8vw,7rem)]">Create.</span>
              <span className="block text-[clamp(2.8rem,8vw,7rem)]">Automate.</span>
            </h1>

            {/* Subtext */}
            <p className="animate-fade-up-delay-2 mt-6 max-w-md font-inter text-sm leading-relaxed text-white/70 sm:text-base lg:mt-8">
              Start doing more of what you love
              <br />
              automate what you don&rsquo;t{" "}
              <span className="font-bold text-white">
                let&rsquo;s work together.
              </span>
            </p>

            {/* CTA row */}
            <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-4 sm:gap-6 lg:mt-10">
              <a
                href="#"
                className="group flex items-center gap-2 bg-black px-5 py-3 font-inter text-[11px] uppercase tracking-widest text-white transition-colors hover:bg-neutral-900 sm:px-7 sm:py-4 sm:text-xs"
              >
                See My Work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <div className="hidden items-center gap-3 sm:flex">
                <Award className="h-8 w-8 text-white/50" />
                <div className="font-inter text-xs uppercase tracking-wider text-white/60">
                  <div>Top-Rated</div>
                  <div>Brand Studio</div>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="animate-fade-up-delay-4 mt-8 flex flex-wrap gap-6 sm:mt-10 sm:gap-12 lg:mt-14 lg:gap-16">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-inter text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-inter text-[9px] uppercase tracking-widest text-white/50 sm:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
