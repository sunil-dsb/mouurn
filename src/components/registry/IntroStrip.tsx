import Link from "next/link";

export default function IntroStrip() {
  return (
    <div className="p-[56px_60px] hairline-b grid grid-cols-2 gap-[80px] items-center">
      <div>
        <div className="text-label tracking-[0.24em] text-soft uppercase mb-[16px] font-[400!important]">
          Why a grief registry
        </div>
        <div className="font-serif text-story-sm sm:text-story-md md:text-story leading-[1.15] font-light text-ink">
          Because "let me know<br />if you need anything"<br /><em className="italic">isn't enough.</em>
        </div>
        <div className="text-body text-muted leading-[2.0] font-light mt-[20px]">
          Loss leaves a gap where all the ordinary tasks and needs live. A grief registry gives the people around you a real, specific way to show up — with meals, errands, gifts, or the things that actually help.
        </div>
        <Link href="#" className="inline-block mt-[28px] text-label tracking-[0.2em] text-ink uppercase no-underline border-b border-ink pb-[4px] font-[400!important]">
          Create your registry →
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="py-[20px] border-t border-ink/8 hairline-b flex items-start gap-[20px]">
          <div className="font-serif text-story-sm font-light text-soft shrink-0 w-[32px] leading-none">
            1
          </div>
          <div>
            <div className="text-small tracking-[0.1em] text-ink font-normal mb-[5px] uppercase">
              Add what would help
            </div>
            <div className="text-sub text-muted leading-[1.8] font-light">
              Meals, errands, gifts, funds, a therapy session, a dog walk — or anything from any website. Even things that aren't products.
            </div>
          </div>
        </div>
        <div className="py-[20px] hairline-b flex items-start gap-[20px]">
          <div className="font-serif text-story-sm font-light text-soft shrink-0 w-[32px] leading-none">
            2
          </div>
          <div>
            <div className="text-small tracking-[0.1em] text-ink font-normal mb-[5px] uppercase">
              Review & make it yours
            </div>
            <div className="text-sub text-muted leading-[1.8] font-light">
              Your registry is private until you choose to share it. Edit, add, remove — it's yours completely.
            </div>
          </div>
        </div>
        <div className="py-[20px] hairline-b flex items-start gap-[20px]">
          <div className="font-serif text-story-sm font-light text-soft shrink-0 w-[32px] leading-none">
            3
          </div>
          <div>
            <div className="text-small tracking-[0.1em] text-ink font-normal mb-[5px] uppercase">
              Share with exactly who you choose
            </div>
            <div className="text-sub text-muted leading-[1.8] font-light">
              Send it to family, friends, colleagues — whoever you want. This stays between you and them.
            </div>
          </div>
        </div>
        <p className="text-note text-soft mt-[32px] max-w-[560px] mx-auto text-center italic leading-[1.8] font-[400!important]">
          A note on how this works: a registry can hold free gestures and paid gifts side by side. For some products we may earn a small commission, and contributions to funds are passed along — it's how we keep mouurn running. Nothing ever costs more, and we only suggest things we'd want for someone we love.
        </p>
      </div>
    </div>
  );
}
