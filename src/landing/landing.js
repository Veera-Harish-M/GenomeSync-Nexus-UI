import CTA from "./cta";
import Footer from "./footer";
import HeroSection from "./heroSection";
import InfoSection from "./infoSection";
import Stats from "./stats";

function Landing() {
  return (
    <div>
      <HeroSection />
      <InfoSection />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}

export default Landing;
