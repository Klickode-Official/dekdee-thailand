import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Is this actually free for parents?',
    answer: 'Yep, 100% free. We make money when schools pay for featured listings and premium placement - not from families. You search, compare, and contact schools without paying a single baht.',
  },
  {
    question: 'Are the fees listed accurate?',
    answer: 'We update fee information every semester directly with schools. That said, always confirm with the school before making decisions - sometimes there are additional costs for uniforms, trips, or activities.',
  },
  {
    question: 'Can I trust the reviews?',
    answer: 'We verify that reviewers are actual parents with kids at the school. Fake reviews get removed. But like any review site, take everything with a grain of salt and visit schools yourself before deciding.',
  },
  {
    question: 'How does the school comparison work?',
    answer: 'Save up to 3 schools you like, then view them side-by-side. You can compare fees, facilities, curriculum, and reviews all in one place. Super handy when you have narrowed it down to your top choices.',
  },
  {
    question: 'Can I contact schools directly through the site?',
    answer: 'Yes! Every school page has a contact form. Your inquiry goes straight to their admissions office, and most schools reply within 1-2 business days.',
  },
  {
    question: 'Which cities and provinces do you cover?',
    answer: 'Bangkok, Phuket, Chiang Mai, Pattaya, Hua Hin, Khon Kaen, and more. We are adding new schools every month. If you cannot find a school, let us know and we will try to add it.',
  },
]

export function FAQSection() {
  return (
    <section className="bg-muted/30 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-muted-foreground">
            Everything you need to know about using DekDee Thailand
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
