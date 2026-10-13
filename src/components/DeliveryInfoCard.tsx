import React from 'react';
import { ShipmentData } from '../types';

interface DeliveryInfoCardProps {
  shipment: ShipmentData;
  onCopy: (text: string, label: string) => void;
  onOpenLiveMap?: () => void;
}

export const DeliveryInfoCard: React.FC<DeliveryInfoCardProps> = ({
  shipment,
  onCopy,
  onOpenLiveMap,
}) => {
  const scrollToArtworks = () => {
    const el = document.getElementById('artworks-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.classList.add('ring-2', 'ring-gold-500', 'transition-all');
      setTimeout(() => el.classList.remove('ring-2', 'ring-gold-500'), 1500);
    }
  };

  const scrollToStatus = () => {
    const el = document.getElementById('shipment-hero-section') || document.getElementById('timeline-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.classList.add('ring-2', 'ring-gold-500', 'transition-all');
      setTimeout(() => el.classList.remove('ring-2', 'ring-gold-500'), 1500);
    }
  };

  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#ffffff] via-[#f7f4ec] to-[#eee8da] dark:from-[#211c13] dark:via-[#19150e] dark:to-[#141009] border border-[#ded5c2] dark:border-[#382f1f] p-5 sm:p-7 shadow-lg transition-colors duration-300">
      <div className="space-y-5">
        {/* أ. شريط هوية الشحنة والصفحة والشارة */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 border-b border-[#e5ddce] dark:border-[#2f2719]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1.5 rounded-xl bg-[#201b12] text-gold-400 font-mono text-sm font-bold border border-gold-500/30 flex items-center gap-1.5 shadow-sm">
              <span className="material-symbols-outlined text-[16px]">tag</span>
              <span>#{shipment.trackingCode}</span>
            </span>

            <button
              type="button"
              onClick={() => onCopy(shipment.trackingCode, 'رقم الشحنة #' + shipment.trackingCode)}
              className="text-xs text-stone-600 dark:text-stone-400 hover:text-gold-600 dark:hover:text-gold-400 flex items-center gap-1 bg-[#ede6d6] dark:bg-[#282216] px-2.5 py-1.5 rounded-xl transition-colors font-medium active:scale-95 cursor-pointer"
              title="نسخ رقم الشحنة"
            >
              <span className="material-symbols-outlined text-[14px]">content_copy</span>
              <span>نسخ الرقم</span>
            </button>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 text-xs font-bold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>{shipment.statusLabel}</span>
          </div>
        </div>

        {/* ب. العنوان وبيانات التسليم فوراً في قمة الصفحة ليكون واضحاً وبارزاً للمستخدم */}
        <div className="rounded-2xl p-4 sm:p-5 bg-[#fbf9f4] dark:bg-[#1a160e] border border-gold-500/30 shadow-sm space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-600 dark:text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[24px]">location_on</span>
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-stone-400 dark:text-[#8a7e6b] block text-[11px] font-bold mb-1">
                وجهة التسليم والعنوان المسجل:
              </span>
              <p className="font-extrabold text-base sm:text-lg text-stone-900 dark:text-stone-100 leading-snug break-words">
                {shipment.destination}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2.5 border-t border-[#ebe4d5] dark:border-[#2c2417] text-xs">
            <div className="flex items-center gap-2 text-stone-700 dark:text-[#c4b8a4]">
              <span className="material-symbols-outlined text-[18px] text-gold-500">perm_phone_msg</span>
              <span className="text-stone-500 dark:text-[#8a7e6b]">هاتف الاستلام الأساسي:</span>
              <span className="font-mono font-bold text-stone-900 dark:text-stone-100" dir="ltr">
                {shipment.recipientPhoneMasked}
              </span>
            </div>

            {onOpenLiveMap && (
              <button
                type="button"
                onClick={onOpenLiveMap}
                className="text-gold-600 dark:text-gold-400 hover:underline font-bold flex items-center gap-1 ms-auto"
              >
                <span className="material-symbols-outlined text-[16px]">map</span>
                <span>تتبع الخريطة الحية</span>
              </button>
            )}
          </div>
        </div>

        {/* ج. أزرار الإجراءات السريعة للتنقل المباشر */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={scrollToArtworks}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-stone-950 font-bold text-xs sm:text-sm shadow-sm active:scale-[0.98] transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">inventory_2</span>
            <span>عرض الأصناف المطلوبة</span>
            <span className="material-symbols-outlined text-[16px] opacity-70">south</span>
          </button>

          <button
            type="button"
            onClick={scrollToStatus}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#ede6d6] dark:bg-[#251f15] hover:bg-[#e4dcce] dark:hover:bg-[#2e261b] text-stone-900 dark:text-stone-100 font-bold text-xs sm:text-sm border border-[#d6ccb8] dark:border-gold-500/30 shadow-sm active:scale-[0.98] transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px] text-gold-500">local_shipping</span>
            <span>عرض حالة الطلب ومسار التوصيل</span>
            <span className="material-symbols-outlined text-[16px] opacity-70">south</span>
          </button>
        </div>
      </div>
    </section>
  );
};
