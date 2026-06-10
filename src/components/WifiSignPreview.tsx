"use client";

import { forwardRef } from "react";

import { PAPER_SIZES, type PaperSizeId } from "@/lib/paperSizes";
import { getTemplateById, getTemplateVisualClasses } from "@/lib/templates";

export type WifiSignPreviewProps = {
  qrDataUrl: string;
  ssid: string;
  password: string;
  security: string;
  propertyName?: string;
  welcomeText: string;
  hostContact?: string;
  templateId: string;
  paperSize: PaperSizeId;
  showPassword: boolean;
};

export const WifiSignPreview = forwardRef<HTMLDivElement, WifiSignPreviewProps>(
  function WifiSignPreview(
    {
      qrDataUrl,
      ssid,
      password,
      security,
      propertyName,
      welcomeText,
      hostContact,
      templateId,
      paperSize,
      showPassword
    },
    ref
  ) {
    const template = getTemplateById(templateId);
    const visual = getTemplateVisualClasses(template.id);
    const size = PAPER_SIZES[paperSize];
    const passwordLabel = security === "nopass" ? "No password required" : password || "Password";

    return (
      <div
        ref={ref}
        className={`relative mx-auto flex w-full max-w-[420px] flex-col justify-between overflow-hidden rounded-lg border p-[8%] shadow-paper ${visual.shell}`}
        style={{ aspectRatio: `${size.widthIn} / ${size.heightIn}` }}
        aria-label="Printable WiFi sign preview"
      >
        <div aria-hidden="true" className={`h-1.5 w-20 rounded-md ${visual.accent}`} />

        <div className="text-center">
          {propertyName ? (
            <p className={`text-xs font-semibold uppercase tracking-normal ${visual.eyebrow}`}>
              {propertyName}
            </p>
          ) : null}
          <p className={`mt-4 text-4xl font-semibold tracking-normal ${visual.title}`}>
            {welcomeText || "Welcome"}
          </p>
          <p className={`mt-3 text-sm font-medium uppercase tracking-normal ${visual.eyebrow}`}>
            Scan to Connect to WiFi
          </p>
        </div>

        <div className="my-7 flex justify-center">
          <div className={`rounded-lg border p-4 ${visual.qrFrame}`}>
            {qrDataUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={qrDataUrl} alt="WiFi QR code" className="h-44 w-44 object-contain" />
            ) : (
              <div className="flex h-44 w-44 items-center justify-center text-center text-sm text-slate-500">
                Enter WiFi details
              </div>
            )}
          </div>
        </div>

        <div className={`space-y-3 rounded-lg border p-4 text-center ${visual.detailPanel}`}>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-normal opacity-70">Network</p>
            <p className="break-words text-lg font-semibold">{ssid || "Guest WiFi"}</p>
          </div>
          {showPassword || security === "nopass" ? (
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-normal opacity-70">
                Password
              </p>
              <p className="break-words text-base font-semibold">{passwordLabel}</p>
            </div>
          ) : null}
          {hostContact ? (
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-normal opacity-70">
                Host Contact
              </p>
              <p className="break-words text-sm font-medium">{hostContact}</p>
            </div>
          ) : null}
        </div>

        <div className="text-center">
          <p className={`mt-5 text-sm font-semibold ${visual.footer}`}>Enjoy your stay!</p>
          <p className={`mt-2 text-[10px] ${visual.footer}`}>{template.name}</p>
        </div>

        <div className="wifi-sign-watermark absolute inset-x-0 bottom-0 items-center justify-center bg-white/90 px-3 py-2 text-xs font-semibold text-slate-700">
          Made with GuestWiFiQR
        </div>
      </div>
    );
  }
);
