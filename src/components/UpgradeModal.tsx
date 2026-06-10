"use client";

import { X } from "lucide-react";

type UpgradeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function UpgradeModal({ isOpen, onClose }: UpgradeModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="upgrade-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 px-4"
    >
      <div className="w-full max-w-md rounded-lg border border-stone-200 bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-normal text-warm-accent">
              GuestWiFiQR Pro
            </p>
            <h2 id="upgrade-modal-title" className="mt-2 text-2xl font-semibold text-slate-950">
              Pro downloads are coming soon
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close upgrade modal"
            className="rounded-md border border-stone-200 p-2 text-slate-600 hover:bg-stone-50"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <p className="mt-4 leading-7 text-slate-700">
          Pro downloads are coming soon. For now, you can use the free watermarked version.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-warm-accent px-4 py-3 text-sm font-semibold text-white hover:bg-amber-800"
        >
          Continue with free version
        </button>
      </div>
    </div>
  );
}
