import React, { useState, useEffect } from 'react';

interface RateLimitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RateLimitModal: React.FC<RateLimitModalProps> = ({ isOpen, onClose }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(85692); // 23h 48m 12s

  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const hours = Math.floor(secondsRemaining / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;
  const timeFormatted = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div
      id="rate-limit-modal"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#ffffff] dark:bg-[#1c1710] border border-gold-500/30 max-w-md w-full rounded-2xl p-6 shadow-2xl relative text-center">
        <div className="w-14 h-14 rounded-2xl bg-rose-500/15 text-rose-500 flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-[32px]">lock_clock</span>
        </div>

        <span className="text-xs font-bold text-rose-500 uppercase tracking-wider">
          تنبيه حماية الخصوصية
        </span>

        <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mt-1">
          تجاوز الحد المسموح للاستعلام
        </h3>

        <p className="text-xs text-stone-600 dark:text-[#a89d88] mt-2 leading-relaxed">
          تم الوصول إلى الحد الأقصى للمعاينة المتزامنة لحماية بيانات الشحنة وخصوصية الموقع. يرجى الانتظار قليلاً أو التواصل مباشرة مع فريق الدعم الفني.
        </p>

        <div className="bg-[#f7f4ec] dark:bg-[#251f15] p-3 rounded-xl my-4 text-xs text-stone-700 dark:text-[#c4b69d] text-right space-y-1.5 border border-[#ebe4d5] dark:border-[#382f1f]">
          <div className="flex items-center justify-between">
            <span>الوقت المتبقي لإعادة الفتح:</span>
            <span className="font-mono font-bold text-gold-600 dark:text-gold-400 text-sm">
              {timeFormatted}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>رمز التحقق الأمني:</span>
            <span className="font-mono text-stone-500 font-semibold">SEC-RATE-4029</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <a
            href="tel:0772816628"
            className="w-full py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">support_agent</span>
            <span>الاتصال بالدعم الفني</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2 rounded-xl bg-[#eee6d6] dark:bg-[#292217] hover:bg-[#ded5c2] dark:hover:bg-[#342b1d] text-stone-800 dark:text-stone-300 text-xs font-semibold transition-all"
          >
            إغلاق النافذة
          </button>
        </div>
      </div>
    </div>
  );
};
