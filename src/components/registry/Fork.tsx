export default function Fork() {
  return (
    <div className="grid grid-cols-2 hairline-b">
      <div className="p-[64px_60px] cursor-pointer transition-colors duration-200 hairline-r hover:bg-hover">
        <div className="text-micro tracking-[0.24em] text-soft uppercase mb-[16px] font-[400!important]">
          For you
        </div>
        <div className="font-serif text-story-sm sm:text-story-md md:text-story leading-[1.1] font-light text-ink mb-[14px]">
          I'm the one<br />
          <em className="italic">going through it.</em>
        </div>
        <div className="text-sub text-muted leading-[2.0] font-light max-w-[340px] mb-[28px]">
          You're in the thick of it. Tell us what you need and share only with who you choose — when you're ready.
        </div>
        <div className="text-label tracking-[0.18em] text-muted uppercase font-[400!important]">
          Start my registry →
        </div>
      </div>
      <div className="p-[64px_60px] cursor-pointer transition-colors duration-200 hover:bg-hover">
        <div className="text-micro tracking-[0.24em] text-soft uppercase mb-[16px] font-[400!important]">
          For someone you love
        </div>
        <div className="font-serif text-story-sm sm:text-story-md md:text-story leading-[1.1] font-light text-ink mb-[14px]">
          I want to build one<br />
          <em className="italic">for someone else.</em>
        </div>
        <div className="text-sub text-muted leading-[2.0] font-light max-w-[340px] mb-[28px]">
          You're the sister, the best friend, the coworker who wants to step up. Build their registry, send it their way, and let them make it their own when they're ready.
        </div>
        <div className="text-label tracking-[0.18em] text-muted uppercase font-[400!important]">
          Build for someone I love →
        </div>
      </div>
    </div>
  );
}
