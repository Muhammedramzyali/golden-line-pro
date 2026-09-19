import React from 'react';

interface CliqModalProps {
  isOpen: boolean;
  onClose: () => void;
  alias: string;
  amount: number;
  currency: string;
  onCopy: (text: string, label: string) => void;
}

export const CliqModal: React.FC<CliqModalProps> = ({
  isOpen,
  onClose,
  alias,
  amount,
  currency,
  onCopy,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#ffffff] dark:bg-[#1c1710] border border-gold-500/40 max-w-md w-full rounded-3xl p-6 sm:p-7 shadow-2xl relative text-center">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 left-4 w-8 h-8 rounded-full bg-stone-100 dark:bg-[#2c2417] text-stone-500 hover:text-stone-900 dark:hover:text-gold-400 flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        <div className="w-14 h-14 rounded-2xl bg-gold-500/20 text-gold-600 dark:text-gold-400 flex items-center justify-center mx-auto mb-3">
          <span className="material-symbols-outlined text-[32px]">contactless</span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gold-500/15 text-gold-700 dark:text-gold-400 text-xs font-bold mb-1">
          <span>دفع فوري عبر نظام CliQ الأردني</span>
        </div>

        <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
          تحويل فوري بدون عمولات للكابتن
        </h3>
        <p className="text-xs text-stone-500 dark:text-[#a89d88] mt-1">
          امسح الرمز أو انسخ معرف كليك (Alias) وسدّد المبلغ المستحق مباشرة
        </p>

        {/* QR Code Container */}
        <div className="my-5 p-4 rounded-2xl bg-[#ffffff] border-2 border-gold-500/40 shadow-inner inline-block mx-auto">
          {/* Authentic-styled simulated QR code SVG with CliQ logo in center */}
          <svg className="w-48 h-48 mx-auto" viewBox="0 0 200 200">
            {/* Background */}
            <rect width="200" height="200" fill="#ffffff" />
            {/* QR Position Squares Top-Left */}
            <rect x="10" y="10" width="50" height="50" fill="#110e08" rx="6" />
            <rect x="20" y="20" width="30" height="30" fill="#ffffff" rx="4" />
            <rect x="26" y="26" width="18" height="18" fill="#d4af37" rx="3" />
            {/* QR Position Squares Top-Right */}
            <rect x="140" y="10" width="50" height="50" fill="#110e08" rx="6" />
            <rect x="150" y="20" width="30" height="30" fill="#ffffff" rx="4" />
            <rect x="156" y="26" width="18" height="18" fill="#d4af37" rx="3" />
            {/* QR Position Squares Bottom-Left */}
            <rect x="10" y="140" width="50" height="50" fill="#110e08" rx="6" />
            <rect x="20" y="150" width="30" height="30" fill="#ffffff" rx="4" />
            <rect x="26" y="156" width="18" height="18" fill="#d4af37" rx="3" />
            {/* Decorative pattern blocks */}
            <rect x="70" y="15" width="12" height="12" fill="#110e08" />
            <rect x="90" y="25" width="15" height="15" fill="#d4af37" />
            <rect x="115" y="15" width="15" height="15" fill="#110e08" />
            <rect x="70" y="45" width="20" height="15" fill="#110e08" />
            <rect x="100" y="45" width="25" height="15" fill="#110e08" />
            {/* Middle decorative dots */}
            <rect x="15" y="70" width="15" height="15" fill="#110e08" />
            <rect x="40" y="70" width="20" height="20" fill="#d4af37" />
            <rect x="145" y="70" width="20" height="20" fill="#110e08" />
            <rect x="175" y="75" width="12" height="15" fill="#110e08" />
            {/* Center CliQ Badge */}
            <rect x="75" y="75" width="50" height="50" rx="12" fill="#18140c" />
            <text x="100" y="105" fill="#f2ca50" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              CliQ
            </text>
            {/* Lower pattern blocks */}
            <rect x="70" y="135" width="15" height="15" fill="#110e08" />
            <rect x="95" y="145" width="20" height="15" fill="#d4af37" />
            <rect x="125" y="135" width="15" height="15" fill="#110e08" />
            <rect x="150" y="145" width="15" height="20" fill="#110e08" />
            <rect x="175" y="135" width="15" height="15" fill="#d4af37" />
            <rect x="70" y="170" width="25" height="15" fill="#110e08" />
            <rect x="105" y="170" width="35" height="15" fill="#110e08" />
            <rect x="150" y="175" width="30" height="12" fill="#d4af37" />
          </svg>
          <span className="text-[11px] font-bold text-stone-600 block mt-1">
            Golden Line Logistics | CliQ Pay
          </span>
        </div>

        {/* Alias and Amount Details */}
        <div className="space-y-2.5 text-xs text-right">
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#f7f4ed] dark:bg-[#251f15] border border-[#ebe4d5] dark:border-[#382f1f]">
            <div>
              <span className="text-stone-400 dark:text-[#7f7461] block text-[10px]">
                معرف كليك (Alias):
              </span>
              <span className="font-mono font-bold text-stone-900 dark:text-gold-400 text-sm">
                {alias}
              </span>
            </div>
            <button
              type="button"
              onClick={() => onCopy(alias, 'معرف CliQ: ' + alias)}
              className="px-3 py-1.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-stone-950 font-bold flex items-center gap-1 transition-all"
            >
              <span className="material-symbols-outlined text-[15px]">content_copy</span>
              <span>نسخ المعرف</span>
            </button>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-[#f7f4ed] dark:bg-[#251f15] border border-[#ebe4d5] dark:border-[#382f1f]">
            <div>
              <span className="text-stone-400 dark:text-[#7f7461] block text-[10px]">
                المبلغ المطلوب تحويله:
              </span>
              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-base">
                {amount.toFixed(2)} {currency}
              </span>
            </div>
            <button
              type="button"
              onClick={() => onCopy(amount.toFixed(2), 'المبلغ: ' + amount.toFixed(2))}
              className="px-3 py-1.5 rounded-lg bg-[#eee6d6] dark:bg-[#342b1d] text-stone-800 dark:text-gold-400 font-bold flex items-center gap-1 hover:bg-[#ded5c2] transition-all"
            >
              <span className="material-symbols-outlined text-[15px]">content_copy</span>
              <span>نسخ المبلغ</span>
            </button>
          </div>
        </div>

        {/* Steps Guide */}
        <div className="mt-4 pt-3 border-t border-[#eee7da] dark:border-[#2f2719] text-[11px] text-stone-500 dark:text-[#a89d88] text-right space-y-1">
          <p>١. افتح تطبيق بنكك الأردني واختر خدمة كليك (CliQ).</p>
          <p>٢. الصق المعرف <strong className="font-mono text-gold-600 dark:text-gold-400">{alias}</strong> وحدد المبلغ.</p>
          <p>٣. أظهر إشعار التحويل الناجح لكابتن التوصيل عند استلام اللوحات.</p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-full mt-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-stone-950 font-bold text-xs shadow-md transition-all active:scale-95"
        >
          تم، إغلاق
        </button>
      </div>
    </div>
  );
};
