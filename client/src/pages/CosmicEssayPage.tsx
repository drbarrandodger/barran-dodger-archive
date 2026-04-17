import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, Shield, ChevronRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { COSMIC_ESSAYS } from "@/lib/cosmicEssaysData";

export default function CosmicEssayPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const essay = COSMIC_ESSAYS.find((e) => e.slug === slug);

  const currentIndex = essay ? COSMIC_ESSAYS.indexOf(essay) : -1;
  const prevEssay = currentIndex > 0 ? COSMIC_ESSAYS[currentIndex - 1] : null;
  const nextEssay = currentIndex < COSMIC_ESSAYS.length - 1 ? COSMIC_ESSAYS[currentIndex + 1] : null;

  if (!essay) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-amber-300">
        <div className="text-center">
          <p className="text-xl mb-4">Essay not found.</p>
          <Link href="/" className="text-amber-500 underline">Return to the Creator Speaks</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050500] text-amber-100 font-serif">
      <SEO
        title={`${essay.title} — Barran Dodger Legal & Ethical Trust Fund`}
        description={essay.subtitle}
        path={`/essays/${essay.slug}`}
      />

      {/* Header Bar */}
      <div className="border-b border-amber-900/30 bg-black/60 px-4 py-3 flex items-center justify-between sticky top-0 z-30 backdrop-blur-sm">
        <Link href="/">
          <button className="flex items-center gap-2 text-amber-500/70 hover:text-amber-300 transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" /> The Creator Speaks
          </button>
        </Link>
        <span className="text-amber-700/50 text-xs uppercase tracking-widest hidden md:block">
          ⛓ Gospel of the Enliven Chain ⛓
        </span>
        <span className="text-amber-700/40 text-xs">Essay {essay.number} of {COSMIC_ESSAYS.length}</span>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-24 pt-12">

        {/* Category + Number */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs uppercase tracking-[0.25em] text-amber-500/60 border border-amber-500/20 px-3 py-1 rounded-full">
              {essay.category}
            </span>
            <span className="text-xs text-amber-700/40 uppercase tracking-widest">
              Question {essay.number}
            </span>
          </div>

          {/* The Question */}
          <div className="mb-2 text-amber-500/50 text-sm uppercase tracking-widest font-sans">The Question</div>
          <p className="text-amber-300/80 text-lg md:text-xl italic leading-relaxed mb-8 border-l-2 border-amber-500/30 pl-5">
            "{essay.question}"
          </p>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-amber-100 leading-tight mb-3">
            {essay.title}
          </h1>
          <p className="text-amber-300/60 text-lg leading-relaxed mb-2">{essay.subtitle}</p>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
            <span className="text-amber-600/40 text-xs uppercase tracking-widest">Published by</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          </div>
          <div className="text-center mb-10">
            <p className="text-amber-400/70 text-sm font-sans font-medium">{essay.publishedBy}</p>
            <p className="text-amber-700/40 text-xs mt-1 font-sans">{essay.publishedDate}</p>
          </div>
        </motion.div>

        {/* Essay Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {essay.body.map((paragraph, i) => (
            <p key={i} className="text-amber-100/80 leading-relaxed text-lg md:text-xl">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="my-12 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          <Shield className="w-4 h-4 text-amber-600/40" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        </div>

        {/* AI Statement of Significance */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border border-amber-500/20 bg-amber-950/10 rounded-xl p-6 mb-12"
        >
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-amber-500/60" />
            <span className="text-xs uppercase tracking-widest text-amber-500/60 font-sans">
              Impartial AI Statement of Significance
            </span>
          </div>
          <p className="text-amber-200/60 text-sm leading-relaxed font-sans italic">
            {essay.aiStatement}
          </p>
        </motion.div>

        {/* Navigation between essays */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {prevEssay && (
            <Link href={`/essays/${prevEssay.slug}`}>
              <div className="group border border-amber-900/40 hover:border-amber-500/40 rounded-xl p-4 transition-all cursor-pointer">
                <p className="text-xs text-amber-700/50 uppercase tracking-widest mb-1 font-sans">← Previous</p>
                <p className="text-amber-300/80 text-sm font-semibold group-hover:text-amber-200 transition-colors leading-snug">
                  {prevEssay.title}
                </p>
              </div>
            </Link>
          )}
          {nextEssay && (
            <Link href={`/essays/${nextEssay.slug}`}>
              <div className="group border border-amber-900/40 hover:border-amber-500/40 rounded-xl p-4 transition-all cursor-pointer md:text-right">
                <p className="text-xs text-amber-700/50 uppercase tracking-widest mb-1 font-sans">Next →</p>
                <p className="text-amber-300/80 text-sm font-semibold group-hover:text-amber-200 transition-colors leading-snug">
                  {nextEssay.title}
                </p>
              </div>
            </Link>
          )}
        </div>

        {/* Back to all essays */}
        <div className="text-center">
          <Link href="/">
            <button className="inline-flex items-center gap-2 border border-amber-500/30 text-amber-400/70 hover:text-amber-300 hover:border-amber-400/50 transition-all px-6 py-2.5 rounded-full text-sm font-sans tracking-widest uppercase">
              <ArrowLeft className="w-4 h-4" /> Return to the Creator Speaks
            </button>
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-amber-800/30 text-xs tracking-widest uppercase font-sans">
            ⛓ The Enliven Chain · Gospel of Dr. Richard William McLean · Barran Dodger ⛓
          </p>
          <p className="text-amber-800/20 text-xs mt-1 font-sans">
            ABN 78 833 496 164 · Barran Dodger Legal & Ethical Trust Fund
          </p>
        </div>
      </div>
    </div>
  );
}
