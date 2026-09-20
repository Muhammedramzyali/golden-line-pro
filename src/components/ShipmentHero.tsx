import React from 'react';
import { ShipmentData } from '../types';

interface ShipmentHeroProps {
  shipment: ShipmentData;
  onCopy: (text: string, label: string) => void;
  onOpenLiveMap: () => void;
}

export const ShipmentHero: React.FC<ShipmentHeroProps> = ({
  shipment,
  onCopy,
  onOpenLiveMap,
}) => {
  return (
    <section id="shipment-hero-section" className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#ffffff] via-[#f7f4ec] to-[#eee8da] dark:from-[#211c13] dark:via-[#19150e] dark:to-[#141009] border border-[#ded5c2] dark:border-[#382f1f] p-5 sm:p-7 shadow-lg transition-colors duration-300 scroll-mt-24">
      <div className="absolute -top-16 left-10 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
        {/* Left: Order Identity & Meta */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-lg bg-[#201b12] text-gold-400 font-mono text-sm font-bold border border-gold-500/30 flex items-center gap-1.5 shadow-sm">
              <span className="material-symbols-outlined text-[16px]">pin</span>
              <span>#{shipment.trackingCode}</span>
            </span>

            <button
              type="button"
              onClick={() => onCopy(shipment.trackingCode, 'رقم الشحنة #' + shipment.trackingCode)}
              className="text-xs text-stone-600 dark:text-stone-400 hover:text-gold-600 dark:hover:text-gold-400 flex items-center gap-1 bg-[#ede6d6] dark:bg-[#282216] px-2.5 py-1 rounded-md transition-colors font-medium active:scale-95"
              title="نسخ رقم الشحنة"
            >
              <span className="material-symbols-outlined text-[14px]">content_copy</span>
              <span>نسخ الرقم</span>
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>{shipment.statusLabel}</span>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
            <span>{shipment.heroTitle}</span>
            <span className="material-symbols-outlined text-gold-500 text-[26px]">local_shipping</span>
          </h2>

          <p className="text-xs sm:text-sm text-stone-600 dark:text-[#bcb09c] leading-relaxed max-w-2xl">
            {shipment.heroDescription}
          </p>
        </div>

        {/* Right: Delivery Time Highlight Card */}
        <div className="bg-[#ffffff]/80 dark:bg-[#1c1710]/90 backdrop-blur rounded-xl p-4 sm:p-5 border border-[#e5ddce] dark:border-[#382e1d] flex items-center gap-4 shrink-0 shadow-md">
          <div className="w-12 h-12 rounded-xl bg-gold-500/15 text-gold-600 dark:text-gold-400 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[28px]">alarm_on</span>
          </div>
          <div>
            <span className="text-[11px] font-semibold text-stone-500 dark:text-[#9e927c] block">
              الموعد التقديري لوصول الكابتن
            </span>
            <span className="text-base sm:text-lg font-bold text-stone-900 dark:text-gold-300 font-sans">
              {shipment.estimatedDeliveryTime}
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                خط السير نشط ومُحدث
              </span>
              <button
                type="button"
                onClick={onOpenLiveMap}
                className="text-[11px] text-gold-600 dark:text-gold-400 hover:underline font-semibold flex items-center gap-0.5"
              >
                (عرض الخريطة)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* أزرار التنقل السريع المطلوبة في بطاقة الطلب */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 mt-5 border-t border-[#e5ddce] dark:border-[#2f2719]">
        <button
          type="button"
          onClick={() => {
            const el = document.getElementById('timeline-section');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              el.classList.add('ring-2', 'ring-gold-500', 'transition-all');
              setTimeout(() => el.classList.remove('ring-2', 'ring-gold-500'), 1500);
            }
          }}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-gold-500/20 via-gold-500/15 to-gold-500/10 hover:from-gold-500/30 hover:to-gold-500/20 text-gold-700 dark:text-gold-300 font-bold text-xs sm:text-sm border border-gold-500/40 shadow-sm active:scale-[0.98] transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px] text-gold-500">local_shipping</span>
          <span>عرض حالة الطلب</span>
          <span className="material-symbols-outlined text-[16px] opacity-70">south</span>
        </button>

        <button
          type="button"
          onClick={() => {
            const el = document.getElementById('artworks-section');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              el.classList.add('ring-2', 'ring-gold-500', 'transition-all');
              setTimeout(() => el.classList.remove('ring-2', 'ring-gold-500'), 1500);
            }
          }}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#ede6d6] dark:bg-[#251f15] hover:bg-[#e4dcce] dark:hover:bg-[#2e261b] text-stone-900 dark:text-stone-100 font-bold text-xs sm:text-sm border border-[#d6ccb8] dark:border-gold-500/30 shadow-sm active:scale-[0.98] transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px] text-gold-500">inventory_2</span>
          <span>عرض الأصناف المطلوبة</span>
          <span className="material-symbols-outlined text-[16px] opacity-70">south</span>
        </button>
      </div>

      {/* Masked Customer & Dispatch Meta Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 mt-4 border-t border-[#e5ddce] dark:border-[#2f2719] text-xs">
        <div className="flex items-center gap-2 text-stone-700 dark:text-[#c4b8a4]">
          <span className="material-symbols-outlined text-[18px] text-gold-500 shrink-0">pin_drop</span>
          <div>
            <span className="text-stone-400 dark:text-[#7f7461] block text-[10px]">وجهة التسليم:</span>
            <span className="font-semibold">{shipment.destination}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-stone-700 dark:text-[#c4b8a4]">
          <span className="material-symbols-outlined text-[18px] text-gold-500 shrink-0">perm_phone_msg</span>
          <div>
            <span className="text-stone-400 dark:text-[#7f7461] block text-[10px]">هاتف الاستلام المعتمد:</span>
            <span className="font-mono font-bold" dir="ltr">
              {shipment.recipientPhoneMasked}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-stone-700 dark:text-[#c4b8a4]">
          <span className="material-symbols-outlined text-[18px] text-gold-500 shrink-0">sports_motorsports</span>
          <div>
            <span className="text-stone-400 dark:text-[#7f7461] block text-[10px]">كابتن الشحنة:</span>
            <div className="flex items-center gap-2">
              <span className="font-semibold">{shipment.captain.name}</span>
              <a
                href={`tel:${shipment.captain.phone}`}
                className="text-gold-600 dark:text-gold-400 hover:underline font-mono font-bold"
                dir="ltr"
              >
                {shipment.captain.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
