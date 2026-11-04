export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-300 group-hover:translate-x-1 ${className}`}
    >
      <path d="M1 7h12M8 2l5 5-5 5" />
    </svg>
  );
}
