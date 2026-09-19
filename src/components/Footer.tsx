import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="rounded-2xl bg-[#ffffff] dark:bg-[#18140c] border border-[#ded5c2] dark:border-[#2f2719] p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600 dark:text-[#a89d88] transition-colors duration-300">
      <div className="flex items-center gap-3 text-center sm:text-right">
        <div className="w-10 h-10 rounded-xl bg-gold-500/15 text-gold-600 dark:text-gold-400 flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-[24px]">support_agent</span>
        </div>
        <div>
          <span className="font-bold text-stone-900 dark:text-stone-100 block text-sm">
            هل لديك أي استفسار؟
          </span>
          <span>فريق خدمة عملاء Golden Line مستعد لمساعدتك يومياً من ٩ ص حتى ١٠ م.</span>
        </div>
      </div>

      <div className="flex items-center gap-2.5 shrink-0 flex-wrap justify-center">
        <a
          href="https://wa.me/962772816628"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
        >
          <span className="material-symbols-outlined text-[18px]">chat</span>
          <span>محادثة واتساب سريعة</span>
        </a>

        <a
          href="tel:0772816628"
          className="px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-stone-950 font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
        >
          <span className="material-symbols-outlined text-[18px]">call</span>
          <span>اتصال هاتفي</span>
        </a>
      </div>
    </footer>
  );
};
