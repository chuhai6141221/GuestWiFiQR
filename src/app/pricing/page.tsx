import type { Metadata } from "next";

import { FAQSection } from "@/components/FAQSection";
import { PricingCards } from "@/components/PricingCards";
import { faqJsonLd, type FAQItem, SITE_NAME } from "@/lib/seoPages";

const pricingFaq: FAQItem[] = [
  {
    question: "Is GuestWiFiQR free to use?",
    answer:
      "Yes. The MVP lets you generate a WiFi QR code, preview templates, and download a free watermarked PNG."
  },
  {
    question: "Are Pro downloads active today?",
    answer:
      "No. Pro downloads are coming soon. For now, you can use the free watermarked version."
  },
  {
    question: "Will Pro remove the watermark?",
    answer:
      "Yes. The planned Pro version includes no watermark, high-quality PNG, printable PDF, and all templates."
  }
];

export const metadata: Metadata = {
  title: "GuestWiFiQR Pricing - Free and Pro WiFi Sign Downloads",
  description:
    "Compare GuestWiFiQR Free, Pro, and Host Pack plans for printable WiFi QR code signs and vacation rental templates.",
  alternates: {
    canonical: "/pricing"
  },
  openGraph: {
    title: "GuestWiFiQR Pricing - Free and Pro WiFi Sign Downloads",
    description:
      "Compare GuestWiFiQR Free, Pro, and Host Pack plans for printable WiFi QR code signs and vacation rental templates.",
    url: "/pricing",
    siteName: SITE_NAME,
    type: "website"
  }
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(pricingFaq)) }}
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-normal text-warm-accent">
            Simple MVP pricing
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl">
            GuestWiFiQR Pricing
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Start with a free watermarked WiFi sign. Pro and Host Pack options are shown as the
            planned monetization path for hosts who want polished guest materials.
          </p>
        </div>
        <div className="mt-10">
          <PricingCards />
        </div>
      </section>
      <FAQSection faq={pricingFaq} />
    </>
  );
}
