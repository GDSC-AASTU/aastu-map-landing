import { AboutSection } from "@/components/about-section";
import { CombinedFooterSection } from "@/components/combinedfootersection";
import { FeaturesSection } from "@/components/features-section";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ScreenshotsSection } from "@/components/screenshots-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <ScreenshotsSection />
        <CombinedFooterSection />
      </main>
    </div>
  );
}
