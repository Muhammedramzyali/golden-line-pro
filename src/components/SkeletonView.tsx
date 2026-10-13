import React from 'react';

interface SkeletonViewProps {
  onBack: () => void;
}

export const SkeletonView: React.FC<SkeletonViewProps> = ({ onBack }) => {
  return (
    <div id="skeleton-loader-state" className="flex flex-col gap-6 animate-pulse py-4">
      {/* Notice header */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-gold-500/10 border border-gold-500/30 text-xs">
        <div className="flex items-center gap-2 text-stone-700 dark:text-gold-300">
          <span className="material-symbols-outlined text-[18px] text-gold-500">hourglass_top</span>
          <span className="font-semibold">
            أنت الآن تشاهد شاشة التحميل الهيكلية (Skeleton State) التفاعلية
          </span>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="px-3 py-1 bg-gold-500 hover:bg-gold-400 text-stone-950 rounded-lg font-bold text-xs shadow-sm transition-all"
        >
          العودة للتتبع الحقيقي
        </button>
      </div>

      {/* Hero Card Skeleton */}
      <div className="h-52 bg-[#e8e0d0] dark:bg-[#201a12] border border-[#ded5c2] dark:border-[#2f2719] rounded-2xl w-full p-6 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="w-24 h-7 bg-stone-300 dark:bg-[#2e2619] rounded-lg" />
            <div className="w-20 h-7 bg-stone-300 dark:bg-[#2e2619] rounded-lg" />
            <div className="w-36 h-7 bg-stone-300 dark:bg-[#2e2619] rounded-full" />
          </div>
          <div className="w-48 h-14 bg-stone-300 dark:bg-[#2e2619] rounded-xl hidden sm:block" />
        </div>
        <div className="space-y-2">
          <div className="w-64 h-8 bg-stone-300 dark:bg-[#2e2619] rounded-md" />
          <div className="w-full max-w-xl h-4 bg-stone-300 dark:bg-[#2e2619] rounded-md" />
        </div>
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-300/50 dark:border-stone-800">
          <div className="h-5 bg-stone-300 dark:bg-[#2e2619] rounded" />
          <div className="h-5 bg-stone-300 dark:bg-[#2e2619] rounded" />
          <div className="h-5 bg-stone-300 dark:bg-[#2e2619] rounded" />
        </div>
      </div>

      {/* Stepper Skeleton */}
      <div className="h-44 bg-[#e8e0d0] dark:bg-[#201a12] border border-[#ded5c2] dark:border-[#2f2719] rounded-2xl w-full p-6 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div className="w-48 h-6 bg-stone-300 dark:bg-[#2e2619] rounded" />
          <div className="w-24 h-6 bg-stone-300 dark:bg-[#2e2619] rounded" />
        </div>
        <div className="flex justify-between items-center px-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-11 h-11 rounded-full bg-stone-300 dark:bg-[#2e2619]" />
              <div className="w-16 h-3 bg-stone-300 dark:bg-[#2e2619] rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Financials & Payment Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 h-64 bg-[#e8e0d0] dark:bg-[#201a12] border border-[#ded5c2] dark:border-[#2f2719] rounded-2xl p-5 space-y-4">
          <div className="w-44 h-6 bg-stone-300 dark:bg-[#2e2619] rounded" />
          <div className="h-12 bg-stone-300 dark:bg-[#2e2619] rounded-xl" />
          <div className="h-12 bg-stone-300 dark:bg-[#2e2619] rounded-xl" />
          <div className="h-14 bg-stone-300 dark:bg-[#2e2619] rounded-xl" />
        </div>
        <div className="lg:col-span-5 h-64 bg-[#e8e0d0] dark:bg-[#201a12] border border-[#ded5c2] dark:border-[#2f2719] rounded-2xl p-5 space-y-4">
          <div className="w-44 h-6 bg-stone-300 dark:bg-[#2e2619] rounded" />
          <div className="h-12 bg-stone-300 dark:bg-[#2e2619] rounded-xl" />
          <div className="h-12 bg-stone-300 dark:bg-[#2e2619] rounded-xl" />
          <div className="h-10 bg-stone-300 dark:bg-[#2e2619] rounded-xl" />
        </div>
      </div>

      {/* Artworks Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-32 bg-[#e8e0d0] dark:bg-[#201a12] border border-[#ded5c2] dark:border-[#2f2719] rounded-2xl p-4 flex gap-4">
          <div className="w-24 h-24 bg-stone-300 dark:bg-[#2e2619] rounded-lg shrink-0" />
          <div className="flex-1 space-y-2.5">
            <div className="h-5 bg-stone-300 dark:bg-[#2e2619] rounded w-3/4" />
            <div className="h-4 bg-stone-300 dark:bg-[#2e2619] rounded w-1/2" />
            <div className="h-4 bg-stone-300 dark:bg-[#2e2619] rounded w-1/3" />
          </div>
        </div>
        <div className="h-32 bg-[#e8e0d0] dark:bg-[#201a12] border border-[#ded5c2] dark:border-[#2f2719] rounded-2xl p-4 flex gap-4">
          <div className="w-24 h-24 bg-stone-300 dark:bg-[#2e2619] rounded-lg shrink-0" />
          <div className="flex-1 space-y-2.5">
            <div className="h-5 bg-stone-300 dark:bg-[#2e2619] rounded w-3/4" />
            <div className="h-4 bg-stone-300 dark:bg-[#2e2619] rounded w-1/2" />
            <div className="h-4 bg-stone-300 dark:bg-[#2e2619] rounded w-1/3" />
          </div>
        </div>
      </div>

      <div className="text-center py-6">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-3 bg-gold-500 text-stone-950 font-bold text-sm rounded-xl shadow-lg hover:bg-gold-400 transition-all active:scale-95"
        >
          العودة لشاشة التتبع الحقيقية
        </button>
      </div>
    </div>
  );
};
