import React from 'react';
import { ShipmentData } from '../types';

interface OrderLogsProps {
  shipment: ShipmentData;
}

export const OrderLogs: React.FC<OrderLogsProps> = ({ shipment }) => {
  return (
    <section id="order-logs-section" className="rounded-2xl bg-[#ffffff] dark:bg-[#18140c] border border-[#ded5c2] dark:border-[#2f2719] p-5 sm:p-7 shadow-sm transition-colors duration-300 scroll-mt-24">
      <div className="flex items-center justify-between pb-4 border-b border-[#eee7da] dark:border-[#2b2417]">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-gold-500 text-[20px]">history</span>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100">
            سجل التحديثات والحركات المسجلة للطلب
          </h3>
        </div>
        <span className="text-[11px] text-stone-500 dark:text-[#9e927c]">
          سجل حي وموثق
        </span>
      </div>

      <div className="space-y-2.5 mt-4">
        {shipment.logs.map((log) => (
          <div
            key={log.id}
            className={`p-3 rounded-xl border flex items-start gap-3 text-xs transition-colors ${
              log.active
                ? 'bg-[#f7f4ed] dark:bg-[#1f1a11] border-[#ebe4d5] dark:border-[#2f2719]'
                : 'bg-[#f7f4ed]/50 dark:bg-[#1f1a11]/50 border-transparent dark:border-transparent opacity-75'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                log.active ? 'bg-gold-500' : 'bg-stone-400'
              }`}
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span
                  className={`font-bold ${
                    log.active ? 'text-stone-900 dark:text-stone-100' : 'text-stone-800 dark:text-stone-200'
                  }`}
                >
                  {log.title}
                </span>
                <span className="text-[11px] font-mono text-gold-600 dark:text-gold-400">
                  {log.time}
                </span>
              </div>
              {log.description && (
                <p className="text-stone-600 dark:text-[#a89d88] mt-0.5 leading-relaxed">
                  {log.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
