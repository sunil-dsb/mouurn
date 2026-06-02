import ImprovedChrome from "../../components/improved/ImprovedChrome";
import ImprovedHero from "../../components/improved/ImprovedHero";
import ImprovedImageBreak from "../../components/improved/ImprovedImageBreak";
import ImprovedStory from "../../components/improved/ImprovedStory";
import ImprovedMission from "../../components/improved/ImprovedMission";
import ImprovedPaths from "../../components/improved/ImprovedPaths";
import ImprovedTeasers from "../../components/improved/ImprovedTeasers";
import ImprovedNewsletter from "../../components/improved/ImprovedNewsletter";
import Reveal from "../../components/improved/Reveal";

/**
 * /improved — the elevated homepage. Calm, editorial, premium, spacious.
 * Sections fade + rise gently as they enter view (Reveal). `/` stays the
 * faithful clone.
 */
export default function Improved() {
  return (
    <ImprovedChrome>
      <ImprovedHero />
      <Reveal>
        <ImprovedStory />
      </Reveal>
      <Reveal>
        <ImprovedMission />
      </Reveal>
      {/* A breath - full-bleed atmospheric break between the emotional core
          and the practical paths. */}
      <ImprovedImageBreak
        src="/bg-3.webp"
        alt="Soft clouds in a wide, open sky"
        eyebrow="Wherever you are"
        caption="However loss finds you, you don't have to meet it alone."
      />
      <Reveal>
        <ImprovedPaths />
      </Reveal>
      {/* Teasers self-stagger their cards — no section wrapper here. */}
      <ImprovedTeasers />
      <Reveal>
        <ImprovedNewsletter />
      </Reveal>
    </ImprovedChrome>
  );
}
