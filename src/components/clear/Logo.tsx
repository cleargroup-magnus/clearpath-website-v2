export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative h-7 w-7 flex-shrink-0 rounded-lg bg-navy">
        <span className="absolute inset-1.5 rotate-[-45deg] rounded-[4px] border-2 border-blue border-b-transparent border-r-transparent" />
      </div>
      <span className="text-[18px] font-semibold tracking-tight text-navy">
        clear<span className="font-normal text-text-muted">.group</span>
      </span>
    </div>
  );
}