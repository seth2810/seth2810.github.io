import { useEffect, useRef, type CSSProperties } from 'react';

const VIOLET = '#6d28d9';
const ELECTRIC = '#4f6df5';
const LILAC = 'oklch(0.56 0.22 305)';
const PEACH = '#f3c9a8';

// x, y, w, h in % of the wrapper; colour; drift dx, dy (px); duration (s)
const DROPS: [number, number, number, number, string, number, number, number][] = [
  [10, 10, 62, 22, VIOLET, 90, 40, 26],
  [92, 14, 54, 20, ELECTRIC, -80, 60, 31],
  [78, 26, 44, 15, LILAC, 60, -50, 23],
  [96, 34, 18, 7, PEACH, -40, 30, 18],
  [88, 45, 58, 17, VIOLET, -70, 45, 34],
  [6, 55, 54, 16, ELECTRIC, 85, -40, 29],
  [70, 67, 44, 15, LILAC, -55, 55, 25],
  [3, 77, 18, 7, PEACH, 45, -35, 19],
  [84, 85, 62, 19, VIOLET, -75, -45, 33],
  [15, 93, 54, 15, ELECTRIC, 70, 40, 28],
];

// Animated blurred background with a slow parallax; must sit inside a relatively positioned page wrapper.
export const Droplets = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg = ref.current;
    const page = bg.parentElement;
    let raf = 0;
    const tick = () => {
      raf = 0;
      const r = page.getBoundingClientRect();
      const vh = window.innerHeight || 900;
      const progress = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / Math.max(r.height, 1)));
      bg.style.transform = `translateY(${(progress * r.height * 0.1).toFixed(1)}px)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    tick();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 -top-[12%] -bottom-[12%] overflow-hidden bg-navy will-change-transform"
    >
      {DROPS.map(([x, y, w, h, c, dx, dy, dur], i) => (
        <div
          key={i}
          className="rg-drop absolute"
          style={
            {
              left: `${x}%`,
              top: `${y}%`,
              width: `${w}%`,
              height: `${h}%`,
              marginLeft: `${-w / 2}%`,
              marginTop: `${-h / 2}%`,
              background: `radial-gradient(closest-side, ${c} 0%, color-mix(in oklch, ${c} 70%, transparent) 45%, transparent 100%)`,
              filter: 'blur(28px)',
              opacity: 0.95,
              willChange: 'transform, border-radius',
              '--dx': `${dx}px`,
              '--dy': `${dy}px`,
              animation: `rg-drift ${(dur * 0.5).toFixed(1)}s ease-in-out infinite, rg-morph ${(dur * 0.35).toFixed(1)}s ease-in-out infinite`,
              animationDelay: `${-(i * 3.7)}s, ${-(i * 2.3)}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
};
