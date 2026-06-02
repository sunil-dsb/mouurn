import SiteChrome from "../components/layout/SiteChrome";
import Hero from "../components/homepage/Hero";
import Mission from "../components/homepage/Mission";
import Newsletter from "../components/homepage/Newsletter";
import Paths from "../components/homepage/Paths";
import Story from "../components/homepage/Story";
import Teasers from "../components/homepage/Teasers";

export default function Home() {
  return (
    <SiteChrome>
      <Hero />
      <Story />
      <Mission />
      <Paths />
      <Teasers />
      <Newsletter />
    </SiteChrome>
  );
}
