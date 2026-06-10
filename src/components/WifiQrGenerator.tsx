"use client";

import QRCode from "qrcode";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";

import { DownloadButtons } from "@/components/DownloadButtons";
import { TemplateSelector } from "@/components/TemplateSelector";
import { WifiSignPreview } from "@/components/WifiSignPreview";
import { PAPER_SIZE_OPTIONS, type PaperSizeId } from "@/lib/paperSizes";
import { DEFAULT_TEMPLATE_ID } from "@/lib/templates";
import { generateWifiQrString, type SecurityType } from "@/lib/wifiQr";

type GeneratorState = {
  ssid: string;
  password: string;
  security: SecurityType;
  propertyName: string;
  welcomeText: string;
  hostContact: string;
  templateId: string;
  paperSize: PaperSizeId;
  showPassword: boolean;
  hidden: boolean;
};

const DEFAULT_STATE: GeneratorState = {
  ssid: "Guest WiFi",
  password: "welcome123",
  security: "WPA",
  propertyName: "Your Stay",
  welcomeText: "Welcome",
  hostContact: "",
  templateId: DEFAULT_TEMPLATE_ID,
  paperSize: "4x6",
  showPassword: true,
  hidden: false
};

const securityOptions: Array<{ label: string; value: SecurityType }> = [
  { label: "WPA/WPA2", value: "WPA" },
  { label: "WEP", value: "WEP" },
  { label: "No password", value: "nopass" }
];

export function WifiQrGenerator() {
  const [form, setForm] = useState<GeneratorState>(DEFAULT_STATE);
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [qrError, setQrError] = useState("");
  const previewRef = useRef<HTMLDivElement | null>(null);

  const errors = useMemo(() => {
    const nextErrors: Partial<Record<keyof GeneratorState, string>> = {};

    if (!form.ssid.trim()) {
      nextErrors.ssid = "Enter your WiFi network name.";
    }

    if (form.security !== "nopass" && !form.password.trim()) {
      nextErrors.password = "Enter your WiFi password or choose No password.";
    }

    return nextErrors;
  }, [form.password, form.security, form.ssid]);

  const hasErrors = Object.keys(errors).length > 0;

  const wifiQrString = useMemo(() => {
    if (hasErrors) {
      return "";
    }

    return generateWifiQrString({
      ssid: form.ssid,
      password: form.security === "nopass" ? undefined : form.password,
      security: form.security,
      hidden: form.hidden
    });
  }, [form.hidden, form.password, form.security, form.ssid, hasErrors]);

  useEffect(() => {
    let isMounted = true;

    if (!wifiQrString) {
      setQrDataUrl("");
      return;
    }

    QRCode.toDataURL(wifiQrString, {
      errorCorrectionLevel: "M",
      margin: 1,
      scale: 8,
      color: {
        dark: "#1F2937",
        light: "#FFFFFF"
      }
    })
      .then((dataUrl) => {
        if (isMounted) {
          setQrDataUrl(dataUrl);
          setQrError("");
        }
      })
      .catch(() => {
        if (isMounted) {
          setQrError("Could not generate the QR code. Please check your WiFi details.");
        }
      });

    return () => {
      isMounted = false;
    };
  }, [wifiQrString]);

  const updateField =
    <Field extends keyof GeneratorState>(field: Field) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const value =
        event.currentTarget.type === "checkbox"
          ? (event.currentTarget as HTMLInputElement).checked
          : event.currentTarget.value;

      setForm((current) => ({
        ...current,
        [field]: value
      }));
    };

  return (
    <section
      id="generator"
      aria-label="Guest WiFi QR code sign generator"
      className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:py-12"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1fr)]">
        <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-normal text-warm-accent">
              Free local generator
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-normal text-slate-950">
              Create your guest WiFi sign
            </h2>
            <p className="mt-3 leading-7 text-slate-700">
              Your WiFi name and password are processed locally in your browser. We do not
              upload or store your WiFi details.
            </p>
            <p className="mt-3 rounded-lg bg-warm-soft px-4 py-3 text-sm leading-6 text-slate-800">
              For vacation rentals, we recommend creating a separate guest WiFi network before
              printing your QR code sign.
            </p>
          </div>

          <div className="space-y-5">
            <label className="block">
              <span className="text-sm font-semibold text-slate-900">WiFi Network Name / SSID</span>
              <input
                value={form.ssid}
                onChange={updateField("ssid")}
                className="mt-2 w-full rounded-md border border-stone-300 bg-white px-3 py-3 text-slate-950 outline-none transition focus:border-warm-accent focus:ring-2 focus:ring-amber-200"
                placeholder="Guest WiFi"
              />
              {errors.ssid ? <span className="mt-2 block text-sm text-red-700">{errors.ssid}</span> : null}
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-slate-900">WiFi Password</span>
                <input
                  value={form.password}
                  onChange={updateField("password")}
                  disabled={form.security === "nopass"}
                  className="mt-2 w-full rounded-md border border-stone-300 bg-white px-3 py-3 text-slate-950 outline-none transition focus:border-warm-accent focus:ring-2 focus:ring-amber-200 disabled:bg-stone-100 disabled:text-slate-500"
                  placeholder="welcome123"
                />
                {errors.password ? (
                  <span className="mt-2 block text-sm text-red-700">{errors.password}</span>
                ) : null}
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-slate-900">Security Type</span>
                <select
                  value={form.security}
                  onChange={updateField("security")}
                  className="mt-2 w-full rounded-md border border-stone-300 bg-white px-3 py-3 text-slate-950 outline-none transition focus:border-warm-accent focus:ring-2 focus:ring-amber-200"
                >
                  {securityOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-slate-900">Property Name</span>
                <input
                  value={form.propertyName}
                  onChange={updateField("propertyName")}
                  className="mt-2 w-full rounded-md border border-stone-300 bg-white px-3 py-3 text-slate-950 outline-none transition focus:border-warm-accent focus:ring-2 focus:ring-amber-200"
                  placeholder="Your Stay"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-slate-900">Welcome Text</span>
                <input
                  value={form.welcomeText}
                  onChange={updateField("welcomeText")}
                  className="mt-2 w-full rounded-md border border-stone-300 bg-white px-3 py-3 text-slate-950 outline-none transition focus:border-warm-accent focus:ring-2 focus:ring-amber-200"
                  placeholder="Welcome"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-semibold text-slate-900">Host Contact</span>
              <input
                value={form.hostContact}
                onChange={updateField("hostContact")}
                className="mt-2 w-full rounded-md border border-stone-300 bg-white px-3 py-3 text-slate-950 outline-none transition focus:border-warm-accent focus:ring-2 focus:ring-amber-200"
                placeholder="Text your host at (555) 123-4567"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-slate-900">Paper Size</span>
                <select
                  value={form.paperSize}
                  onChange={updateField("paperSize")}
                  className="mt-2 w-full rounded-md border border-stone-300 bg-white px-3 py-3 text-slate-950 outline-none transition focus:border-warm-accent focus:ring-2 focus:ring-amber-200"
                >
                  {PAPER_SIZE_OPTIONS.map((size) => (
                    <option key={size.id} value={size.id}>
                      {size.label}
                    </option>
                  ))}
                </select>
              </label>

              <div className="grid content-end gap-3">
                <label className="flex items-center gap-3 rounded-md border border-stone-200 bg-stone-50 px-3 py-3 text-sm font-medium text-slate-800">
                  <input
                    type="checkbox"
                    checked={form.showPassword}
                    onChange={updateField("showPassword")}
                    className="h-4 w-4 accent-warm-accent"
                  />
                  Show password on sign
                </label>
                <label className="flex items-center gap-3 rounded-md border border-stone-200 bg-stone-50 px-3 py-3 text-sm font-medium text-slate-800">
                  <input
                    type="checkbox"
                    checked={form.hidden}
                    onChange={updateField("hidden")}
                    className="h-4 w-4 accent-warm-accent"
                  />
                  Hidden network
                </label>
              </div>
            </div>

            <TemplateSelector
              selectedTemplateId={form.templateId}
              onSelect={(templateId) => setForm((current) => ({ ...current, templateId }))}
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-normal text-warm-accent">
                  Live preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">Printable WiFi sign</h2>
              </div>
              <span className="rounded-md bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-800">
                Local only
              </span>
            </div>

            <div className="rounded-lg bg-stone-100 px-4 py-6">
              <WifiSignPreview
                ref={previewRef}
                qrDataUrl={qrDataUrl}
                ssid={form.ssid}
                password={form.password}
                security={form.security}
                propertyName={form.propertyName}
                welcomeText={form.welcomeText}
                hostContact={form.hostContact}
                templateId={form.templateId}
                paperSize={form.paperSize}
                showPassword={form.showPassword}
              />
            </div>

            {qrError ? <p className="mt-4 text-sm font-medium text-red-700">{qrError}</p> : null}
            {hasErrors ? (
              <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
                Fix the highlighted fields before downloading your WiFi sign.
              </p>
            ) : null}

            <div className="mt-5">
              <DownloadButtons
                previewRef={previewRef}
                templateId={form.templateId}
                paperSize={form.paperSize}
                disabled={hasErrors || !qrDataUrl}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
