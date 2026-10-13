import React from 'react';
import { ShipmentData } from '../types';

interface TimelineStepperProps {
  shipment: ShipmentData;
}

export const TimelineStepper: React.FC<TimelineStepperProps> = ({ shipment }) => {
  // Calculate track progress
  const completedCount = shipment.stages.filter((s) => s.completed).length;
  const currentStage = shipment.stages.find((s) => s.current);
  const progressPercent = Math.min(
    100,
    Math.max(10, ((completedCount + (currentStage ? 0.6 : 0)) / (shipment.stages.length - 1)) * 100)
  );

  return (
    <section id="timeline-section" className="rounded-2xl bg-[#ffffff] dark:bg-[#18140c] border border-[#ded5c2] dark:border-[#2f2719] p-5 sm:p-7 shadow-sm transition-colors duration-300 scroll-mt-24">
      <div className="flex items-center justify-between pb-5 border-b border-[#eee7da] dark:border-[#2b2417]">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
            <span className="material-symbols-outlined text-gold-500 text-[20px]">alt_route</span>
            <span>مسار مراحل الشحنة خطوة بخطوة</span>
          </h3>
          <p className="text-xs text-stone-500 dark:text-[#9e927c] mt-0.5">
            متابعة دقيقة لمراحل الإنتاج والتجهيز حتى استلامك للطلب
          </p>
        </div>
        <span className="text-[11px] px-2.5 py-1 rounded-md bg-gold-500/10 text-gold-700 dark:text-gold-400 font-semibold border border-gold-500/20">
          المرحلة {shipment.currentStageNumber} من {shipment.totalStages}
        </span>
      </div>

      {/* Steps Timeline */}
      <div className="pt-8 pb-4 px-2 sm:px-4">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-y-6 gap-x-2 relative">
          {shipment.stages.map((stage) => {
            if (stage.completed) {
              return (
                <div key={stage.id} className="flex flex-col items-center text-center relative z-10">
                  <div className="w-11 h-11 rounded-full bg-gold-500 text-stone-950 flex items-center justify-center font-bold shadow-md ring-4 ring-gold-500/20">
                    <span className="material-symbols-outlined text-[22px]">{stage.icon}</span>
                  </div>
                  <span className="text-xs font-bold text-stone-900 dark:text-stone-100 mt-2.5">
                    {stage.title}
                  </span>
                  <span className="text-[10px] text-stone-500 dark:text-[#8e826e] mt-0.5">
                    {stage.time}
                  </span>
                </div>
              );
            }

            if (stage.current) {
              return (
                <div key={stage.id} className="flex flex-col items-center text-center relative z-10">
                  <div className="w-12 h-12 -mt-0.5 rounded-full bg-gold-400 text-stone-950 flex items-center justify-center font-bold shadow-xl ring-4 ring-gold-400/40 animate-pulse">
                    <span className="material-symbols-outlined text-[26px]">{stage.icon}</span>
                  </div>
                  <span className="text-xs font-bold text-gold-600 dark:text-gold-400 mt-2">
                    {stage.title}
                  </span>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">
                    {stage.time}
                  </span>
                </div>
              );
            }

            // Upcoming
            return (
              <div key={stage.id} className="flex flex-col items-center text-center relative z-10 opacity-40">
                <div className="w-11 h-11 rounded-full bg-stone-300 dark:bg-[#2b2418] text-stone-600 dark:text-stone-400 flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[22px]">{stage.icon}</span>
                </div>
                <span className="text-xs font-medium text-stone-600 dark:text-stone-400 mt-2.5">
                  {stage.title}
                </span>
                <span className="text-[10px] text-stone-500 mt-0.5">{stage.time}</span>
              </div>
            );
          })}

          {/* Desktop Connector Track */}
          <div className="hidden sm:block absolute top-5 left-10 right-10 h-1 bg-stone-200 dark:bg-[#2e2619] -z-0">
            <div
              className="h-full bg-gold-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
