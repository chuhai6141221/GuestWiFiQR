"use client";

import { Check, Crown } from "lucide-react";
import { useState } from "react";

import { UpgradeModal } from "./UpgradeModal";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For trying the generator and printing a watermarked sign.",
    features: [
      "Generate WiFi QR code",
      "Preview all templates",
      "Download watermarked PNG",
      "3 free templates"
    ],
    highlight: false
  },
  {
    name: "Pro",
    price: "$9 one-time",
    description: "For hosts who want clean exports and all printable sizes.",
    features: [
      "All WiFi sign templates",
      "No watermark",
      "High-quality PNG",
      "Printable PDF",
      "4x6 / 5x7 / A4 / Letter sizes"
    ],
    highlight: true
  },
  {
    name: "Host Pack",
    price: "$19 lifetime",
    description: "A planned bundle for the full guest communication stack.",
    features: [
      "WiFi signs",
      "House rules signs",
      "Parking signs",
      "Check-in signs",
      "Welcome cards",
      "Coming soon"
    ],
    highlight: false
  }
];

export function PricingCards() {
  const [showUpgrade, setShowUpgrade] = useState(false);

  return (
    <>
      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`rounded-lg border bg-white p-6 shadow-sm ${
              plan.highlight ? "border-warm-accent" : "border-stone-200"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-slate-950">{plan.name}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{plan.description}</p>
              </div>
              {plan.highlight ? (
                <span className="rounded-md bg-warm-soft p-2 text-warm-accent">
                  <Crown className="h-5 w-5" aria-hidden="true" />
                </span>
              ) : null}
            </div>
            <p className="mt-6 text-3xl font-semibold text-slate-950">{plan.price}</p>
            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => {
                if (plan.name === "Free") {
                  window.location.href = "/#generator";
                  return;
                }

                setShowUpgrade(true);
              }}
              className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-3 text-sm font-semibold ${
                plan.name === "Free"
                  ? "border border-stone-300 bg-white text-slate-800"
                  : "bg-warm-accent text-white hover:bg-amber-800"
              }`}
            >
              {plan.name === "Free" ? "Use free generator" : "Get notified"}
            </button>
          </article>
        ))}
      </div>
      <UpgradeModal isOpen={showUpgrade} onClose={() => setShowUpgrade(false)} />
    </>
  );
}
