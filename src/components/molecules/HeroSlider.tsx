import React from "react";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

type Slide = {
  title: React.ReactNode;
  desc: string;
  primary: { to: string; label: string };
  secondary: { to: string; label: string };
  bgClass?: string; // tailwind bg class
  bgImageUrl?: string; // optional full-bleed bg
  overlay?: boolean; // add dark overlay for readability
};

// --- Config: sesuaikan kalau navbar-mu fixed ---
const NAV_HEIGHT = 72; // px (ubah sesuai tinggi navbar)
const USE_FULL_SCREEN = true; // true = pakai 100svh, false = tinggi by content
const AUTO_INTERVAL = 5000; // ms

const SLIDES: Slide[] = [
  {
    title: (
      <>
        We design, build, and grow <br />
        <span className="text-brand">digital that performs.</span>
      </>
    ),
    desc: "From strategy to shipped product—BYU DIGITAL turns ideas into results.",
    primary: { to: "/contact", label: "Get a Quote" },
    secondary: { to: "/work", label: "See Our Work" },
    bgClass: "bg-ink",
  },
  {
    title: (
      <>
        Strategy → Execution <br />
        <span className="text-brand">All in one team.</span>
      </>
    ),
    desc: "Product strategy, UX/UI, full-stack build, and growth in a single streamlined crew.",
    primary: { to: "/services", label: "Explore Services" },
    secondary: { to: "/about", label: "Meet the Team" },
    bgClass: "bg-ink",
  },
  {
    title: (
      <>
        Proven outcomes <br />
        <span className="text-brand">that move the needle.</span>
      </>
    ),
    desc: "See how we ship on time and deliver measurable business impact.",
    primary: { to: "/work", label: "View Case Studies" },
    secondary: { to: "/contact", label: "Start a Project" },
    bgClass: "bg-ink",
  },
];

const HeroSlider: React.FC = () => {
  const [index, setIndex] = React.useState(0);
  const slideCount = SLIDES.length;

  const timerRef = React.useRef<number | null>(null);
  const pausedRef = React.useRef(false);
  const touchStartX = React.useRef<number | null>(null);

  const next = React.useCallback(
    () => setIndex((i) => (i + 1) % slideCount),
    [slideCount]
  );
  const prev = React.useCallback(
    () => setIndex((i) => (i - 1 + slideCount) % slideCount),
    [slideCount]
  );

  // Autoplay + hormati prefers-reduced-motion + pause saat tab tidak aktif
  React.useEffect(() => {
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;
    if (reduce) return;

    const start = () => {
      stop();
      timerRef.current = window.setInterval(() => {
        if (!pausedRef.current && !document.hidden) next();
      }, AUTO_INTERVAL);
    };
    const stop = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    start();
    document.addEventListener("visibilitychange", () => {
      // ketika balik fokus, biar interval fresh
      if (!document.hidden) start();
    });

    return stop;
  }, [next]);

  // Pause on hover/focus
  const onMouseEnter = () => (pausedRef.current = true);
  const onMouseLeave = () => (pausedRef.current = false);

  // Keyboard nav
  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  // Touch swipe
  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const start = touchStartX.current;
    if (start == null) return;
    const end = e.changedTouches[0].clientX;
    const delta = end - start;
    const threshold = 50; // px
    if (delta > threshold) prev();
    if (delta < -threshold) next();
    touchStartX.current = null;
  };

  // Hitung tinggi hero
  const minHeroHeight = USE_FULL_SCREEN
    ? `calc(100svh - ${NAV_HEIGHT}px)`
    : undefined;

  return (
    <section
      className="relative overflow-hidden focus:outline-none bg-ink"
      aria-roledescription="carousel"
      aria-label="Hero highlights"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{ minHeight: minHeroHeight }}
    >
      {/* Background grid/texture */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-dark-200/20 [mask-image:radial-gradient(ellipse_at_center,rgba(255,255,255,0.3),rgba(255,255,255,0))]" />
      </div>

      {/* Track */}
      <div
        className="relative z-10 w-full overflow-hidden"
        role="group"
        aria-live="polite"
      >
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map((s, i) => (
            <div
              key={i}
              className={`w-full flex-shrink-0 ${s.bgClass ?? ""} relative`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slideCount}`}
            >
              {/* Optional background image per slide */}
              {s.bgImageUrl && (
                <img
                  src={s.bgImageUrl}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover -z-10"
                />
              )}
              {s.overlay !== false && (
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
              )}

              {/* Konten slide */}
              <div className="flex items-center">
                <div
                  className="container mx-auto px-6 py-24 md:py-32"
                  style={{ minHeight: minHeroHeight }}
                >
                  <div className="max-w-3xl text-center mx-auto lg:text-left lg:mx-0">
                    <Heading as="h1" className="text-light-100 leading-tight">
                      {s.title}
                    </Heading>
                    <p className="mt-6 text-lg md:text-xl max-w-2xl text-light-200">
                      {s.desc}
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                      <Button
                        to={s.primary.to}
                        variant="primary"
                        className="w-full sm:w-auto"
                      >
                        {s.primary.label}
                      </Button>
                      <Button
                        to={s.secondary.to}
                        variant="secondary"
                        className="w-full sm:w-auto"
                      >
                        {s.secondary.label}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full border border-dark-200/60 bg-ink/60 backdrop-blur text-light-100 hover:bg-ink/80 focus:outline-none focus:ring-2 focus:ring-brand/70"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full border border-dark-200/60 bg-ink/60 backdrop-blur text-light-100 hover:bg-ink/80 focus:outline-none focus:ring-2 focus:ring-brand/70"
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-brand/70 ${
                i === index
                  ? "w-6 bg-brand"
                  : "w-2.5 bg-light-200/40 hover:bg-light-200/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
