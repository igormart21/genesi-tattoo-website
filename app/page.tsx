import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import HeroAscii from "@/components/ui/hero-ascii";
import { About } from "@/components/sections/about";
import { Styles } from "@/components/sections/styles";
import { FeaturedPortfolio } from "@/components/sections/featured-portfolio";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { CourseCTA } from "@/components/sections/course-cta";
import { Location } from "@/components/sections/location";
import { CallToAction } from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <HeroAscii />
      <About />
      <Styles />
      <FeaturedPortfolio />
      <HowItWorks />
      <Testimonials />
      <CourseCTA />
      <Location />
      <CallToAction />
      <Footer />
    </main>
  );
}
