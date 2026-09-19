import React, { useState, useEffect } from 'react';
import { ShipmentData } from '../types';

interface LiveMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  shipment: ShipmentData;
}

export const LiveMapModal: React.FC<LiveMapModalProps> = ({ isOpen, onClose, shipment }) => {
  const [progress, setProgress] = useState(68);
  const [speed, setSpeed] = useState(54);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return 60;
        return Number((prev + 0.5).toFixed(1));
      });
      setSpeed((prev) => Math.floor(50 + Math.random() * 12));
    }, 1200);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  // Remaining distance calculation based on progress
  const totalKm = 24.5;
  const remainingKm = Math.max(0.5, ((100 - progress) / 100) * totalKm).toFixed(1);
  const etaMinutes = Math.max(2, Math.round((Number(remainingKm) / speed) * 60));

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#ffffff] dark:bg-[#18140c] border-2 border-gold-500/40 max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl flex flex-col relative">
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-[#eee7da] dark:border-[#2f2719] flex items-center justify-between bg-[#fbf9f4] dark:bg-[#1f1a12]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-600 dark:text-gold-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">satellite_alt</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100">
                  خريطة التتبع المباشر للشحنة
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  GPS نشط
                </span>
              </div>
              <p className="text-xs text-stone-500 dark:text-[#a89d88]">
                متابعة حركة كابتن التوصيل ({shipment.captain.name}) في الوقت الفعلي
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-stone-200 dark:bg-[#2c2417] text-stone-600 hover:text-stone-950 dark:text-stone-400 dark:hover:text-gold-400 flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Simulated Map Canvas */}
        <div className="relative h-72 sm:h-80 bg-[#12100a] overflow-hidden select-none">
          {/* Subtle Map Grid Lines */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Map Geographic Contours / Stylized Roads */}
          <svg className="w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="none">
            {/* Secondary road network */}
            <path d="M 0 100 Q 150 120 300 90 T 600 120" stroke="#332a1b" strokeWidth="3" fill="none" />
            <path d="M 120 0 Q 200 150 250 300" stroke="#332a1b" strokeWidth="2" fill="none" />
            <path d="M 450 0 Q 400 150 500 300" stroke="#332a1b" strokeWidth="2" fill="none" />

            {/* Highway Route (Amman to Madaba) */}
            <path
              id="delivery-route"
              d="M 60 220 C 180 210, 260 140, 360 120 S 480 80, 540 80"
              stroke="#433c2e"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
            {/* Active Traveled Path in Gold */}
            <path
              d="M 60 220 C 180 210, 260 140, 360 120 S 480 80, 540 80"
              stroke="#d4af37"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="600"
              strokeDashoffset={600 - (600 * progress) / 100}
              fill="none"
              className="transition-all duration-700 ease-out"
            />
          </svg>

          {/* Start Point (Golden Line Factory / Amman) */}
          <div className="absolute bottom-12 left-10 sm:left-14 flex flex-col items-center">
            <div className="w-7 h-7 rounded-full bg-stone-900 border-2 border-gold-500 flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-gold-400 text-[14px]">factory</span>
            </div>
            <span className="mt-1 px-2 py-0.5 rounded bg-black/80 text-[10px] font-bold text-stone-300 border border-gold-500/30">
              معمل جولدن لاين
            </span>
          </div>

          {/* End Point (Destination / Madaba) */}
          <div className="absolute top-10 right-10 sm:right-16 flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center shadow-xl animate-bounce">
              <span className="material-symbols-outlined text-white text-[16px]">location_on</span>
            </div>
            <span className="mt-1 px-2 py-0.5 rounded bg-black/80 text-[10px] font-bold text-emerald-400 border border-emerald-500/40">
              وجهة التسليم (مادبا)
            </span>
          </div>

          {/* Animated Delivery Captain Marker */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out z-20 flex flex-col items-center"
            style={{
              left: `${15 + (progress * 0.72)}%`,
              top: `${68 - (progress * 0.44)}%`,
            }}
          >
            {/* Pulse Wave */}
            <div className="absolute w-12 h-12 rounded-full bg-gold-400/30 animate-ping pointer-events-none" />

            {/* Vehicle Icon */}
            <div className="w-10 h-10 rounded-full bg-gold-400 text-stone-950 flex items-center justify-center shadow-2xl ring-4 ring-gold-400/40 relative z-10">
              <span className="material-symbols-outlined text-[20px]">local_shipping</span>
            </div>

            {/* Driver Badge */}
            <div className="mt-1.5 px-2.5 py-1 rounded-lg bg-stone-950/90 border border-gold-500/50 text-[10px] font-bold text-gold-300 flex items-center gap-1 shadow-lg whitespace-nowrap">
              <span>{shipment.captain.name}</span>
              <span className="text-stone-400 font-mono">({speed} كم/س)</span>
            </div>
          </div>
        </div>

        {/* Live Trip Telemetry Bar */}
        <div className="p-4 sm:p-5 bg-[#ffffff] dark:bg-[#18140c] space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-2.5 rounded-xl bg-[#f7f4ed] dark:bg-[#201a12] border border-[#ebe4d5] dark:border-[#2f2719]">
              <span className="text-[10px] text-stone-500 dark:text-[#8e826e] block font-semibold">
                المسافة المتبقية
              </span>
              <span className="text-base font-bold font-mono text-stone-900 dark:text-gold-400">
                {remainingKm} كم
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-[#f7f4ed] dark:bg-[#201a12] border border-[#ebe4d5] dark:border-[#2f2719]">
              <span className="text-[10px] text-stone-500 dark:text-[#8e826e] block font-semibold">
                الوقت التقديري
              </span>
              <span className="text-base font-bold font-mono text-emerald-600 dark:text-emerald-400">
                {etaMinutes} دقيقة
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-[#f7f4ed] dark:bg-[#201a12] border border-[#ebe4d5] dark:border-[#2f2719]">
              <span className="text-[10px] text-stone-500 dark:text-[#8e826e] block font-semibold">
                سرعة المركبة
              </span>
              <span className="text-base font-bold font-mono text-stone-900 dark:text-gold-400">
                {speed} كم/س
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-[#f7f4ed] dark:bg-[#201a12] border border-[#ebe4d5] dark:border-[#2f2719]">
              <span className="text-[10px] text-stone-500 dark:text-[#8e826e] block font-semibold">
                حالة المسار
              </span>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-1 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                سير انسيابي
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-[#a89d88] text-right">
              <span className="material-symbols-outlined text-[18px] text-gold-500">pin_drop</span>
              <span>
                الوجهة: <strong className="text-stone-800 dark:text-stone-200">{shipment.destination}</strong>
              </span>
            </div>

            <a
              href={`tel:${shipment.captain.phone}`}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 shrink-0"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>الاتصال بالكابتن الآن ({shipment.captain.phone})</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
