import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ToastProps {
  message: string;
  visible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, visible }) => {
  return (
    <div
      id="live-toast"
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 left-6 z-50 bg-[#1c1710] text-[#f5eedf] border border-gold-500/40 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      <span className="material-symbols-outlined text-gold-400 text-[20px]">check_circle</span>
      <span className="text-xs sm:text-sm font-semibold">{message}</span>
    </div>
  );
};
