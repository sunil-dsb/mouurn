import Story from "@/src/components/registry/Story";
import AskProblem from "@/src/components/registry/AskProblem";
import Categories from "@/src/components/registry/Categories";
import ComingSoonBar from "@/src/components/registry/ComingSoonBar";
import CtaBand from "@/src/components/registry/CtaBand";
import Fork from "@/src/components/registry/Fork";
import IntroStrip from "@/src/components/registry/IntroStrip";
import ItemsGrid from "@/src/components/registry/ItemsGrid";
import PrivacySection from "@/src/components/registry/PrivacySection";
import ChristmasPhoto from "@/src/components/registry/ChristmasPhoto";
import Pullquote from "@/src/components/registry/Pullquote";
import RegistryHero from "@/src/components/registry/RegistryHero";
import WhoBuilds from "@/src/components/registry/WhoBuilds";


export const metadata = {
  title: "mouurn — Registry",
  description: "The first registry designed specifically for loss.",
};

export default function RegistryPage() {
  return (
    <main>
      <ComingSoonBar />
      <RegistryHero />
      <Fork />
      <IntroStrip />
      <Story />
      <AskProblem />
      <WhoBuilds />
      <PrivacySection />
      <ChristmasPhoto />
      {/* <Categories />  */}
      <ItemsGrid />
      <Pullquote />
      <CtaBand />
    </main>
  );
}
