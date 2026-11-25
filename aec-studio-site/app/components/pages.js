"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES, STEPS, VALUES, REGIONS, ease, AC, POSTS } from "../data";
import { Reveal, Head, Btn, Stats } from "./sections";

export function PageHero({ e, t, s, crumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-[#0B1220]">
      <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(234,88,12,.22),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-20">
        <nav aria-label="Breadcrumb" className="font-mono text-xs text-slate-400"><Link href="/" className="hover:text-white">Home</Link>{crumbs.map(([l, h]) => <span key={l}> / {h ? <Link href={h} className="hover:text-white">{l}</Link> : <span className="text-slate-200">{l}</span>}</span>)}</nav>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-orange-400">{e}</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }} className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl">{t}</motion.h1>
        {s && <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-5 max-w-2xl text-lg text-slate-300">{s}</motion.p>}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-orange-600"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-14">
      <Reveal><h2 className="max-w-xl text-2xl font-bold text-slate-950 sm:text-3xl">See the quality for yourself with a free sample drawing.</h2></Reveal>
      <Reveal delay={0.1}><div className="flex gap-3"><motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}><Link href="/contact" className="inline-flex min-h-[48px] items-center rounded-md bg-slate-950 px-6 font-semibold text-white">Get a free sample</Link></motion.div></div></Reveal>
    </div></section>
  );
}

export function ServicesIndex() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <motion.div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" initial="h" whileInView="s" viewport={{ once: true, amount: 0.1 }} variants={{ s: { transition: { staggerChildren: 0.08 } } }}>
        {SERVICES.map((s, i) => (
          <motion.div key={s.slug} variants={{ h: { opacity: 0, y: 24 }, s: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}>
            <Link href={`/services/${s.slug}`} className="group block h-full rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500 hover:shadow-xl">
              <span className="font-mono text-xs text-slate-500">/ 0{i + 1}</span><h2 className="mt-3 text-xl font-bold text-slate-950">{s.name}</h2><p className="mt-2 text-slate-600">{s.lead}</p>
              <div className="mt-5 flex flex-wrap gap-2">{s.tools.map((t) => <span key={t} className="rounded border border-slate-200 px-2 py-1 font-mono text-xs text-slate-700">{t}</span>)}</div>
              <p className={`mt-6 font-semibold ${AC}`}>Learn more <span className="inline-block transition-transform group-hover:translate-x-1">→</span></p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export function ServiceDetail({ s }) {
  return (
    <>
      <PageHero e="Service" t={s.name} s={s.lead} crumbs={[["Services", "/services"], [s.name]]} />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Head e="What is included" t={`${s.name}, delivered to your standards.`} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {s.pts.map((p, i) => <Reveal key={p} delay={i * 0.08}><div className="h-full rounded-xl border border-slate-200 bg-white p-6"><span className="font-mono text-xs text-orange-700">0{i + 1}</span><p className="mt-2 font-semibold text-slate-900">{p}</p></div></Reveal>)}
          </div>
        </div>
        <Reveal delay={0.15}>
          <aside className="rounded-2xl bg-[#0B1220] p-8 text-slate-300 lg:sticky lg:top-24">
            <p className="font-mono text-xs uppercase text-orange-400">Typical turnaround</p><p className="mt-1 text-lg font-semibold text-white">{s.tat}</p>
            <p className="mt-6 font-mono text-xs uppercase text-orange-400">Built for</p><p className="mt-1 text-lg font-semibold text-white">{s.who}</p>
            <p className="mt-6 font-mono text-xs uppercase text-orange-400">Software</p>
            <div className="mt-2 flex flex-wrap gap-2">{s.tools.map((t) => <span key={t} className="rounded border border-white/20 px-2.5 py-1 font-mono text-xs">{t}</span>)}</div>
            <div className="mt-8"><Btn href="/contact">Request a quote</Btn></div>
          </aside>
        </Reveal>
      </section>
      <section className="border-y border-slate-200 bg-white"><div className="mx-auto max-w-7xl px-5 py-24">
        <Head e="How it works" t="From brief to delivery in four steps." />
        <div className="mt-12 grid gap-8 md:grid-cols-4">{STEPS.map(([t, d], i) => <Reveal key={t} delay={i * 0.1}><motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, ease, delay: i * 0.12 }} style={{ originX: 0 }} className="h-0.5 bg-orange-500" /><p className="mt-4 font-mono text-xs text-slate-500">0{i + 1}</p><h3 className="mt-2 font-semibold text-slate-950">{t}</h3><p className="mt-2 text-slate-600">{d}</p></Reveal>)}</div>
      </div></section>
      <section className="mx-auto max-w-7xl px-5 py-24">
        <Head e="Related services" t="More from our team." />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{SERVICES.filter((x) => x.slug !== s.slug).map((x) => <Link key={x.slug} href={`/services/${x.slug}`} className="rounded-lg border border-slate-200 bg-white p-5 font-semibold text-slate-900 transition-colors hover:border-orange-500">{x.name} →</Link>)}</div>
      </section>
      <CtaBand />
    </>
  );
}

export function BlogIndex() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((p, i) => <Reveal key={p.slug} delay={(i % 3) * 0.08}><Link href={`/blog/${p.slug}`} className="group block h-full overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1.5 hover:shadow-xl"><div className="h-40 bg-gradient-to-br from-slate-900 to-slate-700 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:28px_28px]" /><div className="p-6"><span className={`font-mono text-xs uppercase ${AC}`}>{p.cat}</span><h2 className="mt-2 text-lg font-bold text-slate-950">{p.title}</h2><p className="mt-2 text-sm text-slate-600">{p.ex}</p><p className={`mt-4 text-sm font-semibold ${AC}`}>Read article →</p></div></Link></Reveal>)}
      </div>
    </section>
  );
}

export function Article({ cat, title, body, tags = [], crumbs }) {
  return (
    <>
      <PageHero e={cat} t={title} crumbs={crumbs} />
      <article className="mx-auto max-w-3xl px-5 py-20 text-lg leading-relaxed text-slate-700">
        {body.map((p, i) => <Reveal key={i}><p className="mb-6">{p}</p></Reveal>)}
        {tags.length > 0 && <div className="mt-8 flex flex-wrap gap-2">{tags.map((t) => <span key={t} className="rounded border border-slate-200 px-2.5 py-1 font-mono text-xs">{t}</span>)}</div>}
        <Link href={crumbs[0][1]} className={`mt-10 inline-block font-semibold ${AC}`}>← Back to {crumbs[0][0]}</Link>
      </article>
      <CtaBand />
    </>
  );
}

export function About() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2">
        <Head e="Who we are" t="A drafting and engineering partner built for AEC deadlines." />
        <Reveal delay={0.1}><div className="space-y-5 text-lg text-slate-600"><p>We support architects, builders, manufacturers and developers with BIM, millwork engineering, construction drawings, 3D rendering, shop drawings and CAD conversion.</p><p>Senior engineers lead every project, and each drawing set passes a three-step QA before it reaches you. We work in your software, your standards and your delivery platform.</p></div></Reveal>
      </section>
      <section className="bg-[#0B1220]"><div className="mx-auto grid max-w-7xl gap-5 px-5 py-20 md:grid-cols-2">
        {[["Mission", "Turn complexity into clear, buildable documentation that keeps projects on schedule."], ["Vision", "Be the most trusted extension of every AEC team we work with."]].map(([t, d], i) => <Reveal key={t} delay={i * 0.1}><div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8"><p className="font-mono text-xs uppercase text-orange-400">{t}</p><p className="mt-3 text-xl text-white">{d}</p></div></Reveal>)}
      </div></section>
      <section className="mx-auto max-w-7xl px-5 py-24"><Head e="Core values" t="How we work every day." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{VALUES.map(([t, d], i) => <Reveal key={t} delay={(i % 3) * 0.08}><motion.div whileHover={{ y: -6 }} className="h-full rounded-xl border border-slate-200 bg-white p-6"><h3 className="font-semibold text-slate-950">{t}</h3><p className="mt-2 text-slate-600">{d}</p></motion.div></Reveal>)}</div>
      </section>
      <Stats />
      <section className="mx-auto max-w-7xl px-5 py-24"><Head e="Global presence" t="Delivery teams across overlapping time zones." />
        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{REGIONS.map(([r, p]) => <div key={r} className="border-l-2 border-orange-500 pl-4"><dt className="text-sm text-slate-500">{r}</dt><dd className="font-mono text-slate-900">{p}</dd></div>)}</dl>
      </section>
    </>
  );
}

export function Legal({ title, body }) {
  return (
    <>
      <PageHero e="Legal" t={title} crumbs={[[title]]} />
      <div className="mx-auto max-w-3xl space-y-5 px-5 py-20 text-slate-700">{body.map((p, i) => <p key={i}>{p}</p>)}</div>
    </>
  );
}
