import Link from "next/link";
export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-32 text-center">
      <p className="font-mono text-sm text-orange-700">404</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-950">This page could not be found.</h1>
      <Link href="/" className="mt-8 inline-flex min-h-[48px] items-center rounded-md bg-[#EA580C] px-6 font-semibold text-slate-950">Back to home</Link>
    </section>
  );
}
