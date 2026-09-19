import React from 'react';
import { ArtworkProduct } from '../types';

interface ArtworkModalProps {
  artwork: ArtworkProduct | null;
  onClose: () => void;
}

export const ArtworkModal: React.FC<ArtworkModalProps> = ({ artwork, onClose }) => {
  if (!artwork) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#ffffff] dark:bg-[#18140c] border border-gold-500/40 max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#eee7da] dark:border-[#2b2417] flex items-center justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100">
              {artwork.title}
            </h3>
            <span className="text-xs text-stone-500 dark:text-[#9e927c]">
              معاينة دقة التفاصيل وجودة التصنيع
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 dark:bg-[#2c2417] text-stone-500 hover:text-stone-900 dark:hover:text-gold-400 flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-5">
          {/* Main Image View */}
          <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-stone-950 border border-gold-500/30 relative group shadow-lg flex items-center justify-center">
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-black/75 text-[11px] text-gold-300 font-mono flex items-center gap-1.5 border border-gold-500/30">
              <span className="material-symbols-outlined text-[14px]">photo_camera</span>
              <span>صورة معتمدة من المعمل</span>
            </div>
          </div>

          {/* Specs & Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-[#f7f4ed] dark:bg-[#201a12] border border-[#ebe4d5] dark:border-[#2f2719]">
              <span className="text-stone-400 dark:text-[#7f7461] block text-[10px]">الأبعاد والمقاسات:</span>
              <span className="font-bold text-stone-900 dark:text-stone-100 font-mono mt-0.5 block">
                {artwork.dimensions}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#f7f4ed] dark:bg-[#201a12] border border-[#ebe4d5] dark:border-[#2f2719]">
              <span className="text-stone-400 dark:text-[#7f7461] block text-[10px]">مواصفات البرواز والتنفيذ:</span>
              <span className="font-bold text-stone-900 dark:text-stone-100 mt-0.5 block">
                {artwork.frameType}
              </span>
            </div>
          </div>

          {/* Features Checklist */}
          <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-500/25 space-y-2 text-xs">
            <span className="font-bold text-stone-900 dark:text-gold-300 block text-xs">
              مميزات وجودة التصنيع:
            </span>
            <ul className="space-y-1 text-stone-700 dark:text-[#c7baa4]">
              {artwork.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-gold-500 text-[16px]">check_circle</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price and Guarantee */}
          <div className="flex items-center justify-between pt-2 border-t border-[#eee7da] dark:border-[#2b2417]">
            <div>
              <span className="text-xs text-stone-500 dark:text-[#9e927c] block">سعر القطعة بالطلب:</span>
              <span className="text-2xl font-bold font-mono text-gold-600 dark:text-gold-400">
                {artwork.price.toFixed(2)} <span className="text-xs font-sans">د.أ</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/962772816628?text=${encodeURIComponent('مرحباً، لدي استفسار بخصوص اللوحة: ' + artwork.title)}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                <span>استفسار واتساب</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-stone-950 font-bold text-xs shadow-md transition-all"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
