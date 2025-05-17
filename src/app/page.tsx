import Header from "../components/Header";
import Hero from "../components/Hero";
import Mechanism from "../components/Mechanism";
import WhyItWorks from "../components/WhyItWorks";
import Features from "../components/Features";
import EmailExample from "../components/EmailExample";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import UseCases from "../components/UseCases";
import FAQ from "../components/FAQ";
import BetaCTA from "../components/BetaCTA";
import Footer from "../components/Footer";
import SoloCorpTeam from "../components/SoloCorpTeam";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Header />
      <Hero />
      <Mechanism />
      <WhyItWorks />
      <Features />
      <EmailExample />
      <Testimonials />
      <SoloCorpTeam />
      <Stats />
      <UseCases />
      <FAQ />
      <BetaCTA />
      <Footer />
    </main>
  );
}
