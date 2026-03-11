import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import CoreMessage from "@/components/sections/CoreMessage";
import BrandOrbit from "@/components/sections/BrandOrbit";
import Modules from "@/components/sections/Modules";
import Transformation from "@/components/sections/Transformation";
import ForWhom from "@/components/sections/ForWhom";
import BetaLaunch from "@/components/sections/BetaLaunch";
import Pricing from "@/components/sections/Pricing";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <CoreMessage />
      <BrandOrbit />
      <Modules />
      <Transformation />
      <ForWhom />
      <BetaLaunch />
      <Pricing />
      <About />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
