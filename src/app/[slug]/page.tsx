import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FAQSection } from "@/components/FAQSection";
import { WifiQrGenerator } from "@/components/WifiQrGenerator";
import { faqJsonLd, getSeoPageBySlug, seoPages, SITE_NAME } from "@/lib/seoPages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return seoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPageBySlug(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/${page.slug}`
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `/${page.slug}`,
      siteName: SITE_NAME,
      type: "website"
    }
  };
}

export default async function SeoLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(page.faq)) }}
      />
      <section className="mx-auto max-w-7xl px-4 pb-4 pt-12 sm:px-6 lg:pt-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-normal text-warm-accent">
            Printable hospitality WiFi QR signs
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl">
            {page.h1}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">{page.intro}</p>
          <a
            href="#generator"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-warm-accent px-5 py-3 text-sm font-semibold text-white hover:bg-amber-800"
          >
            Generate Your Sign
          </a>
        </div>
      </section>

      <WifiQrGenerator />

      <section className="mx-auto grid max-w-5xl gap-5 px-4 py-12 sm:px-6 md:grid-cols-3">
        {page.sections.map((section) => (
          <article key={section.heading} className="rounded-lg border border-stone-200 bg-white p-5">
            <h2 className="text-xl font-semibold tracking-normal text-slate-950">
              {section.heading}
            </h2>
            <p className="mt-3 leading-7 text-slate-700">{section.body}</p>
          </article>
        ))}
      </section>

      <FAQSection faq={page.faq} />
    </>
  );
}
