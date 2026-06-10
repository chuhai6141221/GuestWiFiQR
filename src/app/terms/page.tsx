import type { Metadata } from "next";

import { FAQSection } from "@/components/FAQSection";
import { faqJsonLd, type FAQItem, SITE_NAME } from "@/lib/seoPages";

const termsFaq: FAQItem[] = [
  {
    question: "Is GuestWiFiQR affiliated with Airbnb or Vrbo?",
    answer:
      "No. GuestWiFiQR is not affiliated with Airbnb, Vrbo, Booking.com, or their parent companies."
  },
  {
    question: "Who is responsible for printed WiFi information?",
    answer:
      "The user is responsible for deciding what WiFi details to print and where to display the sign."
  },
  {
    question: "Should I use a guest network?",
    answer:
      "Yes. For rentals and visitor spaces, we recommend creating a separate guest WiFi network before printing a sign."
  }
];

export const metadata: Metadata = {
  title: "GuestWiFiQR Terms of Use - Printable WiFi Sign Generator",
  description:
    "Read the GuestWiFiQR terms of use for the printable WiFi QR code sign generator and vacation rental templates.",
  alternates: {
    canonical: "/terms"
  },
  openGraph: {
    title: "GuestWiFiQR Terms of Use - Printable WiFi Sign Generator",
    description:
      "Read the GuestWiFiQR terms of use for the printable WiFi QR code sign generator and vacation rental templates.",
    url: "/terms",
    siteName: SITE_NAME,
    type: "website"
  }
};

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(termsFaq)) }}
      />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        <p className="text-sm font-semibold uppercase tracking-normal text-warm-accent">
          Terms of use
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950">
          GuestWiFiQR Terms of Use
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          By using GuestWiFiQR, you agree to use the tool responsibly and understand that printed
          WiFi information should be handled with care.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Service Provided As Is</h2>
            <p className="mt-3 leading-7 text-slate-700">
              GuestWiFiQR is provided as is without warranties of any kind. We aim to keep the
              generator accurate and useful, but we do not guarantee uninterrupted availability or
              suitability for every environment.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-slate-950">User Responsibility</h2>
            <p className="mt-3 leading-7 text-slate-700">
              You are responsible for ensuring that the WiFi details you print are safe to share
              with guests. For vacation rentals, we recommend creating a separate guest WiFi network
              before displaying a QR code sign.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-slate-950">No Platform Affiliation</h2>
            <p className="mt-3 leading-7 text-slate-700">
              GuestWiFiQR is not affiliated with Airbnb, Vrbo, or Booking.com. All third-party
              names belong to their respective owners and are used descriptively.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Contact</h2>
            <p className="mt-3 leading-7 text-slate-700">
              For questions about these terms, contact us at support@example.com. Replace this
              placeholder before launching the production site.
            </p>
          </section>
        </div>
      </section>
      <FAQSection faq={termsFaq} />
    </>
  );
}
