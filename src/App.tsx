import React, { useState } from 'react';
import './styles/restaurant.css';
import { PresentationBanner } from './components/PresentationBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedDishes } from './components/FeaturedDishes';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ReservationModal } from './components/ReservationModal';
import { DishDetailModal } from './components/DishDetailModal';
import { TastingTrayDrawer } from './components/TastingTrayDrawer';
import { MenuItem } from './data/restaurantData';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [trayItems, setTrayItems] = useState<MenuItem[]>([]);
  const [isTrayOpen, setIsTrayOpen] = useState(false);

  const handleAddToTray = (dish: MenuItem) => {
    setTrayItems((prev) => {
      if (prev.some((item) => item.id === dish.id)) {
        return prev.filter((item) => item.id !== dish.id);
      }
      return [...prev, dish];
    });
  };

  const handleRemoveFromTray = (id: string) => {
    setTrayItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearTray = () => {
    setTrayItems([]);
  };

  const trayItemIds = trayItems.map((item) => item.id);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#18181B] flex flex-col font-sans selection:bg-[#E76F51]/20 selection:text-[#18181B]">
      {/* Top Demo Presentation Announcement Banner */}
      <PresentationBanner />

      {/* Main Navigation Bar */}
      <Navbar
        onOpenReservation={() => setIsReservationOpen(true)}
        trayCount={trayItems.length}
        onOpenTray={() => setIsTrayOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenReservation={() => setIsReservationOpen(true)} />

        {/* Featured Signature Dishes */}
        <FeaturedDishes
          onSelectDish={(dish) => setSelectedDish(dish)}
          onAddToTray={handleAddToTray}
          trayItemIds={trayItemIds}
        />

        {/* Interactive Menu Section with Categories & Dietary Filters */}
        <MenuSection
          onSelectDish={(dish) => setSelectedDish(dish)}
          onAddToTray={handleAddToTray}
          trayItemIds={trayItemIds}
        />

        {/* About Section: Story of JB's Kitchen Phase 5 Mohali */}
        <AboutSection />

        {/* Food & Dining Ambience Gallery */}
        <GallerySection />

        {/* Clearly Labelled Sample Testimonials */}
        <TestimonialsSection />

        {/* Contact & Location Section */}
        <ContactSection onOpenReservation={() => setIsReservationOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button with Placeholder Phone */}
      <FloatingWhatsApp />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Dish Detail & Ingredients Modal */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToTray={handleAddToTray}
        isInTray={selectedDish ? trayItemIds.includes(selectedDish.id) : false}
      />

      {/* Tasting Tray Drawer */}
      <TastingTrayDrawer
        isOpen={isTrayOpen}
        onClose={() => setIsTrayOpen(false)}
        trayItems={trayItems}
        onRemoveItem={handleRemoveFromTray}
        onClearTray={handleClearTray}
        onOpenReservation={() => setIsReservationOpen(true)}
      />
    </div>
  );
}
