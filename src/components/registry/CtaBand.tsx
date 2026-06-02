"use client";

export default function CtaBand() {
  return (
    <div className="p-[80px_60px] hairline-b grid grid-cols-2 gap-[80px] items-center">
      <div>
        <div className="font-serif text-[40px] font-light leading-[1.1] text-ink">
          Set up your registry<br />in <em className="italic">five minutes.</em>
        </div>
        <div className="text-[13px] text-muted leading-[2.0] font-light mt-[18px] max-w-[380px]">
          No pressure, no perfection required. Add what feels right and share only with who you choose — when you're ready.
        </div>
      </div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Your name"
            className="w-full bg-transparent border-b-[0.5px] border-[var(--color-strong)] py-[14px] text-[13px] font-sans text-ink outline-none font-light mb-[16px] placeholder:text-[var(--color-soft)] focus:border-ink"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full bg-transparent border-b-[0.5px] border-[var(--color-strong)] py-[14px] text-[13px] font-sans text-ink outline-none font-light mb-[16px] placeholder:text-[var(--color-soft)] focus:border-ink"
          />
          <input
            type="text"
            placeholder="Who is this registry for? (optional)"
            className="w-full bg-transparent border-b-[0.5px] border-[var(--color-strong)] py-[14px] text-[13px] font-sans text-ink outline-none font-light mb-[16px] placeholder:text-[var(--color-soft)] focus:border-ink"
          />
          <button
            type="submit"
            className="inline-block mt-[8px] text-[9px] tracking-[0.22em] text-white bg-ink border-none p-[16px_32px] font-sans cursor-pointer uppercase transition-opacity duration-150 hover:opacity-80 font-[400!important]"
          >
            Create my registry →
          </button>
          <div className="text-[10px] text-soft mt-[14px] leading-[1.8]">
            Free to create. Private by default. Always yours to control.
          </div>
        </form>
      </div>
    </div>
  );
}
