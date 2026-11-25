"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView, useScroll, useTransform, useMotionValue, animate } from "framer-motion";
import { BRAND, ease, AC, SERVICES, INDUSTRIES, FLOW, STEPS, MODELS, FILTERS, HUE, WORK, CASES, CASE_SLUGS, QUOTES, TOOLS, FAQS, REGIONS } from "../data";

export const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease, delay }}>{children}</motion.div>
);
export const Head = ({ e, t, s, dark }) => (
  <Reveal className="max-w-2xl">
    <p className={`font-mono text-xs uppercase tracking-[0.2em] ${dark ? "text-orange-400" : AC}`}>{e}</p>
    <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-slate-950"}`}>{t}</h2>
    {s && <p className={`mt-4 text-lg ${dark ? "text-slate-300" : "text-slate-600"}`}>{s}</p>}
  </Reveal>
);
export const Btn = ({ href, children, ghost, dark }) => (
  <motion.div className="inline-block" whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
    <Link href={href} className={`inline-flex min-h-[48px] items-center rounded-md px-6 font-semibold ${ghost ? (dark ? "border border-white/25 text-white hover:bg-white/10" : "border border-slate-300 text-slate-900") : "bg-[#EA580C] text-slate-950 shadow-lg shadow-orange-600/20"}`}>{children}</Link>
  </motion.div>
);

export function Counter({ to, suffix = "" }) {
  const ref = useRef(null); const inView = useInView(ref, { once: true }); const [n, setN] = useState(0);
  useEffect(() => { if (!inView) return; const c = animate(0, to, { duration: 1.8, ease, onUpdate: (v) => setN(Math.round(v)) }); return () => c.stop(); }, [inView, to]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}
export const Marquee = ({ items, dark }) => (
  <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
    <motion.div className="flex w-max gap-3" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 40, ease: "linear", repeat: Infinity }}>
      {[...items, ...items].map((t, i) => (
        <span key={i} className={`whitespace-nowrap rounded-full border px-5 py-2 font-mono text-sm ${dark ? "border-white/15 text-slate-300" : "border-slate-200 bg-white text-slate-700"}`}>{t}</span>
      ))}
    </motion.div>
  </div>
);

export function Sheet() {
  const d = (delay) => ({ initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 1.5, ease: "easeInOut", delay } });
  return (
    <svg viewBox="0 0 400 300" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-full text-sky-300/80" aria-hidden="true">
      <motion.path d="M20 270H380" {...d(0.3)} /><motion.path d="M60 270V90L200 36L340 90V270" {...d(0.6)} />
      <motion.path d="M60 90H340M200 36V270M130 270V170H200V270" {...d(1)} /><motion.path d="M236 120h70v50h-70zM236 195h70v45h-70zM80 120h40v40H80z" {...d(1.4)} />
      <motion.path stroke="#FB923C" d="M60 292H340M60 284v16M340 284v16" {...d(1.9)} />
      <motion.text x="200" y="288" textAnchor="middle" fill="#FB923C" stroke="none" fontSize="10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>26′-0″</motion.text>
    </svg>
  );
}
export const Chip = ({ children, className, delay }) => (
  <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }} className={`absolute rounded-lg border border-white/15 bg-[#111A2E]/90 px-3 py-2 font-mono text-xs text-slate-200 shadow-xl backdrop-blur ${className}`}>{children}</motion.div>
);

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const words = "Engineering-grade drawings, delivered on time.".split(" ");
  return (
    <section id="top" ref={ref} className="relative overflow-hidden bg-[#0B1220]">
      <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(234,88,12,.22),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-orange-400">
            <span className="h-2 w-2 rounded-full bg-orange-500" />AEC outsourcing partner
          </motion.p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            {words.map((w, i) => <motion.span key={i} className={`mr-3 inline-block ${i > 2 && i < 4 ? "text-orange-500" : ""}`} initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.15 + i * 0.08 }}>{w}</motion.span>)}
          </h1>
          <motion.p className="mt-6 max-w-xl text-lg text-slate-300" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
            {BRAND} gives architects, builders and manufacturers one partner for BIM, millwork engineering, construction drawings, 3D rendering, shop drawings and CAD conversion, with a three-step QA on every set.
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
            <Btn href="/contact">Get a free sample drawing</Btn><Btn href="/services" ghost dark>Explore services</Btn>
          </motion.div>
          <motion.ul className="mt-10 grid max-w-xl grid-cols-2 gap-3 text-sm text-slate-300" initial="h" animate="s" variants={{ s: { transition: { staggerChildren: 0.1, delayChildren: 1.3 } } }}>
            {["NDA on every project", "Quote within 24 hours", "ISO 19650 aligned BIM", "Two revision rounds included"].map((t) => (
              <motion.li key={t} variants={{ h: { opacity: 0, x: -12 }, s: { opacity: 1, x: 0 } }} className="flex items-center gap-2"><span className="text-orange-500">✓</span>{t}</motion.li>
            ))}
          </motion.ul>
        </div>
        <motion.div style={{ y }} className="relative">
          <div className="rounded-2xl border border-white/10 bg-[#0F182B] p-6 shadow-2xl"><div className="mb-3 flex justify-between font-mono text-[11px] text-slate-400"><span>SHEET A-101</span><span>SCALE 1:50</span></div><Sheet /></div>
          <Chip className="-left-4 top-10" delay={0}>Clash detected → resolved</Chip><Chip className="-right-3 top-1/3" delay={1}>LOD 350 · Revit</Chip><Chip className="-bottom-4 left-10" delay={2}>QA sign-off ✓</Chip>
        </motion.div>
      </div>
    </section>
  );
}

export function Stats() {
  const items = [[500, "+", "Projects delivered"], [12, "", "Countries served"], [48, "h", "Typical sample turnaround"], [98, "%", "On-time delivery"]]; // TODO: real figures
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4">
        {items.map(([n, s, l]) => <div key={l} className="border-l-2 border-orange-500 pl-4"><div className="text-4xl font-bold text-slate-950"><Counter to={n} suffix={s} /></div><div className="mt-1 text-sm text-slate-600">{l}</div></div>)}
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section id="industries" className="mx-auto max-w-7xl px-5 py-24">
      <Head e="Industries" t="Six key sectors. One source of expertise." s="Deep experience across the project types where drawing accuracy decides schedule and cost." />
      <motion.div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3" initial="h" whileInView="s" viewport={{ once: true, amount: 0.15 }} variants={{ s: { transition: { staggerChildren: 0.07 } } }}>
        {INDUSTRIES.map(([t, d], i) => (
          <motion.div key={t} variants={{ h: { opacity: 0, y: 20 }, s: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }} whileHover={{ backgroundColor: "#FFF7ED" }} className="bg-white p-7">
            <span className="font-mono text-xs text-slate-500">/ 0{i + 1}</span><h3 className="mt-3 text-xl font-semibold text-slate-950">{t}</h3><p className="mt-2 text-slate-600">{d}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export function Services() {
  const [i, setI] = useState(0); const s = SERVICES[i];
  return (
    <section id="services" className="border-y border-slate-200 bg-slate-100">
      <div className="mx-auto max-w-7xl px-5 py-24">
        <Head e="What we make" t="Drafting, BIM and rendering built around your pipeline." s="One partner for every drawing your project needs, from schematic CAD to LOD 500 BIM." />
        <div className="mt-12 grid gap-6 lg:grid-cols-[320px_1fr]">
          <div role="tablist" className="flex gap-2 overflow-x-auto lg:flex-col">
            {SERVICES.map((x, k) => (
              <button key={x.id} role="tab" aria-selected={i === k} onClick={() => setI(k)} className="relative min-h-[52px] shrink-0 rounded-lg px-4 text-left font-semibold text-slate-800">
                {i === k && <motion.span layoutId="svc" className="absolute inset-0 rounded-lg bg-white shadow-sm ring-1 ring-slate-200" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                <span className="relative flex items-center gap-3"><span className={`font-mono text-xs ${i === k ? AC : "text-slate-500"}`}>0{k + 1}</span>{x.name}</span>
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={s.id} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.35, ease }} className="rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="text-2xl font-bold text-slate-950">{s.name}</h3><p className="mt-3 text-lg text-slate-600">{s.lead}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">{s.pts.map((p) => <li key={p} className="flex gap-2 text-slate-700"><span className="text-orange-600">✓</span>{p}</li>)}</ul>
              <dl className="mt-8 grid gap-4 border-t border-slate-200 pt-6 text-sm sm:grid-cols-2">
                <div><dt className="font-mono text-xs uppercase text-slate-500">Typical turnaround</dt><dd className="mt-1 font-semibold text-slate-900">{s.tat}</dd></div>
                <div><dt className="font-mono text-xs uppercase text-slate-500">Built for</dt><dd className="mt-1 font-semibold text-slate-900">{s.who}</dd></div>
              </dl>
              <div className="mt-6 flex flex-wrap gap-2">{s.tools.map((t) => <span key={t} className="rounded border border-slate-200 px-2.5 py-1 font-mono text-xs text-slate-700">{t}</span>)}</div>
              <div className="mt-8 flex flex-wrap gap-3"><Btn href={`/services/${s.slug}`}>View full service</Btn><Btn ghost href="/contact">Request a quote</Btn></div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export function Workflow() {
  return (
    <section className="bg-[#0B1220]">
      <div className="mx-auto max-w-7xl px-5 py-24">
        <Head dark e="Modern AEC workflows" t="Built into every drawing we deliver." s="Senior CAD and BIM engineers paired with modern tooling. AI accelerates QA but never replaces human sign-off." />
        <motion.div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3" initial="h" whileInView="s" viewport={{ once: true, amount: 0.1 }} variants={{ s: { transition: { staggerChildren: 0.09 } } }}>
          {FLOW.map(([t, d], i) => (
            <motion.div key={t} variants={{ h: { opacity: 0, y: 24 }, s: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }} whileHover={{ y: -6, borderColor: "rgba(251,146,60,.6)" }} className="rounded-xl border border-white/10 bg-white/[0.03] p-7">
              <span className="font-mono text-xs text-orange-400">0{i + 1}</span><h3 className="mt-3 text-xl font-semibold text-white">{t}</h3><p className="mt-2 text-slate-300">{d}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Compare() {
  const ref = useRef(null); const pos = useMotionValue(50);
  const clip = useTransform(pos, (v) => `inset(0 ${100 - v}% 0 0)`); const left = useTransform(pos, (v) => `${v}%`);
  const move = (e) => { const r = ref.current.getBoundingClientRect(); pos.set(Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100))); };
  const key = (e) => { if (e.key === "ArrowLeft") pos.set(Math.max(0, pos.get() - 5)); if (e.key === "ArrowRight") pos.set(Math.min(100, pos.get() + 5)); };
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <Head e="CAD → 3D render" t="Drag to see the lift." s="The same CAD set on the left. The finished render, three days later, on the right." />
      <Reveal delay={0.1}>
        <div ref={ref} className="relative mt-10 aspect-[16/9] touch-none select-none overflow-hidden rounded-2xl border border-slate-200 shadow-xl" onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); move(e); }} onPointerMove={(e) => e.buttons && move(e)}>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-200 to-sky-300"><div className="absolute bottom-0 left-[15%] h-[58%] w-[70%] rounded-t-lg bg-white/75 shadow-2xl" /><div className="absolute bottom-0 left-[28%] h-[28%] w-[16%] bg-slate-700/70" /><span className="absolute right-4 top-4 rounded bg-white/85 px-2 py-1 font-mono text-xs text-slate-900">Render · Day +3</span></div>
          <motion.div style={{ clipPath: clip }} className="absolute inset-0 bg-slate-900 [background-image:linear-gradient(#334155_1px,transparent_1px),linear-gradient(90deg,#334155_1px,transparent_1px)] [background-size:32px_32px]">
            <svg viewBox="0 0 400 225" className="absolute inset-0 h-full w-full text-sky-300" fill="none" stroke="currentColor" preserveAspectRatio="none" aria-hidden="true"><path d="M60 225V100H340V225M60 100L200 40L340 100M112 225V160H176V225M240 130h60v40h-60z" /></svg>
            <span className="absolute left-4 top-4 rounded bg-slate-800 px-2 py-1 font-mono text-xs text-sky-200">CAD · Day 0</span>
          </motion.div>
          <motion.div style={{ left }} className="absolute inset-y-0 -ml-px w-0.5 bg-orange-500"><button aria-label="Comparison slider. Use left and right arrow keys." onKeyDown={key} className="absolute top-1/2 -ml-[22px] h-11 w-11 -translate-y-1/2 cursor-ew-resize rounded-full bg-orange-500 font-bold text-slate-950 shadow-lg">⇆</button></motion.div>
        </div>
      </Reveal>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24">
        <Head e="How we work" t="A delivery process built to protect your deadlines." />
        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {STEPS.map(([t, d, b], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, ease, delay: i * 0.12 }} style={{ originX: 0 }} className="h-0.5 bg-orange-500" />
              <div className="mt-4 flex justify-between font-mono text-xs text-slate-500"><span>0{i + 1}</span><span>{b}</span></div>
              <h3 className="mt-3 text-lg font-semibold text-slate-950">{t}</h3><p className="mt-2 text-slate-600">{d}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-20"><Head e="Engagement models" t="Three ways to engage. Pick what fits." /></div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {MODELS.map(([t, d, tag, pts], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <motion.div whileHover={{ y: -8 }} className={`h-full rounded-2xl p-7 ${i === 0 ? "bg-[#0B1220] text-slate-300 ring-2 ring-orange-500" : "border border-slate-200 bg-slate-50"}`}>
                <span className={`rounded-full px-3 py-1 font-mono text-xs ${i === 0 ? "bg-orange-500 text-slate-950" : "bg-slate-200 text-slate-700"}`}>{tag}</span>
                <h3 className={`mt-5 text-2xl font-bold ${i === 0 ? "text-white" : "text-slate-950"}`}>{t}</h3><p className="mt-3">{d}</p>
                <ul className="mt-5 space-y-2 text-sm">{pts.map((p) => <li key={p}><span className="mr-2 text-orange-500">✓</span>{p}</li>)}</ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Work() {
  const [f, setF] = useState("All"); const list = WORK.filter((w) => f === "All" || w[0] === f);
  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-24">
      <Head e="Selected work" t="Projects across millwork, BIM, drawings and rendering." s="A selection of recent work across our six services." />
      <div className="mt-8 flex flex-wrap gap-2">
        {FILTERS.map((x) => (
          <button key={x} onClick={() => setF(x)} className={`relative min-h-[44px] rounded-full px-5 text-sm font-semibold ${f === x ? "text-white" : "text-slate-700 hover:text-slate-950"}`}>
            {f === x && <motion.span layoutId="pf" className="absolute inset-0 rounded-full bg-slate-950" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}<span className="relative">{x}</span>
          </button>
        ))}
      </div>
      <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map(([c, t, m]) => (
            <motion.article layout key={t} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.4, ease }} whileHover="h" className="group overflow-hidden rounded-xl border border-slate-200 bg-white">
              <motion.div variants={{ h: { scale: 1.06 } }} transition={{ duration: 0.6, ease }} className="aspect-[4/3] origin-center" style={{ background: `linear-gradient(135deg, ${HUE[c]}33, ${HUE[c]} 140%), repeating-linear-gradient(0deg, transparent 0 23px, rgba(255,255,255,.35) 23px 24px)` }} />
              <div className="relative bg-white p-5"><span className={`font-mono text-xs uppercase ${AC}`}>{c}</span><h3 className="mt-1 font-semibold text-slate-950">{t}</h3><p className="text-sm text-slate-600">{m}</p></div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export function Proof() {
  const [q, setQ] = useState(0);
  useEffect(() => { const id = setInterval(() => setQ((v) => (v + 1) % QUOTES.length), 7000); return () => clearInterval(id); }, []);
  return (
    <section id="insights" className="bg-slate-100">
      <div className="mx-auto max-w-7xl px-5 py-24">
        <Head e="Case studies" t="Results our clients can measure." />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {CASES.map(([k, t, d, tg], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <Link href={`/case-studies/${CASE_SLUGS[i]}`} className="block h-full rounded-2xl border border-slate-200 bg-white p-8 transition-transform duration-300 hover:-translate-y-1.5">
                <span className={`font-mono text-xs uppercase ${AC}`}>{k}</span><h3 className="mt-3 text-xl font-bold text-slate-950">{t}</h3><p className="mt-3 text-slate-600">{d}</p>
                <div className="mt-5 flex flex-wrap gap-2">{tg.map((x) => <span key={x} className="rounded border border-slate-200 px-2.5 py-1 font-mono text-xs">{x}</span>)}</div>
                <p className={`mt-6 font-semibold ${AC}`}>Read case study →</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-16 rounded-2xl bg-[#0B1220] p-10 text-center">
          <AnimatePresence mode="wait">
            <motion.figure key={q} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.4 }} className="mx-auto max-w-3xl">
              <blockquote className="text-xl leading-relaxed text-white sm:text-2xl">“{QUOTES[q][0]}”</blockquote>
              <figcaption className="mt-5 font-mono text-sm text-orange-400">{QUOTES[q][1]} · <span className="text-slate-400">{QUOTES[q][2]}</span></figcaption>
            </motion.figure>
          </AnimatePresence>
          <div className="mt-6 flex justify-center gap-2">{QUOTES.map((_, k) => <button key={k} aria-label={`Testimonial ${k + 1}`} onClick={() => setQ(k)} className="flex h-11 w-8 items-center justify-center"><motion.span animate={{ width: q === k ? 28 : 8, backgroundColor: q === k ? "#F97316" : "#475569" }} className="h-2 rounded-full" /></button>)}</div>
        </div>
      </div>
    </section>
  );
}

export function Tools() {
  return (
    <section className="overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-5"><Head e="Tooling" t="We work in the tools you already use." s="Same stack as your in-house team. No retooling, no format gymnastics." /></div>
      <div className="mt-10"><Marquee items={TOOLS} /></div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1fr_1.4fr]">
        <Head e="FAQ" t="The questions most teams ask first." s="Cannot find your answer? Our senior team replies within one business day." />
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {FAQS.map(([q, a], i) => (
            <div key={q}>
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex min-h-[60px] w-full items-center justify-between py-4 text-left font-semibold text-slate-950">{q}<motion.span animate={{ rotate: open === i ? 45 : 0 }} className="ml-4 text-2xl text-orange-600">+</motion.span></button>
              <AnimatePresence initial={false}>{open === i && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease }} className="overflow-hidden"><p className="pb-5 leading-relaxed text-slate-600">{a}</p></motion.div>}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const fc = "mt-1 min-h-[44px] w-full rounded-md border border-slate-300 bg-white px-3 text-slate-950";
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0B1220]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(234,88,12,.18),transparent_50%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2">
        <div>
          <Head dark e="Start with a free sample" t="Send a redline, a sketch or a sample CD page." s="We return a deliverable in your standards so you can judge quality before you commit. Every inquiry goes to a senior technician. NDA on request." />
          <dl className="mt-10 grid gap-4 sm:grid-cols-2">
            {REGIONS.map(([r, p]) => <div key={r} className="border-l-2 border-orange-500 pl-4"><dt className="text-sm text-slate-400">{r}</dt><dd className="font-mono text-white">{p}</dd></div>)}
          </dl>
        </div>
        <Reveal delay={0.1}>
          <AnimatePresence mode="wait">
            {sent ? <motion.p key="ok" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="rounded-2xl bg-white p-10 text-lg font-semibold text-slate-950">Thank you. A senior technician will reply within 24 hours.</motion.p> : (
              <motion.form key="f" exit={{ opacity: 0 }} onSubmit={(e) => { e.preventDefault(); setSent(true); /* TODO: connect API / CRM */ }} className="space-y-4 rounded-2xl bg-white p-7 shadow-2xl">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-slate-900">Full name *<input required className={fc} /></label>
                  <label className="block text-sm font-medium text-slate-900">Work email *<input required type="email" className={fc} /></label>
                  <label className="block text-sm font-medium text-slate-900">Company<input className={fc} /></label>
                  <label className="block text-sm font-medium text-slate-900">Phone<input type="tel" className={fc} /></label>
                </div>
                <label className="block text-sm font-medium text-slate-900">Service *<select required className={fc}>{SERVICES.map((s) => <option key={s.id}>{s.name}</option>)}</select></label>
                <label className="block text-sm font-medium text-slate-900">Project details<textarea rows={4} className={fc + " py-2"} /></label>
                <label className="flex min-h-[44px] items-center gap-3 text-sm text-slate-700"><input type="checkbox" className="h-5 w-5 accent-orange-600" />Please send an NDA before I share files</label>
                <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="min-h-[52px] w-full rounded-md bg-[#EA580C] font-semibold text-slate-950">Request my free sample</motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}

