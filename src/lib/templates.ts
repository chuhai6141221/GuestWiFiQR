export type TemplateCategory =
  | "minimal"
  | "luxury"
  | "beach"
  | "cabin"
  | "family"
  | "hotel"
  | "boho"
  | "modern"
  | "nature"
  | "print";

export type Template = {
  id: string;
  name: string;
  slug: string;
  category: TemplateCategory;
  isPremium: boolean;
  description: string;
};

export const TEMPLATES: Template[] = [
  {
    id: "minimal-white",
    name: "Minimal White",
    slug: "minimal-white",
    category: "minimal",
    isPremium: false,
    description: "A clean, bright sign that works in almost any rental."
  },
  {
    id: "modern-gray",
    name: "Modern Gray",
    slug: "modern-gray",
    category: "modern",
    isPremium: false,
    description: "Neutral and polished for apartments, studios, and city stays."
  },
  {
    id: "simple-print",
    name: "Simple Print",
    slug: "simple-print",
    category: "print",
    isPremium: false,
    description: "Ink-friendly layout made for quick home printing."
  },
  {
    id: "luxury-black",
    name: "Luxury Black",
    slug: "luxury-black",
    category: "luxury",
    isPremium: true,
    description: "High-contrast, upscale styling for premium guest rooms."
  },
  {
    id: "beach-house",
    name: "Beach House",
    slug: "beach-house",
    category: "beach",
    isPremium: true,
    description: "Light coastal colors for seaside rentals and holiday homes."
  },
  {
    id: "cozy-cabin",
    name: "Cozy Cabin",
    slug: "cozy-cabin",
    category: "cabin",
    isPremium: true,
    description: "Warm, rustic tones for cabins and mountain stays."
  },
  {
    id: "family-friendly",
    name: "Family Friendly",
    slug: "family-friendly",
    category: "family",
    isPremium: true,
    description: "Friendly colors and generous spacing for family homes."
  },
  {
    id: "hotel-style",
    name: "Hotel Style",
    slug: "hotel-style",
    category: "hotel",
    isPremium: true,
    description: "Structured, professional sign inspired by boutique hotels."
  },
  {
    id: "boho-airbnb",
    name: "Boho Airbnb",
    slug: "boho-airbnb",
    category: "boho",
    isPremium: true,
    description: "Soft earthy accents for styled short-term rentals."
  },
  {
    id: "green-nature",
    name: "Green Nature",
    slug: "green-nature",
    category: "nature",
    isPremium: true,
    description: "Fresh greens for cottages, retreats, and garden stays."
  }
];

export const DEFAULT_TEMPLATE_ID = "minimal-white";

export function getTemplateById(id: string): Template {
  return TEMPLATES.find((template) => template.id === id) ?? TEMPLATES[0];
}

export type TemplateVisualClasses = {
  shell: string;
  eyebrow: string;
  title: string;
  qrFrame: string;
  detailPanel: string;
  accent: string;
  footer: string;
};

export function getTemplateVisualClasses(templateId: string): TemplateVisualClasses {
  switch (templateId) {
    case "luxury-black":
      return {
        shell: "bg-neutral-950 text-stone-50 border-neutral-800",
        eyebrow: "text-amber-200",
        title: "text-stone-50",
        qrFrame: "bg-stone-50 border-amber-300",
        detailPanel: "bg-neutral-900 border-neutral-700 text-stone-100",
        accent: "bg-amber-300",
        footer: "text-stone-300"
      };
    case "beach-house":
      return {
        shell: "bg-cyan-50 text-slate-800 border-cyan-200",
        eyebrow: "text-cyan-800",
        title: "text-slate-900",
        qrFrame: "bg-white border-cyan-300",
        detailPanel: "bg-white/90 border-cyan-200 text-slate-800",
        accent: "bg-cyan-400",
        footer: "text-cyan-900"
      };
    case "cozy-cabin":
      return {
        shell: "bg-stone-100 text-stone-900 border-stone-300",
        eyebrow: "text-amber-900",
        title: "text-stone-950",
        qrFrame: "bg-white border-amber-700",
        detailPanel: "bg-amber-50 border-amber-200 text-stone-900",
        accent: "bg-amber-800",
        footer: "text-stone-700"
      };
    case "family-friendly":
      return {
        shell: "bg-rose-50 text-slate-800 border-rose-200",
        eyebrow: "text-rose-700",
        title: "text-slate-900",
        qrFrame: "bg-white border-rose-300",
        detailPanel: "bg-white border-rose-200 text-slate-800",
        accent: "bg-rose-400",
        footer: "text-rose-900"
      };
    case "hotel-style":
      return {
        shell: "bg-slate-50 text-slate-900 border-slate-300",
        eyebrow: "text-slate-600",
        title: "text-slate-950",
        qrFrame: "bg-white border-slate-400",
        detailPanel: "bg-white border-slate-200 text-slate-800",
        accent: "bg-slate-700",
        footer: "text-slate-600"
      };
    case "boho-airbnb":
      return {
        shell: "bg-orange-50 text-stone-900 border-orange-200",
        eyebrow: "text-orange-800",
        title: "text-stone-950",
        qrFrame: "bg-white border-orange-300",
        detailPanel: "bg-white/90 border-orange-200 text-stone-800",
        accent: "bg-orange-500",
        footer: "text-orange-900"
      };
    case "modern-gray":
      return {
        shell: "bg-zinc-100 text-zinc-900 border-zinc-300",
        eyebrow: "text-zinc-600",
        title: "text-zinc-950",
        qrFrame: "bg-white border-zinc-300",
        detailPanel: "bg-white border-zinc-200 text-zinc-800",
        accent: "bg-zinc-800",
        footer: "text-zinc-600"
      };
    case "green-nature":
      return {
        shell: "bg-emerald-50 text-slate-900 border-emerald-200",
        eyebrow: "text-emerald-800",
        title: "text-slate-950",
        qrFrame: "bg-white border-emerald-300",
        detailPanel: "bg-white/90 border-emerald-200 text-slate-800",
        accent: "bg-emerald-600",
        footer: "text-emerald-900"
      };
    case "simple-print":
      return {
        shell: "bg-white text-black border-black",
        eyebrow: "text-black",
        title: "text-black",
        qrFrame: "bg-white border-black",
        detailPanel: "bg-white border-black text-black",
        accent: "bg-black",
        footer: "text-black"
      };
    case "minimal-white":
    default:
      return {
        shell: "bg-white text-slate-900 border-stone-200",
        eyebrow: "text-warm-accent",
        title: "text-slate-950",
        qrFrame: "bg-white border-warm-soft",
        detailPanel: "bg-warm-soft/55 border-amber-100 text-slate-800",
        accent: "bg-warm-accent",
        footer: "text-slate-600"
      };
  }
}
