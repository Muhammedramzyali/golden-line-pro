/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { SAMPLE_SHIPMENTS, ArtworkProduct } from './types';
import { Header } from './components/Header';
import { ShipmentHero } from './components/ShipmentHero';
import { TimelineStepper } from './components/TimelineStepper';
import { FinancialsAndPayment } from './components/FinancialsAndPayment';
import { ArtworksList } from './components/ArtworksList';
import { AppPromoBanner } from './components/AppPromoBanner';
import { Footer } from './components/Footer';
import { SkeletonView } from './components/SkeletonView';
import { RateLimitModal } from './components/RateLimitModal';
import { CliqModal } from './components/CliqModal';
import { LiveMapModal } from './components/LiveMapModal';
import { ArtworkModal } from './components/ArtworkModal';
import { SearchModal } from './components/SearchModal';
import { Toast } from './components/Toast';

export default function App() {
  const [activeCode, setActiveCode] = useState<string>('GL-4821');
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('gl_theme_mode');
      if (stored) return stored === 'dark';
    }
    return true; // default to luxury obsidian dark
  });

  const [showSkeleton, setShowSkeleton] = useState<boolean>(false);
  const [showRateLimit, setShowRateLimit] = useState<boolean>(false);
  const [showLiveMap, setShowLiveMap] = useState<boolean>(false);
  const [showCliqModal, setShowCliqModal] = useState<boolean>(false);
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkProduct | null>(null);
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);

  const [toast, setToast] = useState<{ message: string; visible: boolean }>({
    message: '',
    visible: false,
  });

  // Apply dark mode to document element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('gl_theme_mode', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const showToast = useCallback((msg: string) => {
    setToast({ message: msg, visible: true });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 2800);
  }, []);

  const handleCopy = useCallback(
    (text: string, label: string) => {
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(text)
          .then(() => {
            showToast(`تم نسخ ${label} بنجاح إلى الحافظة`);
          })
          .catch(() => {
            showToast(`تم النسخ: ${text}`);
          });
      } else {
        showToast(`تم النسخ: ${text}`);
      }
    },
    [showToast]
  );

  const currentShipment = SAMPLE_SHIPMENTS[activeCode] || SAMPLE_SHIPMENTS['GL-4821'];

  return (
    <div className="min-h-screen flex flex-col antialiased bg-[#f9f7f2] dark:bg-[#110e08] text-[#24211a] dark:text-[#f3ebde] transition-colors duration-300">
      {/* Header and top utility navigation */}
      <Header
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onShowSkeleton={() => setShowSkeleton(true)}
        onShowRateLimit={() => setShowRateLimit(true)}
        onOpenSearch={() => setShowSearchModal(true)}
        activeOrderCode={currentShipment.trackingCode}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {showSkeleton ? (
          <SkeletonView onBack={() => setShowSkeleton(false)} />
        ) : (
          <div className="flex flex-col gap-6 sm:gap-8 transition-opacity duration-300">
            {/* 1. Shipment Status Hero Card */}
            <ShipmentHero
              shipment={currentShipment}
              onCopy={handleCopy}
              onOpenLiveMap={() => setShowLiveMap(true)}
            />

            {/* 2. Timeline Progress Stepper & Live Activity Logs */}
            <TimelineStepper shipment={currentShipment} />

            {/* 3. Financial Breakdown & Payment Options */}
            <FinancialsAndPayment
              shipment={currentShipment}
              onOpenCliqModal={() => setShowCliqModal(true)}
              onCopy={handleCopy}
            />

            {/* 4. Ordered Artworks & Custom Specs */}
            <ArtworksList
              items={currentShipment.items}
              onSelectArtwork={(art) => setSelectedArtwork(art)}
            />

            {/* 5. Mobile App Promo Banner */}
            <AppPromoBanner
              onCopy={handleCopy}
              onOpenLiveMap={() => setShowLiveMap(true)}
            />

            {/* 6. Support Assistance Footer */}
            <Footer />
          </div>
        )}
      </main>

      {/* Modals & Overlays */}
      <RateLimitModal
        isOpen={showRateLimit}
        onClose={() => setShowRateLimit(false)}
      />

      <CliqModal
        isOpen={showCliqModal}
        onClose={() => setShowCliqModal(false)}
        alias={currentShipment.cliqAlias}
        amount={currentShipment.financial.remainingDue}
        currency={currentShipment.financial.currency}
        onCopy={handleCopy}
      />

      <LiveMapModal
        isOpen={showLiveMap}
        onClose={() => setShowLiveMap(false)}
        shipment={currentShipment}
      />

      <ArtworkModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />

      <SearchModal
        isOpen={showSearchModal}
        onClose={() => setShowSearchModal(false)}
        onSelectShipment={(code) => {
          setActiveCode(code);
          showToast(`تم تحميل بيانات الشحنة #${code}`);
        }}
        currentCode={currentShipment.trackingCode}
      />

      {/* Toast alert for copy actions */}
      <Toast message={toast.message} visible={toast.visible} />
    </div>
  );
}
