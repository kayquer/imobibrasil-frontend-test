import * as React from "react";

export const Progress = React.forwardRef(({ className = "", value = 0, ...props }, ref) => (
  <div ref={ref} className={`w-full h-2 bg-[rgba(0,0,0,0.06)] rounded-full overflow-hidden ${className}`} {...props}>
    <div
      className="h-full bg-[var(--accent-primary)] rounded-full transition-[width] duration-500"
      style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
    />
  </div>
));

Progress.displayName = "Progress";