type P = { className?: string };
const base = { viewBox: "0 0 24 24", "aria-hidden": true, focusable: false } as const;
const line = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export const WhatsApp = ({ className }: P) => (
  <svg {...base} className={className}><path {...line} d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.1z" /><path fill="currentColor" d="M9 7.8c.3-.4.7-.3.9.1l.8 1.7c.1.3 0 .5-.2.8l-.5.6c.8 1.5 2 2.6 3.6 3.3l.6-.7c.2-.3.5-.3.8-.2l1.7.8c.4.2.4.6.2 1-.5 1-1.6 1.5-2.7 1.2-3-.8-5.4-3.2-6.2-6.2-.2-.9.3-1.8 1-2.4z" /></svg>
);
export const Phone = ({ className }: P) => (
  <svg {...base} className={className}><path fill="currentColor" d="M6.6 3.5c.5-.5 1.3-.4 1.7.2l1.7 2.6c.3.5.2 1.1-.2 1.5l-1 1c.9 1.9 2.4 3.4 4.3 4.3l1-1c.4-.4 1-.5 1.5-.2l2.6 1.7c.6.4.7 1.2.2 1.7l-1.2 1.2c-.9.9-2.2 1.2-3.4.8-4.7-1.6-8.4-5.3-10-10-.4-1.2-.1-2.5.8-3.4z" /></svg>
);
export const Arrow = ({ className }: P) => (
  <svg {...base} className={className}><path {...line} strokeWidth={2} d="M4 12h15m-6-6 6 6-6 6" /></svg>
);
export const Bolt = ({ className }: P) => (
  <svg {...base} className={className}><path fill="currentColor" d="M13.5 2 5 13.5h5.5L9.5 22 19 9.5h-5.7z" /></svg>
);
export const Shield = ({ className }: P) => (
  <svg {...base} className={className}><path {...line} d="M12 3 4.5 6v5.5c0 4.6 3.2 8 7.5 9.5 4.3-1.5 7.5-4.9 7.5-9.5V6z" /><path {...line} d="m8.8 12 2.4 2.4 4.2-4.6" /></svg>
);
export const Pin = ({ className }: P) => (
  <svg {...base} className={className}><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
);
export const Check = ({ className }: P) => (
  <svg {...base} className={className}><circle cx="12" cy="12" r="10" fill="currentColor" /><path fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="m7.5 12.3 3 3 6-6.5" /></svg>
);
export const Gear = ({ className }: P) => (
  <svg {...base} className={className}><circle {...line} cx="12" cy="12" r="3.2" /><path {...line} d="M10.4 2.8h3.2l.5 2.4 1.7.7 2.1-1.3 2.3 2.3-1.3 2.1.7 1.7 2.4.5v3.2l-2.4.5-.7 1.7 1.3 2.1-2.3 2.3-2.1-1.3-1.7.7-.5 2.4h-3.2l-.5-2.4-1.7-.7-2.1 1.3-2.3-2.3 1.3-2.1-.7-1.7-2.4-.5v-3.2l2.4-.5.7-1.7-1.3-2.1 2.3-2.3 2.1 1.3 1.7-.7z" /></svg>
);
export const Wrench = ({ className }: P) => (
  <svg {...base} className={className}><path {...line} d="M14.7 6.3a4 4 0 0 0 5 5L22 9.5a6.5 6.5 0 0 1-8.7 8.4L6.5 21.5a2 2 0 0 1-3-3l3.6-6.8A6.5 6.5 0 0 1 14.5 2z" /></svg>
);
export const Chip = ({ className }: P) => (
  <svg {...base} className={className}><rect {...line} x="6" y="6" width="12" height="12" rx="1.5" /><rect {...line} x="9.5" y="9.5" width="5" height="5" /><path {...line} d="M9 2.5v3.5M12 2.5v3.5M15 2.5v3.5M9 18v3.5M12 18v3.5M15 18v3.5M2.5 9H6M2.5 12H6M2.5 15H6M18 9h3.5M18 12h3.5M18 15h3.5" /></svg>
);
export const Remote = ({ className }: P) => (
  <svg {...base} className={className}><rect {...line} x="6.5" y="2.5" width="11" height="19" rx="3" /><circle {...line} cx="12" cy="9.5" r="2.8" /><circle fill="currentColor" cx="12" cy="9.5" r="1" /><path {...line} d="M9.5 15.5h5M9.5 18h5" /></svg>
);
export const GateIcon = ({ className }: P) => (
  <svg {...base} className={className}><rect {...line} x="2.5" y="5" width="19" height="14" rx="1" /><path {...line} d="M6 5v14M9 5v14M12 5v14M15 5v14M18 5v14" /></svg>
);
export const Star = ({ className }: P) => (
  <svg {...base} className={className}><path fill="currentColor" d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.3 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" /></svg>
);
export const GoogleG = ({ className }: P) => (
  <svg {...base} className={className}><path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.3-.2-1.9H12v3.6h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.2z" /><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z" /><path fill="#FBBC05" d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1a10 10 0 0 0 0 9.2z" /><path fill="#EA4335" d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3.1 7.4L6.4 10C7.2 7.7 9.4 5.9 12 5.9z" /></svg>
);
