import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgress } from "@/components/ReadingProgress";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export interface ArticleSection {
  heading?: string;
  content?: string[];
  highlight?: string;
  isVideo?: boolean;
  isList?: boolean;
  items?: string[];
  isLinks?: boolean;
  links?: { label: string; href: string }[];
  isDivider?: boolean;
  isInspiration?: boolean;
  inspirationTitle?: string;
  inspirationUrl?: string;
}

export interface ArticlePageData {
  seoTitle: string;
  seoDescription: string;
  title: string;
  subtitle: string;
  author: string;
  videoId: string;
  videoTitle: string;
  sections: ArticleSection[];
}

function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="my-8 rounded-xl overflow-hidden border border-yellow-500/30 shadow-2xl">
      <div className="bg-black/60 px-4 py-2 text-xs text-yellow-400 font-mono flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
        <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
        <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
        <span className="ml-2 truncate">{title}</span>
      </div>
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export function ArticlePageTemplate({ data }: { data: ArticlePageData }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO title={data.seoTitle} description={data.seoDescription} />
      <ReadingProgress />
      <Navigation />

      <main className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
        <motion.div initial="hidden" animate="visible" variants={fade} className="mb-12">
          <div className="inline-block bg-yellow-500/10 border border-yellow-500/30 rounded px-3 py-1 text-yellow-400 text-xs font-mono uppercase tracking-widest mb-6">
            Testimony & Evidence
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            {data.title}
          </h1>
          <p className="text-lg text-gray-300 italic border-l-4 border-yellow-500/60 pl-4 mb-6">
            {data.subtitle}
          </p>
          <p className="text-sm text-gray-500 font-mono">
            By <span className="text-yellow-400">{data.author}</span>
          </p>
        </motion.div>

        <div className="prose prose-invert prose-lg max-w-none">
          {data.sections.map((section, i) => {
            if (section.isVideo) {
              return (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                  <YouTubeEmbed videoId={data.videoId} title={data.videoTitle} />
                </motion.div>
              );
            }

            if (section.isDivider) {
              return (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                  <div className="my-12 border-t border-white/10" />
                </motion.div>
              );
            }

            if (section.isLinks) {
              return (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                  <div className="mt-12 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6 sm:p-8">
                    <h2 className="text-xl font-bold text-yellow-400 mb-6">Read the Evidence. Download the Documents. Share the Truth.</h2>
                    <ul className="space-y-3">
                      {section.links?.map((l, j) => (
                        <li key={j}>
                          <a href={l.href} target="_blank" rel="noopener noreferrer"
                            className="text-yellow-300 hover:text-yellow-100 underline underline-offset-4 break-all text-sm font-mono">
                            {l.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-gray-400 text-sm">No sign-up. No paywall. No gatekeeper.</p>
                  </div>
                </motion.div>
              );
            }

            if (section.isInspiration) {
              return (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                  <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-gray-400 font-mono">
                    <p className="mb-1 text-gray-500">Inspired by:</p>
                    <p className="text-white mb-2">{section.inspirationTitle}</p>
                    <a href={section.inspirationUrl} target="_blank" rel="noopener noreferrer"
                      className="text-yellow-400 hover:text-yellow-300 break-all">
                      ▶ {section.inspirationUrl}
                    </a>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.section key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="mb-10">
                {section.heading && (
                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 mt-12 border-l-4 border-yellow-500 pl-4">
                    {section.heading}
                  </h2>
                )}
                {section.isList && section.items ? (
                  <ul className="space-y-3 my-4">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-gray-300 leading-relaxed">
                        <span className="text-yellow-500 mt-1 shrink-0">▸</span>
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
                ) : (
                  section.content?.map((para, j) => {
                    if (para.startsWith("**") && para.endsWith("**")) {
                      return (
                        <p key={j} className="font-bold text-white my-3">
                          {para.slice(2, -2)}
                        </p>
                      );
                    }
                    return (
                      <p key={j} className="text-gray-300 leading-relaxed mb-4"
                        dangerouslySetInnerHTML={{ __html: para }} />
                    );
                  })
                )}
                {section.highlight && (
                  <blockquote className="my-6 border-l-4 border-yellow-500 pl-6 py-2 bg-yellow-500/5 rounded-r-lg">
                    <p className="text-xl font-bold text-yellow-300 italic">{section.highlight}</p>
                  </blockquote>
                )}
              </motion.section>
            );
          })}
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
          className="mt-16 pt-8 border-t border-white/10 text-sm text-gray-500 font-mono">
          <p className="mb-1">
            <span className="text-yellow-400">{data.author}</span> is a Doctor of Philosophy (Victoria University, 2020),
            published author, artist, and human rights advocate.
          </p>
          <p className="mb-1">His 2,304-document forensic archive has been submitted to the International Criminal Court
            and lodged with the United Nations High Commissioner for Refugees.</p>
          <p>
            Contact: <span className="text-yellow-400">drbarrandodger@proton.me</span> |{" "}
            <a href="https://www.barrandodger.com" className="text-yellow-400 hover:underline">barrandodger.com</a>
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
