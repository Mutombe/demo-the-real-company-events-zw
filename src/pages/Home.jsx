import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ArrowDown, MapPin, Phone, WhatsappLogo, Star, Quotes,
  CaretLeft, CaretRight, CheckCircle, Lightning, Heart, Users, Trophy, Timer, Fire, Lightbulb,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import siteData from '../data/siteData';

const iconMap = { Heart, Star, Lightning, Trophy, Users, Timer, Fire, CheckCircle, Lightbulb };

function AnimatedCounter({ target, suffix = '', duration = 2.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const numericTarget = parseInt(target.replace(/[^0-9]/g, ''), 10) || 0;
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = numericTarget / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) { setCount(numericTarget); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, numericTarget, duration]);
  return <span ref={ref}>{inView ? count.toLocaleString() : '0'}{suffix}</span>;
}

function NoiseTexture({ opacity = 0.035 }) {
  return (
    <div className="absolute inset-0 pointer-events-none z-10" style={{
      opacity,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat', backgroundSize: '128px 128px',
    }} />
  );
}


function GoldSparkles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="absolute rounded-full" style={{
          width: `${Math.random() * 3 + 1}px`, height: `${Math.random() * 3 + 1}px`,
          background: `radial-gradient(circle, rgba(212,168,83,${Math.random() * 0.6 + 0.2}) 0%, transparent 70%)`,
          left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
          animation: `sparkle-float ${Math.random() * 8 + 6}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
        }} />
      ))}
    </div>
  );
}

/* 1. HERO — Dark Luxury Cinematic */
function HeroSection() {
  const { business, hero } = siteData;
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = hero.backgroundImages?.map(img => img.url) || ['https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80','https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80','https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80'];
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const t = setInterval(() => setCurrentSlide(p => (p + 1) % heroImages.length), 6000);
    return () => clearInterval(t);
  }, [heroImages.length]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] overflow-hidden bg-white">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <AnimatePresence mode="sync">
          <motion.img key={currentSlide} src={heroImages[currentSlide]} alt="The Real Company events(Zw)"
            className="absolute inset-0 w-full h-[130%] object-cover object-center"
            initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }} loading="eager" />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/50 to-navy-950/90 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-transparent to-navy-950/30 z-[1]" />
      </motion.div>
      <GoldSparkles />
      <NoiseTexture opacity={0.03} />
      <div className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
        {heroImages.map((_, i) => (
          <button key={i} onClick={() => setCurrentSlide(i)}
            className={`w-[3px] transition-all duration-700 ${i === currentSlide ? 'h-10 bg-[#B8860B]' : 'h-4 bg-white/20'}`} aria-label={`Slide ${i+1}`} />
        ))}
      </div>
      <div className="absolute top-[15%] left-0 w-[2px] h-32 sm:h-48 bg-gradient-to-b from-transparent via-[#B8860B]-500 to-transparent z-20" />
      <motion.div className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-36"
        style={{ y: textY, opacity }}>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.3 }}
          className="w-16 h-[2px] bg-gradient-to-r from-[#B8860B]-500 to-[#C49A2C]-400/50 mb-6 origin-left" />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="text-[#C49A2C] text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
          {hero.badge || "Premium Event Design"}
        </motion.p>
        <div className="overflow-hidden">
          {(hero.titleLines || ['CRAFTING', 'DREAMS', 'INTO REALITY.']).map((line, i) => (
            <motion.div key={line} initial={{ y: '110%' }} animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}>
              <h1 className={`font-heading leading-[0.92] tracking-tight ${
                i === 1 ? 'bg-gradient-to-r from-[#B8860B]-500 via-[#B8860B]-400 to-[#C49A2C]-600 bg-clip-text text-transparent italic' : 'text-neutral-900'
              }`} style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)', fontWeight: i === 1 ? 700 : 300 }}>
                {line}
              </h1>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="flex items-center gap-3 mt-8">
          <div className="w-8 h-[1px] bg-[#B8860B]/40" />
          <p className="text-neutral-900/30 text-xs sm:text-sm uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-sans)' }}>
            {hero.trustLine || '5 Stars \u00b7 18+ Reviews \u00b7 Harare'}
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} className="flex flex-wrap gap-4 mt-10">
          <Link to="/contact" className="group inline-flex items-center gap-3 bg-[#B8860B] text-navy-950 px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold hover:bg-gold-400 hover:shadow-xl hover:shadow-[#B8860B]/20 transition-all duration-500" style={{ fontFamily: 'var(--font-sans)' }}>
            {hero.ctaPrimary || 'Plan Your Event'} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/projects" className="group inline-flex items-center gap-3 border border-white/20 text-neutral-900 px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold hover:border-[#B8860B]/50 hover:text-[#C49A2C] transition-all duration-500" style={{ fontFamily: 'var(--font-sans)' }}>
            {hero.ctaSecondary || 'View Portfolio'}
          </Link>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-neutral-900/20 text-[10px] uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--font-sans)' }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={14} className="text-[#B8860B]/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* 2. MARQUEE */
function MarqueeTicker() {
  const items = siteData.marqueeItems || ['WEDDINGS', 'CORPORATE GALAS', 'BIRTHDAYS', 'CONFERENCES', 'FLORAL DESIGN', 'CUSTOM DECOR'];
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <section className="bg-white border-y border-[#B8860B]/10 py-5 sm:py-6 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-6 sm:gap-8 mx-6 sm:mx-8">
            <span className="text-[#B8860B]/80 font-heading text-lg sm:text-2xl italic tracking-wider">{item}</span>
            <span className="text-[#B8860B]/20 text-sm">&diams;</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* 3. SERVICES GRID */
function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { servicesPreview, services } = siteData;
  const fi = ['https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80','https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80','https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80','https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80','https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80','https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80'];
  return (
    <section ref={ref} className="bg-neutral-50 py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="mb-14 sm:mb-20">
          <div className="w-12 h-[2px] bg-[#B8860B] mb-6" />
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="text-[#B8860B]/60 text-xs uppercase tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>Our Expertise</p>
              <h2 className="font-heading text-neutral-900 leading-[0.92] italic" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
                What We <span className="text-[#B8860B]">Create</span>
              </h2>
            </div>
            <Link to="/services" className="group text-neutral-900/30 text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:text-[#B8860B] transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>
              All Services <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {(servicesPreview || []).slice(0, 6).map((service, i) => {
            const IC = iconMap[service.icon] || iconMap[service.iconName] || Star;
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.08 * i }}
                className={i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}>
                <Link to={`/services#${services?.items?.[i]?.slug || ''}`}
                  className={`group relative block overflow-hidden ${i === 0 ? 'aspect-[16/9] sm:aspect-[2/1]' : 'aspect-[3/4]'}`}>
                  <img src={service.image || fi[i] || fi[0]} alt={service.title} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110" loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/20 opacity-90" />
                  <div className="absolute top-4 right-5 z-10"><span className="text-[#B8860B]/15 font-heading text-6xl sm:text-7xl italic leading-none">{String(i+1).padStart(2, '0')}</span></div>
                  <div className="absolute top-5 left-5 z-10 w-10 h-10 border border-[#B8860B]/30 flex items-center justify-center bg-white/60 backdrop-blur-sm"><IC size={18} weight="light" className="text-[#B8860B]" /></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10">
                    <h3 className="font-heading text-neutral-900 text-xl sm:text-2xl italic tracking-wide mb-2">{service.title}</h3>
                    <p className="text-neutral-900/60 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>{service.desc}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B8860B]-500 to-[#C49A2C]-400 z-10" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* 4. PORTFOLIO HORIZONTAL SCROLL */
function PortfolioGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { projects } = siteData;
  return (
    <section ref={ref} className="bg-white py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-12 sm:mb-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <div className="w-12 h-[2px] bg-[#B8860B] mb-6" />
          <h2 className="font-heading text-neutral-900 leading-[0.92] italic" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Our <span className="text-[#B8860B]">Portfolio</span>
          </h2>
        </motion.div>
      </div>
      <div className="flex gap-4 overflow-x-auto px-5 sm:px-8 lg:px-12 pb-4" style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
        {(projects?.items || []).map((project, i) => (
          <div key={project.slug || i} className="group relative flex-shrink-0 w-[300px] sm:w-[360px] lg:w-[420px] overflow-hidden">
            <div className="aspect-[3/4] overflow-hidden relative">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110" loading="eager" />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/40 transition-colors duration-700" />
              <div className="absolute top-5 left-5 z-10">
                <span className="bg-[#B8860B]/90 text-navy-950 text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>{project.category}</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent">
              <h4 className="text-neutral-900 font-heading text-lg sm:text-xl italic">{project.title}</h4>
              <p className="text-neutral-900/40 text-xs mt-1 uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)' }}>{project.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* 5. STATS */
function StatsBand() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const { stats } = siteData;
  const ds = stats?.length ? stats : [{ number: '18', label: 'Reviews' }, { number: '200', label: 'Events' }, { number: '5', label: 'Rating' }, { number: '5', label: 'Years' }];
  return (
    <section ref={ref} className="relative bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B8860B]-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B8860B]-500/40 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16">
          {ds.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }} className="text-center">
              <div className="font-heading text-[#B8860B] leading-none italic" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', textShadow: '0 0 40px rgba(212,168,83,0.15)' }}>
                <AnimatedCounter target={String(s.number).replace(/[^0-9]/g, '')} suffix={String(s.number).replace(/[0-9]/g, '')} />
              </div>
              <div className="text-neutral-900/30 text-xs sm:text-sm uppercase tracking-[0.25em] mt-3" style={{ fontFamily: 'var(--font-sans)' }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 6. TESTIMONIALS */
function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { homeTestimonials } = siteData;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const defaults = [{ text: 'They transformed our venue into something from a fairy tale. Absolutely breathtaking.', name: 'Tendai C.', role: 'Bride', rating: 5 }, { text: 'Professional, creative, and attentive to every detail. Could not have asked for more.', name: 'James M.', role: 'Corporate Client', rating: 5 }];
  const ts = homeTestimonials?.length ? homeTestimonials : defaults;
  const next = useCallback(() => setActive(p => (p+1) % ts.length), [ts.length]);
  useEffect(() => { const t = setInterval(next, 7000); return () => clearInterval(t); }, [next]);
  const t = ts[active];
  return (
    <section ref={ref} className="relative bg-white py-24 sm:py-32 lg:py-40 overflow-hidden">
      <NoiseTexture opacity={0.02} />
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <Quotes size={48} weight="fill" className="text-[#B8860B]/15 mx-auto mb-8" />
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }}>
            <blockquote className="text-neutral-900 text-lg sm:text-xl lg:text-2xl leading-relaxed font-heading italic mb-10">&ldquo;{t.text}&rdquo;</blockquote>
            <div className="w-8 h-[2px] bg-[#B8860B] mx-auto mb-3" />
            <div className="text-neutral-900 text-sm uppercase tracking-[0.15em] font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>{t.name}</div>
            <div className="text-neutral-900/40 text-xs uppercase mt-1" style={{ fontFamily: 'var(--font-sans)' }}>{t.role}</div>
            <div className="flex items-center justify-center gap-0.5 mt-2">
              {[...Array(t.rating || 5)].map((_, j) => <Star key={j} size={12} weight="fill" className="text-[#B8860B]" />)}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* 7. CTA */
function CTASection() {
  const { business, homeCta } = siteData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  return (
    <section ref={ref} className="relative py-28 sm:py-36 lg:py-48 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={homeCta?.backgroundImage || 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200&q=80'} alt="The Real Company events(Zw)" className="w-full h-[130%] object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-white/70" />
      </motion.div>
      <NoiseTexture opacity={0.03} />
      <div className="relative z-20 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <div className="w-16 h-[2px] bg-[#B8860B] mx-auto mb-8" />
          <h2 className="font-heading text-neutral-900 leading-[0.92] italic mb-8" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}>
            YOUR VISION<br /><span className="text-[#B8860B]">OUR ARTISTRY</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="group inline-flex items-center gap-3 bg-[#B8860B] text-navy-950 px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold hover:bg-gold-400 hover:shadow-xl transition-all duration-500" style={{ fontFamily: 'var(--font-sans)' }}>
              {homeCta?.ctaPrimary || 'Start Planning'} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href={`https://wa.me/${business.whatsappNumber || '263774126656'}`} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-green-500/40 text-green-400 px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold hover:bg-green-500/10 transition-all" style={{ fontFamily: 'var(--font-sans)' }}>
              <WhatsappLogo size={20} weight="fill" /> WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <MarqueeTicker />
      <ServicesGrid />
      <PortfolioGallery />
      <StatsBand />
      <TestimonialsSection />
      <CTASection />
    </PageTransition>
  );
}
