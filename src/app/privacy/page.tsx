import type { Metadata } from "next";

import { FAQSection } from "@/components/FAQSection";
import { faqJsonLd, type FAQItem, SITE_NAME } from "@/lib/seoPages";

const privacyFaq: FAQItem[] = [
  {
    question: "Does GuestWiFiQR upload my WiFi password?",
    answer:
      "No. Your WiFi name and password are processed locally in your browser and are not uploaded by the generator."
  },
  {
    question: "Does GuestWiFiQR save generated WiFi signs?",
    answer:
      "No. The MVP does not save user-generated WiFi signs or WiFi credentials to a database."
  },
  {
    question: "Do you use analytics?",
    answer:
      "The site may use basic analytics to understand page usage, but analytics should not include WiFi names or passwords."
  }
];

export const metadata: Metadata = {
  title: "GuestWiFiQR Privacy Policy - Local WiFi QR Generation",
  description:
    "Read the GuestWiFiQR privacy policy. WiFi names and passwords are processed locally in your browser and are not uploaded or stored.",
  alternates: {
    canonical: "/privacy"
  },
  openGraph: {
    title: "GuestWiFiQR Privacy Policy - Local WiFi QR Generation",
    description:
      "Read the GuestWiFiQR privacy policy. WiFi names and passwords are processed locally in your browser and are not uploaded or stored.",
    url: "/privacy",
    siteName: SITE_NAME,
    type: "website"
  }
};

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(privacyFaq)) }}
      />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        <p className="text-sm font-semibold uppercase tracking-normal text-warm-accent">
          Privacy policy
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950">
          GuestWiFiQR Privacy Policy
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          GuestWiFiQR is designed for local WiFi QR code generation without accounts, databases, or
          saved WiFi credentials.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Local WiFi Processing</h2>
            <p className="mt-3 leading-7 text-slate-700">
              Your WiFi name and password are processed locally in your browser. We do not upload
              or store your WiFi details. The QR code and preview are generated on your device.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-slate-950">No Saved Generated Content</h2>
            <p className="mt-3 leading-7 text-slate-700">
              We do not save user-generated WiFi signs, uploaded files, property names, host
              contact details, SSIDs, or passwords in a GuestWiFiQR database.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Basic Analytics</h2>
            <p className="mt-3 leading-7 text-slate-700">
              GuestWiFiQR may use basic analytics to understand traffic, page performance, and
              product usage. Analytics should not collect the WiFi name or password entered into
              the generator.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Contact</h2>
            <p className="mt-3 leading-7 text-slate-700">
              For privacy questions, contact us at privacy@example.com. Replace this placeholder
              before launching the production site.
            </p>
          </section>
        </div>
      </section>
      <FAQSection faq={privacyFaq} />
    </>
  );
}
