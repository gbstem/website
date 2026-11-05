'use client';

import { currentSemesterStatus } from '@/lib/constants';
import { computerScience, engineering, generalFaq, math, otherFaq, science } from '@/lib/faqData';

/**
 * A native <details> accordion. Sharing a `name` makes opening one question close the others in
 * its group. The `details-content` classes animate the height in browsers that support it; the
 * rest open instantly.
 */
function QuestionAnswerAccordion({
  data,
  group,
}: {
  data: { question: string; answer: React.ReactNode }[];
  group: string;
}) {
  return (
    <div className="mx-auto mb-6 max-w-240">
      {data.map((pair, index) => (
        <details
          key={index}
          name={`faq-${group}`}
          className="group overflow-hidden border border-divider bg-white text-dark [interpolate-size:allow-keywords] not-first:border-t-0 details-content:h-0 details-content:transition-[height,content-visibility] details-content:transition-discrete details-content:duration-350 details-content:ease-in-out first:rounded-t-md last:rounded-b-md open:details-content:h-auto"
        >
          <summary className="flex w-full cursor-pointer list-none items-center px-5 py-4 text-left text-[1.2rem] leading-heading font-bold transition-colors duration-150 ease-in-out group-open:bg-[#cfe2ff] group-open:text-[#052c65] group-open:shadow-[inset_0_-1px_0_var(--color-divider)] focus-visible:shadow-[inset_0_0_0_0.25rem_rgb(13_110_253/0.25)] focus-visible:outline-0 [&::-webkit-details-marker]:hidden">
            {pair.question}
            {/* Chevron, flipped while open. */}
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ms-auto size-5 shrink-0 transition-transform duration-200 ease-in-out group-open:-rotate-180"
              aria-hidden
            >
              <path d="m2 5 6 6 6-6" />
            </svg>
          </summary>
          <div className="px-5 py-4 text-[19.2px] font-semibold">{pair.answer}</div>
        </details>
      ))}
    </div>
  );
}

export default function Faq() {
  // Built during render so the date-sensitive answers reflect today, not the day this page was
  // prerendered. See `SemesterStatus` in lib/constants.ts.
  const status = currentSemesterStatus();
  const general = generalFaq(status);
  const other = otherFaq(status);

  return (
    <div className="pb-12">
      <div className="m-12 text-center">
        <h1 className="font-semibold">Frequently Asked Questions</h1>
      </div>
      <div className="site-container">
        <h2 className="mx-auto w-fit p-6">General</h2>
        <QuestionAnswerAccordion data={general} group="general" />

        <h2 className="mx-auto w-fit p-6">Computer Science</h2>
        <QuestionAnswerAccordion data={computerScience} group="cs" />

        <h2 className="mx-auto w-fit p-6">Mathematics</h2>
        <QuestionAnswerAccordion data={math} group="math" />

        <h2 className="mx-auto w-fit p-6">Engineering</h2>
        <QuestionAnswerAccordion data={engineering} group="engineering" />

        <h2 className="mx-auto w-fit p-6">Science</h2>
        <QuestionAnswerAccordion data={science} group="science" />

        <h2 className="mx-auto w-fit p-6">Other</h2>
        <QuestionAnswerAccordion data={other} group="other" />
      </div>
    </div>
  );
}
