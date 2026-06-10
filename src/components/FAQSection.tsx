import type { FAQItem } from "@/lib/seoPages";

type FAQSectionProps = {
  faq: FAQItem[];
  heading?: string;
};

export function FAQSection({ faq, heading = "FAQ" }: FAQSectionProps) {
  return (
    <section aria-labelledby="faq-heading" className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
      <h2 id="faq-heading" className="text-3xl font-semibold tracking-normal text-slate-950">
        {heading}
      </h2>
      <div className="mt-6 divide-y divide-stone-200 rounded-lg border border-stone-200 bg-white">
        {faq.map((item) => (
          <article key={item.question} className="px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">{item.question}</h3>
            <p className="mt-2 leading-7 text-slate-700">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
