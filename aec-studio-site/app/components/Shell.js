"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, MotionConfig, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { BRAND, SERVICES, INDUSTRIES } from "../data";
import { Btn } from "./sections";

const NAV = [["Industries", "/industries"], ["Process", "/process"], ["Portfolio", "/portfolio"], ["Insights", "/blog"], ["About", "/about"], ["FAQ", "/faq"]];

function TopBar() {
  return (
    <div className="hidden bg-[#070C17] text-xs text-slate-300 md:block">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5">
        <span>US · UK · Canada · Australia · Middle East &nbsp;|&nbsp; Accurate. Reliable. Delivered on time.</span>
        <span className="flex gap-6"><a href="mailto:hello@example.com" className="hover:text-white">hello@example.com</a><a href="tel:+10000000000" className="hover:text-white">+1 000 000 0000</a></span>
      </div>
    </div>
  );
}

function Nav() {
  const path = usePathname() || "/"; const [mega, setMega] = useState(false); const [menu, setMenu] = useState(false);
  const on = (h) => path === h || path.startsWith(h + "/");
  const lk = (h) => `group relative inline-flex min-h-[44px] items-center text-sm ${on(h) ? "text-white" : "text-slate-300 hover:text-white"}`;
  const ul = (h) => <span className={`absolute inset-x-0 bottom-2 h-px origin-left bg-orange-500 transition-transform duration-300 ${on(h) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />;
  const close = () => { setMega(false); setMenu(false); };
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1220]/90 text-slate-200 backdrop-blur-lg" onMouseLeave={() => setMega(false)}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Link href="/" onClick={close} className="text-lg font-bold tracking-tight text-white">{BRAND}<span className="text-orange-500">.</span></Link>
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          <Link href="/services" onClick={close} onMouseEnter={() => setMega(true)} onFocus={() => setMega(true)} className={lk("/services")}>Services ▾{ul("/services")}</Link>
          {NAV.map(([l, h]) => <Link key={h} href={h} onClick={close} className={lk(h)}>{l}{ul(h)}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block"><Btn href="/contact">Free sample</Btn></div>
          <button className="min-h-[44px] min-w-[44px] text-xl text-white lg:hidden" aria-label="Menu" aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? "✕" : "☰"}</button>
        </div>
      </div>
      <AnimatePresence>
        {mega && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="absolute inset-x-0 top-full hidden border-b border-white/10 bg-[#0B1220] lg:block">
            <div className="mx-auto grid max-w-7xl grid-cols-3 gap-2 p-5">
              {SERVICES.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} onClick={close} className="rounded-lg p-4 transition-colors hover:bg-white/5"><div className="font-semibold text-white">{s.name}</div><div className="mt-1 text-sm text-slate-400">{s.lead}</div></Link>)}
            </div>
          </motion.div>
        )}
        {menu && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden lg:hidden">
            <div className="flex flex-col px-5 pb-5">
              {[["Services", "/services"], ...NAV, ["Contact", "/contact"]].map(([l, h]) => <Link key={h} href={h} onClick={close} className={`flex min-h-[48px] items-center border-b border-white/10 ${on(h) ? "text-orange-400" : "text-slate-200"}`}>{l}</Link>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  const cols = [["Services", SERVICES.map((s) => [s.name, `/services/${s.slug}`])], ["Industries", INDUSTRIES.map((x) => [x[0], "/industries"])], ["Company", [["About us", "/about"], ["Process", "/process"], ["Portfolio", "/portfolio"], ["Case studies", "/case-studies"], ["Insights", "/blog"], ["FAQ", "/faq"], ["Contact", "/contact"]]]];
  return (
    <footer className="bg-[#070C17] text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div><p className="text-lg font-bold text-white">{BRAND}<span className="text-orange-500">.</span></p><p className="mt-3 text-sm">Accurate, reliable AEC drafting, BIM and rendering support for teams across the US, UK, Canada, Australia and the Middle East.</p></div>
        {cols.map(([h, l]) => <div key={h}><p className="font-semibold text-white">{h}</p><ul className="mt-4 space-y-2 text-sm">{l.map(([n, href]) => <li key={n}><Link href={href} className="hover:text-white">{n}</Link></li>)}</ul></div>)}
      </div>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-white/10 py-6 text-xs"><span>© 2026 {BRAND}. All rights reserved.</span><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link><Link href="/terms" className="hover:text-white">Terms of Use</Link></div>
    </footer>
  );
}

export default function Shell({ children }) {
  const { scrollYProgress } = useScroll(); const sx = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only z-[70] bg-white p-3 focus:not-sr-only focus:fixed focus:left-3 focus:top-3">Skip to content</a>
      <motion.div style={{ scaleX: sx, originX: 0 }} className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-orange-500" />
      <TopBar /><Nav /><main id="main">{children}</main><Footer />
    </MotionConfig>
  );
}
