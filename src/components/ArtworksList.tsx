import React from 'react';
import { ArtworkProduct } from '../types';

interface ArtworksListProps {
  items: ArtworkProduct[];
  onSelectArtwork: (artwork: ArtworkProduct) => void;
}

export const ArtworksList: React.FC<ArtworksListProps> = ({ items, onSelectArtwork }) => {
  return (
    <section id="artworks-section" className="rounded-2xl bg-[#ffffff] dark:bg-[#18140c] border border-[#ded5c2] dark:border-[#2f2719] p-5 sm:p-7 shadow-sm transition-colors duration-300 scroll-mt-24">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-[#eee7da] dark:border-[#2b2417]">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100">
              اللوحات والقطع المصنعة في هذا الطلب
            </h3>
            <span className="px-2.5 py-0.5 rounded-full bg-gold-500/15 text-gold-700 dark:text-gold-400 text-xs font-bold">
              {items.length === 2 ? 'صنفان (٢)' : `${items.length} أصناف`}
            </span>
          </div>
          <p className="text-xs text-stone-500 dark:text-[#9e927c] mt-0.5">
            تفاصيل الأصناف واللوحات المعتمدة في الشحنة
          </p>
        </div>

        <span className="text-xs text-stone-500 dark:text-[#9e927c] flex items-center gap-1">
          <span className="material-symbols-outlined text-gold-500 text-[16px]">verified</span>
          <span>مجهزة بملحقات التعليق الجداري المتينة</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectArtwork(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectArtwork(item);
              }
            }}
            className="rounded-xl p-4 sm:p-5 bg-[#fbf9f4] dark:bg-[#1f1a11] border border-[#ebe4d5] dark:border-[#2c2417] flex items-center justify-between gap-4 hover:border-gold-500/40 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden shrink-0 bg-stone-900 border border-gold-500/30 shadow-md relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-[20px]">zoom_in</span>
                </div>
              </div>

              <div className="flex flex-col min-w-0">
                <h4 className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100 leading-snug truncate group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                  {item.title}
                </h4>
                <div className="inline-flex items-center gap-1.5 mt-2">
                  <span className="material-symbols-outlined text-[16px] text-gold-500">
                    photo_library
                  </span>
                  <span className="text-xs font-medium text-stone-600 dark:text-[#a89d88]">
                    عدد الصور:{' '}
                    <strong className="font-bold text-stone-800 dark:text-stone-200">
                      {item.imageCount} صور
                    </strong>
                  </span>
                </div>
                <span className="text-[11px] text-stone-400 dark:text-[#7d7363] mt-1 line-clamp-1">
                  {item.dimensions} • {item.frameType}
                </span>
              </div>
            </div>

            <div className="text-left shrink-0 font-mono font-bold text-stone-900 dark:text-gold-400 text-lg sm:text-xl">
              {item.price.toFixed(2)}{' '}
              <span className="text-xs font-sans font-normal text-stone-500">د.أ</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
