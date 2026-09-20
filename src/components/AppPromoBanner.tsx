import React from 'react';

interface AppPromoBannerProps {
  onCopy: (text: string, label: string) => void;
  onOpenLiveMap: () => void;
}

export const AppPromoBanner: React.FC<AppPromoBannerProps> = ({ onCopy, onOpenLiveMap }) => {
  return (
    <section className="rounded-3xl bg-gradient-to-br from-[#1a150c] via-[#241d11] to-[#120f09] text-white p-6 sm:p-8 lg:p-10 border-2 border-gold-500/40 shadow-2xl relative overflow-hidden transition-all">
      {/* Subtle luxury decorative background lighting */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gold-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left: Value Proposition & Marketing Copy */}
        <div className="max-w-xl text-center lg:text-right space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/30 text-xs font-bold">
            <span className="material-symbols-outlined text-[16px]">stars</span>
            <span>قم بتنزيل تطبيق Golden line واحصل على عروض حصرية</span>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-tight">
            احصل على <span className="gold-gradient-text">خصم 15%</span> على طلبك القادم
          </h3>

          <p className="text-xs sm:text-sm text-[#d4caa8] leading-relaxed">
            شاهد كابتن التوصيل يتحرك على الخريطة التفاعلية مباشرة، واستلم إشعارات فورية عند اقتراب وصول الطلب إلى باب منزلك، بالإضافة إلى مكتبة تصاميم حصرية لمستخدمي التطبيق.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-[#a99e83]">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-gold-400 text-[16px]">check_circle</span>
              إشعارات لحظية للرحلة
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-gold-400 text-[16px]">check_circle</span>
              دفع إلكتروني آمن بنقرة
            </span>
            <button
              type="button"
              onClick={() => onCopy('GL15', 'كود الخصم GL15')}
              className="flex items-center gap-1.5 bg-gold-500/15 hover:bg-gold-500/25 px-2.5 py-1 rounded-lg border border-gold-500/30 transition-colors text-white"
              title="انقر لنسخ كود الخصم"
            >
              <span className="material-symbols-outlined text-gold-400 text-[16px]">redeem</span>
              <span>كود خصم فوري:</span>
              <strong className="text-gold-400 font-mono tracking-wider">GL15</strong>
              <span className="material-symbols-outlined text-[13px] text-stone-400">content_copy</span>
            </button>
          </div>

          <div className="pt-2 flex items-center justify-center lg:justify-start">
            <button
              type="button"
              onClick={onOpenLiveMap}
              className="px-4 py-2 rounded-xl bg-gold-500/20 hover:bg-gold-500/30 text-gold-300 border border-gold-500/40 text-xs font-bold transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">satellite_alt</span>
              <span>عرض محاكاة التتبع الحي للكابتن على الخريطة</span>
            </button>
          </div>
        </div>

        {/* Right: Store Badges Stack */}
        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
          <div className="flex flex-col gap-3 w-full sm:w-auto">
            {/* Google Play Official-Style Badge */}
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noreferrer"
              className="group px-5 py-2.5 rounded-xl bg-black hover:bg-stone-900 border border-gold-500/40 hover:border-gold-400 transition-all flex items-center gap-3.5 shadow-lg w-52"
            >
              <svg className="w-7 h-7 shrink-0" viewBox="0 0 512 512">
                <path
                  d="M32.5 35.8c-3.1 5.3-4.8 11.7-4.8 19.3v401.8c0 7.6 1.7 14 4.8 19.3l225.4-220.2L32.5 35.8z"
                  fill="#4285f4"
                />
                <path
                  d="M333.1 329.8l-75.4-73.6L32.5 476.2c6.9 3.8 15.2 4.4 23.9-.6l276.7-145.8z"
                  fill="#ea4335"
                />
                <path
                  d="M333.1 182.2L56.4 36.4c-8.7-5-17-4.4-23.9-.6l225.2 220 75.4-73.6z"
                  fill="#fbbc04"
                />
                <path
                  d="M480.9 233.1L333.1 182.2l-75.4 73.6 75.4 73.6 147.8-50.9c13.7-4.7 20.9-14.7 20.9-22.7-.1-8.1-7.3-18.1-20.9-22.7z"
                  fill="#34a853"
                />
              </svg>
              <div className="text-right flex flex-col">
                <span className="text-[9px] uppercase tracking-wider text-stone-400 group-hover:text-stone-300">
                  متاح الآن على
                </span>
                <span className="text-sm font-bold text-white tracking-tight">Google Play</span>
              </div>
            </a>

            {/* App Store Official-Style Badge */}
            <a
              href="https://apple.com/app-store"
              target="_blank"
              rel="noreferrer"
              className="group px-5 py-2.5 rounded-xl bg-black hover:bg-stone-900 border border-gold-500/40 hover:border-gold-400 transition-all flex items-center gap-3.5 shadow-lg w-52"
            >
              <svg className="w-7 h-7 shrink-0 fill-current text-white" viewBox="0 0 170 170">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.69-7.85-12-14.43-5.65-8.7-10.09-18.9-13.32-30.6-3.23-11.7-4.85-22.7-4.85-33.01 0-14.13 3.69-25.75 11.08-34.86 7.39-9.11 16.51-13.75 27.36-13.92 4.8 0 10.11 1.25 15.93 3.75 5.82 2.5 9.7 3.86 11.64 4.09 1.54-.23 5.56-1.61 12.06-4.14 6.5-2.53 11.95-3.67 16.36-3.42 12.57.65 22.84 5.39 30.82 14.21-11.02 6.63-16.42 15.66-16.2 27.09.22 8.91 3.75 16.52 10.6 22.83 6.85 6.3 15.01 10.05 24.47 11.24-2.18 6.52-4.68 12.77-7.51 18.75zM119.22 33.72c0-7.39 2.67-14.24 8.01-20.55 5.34-6.31 11.87-10.42 19.59-12.33-.22 1.3-.44 2.49-.65 3.58-.87 4.78-2.61 9.45-5.22 14.02-2.61 4.57-5.98 8.16-10.11 10.77-4.13 2.61-8.26 4.13-12.39 4.56-.43-.01-.65-.01-1.23-.05z" />
              </svg>
              <div className="text-right flex flex-col">
                <span className="text-[9px] uppercase tracking-wider text-stone-400 group-hover:text-stone-300">
                  تحميل من
                </span>
                <span className="text-sm font-bold text-white tracking-tight">App Store</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
