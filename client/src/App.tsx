import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/LanguageContext";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { AboutSection } from "@/components/AboutSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { OrderSection } from "@/components/OrderSection";
import { Footer } from "@/components/Footer";
import { InstagramSection } from "@/components/InstagramSection";
import { FloatingOrderButton } from "@/components/FloatingOrderButton";
import { BackToTop } from "@/components/BackToTop";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <div className="min-h-screen bg-background">
            <Header />
            <main>
              <Hero />
              <MenuSection />
              <AboutSection />
              <ReviewsSection />
              <InstagramSection />
              <OrderSection />
            </main>
            <Footer />
            <FloatingOrderButton />
            <BackToTop />
          </div>
        </LanguageProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
