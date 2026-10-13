import React, { useState } from 'react';
import { SAMPLE_SHIPMENTS } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectShipment: (code: string) => void;
  currentCode: string;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectShipment,
  currentCode,
}) => {
  const [query, setQuery] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanQuery = query.trim().toUpperCase().replace('#', '');
    if (!cleanQuery) return;

    if (SAMPLE_SHIPMENTS[cleanQuery]) {
      onSelectShipment(cleanQuery);
      onClose();
      setErrorMsg('');
    } else {
      setErrorMsg(`لم يتم العثور على شحنة بالرقم (${cleanQuery}). جرب رقم GL-4821 أو GL-3910.`);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#ffffff] dark:bg-[#1c1710] border border-gold-500/40 max-w-md w-full rounded-3xl p-6 shadow-2xl relative text-right">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#eee7da] dark:border-[#2f2719]">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gold-500/20 text-gold-600 dark:text-gold-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
                استعلام وتتبع شحنة
              </h3>
              <p className="text-[11px] text-stone-500 dark:text-[#9e927c]">
                أدخل رقم البوليصة أو اختر شحنة نموذجية
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 dark:bg-[#2c2417] text-stone-500 hover:text-stone-900 dark:hover:text-gold-400 flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mt-4 space-y-3">
          <div>
            <label htmlFor="tracking-input" className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
              رقم الشحنة (Tracking ID)
            </label>
            <div className="relative">
              <input
                id="tracking-input"
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setErrorMsg('');
                }}
                placeholder="مثال: GL-4821 أو GL-3910"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#f7f4ed] dark:bg-[#251f15] border border-[#d6ccb8] dark:border-[#382f1f] text-stone-900 dark:text-stone-100 font-mono text-sm focus:outline-none focus:border-gold-500 transition-colors"
                autoFocus
              />
              <button
                type="submit"
                className="absolute left-1.5 top-1.5 bottom-1.5 px-3 bg-gold-500 hover:bg-gold-400 text-stone-950 rounded-lg text-xs font-bold transition-colors flex items-center gap-1"
              >
                <span>بحث</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
            {errorMsg && (
              <p className="text-rose-500 text-xs mt-1.5">{errorMsg}</p>
            )}
          </div>
        </form>

        {/* Quick Sample Shipments */}
        <div className="mt-5 pt-4 border-t border-[#eee7da] dark:border-[#2f2719]">
          <span className="text-xs font-semibold text-stone-500 dark:text-[#9e927c] block mb-2">
            شحنات نموذجية متوفرة للمعاينة:
          </span>

          <div className="space-y-2">
            {Object.values(SAMPLE_SHIPMENTS).map((s) => {
              const isSelected = s.trackingCode === currentCode;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    onSelectShipment(s.trackingCode);
                    onClose();
                  }}
                  className={`w-full p-3 rounded-xl border text-right flex items-center justify-between transition-all ${
                    isSelected
                      ? 'bg-gold-500/15 border-gold-500/50 text-gold-700 dark:text-gold-300'
                      : 'bg-[#fbf9f4] dark:bg-[#201a12] border-[#ebe4d5] dark:border-[#2d2518] hover:border-gold-500/30'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-xs sm:text-sm">
                        #{s.trackingCode}
                      </span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                          s.status === 'out_for_delivery'
                            ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                            : 'bg-gold-500/20 text-gold-700 dark:text-gold-400'
                        }`}
                      >
                        {s.statusLabel}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 dark:text-[#a89d88] truncate max-w-xs">
                      {s.destination}
                    </p>
                  </div>

                  <div className="shrink-0 text-left font-mono text-xs font-bold text-stone-700 dark:text-[#c5baa5]">
                    {s.financial.totalAmount.toFixed(2)} د.أ
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
