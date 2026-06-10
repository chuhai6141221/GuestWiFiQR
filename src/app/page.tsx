import type { Metadata } from "next";
import Link from "next/link";

import { FAQSection } from "@/components/FAQSection";
import { WifiQrGenerator } from "@/components/WifiQrGenerator";
import { faqJsonLd, homeFaq, SITE_NAME } from "@/lib/seoPages";

export const metadata: Metadata = {
  title: "Airbnb WiFi QR Code Generator - Printable Guest WiFi Sign",
  description:
    "Create a printable WiFi QR code sign for your Airbnb or vacation rental. Let guests connect instantly without typing passwords. Download PNG or PDF.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Airbnb WiFi QR Code Generator - Printable Guest WiFi Sign",
    description:
      "Create a printable WiFi QR code sign for your Airbnb or vacation rental. Let guests connect instantly without typing passwords. Download PNG or PDF.",
    url: "/",
    siteName: SITE_NAME,
    type: "website"
  }
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(homeFaq)) }}
      />
      <section className="mx-auto max-w-7xl px-4 pb-4 pt-12 sm:px-6 lg:pt-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-normal text-warm-accent">
            Printable guest WiFi signs
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl">
            Airbnb WiFi QR Code Generator
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Create a printable WiFi QR code sign for your Airbnb or vacation rental. Let guests
            connect instantly without typing passwords, then download a PNG or PDF for printing.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#generator"
              className="inline-flex items-center justify-center rounded-md bg-warm-accent px-5 py-3 text-sm font-semibold text-white hover:bg-amber-800"
            >
              Create WiFi Sign
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-stone-50"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <WifiQrGenerator />

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-normal text-slate-950">
          Create a Printable WiFi Sign for Your Airbnb
        </h2>
        <p className="mt-4 leading-7 text-slate-700">
          GuestWiFiQR helps hosts turn WiFi details into a scannable welcome sign that looks
          polished in a rental home. Guests can scan the QR code from their phone camera and join
          the guest network without hunting through messages or typing a long password.
        </p>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-normal text-slate-950">How It Works</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Enter your WiFi name and password",
              "Choose a guest-friendly template",
              "Download and print your WiFi QR code sign"
            ].map((step, index) => (
              <article key={step} className="rounded-lg border border-stone-200 bg-warm-bg p-5">
                <p className="text-sm font-semibold text-warm-accent">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-950">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-normal text-slate-950">
            Choose a Template for Your Vacation Rental
          </h2>
          <p className="mt-4 leading-7 text-slate-700">
            Start with Minimal White, Modern Gray, or Simple Print for free. Preview premium styles
            like Luxury Black, Beach House, Cozy Cabin, Family Friendly, Hotel Style, Boho Airbnb,
            and Green Nature.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold tracking-normal text-slate-950">
            Why Use a WiFi QR Code for Guests
          </h2>
          <p className="mt-4 leading-7 text-slate-700">
            A WiFi QR code removes password typos, improves the arrival experience, and keeps one
            of the most requested guest details easy to find throughout the stay.
          </p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-normal text-slate-950">
            Best Practices for Airbnb WiFi Signs
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              "Create a separate guest WiFi network before printing your sign.",
              "Place the sign near the entry, TV console, or welcome guide.",
              "Reprint the sign whenever you change the WiFi password."
            ].map((practice) => (
              <p
                key={practice}
                className="rounded-lg border border-stone-200 bg-warm-bg p-5 leading-7 text-slate-700"
              >
                {practice}
              </p>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faq={homeFaq} />
    </>
  );
}
