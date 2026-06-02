// import AnnounceBanner from "../../components/homepage-v2/AnnounceBanner";
import Hero from "../../components/homepage-v2/Hero";
// import Ticker from "../../components/homepage-v2/Ticker";
import Story from "../../components/homepage-v2/Story";
// import Permission from "../../components/homepage-v2/Permission";
import Paths from "../../components/homepage-v2/Paths";
import Mission from "../../components/homepage-v2/Mission";
import Pillars from "../../components/homepage-v2/Pillars";
import Newsletter from "../../components/homepage-v2/Newsletter";

export const metadata = {
  title: "mouurn — for every kind of loss",
};

export default function NewHomepage() {
  return (
    <main>
      <Hero />
      {/* <Ticker /> */}
      <Story />
      {/* <Permission /> */}
      <Paths />
      <Mission />
      <Pillars />
      <Newsletter />
    </main>
  );
}
