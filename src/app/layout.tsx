import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";

import { SITE_NAME, SITE_URL } from "@/lib/seoPages";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: "GuestWiFiQR",
    template: "%s"
  },
  description: "Create printable guest WiFi QR code signs for vacation rentals.",
  openGraph: {
    siteName: SITE_NAME,
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-stone-200 bg-white/90">
          <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6">
            <Link href="/" className="text-lg font-semibold tracking-normal text-slate-950">
              GuestWiFiQR
            </Link>
            <div className="flex flex-wrap justify-end gap-3 text-sm font-medium text-slate-700">
              <Link href="/airbnb-wifi-qr-code-generator" className="hover:text-warm-accent">
                Airbnb QR
              </Link>
              <Link href="/printable-wifi-sign" className="hover:text-warm-accent">
                Templates
              </Link>
              <Link href="/pricing" className="hover:text-warm-accent">
                Pricing
              </Link>
              <Link href="/privacy" className="hover:text-warm-accent">
                Privacy
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t border-stone-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 text-sm text-slate-600 sm:px-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="font-semibold text-slate-950">GuestWiFiQR</p>
              <p className="mt-2">
                GuestWiFiQR is not affiliated with Airbnb, Vrbo, or Booking.com.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/terms" className="hover:text-warm-accent">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-warm-accent">
                Privacy
              </Link>
              <Link href="/pricing" className="hover:text-warm-accent">
                Pricing
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
