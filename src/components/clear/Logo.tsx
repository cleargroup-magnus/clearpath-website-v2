import { useId } from "react";

export function Logo({ className = "" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const gradId = `csGrad${uid}`;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* ClearScaler infinity mark — recreated from brand asset */}
      <svg
        width="44"
        height="24"
        viewBox="0 0 100 50"
        fill="none"
        aria-hidden="true"
        style={{ display: "block", flexShrink: 0 }}
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#27B4E4" />
            <stop offset="52%"  stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
        </defs>
        {/* Infinity / lemniscate path — two loops crossing at center (50,25) */}
        <path
          d="M 50 25
             C 50 14.5 43 7.5 33 7.5
             C 23 7.5 15.5 14.5 15.5 25
             C 15.5 35.5 23 42.5 33 42.5
             C 43 42.5 50 35.5 50 25
             C 50 14.5 57 7.5 67 7.5
             C 77 7.5 84.5 14.5 84.5 25
             C 84.5 35.5 77 42.5 67 42.5
             C 57 42.5 50 35.5 50 25"
          stroke={`url(#${gradId})`}
          strokeWidth="8.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Wordmark */}
      <span className="text-[18px] font-semibold tracking-[-0.025em] text-text-base">
        ClearScaler
      </span>
    </div>
  );
}
