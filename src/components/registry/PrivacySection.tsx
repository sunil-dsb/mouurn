export default function PrivacySection() {
  return (
    <div className="p-[72px_60px] hairline-b grid grid-cols-2 gap-[80px] items-start">
      <div>
        <div className="text-label tracking-[0.24em] text-soft uppercase mb-[16px] font-[400!important]">
          Privacy &amp; consent
        </div>
        <div className="font-serif text-display-sm leading-[1.1] font-light text-ink mb-[16px]">
          Their grief.<br />Their registry.<br /><em className="italic">Their choice. Always.</em>
        </div>
        <p className="text-body text-muted leading-[2.0] font-light mb-[24px]">
          When someone receives a registry built for them, it arrives as an act of love — not a notification. They take full ownership before anything is shared with anyone.
        </p>
        <div className="flex flex-col">
          <div className="py-[16px] hairline-b border-t border-rule flex items-start gap-[14px]">
            <i className="ti ti-check text-soft shrink-0 mt-[3px] text-small"></i>
            <div className="text-sub text-muted leading-[1.8] font-light">
              <strong className="text-ink font-normal">Private until approved. </strong> Nothing goes live without the recipient&apos;s consent.
            </div>
          </div>
          <div className="py-[16px] hairline-b flex items-start gap-[14px]">
            <i className="ti ti-check text-soft shrink-0 mt-[3px] text-small"></i>
            <div className="text-sub text-muted leading-[1.8] font-light">
              <strong className="text-ink font-normal">They can edit anything</strong> — add, remove, or change whatever they need before sharing.
            </div>
          </div>
          <div className="py-[16px] hairline-b flex items-start gap-[14px]">
            <i className="ti ti-check text-soft shrink-0 mt-[3px] text-small"></i>
            <div className="text-sub text-muted leading-[1.8] font-light">
              <strong className="text-ink font-normal">They can decline gracefully </strong> if they&apos;d prefer not to have a registry. No awkwardness.
            </div>
          </div>
          <div className="py-[16px] hairline-b flex items-start gap-[14px]">
            <i className="ti ti-check text-soft shrink-0 mt-[3px] text-small"></i>
            <div className="text-sub text-muted leading-[1.8] font-light">
              <strong className="text-ink font-normal">Their data is theirs.</strong> We never share it with anyone without their permission.
            </div>
          </div>
        </div>
      </div>
      <div className="border border-strong p-[28px]">
        <div className="text-micro tracking-[0.22em] text-soft uppercase mb-[20px] font-[400!important]">
          Registry status tracker
        </div>
        <div className="py-[14px] hairline-b border-t border-rule flex justify-between items-center">
          <div>
            <div className="text-body text-ink font-light mb-[3px]">For Sarah</div>
            <div className="text-label text-soft tracking-[0.08em] font-[400!important]">Created by you · 6 items</div>
          </div>
          <span className="text-micro tracking-[0.14em] uppercase py-[4px] px-[10px] text-[#2D6A4F] bg-[#D8F3DC]">
            Approved
          </span>
        </div>
        <div className="py-[14px] hairline-b flex justify-between items-center">
          <div>
            <div className="text-body text-ink font-light mb-[3px]">For Dad</div>
            <div className="text-label text-soft tracking-[0.08em] font-[400!important]">Created by you · 4 items</div>
          </div>
          <span className="text-micro tracking-[0.14em] uppercase py-[4px] px-[10px] text-[#9C6000] bg-[#FFF3CD]">
            Awaiting approval
          </span>
        </div>
        <div className="py-[14px] hairline-b flex justify-between items-center">
          <div>
            <div className="text-body text-ink font-light mb-[3px]">For Maria</div>
            <div className="text-label text-soft tracking-[0.08em] font-[400!important]">Created by you · 8 items</div>
          </div>
          <span className="text-micro tracking-[0.14em] uppercase py-[4px] px-[10px] text-[#2D6A4F] bg-[#D8F3DC]">
            Approved
          </span>
        </div>
      </div>
    </div>
  );
}

