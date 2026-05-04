import { Suspense, lazy } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/LanguageContext";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { FloatingOrderButton } from "@/components/FloatingOrderButton";
import { BackToTop } from "@/components/BackToTop";
import { HungerMeter } from "@/components/HungerMeter";
import { MobileNav } from "@/components/MobileNav";

// Lazy load heavy sections
const MenuSection = lazy(() => import("@/components/MenuSection").then(module => ({ default: module.MenuSection })));
const AboutSection = lazy(() => import("@/components/AboutSection").then(module => ({ default: module.AboutSection })));
const ReviewsSection = lazy(() => import("@/components/ReviewsSection").then(module => ({ default: module.ReviewsSection })));
const OrderSection = lazy(() => import("@/components/OrderSection").then(module => ({ default: module.OrderSection })));
const InstagramSection = lazy(() => import("@/components/InstagramSection").then(module => ({ default: module.InstagramSection })));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <div className="min-h-screen bg-background">
            <Header />
            <main style={{ paddingBottom: "80px" }}>
              <Hero />
              <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading...</div>}>
                <MenuSection />
                <AboutSection />
                <ReviewsSection />
                <InstagramSection />
                <OrderSection />
              </Suspense>
            </main>
            <Footer />
            <FloatingOrderButton />
            <BackToTop />
            <HungerMeter />
            <MobileNav />
          </div>
        </LanguageProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
