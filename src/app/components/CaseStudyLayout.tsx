import { Link } from "react-router";
import { ArrowRight, Download } from "lucide-react";
import Navigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";

export interface StudyImage {
  src: string;
  alt: string;
  caption?: string;
  preview?: "navigation";
}

export interface StudySection {
  id: string;
  label: string;
  title: string;
  paragraphs: string[];
  images?: StudyImage[];
  layout?: "phones" | "devices" | "compact" | "comparison" | "stacked";
  link?: { href: string; label: string };
}

export interface StudyContent {
  name: string;
  category: string;
  title: string;
  lead: string;
  parent?: { label: string; href: string };
  hero: StudyImage;
  meta: { label: string; value: string }[];
  context: { title: string; paragraphs: string[] };
  sections: StudySection[];
  outcome: string;
  outcomeTitle?: string;
  pdf?: { href: string; label: string };
  related: { title: string; description: string; href: string }[];
}

function StudyVisuals({ images, layout }: { images: StudyImage[]; layout?: StudySection["layout"] }) {
  const grid = layout === "devices"
    ? "grid md:grid-cols-[3fr_1fr] gap-8 items-center"
    : layout === "phones"
      ? "grid sm:grid-cols-3 gap-8 items-start"
      : images.length > 1 && layout !== "stacked" ? "grid md:grid-cols-2 gap-8 items-start" : "grid gap-8";

  return (
    <div className={grid}>
      {images.map(({ src, alt, caption, preview }, index) => (
        <figure key={src} className="min-w-0">
          <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open full image: ${alt}`} className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#201E50]">
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className={`w-full mx-auto ${preview === "navigation" ? "aspect-[21/1] object-cover object-top" : "h-auto"} ${layout === "phones" ? "max-w-[260px]" : layout === "compact" ? "max-w-sm" : layout === "devices" && index > 0 ? "max-w-[200px]" : ""}`}
            />
          </a>
          {caption && <figcaption className="text-sm text-slate-500 leading-relaxed text-center mt-4">{caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

export default function CaseStudyLayout({ study }: { study: StudyContent }) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-32">
          <Breadcrumb items={[
            { label: "Works", href: "/#projects" },
            ...(study.parent ? [study.parent] : []),
            { label: study.name },
          ]} />
          <header className="pt-6 pb-16 md:pb-24">
            <p className="text-[#201E50] text-xs tracking-widest uppercase mb-5">{study.name} · {study.category}</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-slate-900 leading-[1.08] tracking-tight max-w-4xl mb-6">{study.title}</h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-10">{study.lead}</p>
            <div className="mb-10">
              <img src={study.hero.src} alt={study.hero.alt} loading="eager" className="w-full h-auto max-h-[640px] object-contain" />
            </div>
            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 border-b border-slate-200 pb-8">
              {study.meta.map(({ label, value }) => (
                <div key={label}>
                  <dt className="text-xs tracking-widest uppercase text-slate-500 mb-2">{label}</dt>
                  <dd className="text-sm text-slate-800 leading-relaxed">{value}</dd>
                </div>
              ))}
            </dl>
          </header>

          <section aria-labelledby="context-title" className="grid md:grid-cols-[1fr_1.4fr] gap-6 md:gap-16 pb-16 md:pb-20">
            <div>
              <p className="text-xs tracking-widest uppercase text-slate-500 mb-4">Context & my role</p>
              <h2 id="context-title" className="text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">{study.context.title}</h2>
            </div>
            <div className="text-lg text-slate-600 leading-relaxed space-y-5 md:pt-8">
              {study.context.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>

          <nav aria-label="In this case study" className="border-y border-slate-200 py-5 mb-16 md:mb-24 flex flex-wrap gap-x-8 gap-y-4">
            {study.sections.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className="text-sm text-slate-600 hover:text-[#201E50] hover:underline underline-offset-4 focus-visible:outline-offset-4">{label}</a>
            ))}
          </nav>

          {study.sections.map(({ id, label, title, paragraphs, images, layout, link }) => (
            <section key={id} id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28 pb-20 md:pb-28">
              <div className={`grid md:grid-cols-[1fr_1.4fr] gap-6 md:gap-16 ${images ? "mb-10" : ""}`}>
                <div>
                  <p className="text-xs tracking-widest uppercase text-slate-500 mb-4">{label}</p>
                  <h2 id={`${id}-title`} className="text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">{title}</h2>
                </div>
                <div className="md:pt-8">
                  <div className="text-lg text-slate-600 leading-relaxed space-y-5">
                    {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  {link && <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-5 text-sm text-[#201E50] hover:underline underline-offset-4">{link.label} <ArrowRight aria-hidden="true" className="w-4 h-4" /></a>}
                </div>
              </div>
              {images && <StudyVisuals images={images} layout={layout} />}
            </section>
          ))}

          <section aria-labelledby="delivered-title" className="grid md:grid-cols-[1fr_1.4fr] gap-6 md:gap-16 border-t border-slate-200 pt-10 pb-20 md:pb-28">
            <h2 id="delivered-title" className="text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">{study.outcomeTitle ?? "What I delivered"}</h2>
            <div>
              <p className="text-lg text-slate-600 leading-relaxed">{study.outcome}</p>
              {study.pdf && (
                <a href={study.pdf.href} download className="inline-flex items-center gap-3 text-sm font-medium text-[#201E50] mt-6 hover:underline underline-offset-4">
                  <Download aria-hidden="true" className="w-4 h-4" />{study.pdf.label}
                </a>
              )}
            </div>
          </section>
        </div>

        <section aria-labelledby="related-title" className="bg-slate-50 py-16 md:py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <h2 id="related-title" className="text-3xl md:text-4xl text-slate-900 tracking-tight mb-10">Explore more work</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {study.related.map(({ title, description, href }) => (
                <Link key={href} to={href} className="group rounded-2xl bg-white border border-slate-200 p-6 md:p-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#201E50]">
                  <h3 className="text-xl text-slate-900 mb-3">{title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[#201E50] group-hover:underline underline-offset-4">View case study <ArrowRight aria-hidden="true" className="w-4 h-4" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="px-6 md:px-12 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <div className="flex gap-8">
            <a href="mailto:polettilaiza@gmail.com" className="text-blue-800 hover:text-blue-900 text-sm">Email</a>
            <a href="https://www.linkedin.com/in/laiza-poletti" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900 text-sm">LinkedIn</a>
          </div>
          <p className="text-slate-600 text-sm">© 2026 — Available for freelance work</p>
        </div>
      </footer>
    </div>
  );
}
