"use client";

import { useId, useState } from "react";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number>(0);
  const base = useId();

  return (
    <div className="border-t border-ink/25">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${base}-panel-${i}`;
        return (
          <div key={item.q} className="border-b border-ink/25">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex min-h-19 w-full cursor-pointer items-center justify-between gap-6 py-5 text-left font-serif text-2xl font-semibold text-ink md:text-[26px]"
              >
                <span>{item.q}</span>
                <span aria-hidden="true" className="font-sans text-2xl font-light text-brand">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" hidden={!isOpen}>
              <p className="pb-7 pr-0 text-base leading-relaxed text-body md:pr-16">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
