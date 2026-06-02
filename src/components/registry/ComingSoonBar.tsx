"use client";

export default function ComingSoonBar() {
  return (
    <div className="bg-ink py-[12.3px] px-[60px] text-center border-b-[0.5px] border-oat/8 sticky top-[57px] z-[99]">
      <div className="flex items-center justify-center gap-6 flex-wrap">
        <span className="text-label tracking-label text-oat/45 uppercase font-[400!important]">
          Registry — Coming Soon
        </span>
        <span className="w-[1px] h-[12px] bg-oat/12 inline-block"></span>
        <span className="text-small text-oat/65 font-serif italic font-light">
          Be the first to know when it's ready
        </span>
        <span className="w-[1px] h-[12px] bg-oat/12 inline-block"></span>
        <form
          className="flex gap-0 items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="bg-transparent border-b-[0.5px] border-oat/20 py-[5px] text-note text-oat font-sans w-[200px] outline-none font-light tracking-[0.04em] placeholder:text-[#666]"
          />
          <button
            type="submit"
            className="bg-transparent border-none text-micro tracking-[0.18em] text-muted uppercase font-sans cursor-pointer py-[5px] pl-[14px] transition-colors duration-200 hover:text-oat/80 font-[400!important]"
          >
            Join waitlist →
          </button>
        </form>
      </div>
    </div>
  );
}
