export type OrderStatus = 'out_for_delivery' | 'delivered' | 'in_production' | 'design_review';

export interface TimelineStage {
  id: number;
  title: string;
  time: string;
  completed: boolean;
  current: boolean;
  icon: string;
}

export interface ActivityLog {
  id: string;
  title: string;
  time: string;
  description?: string;
  active?: boolean;
}

export interface ArtworkProduct {
  id: string;
  title: string;
  imageUrl: string;
  imageCount: number;
  price: number;
  dimensions: string;
  frameType: string;
  features: string[];
}

export interface ShipmentData {
  id: string;
  trackingCode: string;
  status: OrderStatus;
  statusLabel: string;
  heroTitle: string;
  heroDescription: string;
  estimatedDeliveryTime: string;
  isRouteActive: boolean;
  destination: string;
  recipientPhoneMasked: string;
  captain: {
    name: string;
    phone: string;
    avatarUrl?: string;
    vehicleType: string;
    rating: number;
  };
  currentStageNumber: number;
  totalStages: number;
  stages: TimelineStage[];
  logs: ActivityLog[];
  financial: {
    invoiceNumber: string;
    totalAmount: number;
    depositPaid: number;
    depositRef: string;
    remainingDue: number;
    currency: string;
  };
  cliqAlias: string;
  items: ArtworkProduct[];
}

export const SAMPLE_SHIPMENTS: Record<string, ShipmentData> = {
  'GL-4821': {
    id: 'GL-4821',
    trackingCode: 'GL-4821',
    status: 'out_for_delivery',
    statusLabel: 'قيد التوصيل الآن مع الكابتن',
    heroTitle: 'شحنتك في طريقها إليك الآن',
    heroDescription: 'تم تجهيز وتغليف اللوحات بأعلى معايير الحماية والجودة الفاخرة، وهي الآن بعهدة كابتن التوصيل للتسليم اليوم.',
    estimatedDeliveryTime: 'اليوم بين 01:30 م - 03:30 م',
    isRouteActive: true,
    destination: 'محافظة مادبا - قرب الدفاع المدني الرئيسي',
    recipientPhoneMasked: '077****628 (موثق)',
    captain: {
      name: 'محمد العبادي',
      phone: '0791234567',
      vehicleType: 'مركبة شحن مجهزة ومكيفة',
      rating: 4.9,
    },
    currentStageNumber: 4,
    totalStages: 5,
    stages: [
      {
        id: 1,
        title: 'تم استلام الطلب',
        time: 'بالأمس 02:00 م',
        completed: true,
        current: false,
        icon: 'check',
      },
      {
        id: 2,
        title: 'التصميم واعتماد البروفا',
        time: 'بالأمس 04:30 م',
        completed: true,
        current: false,
        icon: 'brush',
      },
      {
        id: 3,
        title: 'الطباعة ومطابقة الألوان',
        time: 'اليوم 09:15 ص',
        completed: true,
        current: false,
        icon: 'print',
      },
      {
        id: 4,
        title: 'قيد التوصيل مع الكابتن',
        time: 'في طريقها إليك الآن',
        completed: false,
        current: true,
        icon: 'local_shipping',
      },
      {
        id: 5,
        title: 'تم التسليم',
        time: 'الوجهة: مادبا',
        completed: false,
        current: false,
        icon: 'home_pin',
      },
    ],
    logs: [
      {
        id: 'log-1',
        title: 'الشحنة خرجت مع كابتن التوصيل (محمد العبادي)',
        time: 'اليوم 11:30 ص',
        description: 'انطلقت الشحنة بحفظ الله من معمل جولدن لاين متجهة إلى محافظة مادبا للتسليم اليوم.',
        active: true,
      },
      {
        id: 'log-2',
        title: 'اكتمال الطباعة وتثبيت الإطار الميرور وتغليف الأمان',
        time: 'اليوم 09:15 ص',
        description: 'تم فحص جودة خامات الأكريليك الذهبي والكانفاس ومطابقة كود الألوان بدقة.',
        active: false,
      },
      {
        id: 'log-3',
        title: 'اعتماد العميل النهائي لمخطط اللوحات الجدارية (بروفا رقم 2)',
        time: 'بالأمس 04:30 م',
        description: 'تأكيد المقاسات وتوزيع الآيات وتناسق الأبعاد مع جدار الصالة.',
        active: false,
      },
    ],
    financial: {
      invoiceNumber: 'INV-4821',
      totalAmount: 28.00,
      depositPaid: 10.00,
      depositRef: 'CK-9941',
      remainingDue: 18.00,
      currency: 'د.أ',
    },
    cliqAlias: 'GOLDENLINE',
    items: [
      {
        id: 'art-1',
        title: 'لوحة معوذات ذهبي ميرور (٣ قطع متصلة)',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOz3QfEB2xyyY-ViRm6nr0JwLMRIyFI-LAS8khGQVaFx5CRyvlNNnNL44TLRg4E5sM5bRz2arBm3aRasUgbcRO0q4YEK_bWpLkRlfbtRb_eBhYxVGRqKJN0S09arcWL5n24BRmRUBPQBT2zIzTIbPDxTPr5o0cGVr4JEanglOEGW7usTFJC5-fWMfa2DtZP9WwqglASjCL-6raCvHLAaXnD0-UIm55bsTMWaI2IKdsjYIIKhA0MDKs',
        imageCount: 3,
        price: 16.00,
        dimensions: '120 × 60 سم (٣ قطع)',
        frameType: 'أكريليك ميرور عاكس ذهبي فاخر سماكة 3 ملم',
        features: ['إطار ألومنيوم مخفي متين', 'مقاوم للرطوبة وتغير الألوان', 'تثبيت مخفي مع ميزان ماء مرفق'],
      },
      {
        id: 'art-2',
        title: 'سيت تجريدي كلاسيك أخضر بترولي مودرن',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJXYvkMLRwRnYJDlBPlJLGSaYa6dz-zq6voPtUT8Opl5-jTR8mMjIM_MtKEpaw9sI_eq-_vcu6VTcHi1nw3GT3TWJ_ieVFpmPeYRub_JbZ7vqd-cGNabYN0xny1g5f8FpT8vJrq_bHaIXmDiPAxNEzqR2AYXpVq1FzNHcaSH5zUigWPcPT-9tNIChBtHF7Ckszwtsr3nNYHmq-v8QWVNz8FCcI-VSAijexdYy_kwB6TXpiCm06Qmrl',
        imageCount: 3,
        price: 12.00,
        dimensions: '90 × 45 سم',
        frameType: 'كانفاس قطني 100% مشدود على خشب سويدي مع برواز خارجي',
        features: ['طباعة أصلية بألوان تدوم 15 سنة', 'ملحقات تعليق متينة', 'تغليف آمن متعدد الطبقات ضد الصدمات'],
      },
    ],
  },
  'GL-3910': {
    id: 'GL-3910',
    trackingCode: 'GL-3910',
    status: 'delivered',
    statusLabel: 'تم التسليم بنجاح للعميل',
    heroTitle: 'تم تسليم شحنتك بنجاح',
    heroDescription: 'تم استلام الشحنة وتوقيع إيصال الاستلام ومعاينة اللوحات بنجاح في الموقع المحدد.',
    estimatedDeliveryTime: 'تم التسليم اليوم 11:15 ص',
    isRouteActive: false,
    destination: 'عمان - دابوق - قرب مدرسة البكالوريا',
    recipientPhoneMasked: '079****112 (موثق)',
    captain: {
      name: 'طارق الكردي',
      phone: '0798884321',
      vehicleType: 'مركبة توزيع خاصة',
      rating: 5.0,
    },
    currentStageNumber: 5,
    totalStages: 5,
    stages: [
      { id: 1, title: 'تم استلام الطلب', time: '17 سبتمبر 10:00 ص', completed: true, current: false, icon: 'check' },
      { id: 2, title: 'التصميم واعتماد البروفا', time: '17 سبتمبر 01:20 م', completed: true, current: false, icon: 'brush' },
      { id: 3, title: 'الطباعة ومطابقة الألوان', time: '18 سبتمبر 11:00 ص', completed: true, current: false, icon: 'print' },
      { id: 4, title: 'التسليم للكابتن', time: '19 سبتمبر 09:30 ص', completed: true, current: false, icon: 'local_shipping' },
      { id: 5, title: 'تم التسليم بنجاح', time: 'اليوم 11:15 ص', completed: true, current: true, icon: 'verified' },
    ],
    logs: [
      {
        id: 'log-3910-1',
        title: 'تم استلام الطلب من قبل العميل بنجاح وسداد الرصيد كاملاً',
        time: 'اليوم 11:15 ص',
        description: 'تم فحص اللوحة واستلام المبلغ نقداً بنجاح.',
        active: true,
      },
    ],
    financial: {
      invoiceNumber: 'INV-3910',
      totalAmount: 35.00,
      depositPaid: 15.00,
      depositRef: 'CK-8812',
      remainingDue: 0.00,
      currency: 'د.أ',
    },
    cliqAlias: 'GOLDENLINE',
    items: [
      {
        id: 'art-3',
        title: 'لوحة آية الكرسي ديواني ذهبي على خلفية رخامية سوداء',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOz3QfEB2xyyY-ViRm6nr0JwLMRIyFI-LAS8khGQVaFx5CRyvlNNnNL44TLRg4E5sM5bRz2arBm3aRasUgbcRO0q4YEK_bWpLkRlfbtRb_eBhYxVGRqKJN0S09arcWL5n24BRmRUBPQBT2zIzTIbPDxTPr5o0cGVr4JEanglOEGW7usTFJC5-fWMfa2DtZP9WwqglASjCL-6raCvHLAaXnD0-UIm55bsTMWaI2IKdsjYIIKhA0MDKs',
        imageCount: 2,
        price: 35.00,
        dimensions: '140 × 70 سم',
        frameType: 'أكريليك نافر مع إضاءة ليد مخفية',
        features: ['ضمان ذهبي سنتين', 'تجهيز مع محول كهربائي أصلي'],
      },
    ],
  },
};
