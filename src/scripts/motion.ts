// Motion controller — Concept 01.
// Two layers, per Docs/atelier-bruna/20_SCROLL_STORYBOARD.md:
//  1) Reveals: IntersectionObserver + CSS transitions, no GSAP needed.
//  2) Narrative scroll (pin/scrub/hero scale): GSAP + ScrollTrigger, imported
//     dynamically so the ~60KB gzip cost never blocks LCP, and skipped
//     entirely under prefers-reduced-motion.

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setupReveals() {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (targets.length === 0) return;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const staggerGroups = new Map<string, HTMLElement[]>();
  targets.forEach((el) => {
    const group = el.dataset.revealGroup;
    if (group) {
      const list = staggerGroups.get(group) ?? [];
      list.push(el);
      staggerGroups.set(group, list);
    }
  });

  const revealed = new WeakSet<HTMLElement>();
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        if (revealed.has(el)) continue;
        const group = el.dataset.revealGroup;
        if (group) {
          const siblings = staggerGroups.get(group) ?? [el];
          siblings.forEach((sibling, i) => {
            if (revealed.has(sibling)) return;
            revealed.add(sibling);
            sibling.style.transitionDelay = `${i * parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--duration-stagger-step')) * 1000}ms`;
            sibling.classList.add('is-revealed');
          });
        } else {
          revealed.add(el);
          el.classList.add('is-revealed');
        }
        observer.unobserve(el);
      }
    },
    { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}

async function setupScrollNarrative() {
  if (prefersReducedMotion) return;

  const heroArt = document.querySelector<HTMLElement>('[data-hero-art]');
  const manifestoLines = document.querySelectorAll<HTMLElement>('[data-manifesto-line]');
  const productStage = document.querySelector<HTMLElement>('[data-product-stage]');
  const productImg = document.querySelector<HTMLElement>('[data-product-image]');
  const creationsTrack = document.querySelector<HTMLElement>('[data-creations-track]');
  const creationsSection = document.querySelector<HTMLElement>('[data-creations-section]');

  const needsGsap = heroArt || manifestoLines.length || productStage || creationsTrack;
  if (!needsGsap) return;

  const gsapModule = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  const gsap = gsapModule.gsap ?? gsapModule.default;
  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();

  // Scene 01 — hero scale tied to scroll, and (desktop/mouse only) pointer
  // tilt. Both live on the SAME element's `transform`, so both are driven
  // through GSAP (quickTo for x/y, a scrubbed tween for scale) instead of
  // mixing a CSS custom-property transform with a GSAP inline one — the two
  // used to fight over the `transform` property (GSAP's inline style always
  // won, silently killing the tilt the moment the scale tween rendered once).
  if (heroArt) {
    gsap.to(heroArt, {
      scale: getComputedStyle(document.documentElement).getPropertyValue('--scale-hero-scroll') || 1.06,
      ease: 'none',
      scrollTrigger: {
        trigger: heroArt.closest('[data-scene]') ?? heroArt,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    mm.add('(hover: hover) and (pointer: fine)', () => {
      const max = 6;
      const setX = gsap.quickTo(heroArt, 'x', { duration: 0.4, ease: 'power2.out' });
      const setY = gsap.quickTo(heroArt, 'y', { duration: 0.4, ease: 'power2.out' });
      const onMove = (e: PointerEvent) => {
        const rect = heroArt.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        setX(relX * max);
        setY(-relY * max);
      };
      const onLeave = () => {
        setX(0);
        setY(0);
      };
      heroArt.addEventListener('pointermove', onMove);
      heroArt.addEventListener('pointerleave', onLeave);
      return () => {
        heroArt.removeEventListener('pointermove', onMove);
        heroArt.removeEventListener('pointerleave', onLeave);
        gsap.set(heroArt, { x: 0, y: 0 });
      };
    });
  }

  // Scene 02 — manifesto lines masked in, tied to scroll.
  if (manifestoLines.length) {
    gsap.set(manifestoLines, { yPercent: 100 });
    ScrollTrigger.create({
      trigger: manifestoLines[0].closest('[data-scene]'),
      start: 'top 70%',
      onEnter: () =>
        gsap.to(manifestoLines, {
          yPercent: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.08,
        }),
      once: true,
    });
  }

  // Scene 04 — product zoom pinned ~150%.
  if (productStage && productImg) {
    mm.add('(min-width: 769px)', () => {
      gsap.to(productImg, {
        scale: 1.35,
        ease: 'none',
        scrollTrigger: {
          trigger: productStage,
          start: 'top top',
          end: '+=120%',
          scrub: true,
          pin: true,
        },
      });
    });
  }

  // Scene 05 — desktop sticky/horizontal rail; mobile/reduced-motion stays
  // vertical flow. `.is-horizontal` is only added once the pin is actually
  // wired, so CSS never ships a horizontal-only track with no way to scroll it.
  if (creationsTrack && creationsSection) {
    mm.add('(min-width: 1024px)', () => {
      creationsTrack.classList.add('is-horizontal');
      const distance = creationsTrack.scrollWidth - creationsSection.clientWidth;
      if (distance <= 0) return;
      gsap.to(creationsTrack, {
        x: -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: creationsSection,
          start: 'top top',
          end: () => `+=${distance}`,
          scrub: true,
          pin: true,
        },
      });
      return () => creationsTrack.classList.remove('is-horizontal');
    });
  }
}

setupReveals();
setupScrollNarrative();
