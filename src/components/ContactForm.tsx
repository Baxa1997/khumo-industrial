"use client";

import { useState } from "react";
import Icon from "./Icon";
import { solutions } from "@/lib/data";

const field =
  "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-surface p-12 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-accent-500 text-navy-950">
          <Icon name="check" className="h-8 w-8" strokeWidth={3} />
        </span>
        <h2 className="mt-6 text-2xl font-bold text-navy-900">Thank you for your message</h2>
        <p className="mt-2 text-muted">Our team will get back to you within one working day.</p>
      </div>
    );
  }

  return (
    <form
      className="rounded-3xl bg-surface p-8 sm:p-10"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: connect to an email service or API route.
        setSent(true);
      }}
    >
      <h2 className="text-2xl font-bold text-navy-900">Send us a message</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-navy-900">
          Name *<input required name="name" className={field} autoComplete="name" />
        </label>
        <label className="text-sm font-semibold text-navy-900">
          Company<input name="company" className={field} autoComplete="organization" />
        </label>
        <label className="text-sm font-semibold text-navy-900">
          Email *<input required type="email" name="email" className={field} autoComplete="email" />
        </label>
        <label className="text-sm font-semibold text-navy-900">
          Phone<input type="tel" name="phone" className={field} autoComplete="tel" />
        </label>
        <label className="text-sm font-semibold text-navy-900 sm:col-span-2">
          Topic
          <select name="topic" className={field} defaultValue="">
            <option value="" disabled>Select a topic</option>
            {solutions.map((s) => <option key={s.slug}>{s.name}</option>)}
            <option>Service & spare parts</option>
            <option>Other</option>
          </select>
        </label>
        <label className="text-sm font-semibold text-navy-900 sm:col-span-2">
          Message *<textarea required name="message" rows={5} className={field} />
        </label>
      </div>
      <label className="mt-5 flex items-start gap-3 text-sm text-muted">
        <input required type="checkbox" className="mt-1 h-4 w-4 accent-brand-500" />
        I agree that my data will be used to process my request.
      </label>
      <button type="submit" className="btn-dark mt-8">
        Send message <Icon name="arrow" className="h-4 w-4" />
      </button>
    </form>
  );
}
