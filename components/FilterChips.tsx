"use client";

export function FilterChips<T extends string>({
  options,
  value,
  onChange,
  label,
  counts,
}: {
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
  label: string;
  counts?: Partial<Record<T, number>>;
}) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = opt === value;
        return (
          <button
            key={opt}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(opt)}
            className={`inline-flex min-h-11 cursor-pointer items-center gap-2 border px-4.5 text-sm transition-colors ${
              active ? "border-ink bg-ink text-ivory" : "border-ink/25 text-ink hover:border-ink"
            }`}
          >
            {opt}
            {counts && counts[opt] !== undefined && <span className="text-xs opacity-60">{counts[opt]}</span>}
          </button>
        );
      })}
    </div>
  );
}
