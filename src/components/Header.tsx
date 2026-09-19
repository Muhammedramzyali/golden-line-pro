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

      {/* Minimal Demo Utility Bar */}
      <aside className="w-full bg-[#ede8dc] dark:bg-[#18140c] border-b border-[#ded5c2] dark:border-[#2f2719] py-1.5 px-4 text-xs transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-stone-600 dark:text-[#a89d88]">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>بوابة استعلام العميل الآمنة (مشفرة بنظام SSL)</span>
            <span className="text-stone-400 dark:text-[#554a37]">|</span>
            <span className="font-mono text-[11px] text-stone-500 dark:text-[#c4b69d]">
              SESSION: #GL-DIRECT-{activeOrderCode}
            </span>
          </div>

          <div className="flex items-center gap-2 mr-auto flex-wrap">
            <button
              id="btn-search-order"
              type="button"
              onClick={onOpenSearch}
              className="px-2.5 py-1 rounded bg-[#dfd7c5] dark:bg-[#251f15] hover:bg-[#d0c6b1] dark:hover:bg-[#322a1d] text-stone-800 dark:text-[#e5dcce] transition-colors flex items-center gap-1.5 font-medium text-[11px]"
              title="بحث عن شحنة أخرى"
            >
              <span className="material-symbols-outlined text-[14px] text-gold-600 dark:text-gold-400">search</span>
              <span>تبديل الشحنة ({activeOrderCode})</span>
            </button>

            <button
              id="btn-show-skeleton"
              type="button"
              onClick={onShowSkeleton}
              className="px-2.5 py-1 rounded bg-[#dfd7c5] dark:bg-[#251f15] hover:bg-[#d0c6b1] dark:hover:bg-[#322a1d] text-stone-800 dark:text-[#e5dcce] transition-colors flex items-center gap-1.5 font-medium text-[11px]"
            >
              <span className="material-symbols-outlined text-[14px] text-gold-600 dark:text-gold-400">hourglass_empty</span>
              <span>معاينة شاشة التحميل (Skeleton)</span>
            </button>

            <button
              id="btn-show-ratelimit"
              type="button"
              onClick={onShowRateLimit}
              className="px-2.5 py-1 rounded bg-[#dfd7c5] dark:bg-[#251f15] hover:bg-[#d0c6b1] dark:hover:bg-[#322a1d] text-stone-800 dark:text-[#e5dcce] transition-colors flex items-center gap-1.5 font-medium text-[11px]"
            >
              <span className="material-symbols-outlined text-[14px] text-rose-500">lock_clock</span>
              <span>معاينة شاشة الحظر (Rate Limit)</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Luxury Customer Header */}
      <header className="sticky top-0 z-40 bg-[#f9f7f2]/95 dark:bg-[#14100a]/95 backdrop-blur-md border-b border-[#e5ddce] dark:border-[#2d2516] shadow-sm transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          {/* Brand Logo & Customer Portal Title */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#1b1710] border border-gold-500/40 p-1 flex items-center justify-center shadow-md shrink-0">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1UZ2StPdi3KWqVvyC49xL_g4arlSJR6RMT97k7Flz0Lmog3bxKcby0bVaIFsDMYRXJPMoDY3jtMebF2apF0mqOEN7kCABM-WsPjKL-nLain7fAOKFwPhAS943sGl4aAQXKd_lxAXxcEIIbhmKqVPL9dgIsLhhRcPufKtP_iRJSDdCR88ac-S6zU4NqIGmz4vioEQG8u1MEbP12QfBEBwzfaLpr-TzYaFnsha_q3TroaYcXCoPbiR-0f0A5V9QAYb2dfAchqHcJdng"
                alt="Golden Line"
                className="w-full h-full object-contain brightness-110"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold tracking-tight text-stone-900 dark:text-gold-400">
                  جولدن لاين
                </h1>
                <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-full bg-gold-500/15 text-gold-700 dark:text-gold-300 font-semibold border border-gold-500/30">
                  GOLDEN LINE
                </span>
              </div>
              <p className="text-xs text-stone-500 dark:text-[#a89d88] font-medium">
                بوابة تتبع الشحنات المعتمدة
              </p>
            </div>
          </div>

          {/* Header Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* WhatsApp Quick Support */}
            <a
              id="header-whatsapp-btn"
              href="https://wa.me/962772816628"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-700 dark:text-emerald-400 border border-emerald-600/30 text-xs sm:text-sm font-semibold transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span className="hidden sm:inline">واتساب الدعم المباشر</span>
              <span className="sm:hidden">مساعدة</span>
            </a>

            {/* Dark / Light Theme Toggle */}
            <button
              id="theme-toggle-btn"
              type="button"
              onClick={onToggleTheme}
              aria-label="تبديل الوضع الداكن والفاتح"
              className="flex items-center gap-2 px-3 py-1.5 sm:py-2 rounded-xl bg-[#ebe4d5] dark:bg-[#201b12] hover:bg-[#ded5c2] dark:hover:bg-[#2d2518] text-stone-800 dark:text-gold-400 border border-[#d6ccb8] dark:border-gold-500/30 text-xs sm:text-sm font-semibold transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
              <span className="hidden md:inline">
                {isDark ? 'الوضع الفاتح' : 'الوضع الداكن'}
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
