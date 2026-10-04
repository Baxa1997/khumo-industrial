"use client";

import { useState } from "react";
import Icon from "./Icon";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const go = (delta: number) => setIndex((i) => (i + delta + testimonials.length) % testimonials.length);
  const t = testimonials[index];

  return (
    <section className="pb-24 sm:pb-32">
      <div className="container-x">
        <div className="flex items-end justify-between gap-8">
          <h2 className="display text-4xl sm:text-5xl lg:text-[3.6rem]">
            Hear directly from
            <br />
            our valued
            <br />
            customers
          </h2>
          <div className="flex shrink-0 gap-4">
            <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="grid h-16 w-16 place-items-center rounded-full border border-line transition-colors hover:border-ink">
              <Icon name="arrowLeft" className="h-5 w-5" />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="grid h-16 w-16 place-items-center rounded-full border border-line transition-colors hover:border-ink">
              <Icon name="arrow" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <figure key={index} className="mt-14 grid gap-10 rounded-xl bg-surface p-8 sm:p-12 lg:grid-cols-12" aria-live="polite">
          <Icon name="quote" className="h-12 w-12 text-orange-500 lg:col-span-1" strokeWidth={2} />
          <blockquote className="display text-2xl leading-snug tracking-[-0.03em] sm:text-[2rem] lg:col-span-8">“{t.quote}”</blockquote>
          <figcaption className="self-end lg:col-span-3 lg:text-right">
            <span className="block font-medium">{t.name}</span>
            <span className="block text-sm text-muted">{t.company}</span>
            <span className="mt-4 block text-sm text-muted">{String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
