"use client";

import { TEMPLATES } from "@/lib/templates";

type TemplateSelectorProps = {
  selectedTemplateId: string;
  onSelect: (templateId: string) => void;
};

export function TemplateSelector({ selectedTemplateId, onSelect }: TemplateSelectorProps) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-slate-900">Template Style</legend>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {TEMPLATES.map((template) => {
          const selected = template.id === selectedTemplateId;

          return (
            <button
              key={template.id}
              type="button"
              onClick={() => onSelect(template.id)}
              aria-pressed={selected}
              className={`min-h-20 rounded-lg border p-3 text-left transition ${
                selected
                  ? "border-warm-accent bg-warm-soft text-slate-950 shadow-sm"
                  : "border-stone-200 bg-white text-slate-700 hover:border-warm-accent hover:bg-amber-50"
              }`}
            >
              <span className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold">{template.name}</span>
                {template.isPremium ? (
                  <span className="rounded-md bg-slate-900 px-2 py-1 text-xs font-semibold text-white">
                    Pro
                  </span>
                ) : (
                  <span className="rounded-md bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-800">
                    Free
                  </span>
                )}
              </span>
              <span className="mt-2 block text-xs leading-5">{template.description}</span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
