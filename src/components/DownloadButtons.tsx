"use client";

import { Download, FileDown, LockKeyhole } from "lucide-react";
import { RefObject, useState } from "react";

import { downloadSignAsPdf, downloadSignAsPng } from "@/lib/export";
import type { PaperSizeId } from "@/lib/paperSizes";
import { getTemplateById } from "@/lib/templates";

import { UpgradeModal } from "./UpgradeModal";

type DownloadButtonsProps = {
  previewRef: RefObject<HTMLDivElement | null>;
  templateId: string;
  paperSize: PaperSizeId;
  disabled: boolean;
};

function safeFilePart(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function DownloadButtons({
  previewRef,
  templateId,
  paperSize,
  disabled
}: DownloadButtonsProps) {
  const [isExporting, setIsExporting] = useState<"png" | "pdf" | null>(null);
  const [error, setError] = useState("");
  const [showUpgrade, setShowUpgrade] = useState(false);
  const template = getTemplateById(templateId);
  const baseName = `guestwifiqr-${safeFilePart(template.slug)}-${paperSize}`;

  const exportPng = async () => {
    setError("");
    setIsExporting("png");
    try {
      await downloadSignAsPng({
        node: previewRef.current,
        fileName: `${baseName}.png`,
        watermark: true
      });
    } catch (exportError) {
      setError(exportError instanceof Error ? exportError.message : "Could not export PNG.");
    } finally {
      setIsExporting(null);
    }
  };

  const exportPdf = async () => {
    setError("");
    setIsExporting("pdf");
    try {
      await downloadSignAsPdf({
        node: previewRef.current,
        fileName: `${baseName}.pdf`,
        paperSize,
        watermark: true
      });
    } catch (exportError) {
      setError(exportError instanceof Error ? exportError.message : "Could not export PDF.");
    } finally {
      setIsExporting(null);
    }
  };

  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={exportPng}
          disabled={disabled || isExporting !== null}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-warm-accent px-4 py-3 text-sm font-semibold text-white hover:bg-amber-800 disabled:cursor-not-allowed disabled:bg-stone-300"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          {isExporting === "png" ? "Exporting..." : "Download Free PNG"}
        </button>
        <button
          type="button"
          onClick={exportPdf}
          disabled={disabled || isExporting !== null}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-warm-accent bg-white px-4 py-3 text-sm font-semibold text-warm-accent hover:bg-amber-50 disabled:cursor-not-allowed disabled:border-stone-300 disabled:text-stone-400"
        >
          <FileDown className="h-4 w-4" aria-hidden="true" />
          {isExporting === "pdf" ? "Exporting..." : "Download PDF"}
        </button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => setShowUpgrade(true)}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-slate-300 bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
        >
          <LockKeyhole className="h-4 w-4" aria-hidden="true" />
          Pro PNG
        </button>
        <button
          type="button"
          onClick={() => setShowUpgrade(true)}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-slate-300 bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
        >
          <LockKeyhole className="h-4 w-4" aria-hidden="true" />
          Pro PDF
        </button>
      </div>

      <p className="text-xs leading-5 text-slate-600">
        Free PNG and PDF exports include the watermark: Made with GuestWiFiQR.
      </p>
      {error ? <p className="text-sm font-medium text-red-700">{error}</p> : null}
      <UpgradeModal isOpen={showUpgrade} onClose={() => setShowUpgrade(false)} />
    </div>
  );
}
