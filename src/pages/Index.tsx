import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedJobs from "@/components/FeaturedJobs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedJobs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
