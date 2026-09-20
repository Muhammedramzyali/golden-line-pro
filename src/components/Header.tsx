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
            {/* 1. اللوجو في سطر لوحده على الهاتف */}
            <div className="w-14 h-14 sm:w-11 sm:h-11 rounded-2xl sm:rounded-xl bg-[#1b1710] border border-gold-500/40 p-1.5 sm:p-1 flex items-center justify-center shadow-md shrink-0">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1UZ2StPdi3KWqVvyC49xL_g4arlSJR6RMT97k7Flz0Lmog3bxKcby0bVaIFsDMYRXJPMoDY3jtMebF2apF0mqOEN7kCABM-WsPjKL-nLain7fAOKFwPhAS943sGl4aAQXKd_lxAXxcEIIbhmKqVPL9dgIsLhhRcPufKtP_iRJSDdCR88ac-S6zU4NqIGmz4vioEQG8u1MEbP12QfBEBwzfaLpr-TzYaFnsha_q3TroaYcXCoPbiR-0f0A5V9QAYb2dfAchqHcJdng"
                alt="Golden Line"
                className="w-full h-full object-contain brightness-110"
              />
            </div>

            {/* 2. السطر الثاني على الهاتف: الكلمات نظام التتبع والشارة والوصف */}
            <div className="flex flex-col items-center sm:items-start gap-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h1 className="text-base sm:text-lg font-bold tracking-tight text-stone-900 dark:text-gold-400">
                  جولدن لاين
                </h1>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold-500/15 text-gold-700 dark:text-gold-300 font-semibold border border-gold-500/30">
                  بوابة الاستعلام الموحدة
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
