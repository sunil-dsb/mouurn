import type { Metadata } from "next";
import NewImprovedChrome from "../../components/new-improved/NewImprovedChrome";
import Hero from "../../components/new-improved/Hero";
import Story from "../../components/new-improved/Story";
import Paths from "../../components/new-improved/Paths";
import Mission from "../../components/new-improved/Mission";
import Pillars from "../../components/new-improved/Pillars";
import Held from "../../components/new-improved/Held";
import Newsletter from "../../components/new-improved/Newsletter";
import SoftFade from "../../components/new-improved/SoftFade";

export const metadata: Metadata = {
  title: "mouurn — for every kind of loss",
  description:
    "When someone you love is grieving, mouurn helps you show up - with a registry, gifts that comfort, a simple plan, and the right words.",
};

/**
 * /new-improved — the elevated take on /new. Same structure and content,
 * lifted execution: optimized hero + parallax, gentle scroll reveals,
 * refined type rhythm, a working mobile nav, and accessible focus states.
 * Keeps /new's gold identity. Self-wrapping chrome (Managers return null).
 */
export default function NewImproved() {
  return (
    <NewImprovedChrome>
      <Hero />
      <SoftFade>
        <Story />
      </SoftFade>
      <SoftFade>
        <Paths />
      </SoftFade>
      <SoftFade>
        <Mission />
      </SoftFade>
      <SoftFade>
        <Pillars />
      </SoftFade>
      <SoftFade>
        <Held />
      </SoftFade>
      <Newsletter />
    </NewImprovedChrome>
  );
}
