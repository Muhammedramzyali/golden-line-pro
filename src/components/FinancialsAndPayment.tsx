import React from 'react';
import { ShipmentData } from '../types';

interface FinancialsAndPaymentProps {
  shipment: ShipmentData;
  onOpenCliqModal: () => void;
  onCopy: (text: string, label: string) => void;
}

export const FinancialsAndPayment: React.FC<FinancialsAndPaymentProps> = ({
  shipment,
  onOpenCliqModal,
  onCopy,
}) => {
  const { financial, captain, cliqAlias } = shipment;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 transition-colors duration-300">
      {/* Financial Summary Card (7 Cols) */}
      <div className="lg:col-span-7 rounded-2xl bg-[#ffffff] dark:bg-[#18140c] border border-[#ded5c2] dark:border-[#2f2719] p-5 sm:p-6 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#eee7da] dark:border-[#2b2417]">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gold-500/15 text-gold-600 dark:text-gold-400 flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">payments</span>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100">
                  التفصيل المالي للشحنة
                </h3>
                <p className="text-[11px] text-stone-500 dark:text-[#9e927c]">
                  شفافية تامة لجميع الدفعات والمستحقات
                </p>
              </div>
            </div>
            <span className="font-mono text-xs text-stone-500 dark:text-[#8e826e] bg-[#f4eee2] dark:bg-[#241e15] px-2.5 py-1 rounded">
              #{financial.invoiceNumber}
            </span>
          </div>

          {/* Financial Rows */}
          <div className="space-y-3 mt-4">
            {/* Item Total */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#fbf9f4] dark:bg-[#1f1a12] border border-[#ebe4d5] dark:border-[#2b2316]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-stone-400 text-[18px]">inventory_2</span>
                <span className="text-xs sm:text-sm text-stone-700 dark:text-[#cdc2b0]">
                  إجمالي قيمة اللوحات والتجهيز والبراويز
                </span>
              </div>
              <div className="text-left font-mono font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
                {financial.totalAmount.toFixed(2)}{' '}
                <span className="text-xs font-sans text-stone-500">{financial.currency}</span>
              </div>
            </div>

            {/* Deposit Paid */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <div>
                  <span className="text-xs sm:text-sm font-semibold block">العربون المدفوع مسبقاً</span>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400">
                    معتمد بنكياً بقيد الحوالة #{financial.depositRef}
                  </span>
                </div>
              </div>
              <div className="text-left font-mono font-bold text-sm sm:text-base text-emerald-600 dark:text-emerald-400">
                - {financial.depositPaid.toFixed(2)}{' '}
                <span className="text-xs font-sans">{financial.currency}</span>
              </div>
            </div>

            {/* Remaining Due Highlight (COD) */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-gold-500/20 via-gold-500/10 to-transparent border-2 border-gold-500/40 dark:border-gold-500/50 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-gold-600 dark:text-gold-400 text-[20px]">
                    price_check
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-stone-900 dark:text-gold-300">
                    المبلغ المتبقي المستحق عند الاستلام (COD)
                  </span>
                </div>
                <span className="text-[11px] text-stone-600 dark:text-[#a89d88] block mt-0.5">
                  يُسلّم لكابتن التوصيل عند فحص واستلام الطلب
                </span>
              </div>
              <div className="text-left">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-gold-600 dark:text-gold-400">
                  {financial.remainingDue.toFixed(2)}{' '}
                  <span className="text-sm font-sans font-bold">{financial.currency}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notice */}
        <div className="pt-3 mt-3 border-t border-[#eee7da] dark:border-[#2b2417] flex items-center gap-2 text-xs text-stone-500 dark:text-[#9e927c]">
          <span className="material-symbols-outlined text-[16px] text-emerald-600 dark:text-emerald-400">
            verified_user
          </span>
          <span>يحق للعميل معاينة اللوحات ومطابقتها قبل دفع المبلغ المتبقي للكابتن.</span>
        </div>
      </div>

      {/* Payment Methods & Direct Dispatch Info (5 Cols) */}
      <div className="lg:col-span-5 rounded-2xl bg-[#ffffff] dark:bg-[#18140c] border border-[#ded5c2] dark:border-[#2f2719] p-5 sm:p-6 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 pb-4 border-b border-[#eee7da] dark:border-[#2b2417]">
            <div className="w-9 h-9 rounded-lg bg-gold-500/15 text-gold-600 dark:text-gold-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100">
                طرق الدفع المتاحة مع الكابتن
              </h3>
              <p className="text-[11px] text-stone-500 dark:text-[#9e927c]">
                خيارات سريعة ومريحة عند باب منزلك
              </p>
            </div>
          </div>

          {/* 2 Supported Channels */}
          <div className="space-y-3 mt-4">
            {/* Method 1: Cash */}
            <div className="p-3.5 rounded-xl bg-[#fbf9f4] dark:bg-[#201a12] border border-[#ebe4d5] dark:border-[#2d2518] flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold-500/20 text-gold-600 dark:text-gold-400 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">local_atm</span>
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 block">
                  الدفع نقداً (كاش)
                </span>
                <span className="text-[11px] text-stone-500 dark:text-[#9e927c]">
                  تسليم المبلغ المستحق ({financial.remainingDue.toFixed(2)} د.أ) مباشرة للكابتن
                </span>
              </div>
            </div>

            {/* Method 2: CliQ */}
            <div className="p-3.5 rounded-xl bg-[#fbf9f4] dark:bg-[#201a12] border border-[#ebe4d5] dark:border-[#2d2518] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-gold-500/20 text-gold-600 dark:text-gold-400 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">contactless</span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100">
                      محفظة كليك (CliQ) الفورية
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-gold-500/20 text-gold-700 dark:text-gold-300 font-bold">
                      بدون رسوم
                    </span>
                  </div>
                  <span className="text-[11px] text-stone-500 dark:text-[#9e927c] block truncate">
                    معرف الكابتن: <strong className="font-mono text-stone-800 dark:text-gold-400">{cliqAlias}</strong>
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={() => onCopy(cliqAlias, 'معرف CliQ: ' + cliqAlias)}
                  className="p-1.5 rounded-lg bg-[#ede6d6] dark:bg-[#2c2417] text-stone-700 dark:text-gold-400 hover:bg-[#ded5c2] dark:hover:bg-[#382f1f] text-xs font-semibold"
                  title="نسخ معرف كليك"
                >
                  <span className="material-symbols-outlined text-[16px]">content_copy</span>
                </button>
                <button
                  type="button"
                  onClick={onOpenCliqModal}
                  className="px-2.5 py-1.5 rounded-lg bg-gold-500/15 text-gold-700 dark:text-gold-400 hover:bg-gold-500/25 text-xs font-bold flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px]">qr_code_2</span>
                  <span>عرض QR</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Call to Driver Button */}
        <div className="pt-4 mt-4 border-t border-[#eee7da] dark:border-[#2b2417]">
          <a
            href={`tel:${captain.phone}`}
            className="w-full py-3 px-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-stone-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]"
          >
            <span className="material-symbols-outlined text-[18px]">phone_forwarded</span>
            <span>الاتصال المباشر بكابتن التوصيل ({captain.phone})</span>
          </a>
        </div>
      </div>
    </div>
  );
};
