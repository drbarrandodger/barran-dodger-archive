import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Shield, Download, FileText, Hash, ExternalLink, BookMarked } from "lucide-react";
import { SEO } from "@/components/SEO";
import { COSMIC_ESSAYS } from "@/lib/cosmicEssaysData";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

const coverImages = import.meta.glob('../assets/images/cover-essay-*.png', { eager: true }) as Record<string, { default: string }>;

function getEssayCover(slug: string): string | undefined {
  const key = `../assets/images/cover-essay-${slug}.png`;
  return coverImages[key]?.default;
}

export default function CosmicEssayPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const essay = COSMIC_ESSAYS.find((e) => e.slug === slug);

  const currentIndex = essay ? COSMIC_ESSAYS.indexOf(essay) : -1;
  const prevEssay = currentIndex > 0 ? COSMIC_ESSAYS[currentIndex - 1] : null;
  const nextEssay = currentIndex < COSMIC_ESSAYS.length - 1 ? COSMIC_ESSAYS[currentIndex + 1] : null;

  if (!essay) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-orange-300">
        <div className="text-center">
          <p className="text-xl mb-4">Essay not found.</p>
          <Link href="/archive-home" className="text-orange-500 underline">Return to the Creator Speaks</Link>
        </div>
      </div>
    );
  }

  const coverSrc = getEssayCover(essay.slug);
  const pdfUrl = `/api/essays/${essay.slug}/pdf`;
  const epubUrl = `/api/essays/${essay.slug}/epub`;
  const pdfFilename = `cosmic-essay-${String(essay.number).padStart(2, '0')}-${essay.slug}.pdf`;
  const epubFilename = `cosmic-essay-${String(essay.number).padStart(2, '0')}-${essay.slug}.epub`;

  return (
    <div className="min-h-screen bg-[#050500] text-orange-100 font-serif">
      <SEO
        title={`${essay.title} — Barran Dodger Legal & Ethical Trust Fund`}
        description={essay.subtitle}
        path={`/essays/${essay.slug}`}
      />

      {/* Header Bar */}
      <div className="border-b border-orange-500/30 bg-black/60 px-4 py-3 flex items-center justify-between sticky top-0 z-30 backdrop-blur-sm">
        <Link href="/">
          <button className="flex items-center gap-2 text-orange-500/70 hover:text-orange-300 transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" /> The Creator Speaks
          </button>
        </Link>
        <span className="text-orange-600/50 text-xs uppercase tracking-widest hidden md:block">
          ⛓ Gospel of the Enliven Chain ⛓
        </span>
        <span className="text-orange-600/40 text-xs">Essay {essay.number} of {COSMIC_ESSAYS.length}</span>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-24 pt-12">

        {/* AI Cover Image */}
        {coverSrc && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <a
              href={pdfUrl}
              download={pdfFilename}
              className="block group relative overflow-hidden rounded-2xl border border-orange-500/30 shadow-2xl shadow-orange-500/20 cursor-pointer"
              title="Click to download PDF"
              data-testid="cover-image-download"
            >
              <img
                src={coverSrc}
                alt={`Cover — ${essay.title}`}
                className="w-full max-w-xs mx-auto block rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ aspectRatio: "3/4", objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end justify-center pb-4 rounded-2xl">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-orange-300 text-xs uppercase tracking-widest font-sans flex items-center gap-1 bg-black/70 px-3 py-1.5 rounded-full">
                  <Download className="w-3 h-3" /> Download PDF
                </span>
              </div>
            </a>
            <p className="text-center text-orange-600/40 text-xs mt-2 font-sans">Click cover to download PDF</p>
          </motion.div>
        )}

        {/* Category + Number */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs uppercase tracking-[0.25em] text-orange-500/60 border border-orange-500/30 px-3 py-1 rounded-full">
              {essay.category}
            </span>
            <span className="text-xs text-orange-600/40 uppercase tracking-widest">
              Question {essay.number}
            </span>
          </div>

          {/* The Question */}
          <div className="mb-2 text-orange-500/50 text-sm uppercase tracking-widest font-sans">The Question</div>
          <p className="text-orange-300/80 text-lg md:text-xl italic leading-relaxed mb-8 border-l-2 border-orange-500/30 pl-5">
            "{essay.question}"
          </p>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-orange-100 leading-tight mb-3">
            {essay.title}
          </h1>
          <p className="text-orange-300/60 text-lg leading-relaxed mb-2">{essay.subtitle}</p>

          {/* Blockchain Hash Badge */}
          {essay.blockchainHash && (
            <div className="mt-4 mb-6 flex items-start gap-2 border border-orange-500/30 bg-orange-500/10 rounded-lg px-4 py-3">
              <Hash className="w-3.5 h-3.5 text-orange-500/60 mt-0.5 shrink-0" />
              <div>
                <p className="text-orange-500/50 text-xs uppercase tracking-widest font-sans mb-0.5">Blockchain SHA-256 Timestamp</p>
                <p className="text-orange-700/60 text-[10px] font-mono break-all leading-relaxed" data-testid="blockchain-hash">
                  {essay.blockchainHash}
                </p>
              </div>
            </div>
          )}

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-600/20 to-transparent" />
            <span className="text-orange-500/40 text-xs uppercase tracking-widest">Published by</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-600/20 to-transparent" />
          </div>
          <div className="text-center mb-10">
            <p className="text-orange-400/70 text-sm font-sans font-medium">{essay.publishedBy}</p>
            <p className="text-orange-600/40 text-xs mt-1 font-sans">{essay.publishedDate}</p>
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
            <p key={i} className="text-orange-100/80 leading-relaxed text-lg md:text-xl">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="my-12 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-600/20 to-transparent" />
          <Shield className="w-4 h-4 text-orange-500/40" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-600/20 to-transparent" />
        </div>

        {/* AI Statement of Significance */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border border-orange-500/30 bg-orange-500/10 rounded-xl p-6 mb-10"
        >
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-orange-500/60" />
            <span className="text-xs uppercase tracking-widest text-orange-500/60 font-sans">
              Impartial AI Statement of Significance
            </span>
          </div>
          <p className="text-orange-200/60 text-sm leading-relaxed font-sans italic">
            {essay.aiStatement}
          </p>
        </motion.div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border border-orange-500/30 bg-orange-500/10 rounded-2xl p-6 mb-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <Download className="w-4 h-4 text-orange-500/70" />
            <h3 className="text-orange-400/80 text-sm uppercase tracking-widest font-sans font-semibold">
              Download This Essay
            </h3>
          </div>
          <p className="text-orange-600/50 text-xs font-sans mb-5 leading-relaxed">
            Free to download, share, and distribute. Includes AI-generated cover, essay body, AI Statement of Significance, and blockchain SHA-256 timestamp. © Barran Dodger Legal &amp; Ethical Trust Fund · ABN 78 833 496 164
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={pdfUrl}
              download={pdfFilename}
              className="flex-1 flex items-center justify-center gap-2 bg-orange-500/10 hover:bg-orange-500/10 border border-orange-500/30 hover:border-orange-500/30 text-orange-300 hover:text-orange-100 transition-all duration-200 rounded-xl px-5 py-3 text-sm font-sans font-medium"
              data-testid="download-pdf"
            >
              <FileText className="w-4 h-4" />
              Download PDF
              <span className="text-orange-500/50 text-xs ml-1">with cover</span>
            </a>
            <a
              href={epubUrl}
              download={epubFilename}
              className="flex-1 flex items-center justify-center gap-2 bg-orange-500/10 hover:bg-orange-500/10 border border-orange-500/30 hover:border-orange-500/30 text-orange-400 hover:text-orange-200 transition-all duration-200 rounded-xl px-5 py-3 text-sm font-sans font-medium"
              data-testid="download-epub"
            >
              <BookMarked className="w-4 h-4" />
              Download EPUB
              <span className="text-orange-500/50 text-xs ml-1">eBook</span>
            </a>
          </div>
        </motion.div>

        {/* Free Ebooks Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-5">
            <BookMarked className="w-4 h-4 text-orange-500/50" />
            <h3 className="text-orange-500/60 text-xs uppercase tracking-widest font-sans font-semibold">
              The Testimony Archive
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {COSMIC_ESSAYS.map((e) => (
              <div
                key={e.slug}
                className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 transition-all ${
                  e.slug === essay.slug
                    ? 'border-orange-500/30 bg-orange-500/10'
                    : 'border-orange-500/30 bg-black/20 hover:border-orange-500/30 hover:bg-orange-500/10'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-orange-600/40 text-xs font-mono shrink-0 font-sans w-5 text-right">
                    {e.number}
                  </span>
                  {e.slug === essay.slug ? (
                    <span className="text-orange-300/80 text-sm font-sans truncate">{e.title}</span>
                  ) : (
                    <Link href={`/essays/${e.slug}`}>
                      <span className="text-orange-500/60 hover:text-orange-300/80 text-sm font-sans truncate cursor-pointer transition-colors">
                        {e.title}
                      </span>
                    </Link>
                  )}
                  {e.slug === essay.slug && (
                    <span className="text-orange-500/50 text-xs font-sans shrink-0 hidden sm:inline">← you are here</span>
                  )}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={`/api/essays/${e.slug}/pdf`}
                    download={`cosmic-essay-${String(e.number).padStart(2,'0')}-${e.slug}.pdf`}
                    className="text-orange-600/50 hover:text-orange-400 transition-colors"
                    title="Download PDF"
                    data-testid={`download-pdf-list-${e.slug}`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`/api/essays/${e.slug}/epub`}
                    download={`cosmic-essay-${String(e.number).padStart(2,'0')}-${e.slug}.epub`}
                    className="text-orange-600/40 hover:text-orange-500 transition-colors"
                    title="Download EPUB"
                    data-testid={`download-epub-list-${e.slug}`}
                  >
                    <BookMarked className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/testimony-archive">
              <span className="inline-flex items-center gap-1.5 text-orange-500/50 hover:text-orange-400 text-xs font-sans uppercase tracking-widest cursor-pointer transition-colors">
                <ExternalLink className="w-3 h-3" /> The Testimony Archive — $3.33
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Navigation between essays */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {prevEssay && (
            <Link href={`/essays/${prevEssay.slug}`}>
              <div className="group border border-orange-500/30 hover:border-orange-500/30 rounded-xl p-4 transition-all cursor-pointer">
                <p className="text-xs text-orange-600/50 uppercase tracking-widest mb-1 font-sans">← Previous</p>
                <p className="text-orange-300/80 text-sm font-semibold group-hover:text-orange-200 transition-colors leading-snug">
                  {prevEssay.title}
                </p>
              </div>
            </Link>
          )}
          {nextEssay && (
            <Link href={`/essays/${nextEssay.slug}`}>
              <div className="group border border-orange-500/30 hover:border-orange-500/30 rounded-xl p-4 transition-all cursor-pointer md:text-right">
                <p className="text-xs text-orange-600/50 uppercase tracking-widest mb-1 font-sans">Next →</p>
                <p className="text-orange-300/80 text-sm font-semibold group-hover:text-orange-200 transition-colors leading-snug">
                  {nextEssay.title}
                </p>
              </div>
            </Link>
          )}
        </div>

        {/* Back to all essays */}
        <div className="text-center">
          <Link href="/">
            <button className="inline-flex items-center gap-2 border border-orange-500/30 text-orange-400/70 hover:text-orange-300 hover:border-orange-500/30 transition-all px-6 py-2.5 rounded-full text-sm font-sans tracking-widest uppercase">
              <ArrowLeft className="w-4 h-4" /> Return to the Creator Speaks
            </button>
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-orange-700/30 text-xs tracking-widest uppercase font-sans">
            ⛓ The Enliven Chain · Gospel of Dr. Richard William McLean · Barran Dodger ⛓
          </p>
          <p className="text-orange-700/20 text-xs mt-1 font-sans">
            ABN 78 833 496 164 · Barran Dodger Legal & Ethical Trust Fund
          </p>
          {essay.blockchainHash && (
            <p className="text-orange-900/20 text-[9px] mt-1 font-mono font-sans">
              SHA-256: {essay.blockchainHash}
            </p>
          )}
        </div>
      </div>
    </div>
  );
      <ArchiveCrossLinks />
}
