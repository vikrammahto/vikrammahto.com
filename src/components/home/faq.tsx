'use client';
import { PlusIcon } from '@phosphor-icons/react';

const faqs = [
  {
    question: 'What does a UX Audit include and how long does it take?',
    answer:
      "A full review of your product's interface – user flows, visual hierarchy, copy, and interaction patterns. You'll get a prioritized written report of all issues plus before/after mockups. Most audits take 2–3 business days depending on scope.",
  },
  {
    question: 'How much does it cost?',
    answer:
      'A UX audit starts at $150. Full redesign with implementation is scoped per project, typically ranging from $500 to $5000 depending on complexity. I keep engagements focused so you get clear ROI, not endless billable hours. Reach out and I can give you an accurate quote within 24 hours.',
  },
  {
    question:
      'My product was built with an AI website builder. Can you still fix it?',
    answer:
      'Yes. AI-generated UIs, whether from Bolt, Lovable, v0, Replit, Framer, Webflow, or Bubble – are usually generic, inconsistent, and low-trust out of the box. The code works, but it rarely looks or feels like a real product. I can redesign in Figma or implement the fix directly in code, whichever works better for you.',
  },
  {
    question: 'Do you deliver Figma files or do you also implement the design?',
    answer:
      'Both. I can deliver Figma files with complete design specs if you have an in-house developer, or implement the design myself in React/Next.js. If you want to move fast and skip the handoff, the full design-to-code package is usually the better choice.',
  },
  {
    question: "What's WCAG and why does accessibility matter for my product?",
    answer:
      'WCAG (Web Content Accessibility Guidelines) are the standards that make your product usable by people with disabilities – visual, motor, or cognitive. Beyond being the right thing to do, accessibility compliance reduces legal risk and expands your market. Accessible design also tends to mean better design for everyone.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      "It depends on scope. A UX audit takes 2–3 days. A full redesign with implementation is usually 2–4 weeks. You'll get a clear timeline upfront before anything starts.",
  },
  {
    question: 'Who do you typically work with?',
    answer:
      "Mostly early-stage founders, indie hackers, and small product teams who launched fast and now need their UI to actually convert. If your product works but looks rough or confusing to users, you're probably the right fit.",
  },
  {
    question: 'How does the revision process work?',
    answer:
      'Every project includes two rounds of revisions. I share work-in-progress early so there are no big surprises at the end. You can leave feedback directly in Figma or via a shared doc – whatever works for you.',
  },
  {
    question: 'What do you need from me to get started?',
    answer:
      "Usually just access to your current product (or mockups if you're starting fresh), your goals, and context about your users. From there I can shape the scope and give you a clear next step.",
  },
];

export function Faq() {
  return (
    <div className="mx-auto max-w-5xl">
      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="space-y-3 text-center">
          <p className="text-sm font-semibold text-zinc-600">FAQs</p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Questions founders usually ask.
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-600">
            A few quick answers about how I work, what I build, and what to
            expect.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-dashed border-zinc-200 p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-medium">{faq.question}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-lg transition group-open:rotate-45">
                  <PlusIcon size={16} weight="bold" />
                </span>
              </summary>
              <p className="mt-3 max-w-3xl">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
