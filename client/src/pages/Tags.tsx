import { Link, useRoute } from "wouter";
import { Tag, ArrowRight, ChevronLeft, FileText } from "lucide-react";
import { TAGS, getTagBySlug } from "@/data/tags";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { LastUpdated } from "@/components/LastUpdated";

export function Tags() {
  const [matchSingle, params] = useRoute("/tags/:slug");
  const slug = matchSingle ? params?.slug : null;
  const single = slug ? getTagBySlug(slug) : null;

  if (single) {
    return (
      <div className="min-h-screen bg-white dark:bg-zinc-950">
        <Navigation />
        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <Link
            href="/tags"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mb-6"
            data-testid="link-back-to-tags"
          >
            <ChevronLeft className="h-4 w-4" />
            All tags
          </Link>

          <header className="mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/50">
              <Tag className="h-3.5 w-3.5 text-amber-700 dark:text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                Tag
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 dark:text-zinc-100"
              data-testid="text-tag-title"
            >
              {single.label}
            </h1>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {single.description}
            </p>
            <LastUpdated />
          </header>

          <section aria-labelledby="related-pages">
            <h2
              id="related-pages"
              className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4"
            >
              {single.pages.length} pages tagged "{single.label}"
            </h2>
            <ul className="space-y-2" role="list">
              {single.pages.map((page) => (
                <li key={page.path}>
                  <Link
                    href={page.path}
                    className="group flex items-center justify-between gap-4 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-amber-400 dark:hover:border-amber-600 hover:bg-amber-50/40 dark:hover:bg-amber-950/20 transition-colors"
                    data-testid={`link-tag-page-${page.path.replace(/\//g, "")}`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <FileText className="h-4 w-4 text-amber-700 dark:text-amber-400 shrink-0" />
                      <span className="font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                        {page.title}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-zinc-400 group-hover:text-amber-700 dark:group-hover:text-amber-400 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  // Index view
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <header className="mb-10 space-y-3 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/50">
            <Tag className="h-3.5 w-3.5 text-amber-700 dark:text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              Browse by Topic
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 dark:text-zinc-100"
            data-testid="text-tags-index-title"
          >
            Tags & Topics
          </h1>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            Browse the archive by topic. {TAGS.length} curated tags spanning the
            forensic, prophetic, blockchain, and international submission record.
          </p>
          <LastUpdated className="justify-center" />
        </header>

        <ul
          className="grid md:grid-cols-2 gap-4"
          role="list"
          aria-label="Topic tags"
        >
          {TAGS.map((tag) => (
            <li key={tag.slug}>
              <Link
                href={`/tags/${tag.slug}`}
                className="group block h-full p-5 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-amber-400 dark:hover:border-amber-600 hover:bg-amber-50/40 dark:hover:bg-amber-950/20 transition-colors"
                data-testid={`link-tag-${tag.slug}`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h2 className="text-xl font-serif font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-amber-700 dark:group-hover:text-amber-400">
                    {tag.label}
                  </h2>
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/40 px-2 py-0.5 rounded shrink-0">
                    {tag.pages.length} pages
                  </span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {tag.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default Tags;
