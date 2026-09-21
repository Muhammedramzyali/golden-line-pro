import React from 'react';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onShowSkeleton: () => void;
  onShowRateLimit: () => void;
  onOpenSearch: () => void;
  activeOrderCode: string;
}

export const Header: React.FC<HeaderProps> = ({
  isDark,
  onToggleTheme,
  onShowSkeleton,
  onShowRateLimit,
  onOpenSearch,
  activeOrderCode,
}) => {
  return (
    <>
      {/* Ambient Glow Elements */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gold-500/10 dark:bg-gold-500/[0.07] blur-[120px] pointer-events-none rounded-full -z-10" />
      <div className="fixed bottom-0 right-0 w-[450px] h-[450px] bg-gold-500/5 blur-[150px] pointer-events-none rounded-full -z-10" />

      {/* Luxury Customer Header */}
      <header className="sticky top-0 z-40 bg-[#f9f7f2]/95 dark:bg-[#14100a]/95 backdrop-blur-md border-b border-[#e5ddce] dark:border-[#2d2516] shadow-sm transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          
          {/* في الهاتف: اللوجو بسطر لوحده أولاً ثم الكلمات في السطر الثاني | في الكمبيوتر: بجانب بعضهما */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2.5 sm:gap-3.5 text-center sm:text-right">
            {/* 1. اللوجو المعتمد للمشروع (ic_logo_golden.png) بحجم واضح وفخم */}
            <div className="relative w-16 h-16 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#2a2215] via-[#1b1710] to-[#0f0c07] border-2 border-gold-500/50 p-1 flex items-center justify-center shadow-lg shrink-0 overflow-hidden group">
              <img
                src="/ic_logo_golden.png"
                alt="Golden Line"
                className="w-full h-full object-contain rounded-xl brightness-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fb = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fb) fb.classList.remove('hidden');
                }}
              />
              {/* Fallback Luxury Golden Line SVG Emblem */}
              <div className="hidden w-full h-full flex flex-col items-center justify-center text-center select-none pointer-events-none">
                <div className="relative flex items-center justify-center">
                  <svg className="w-8 h-8 sm:w-7 sm:h-7 text-gold-400 fill-current drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <polygon points="12 2 2 7 12 12 22 7 12 2" fill="url(#goldGradHeader)"/>
                    <defs>
                      <linearGradient id="goldGradHeader" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffe58f"/>
                        <stop offset="50%" stopColor="#d4af37"/>
                        <stop offset="100%" stopColor="#9e7a17"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="text-[9px] sm:text-[8px] font-extrabold tracking-widest text-gold-400 uppercase mt-0.5 leading-none font-sans">GOLDEN</span>
              </div>
            </div>

            {/* 2. السطر الثاني على الهاتف: الكلمات نظام التتبع والشارة والوصف */}
            <div className="flex flex-col items-center sm:items-start gap-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h1 className="text-base sm:text-lg font-bold tracking-tight text-stone-900 dark:text-gold-400">
                  جولدن لاين
                </h1>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold-500/15 text-gold-700 dark:text-gold-300 font-semibold border border-gold-500/30">
                  بوابة الاستعلام
                </span>
              </div>
              <p className="text-xs text-stone-500 dark:text-[#a89d88] font-medium">
                بوابة تتبع الشحنات المعتمدة
              </p>
            </div>
          </div>

          {/* 3. السطر الثالث على الهاتف: الأزرار تحتهما بشكل منظم ومريح للضغط */}
          <div className="flex items-center justify-center sm:justify-end gap-2.5 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-[#e5ddce]/60 dark:border-[#2f2719]">
            {/* WhatsApp Quick Support */}
            <a
              id="header-whatsapp-btn"
              href="https://wa.me/962772816628"
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 sm:py-1.5 rounded-xl bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-700 dark:text-emerald-400 border border-emerald-600/30 text-xs sm:text-sm font-semibold transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span className="inline">واتساب الدعم والمساعدة</span>
            </a>

            {/* Dark / Light Theme Toggle */}
            <button
              id="theme-toggle-btn"
              type="button"
              onClick={onToggleTheme}
              aria-label="تبديل الوضع الداكن والفاتح"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-xl bg-[#ebe4d5] dark:bg-[#201b12] hover:bg-[#ded5c2] dark:hover:bg-[#2d2518] text-stone-800 dark:text-gold-400 border border-[#d6ccb8] dark:border-gold-500/30 text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
              <span className="text-xs sm:hidden">الوضع</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
