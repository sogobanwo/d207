"use client";

import { useState, type FormEvent } from "react";
import { projectTypes } from "@/lib/content";

type Status = { state: "idle" } | { state: "sending" } | { state: "sent" } | { state: "error"; message: string };

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [type, setType] = useState(projectTypes[0]);
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, projectType: type }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error ?? "Something went wrong. Please try again.");
      form.reset();
      setStatus({ state: "sent" });
    } catch (err) {
      setStatus({ state: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  if (status.state === "sent") {
    return (
      <div role="status" className="border border-ink/10 bg-white p-10 md:p-12">
        <p className="eyebrow text-brand">Brief received</p>
        <p className="mt-4 font-serif text-4xl leading-tight">Thank you — our project team will be in touch.</p>
        <button
          type="button"
          onClick={() => setStatus({ state: "idle" })}
          className="mt-8 min-h-11 cursor-pointer border-b border-ink text-[15px] font-medium"
        >
          Send another brief
        </button>
      </div>
    );
  }

  const label = "grid gap-2 text-[13px] font-medium";

  return (
    <form onSubmit={onSubmit} className={`grid content-start gap-7 ${compact ? "border border-ink/10 bg-white p-8 md:p-12" : ""}`}>
      <fieldset>
        <legend className="eyebrow mb-5 text-mute">What are you planning?</legend>
        <div className="flex flex-wrap gap-2.5">
          {projectTypes.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={t === type}
              onClick={() => setType(t)}
              className={`min-h-11 cursor-pointer border px-4.5 text-sm transition-colors ${
                t === type ? "border-brand bg-brand text-white" : "border-ink/25 text-ink hover:border-ink"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-7 sm:grid-cols-2">
        <label className={label}>
          Full name
          <input className="field" type="text" name="name" autoComplete="name" required />
        </label>
        <label className={label}>
          Phone
          <input className="field" type="tel" name="phone" autoComplete="tel" required />
        </label>
        <label className={label}>
          Email
          <input className="field" type="email" name="email" autoComplete="email" required />
        </label>
        <label className={label}>
          Location of plot
          <input className="field" type="text" name="location" placeholder="e.g. Lekki Phase 1" />
        </label>
        {!compact && (
          <>
            <label className={label}>
              Budget range
              {/* TODO(D207): set real budget bands with the client. */}
              <select className="field" name="budget" defaultValue="Prefer to discuss">
                <option>Prefer to discuss</option>
                <option>[Range A]</option>
                <option>[Range B]</option>
                <option>[Range C]</option>
              </select>
            </label>
            <label className={label}>
              Ideal start
              <select className="field" name="start" defaultValue="Within 3 months">
                <option>Within 3 months</option>
                <option>3–6 months</option>
                <option>6–12 months</option>
                <option>Just exploring</option>
              </select>
            </label>
          </>
        )}
      </div>

      <label className={label}>
        Your brief
        <textarea
          className="field resize-y py-2.5"
          name="brief"
          rows={compact ? 4 : 5}
          placeholder="Plot size, number of bedrooms, the feel you are after, anything else we should know."
          required
        />
      </label>

      {/* Honeypot — hidden from people, filled by bots. */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="flex flex-wrap items-center justify-between gap-5">
        <p className="text-[13px] text-mute" aria-live="polite">
          {status.state === "error" ? <span className="text-red-700">{status.message}</span> : "We usually reply within [X] working days."}
        </p>
        <button
          type="submit"
          disabled={status.state === "sending"}
          className="min-h-14 cursor-pointer bg-brand px-10 text-[15px] font-medium tracking-[0.03em] text-white transition-colors hover:bg-brand-dark disabled:cursor-wait disabled:opacity-70"
        >
          {status.state === "sending" ? "Sending…" : "Send your brief"}
        </button>
      </div>
    </form>
  );
}
