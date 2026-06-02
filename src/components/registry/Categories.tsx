import Link from "next/link";

export default function Categories() {
  return (
    <>
      <div className="p-[40px_60px_28px] hairline-b flex items-baseline justify-between">
        <div>
          <div className="text-label tracking-[0.24em] text-soft uppercase mb-[8px]">
            WHAT TO ASK FOR
          </div>
          <div className="font-serif text-story-sm font-light text-ink">
            Meaningful support, <em className="italic">organized</em>
          </div>
        </div>
        <Link href="#" className="text-label tracking-[0.16em] text-muted uppercase no-underline hover:text-ink transition-colors">
          View all categories →
        </Link>
      </div>
      <div className="grid grid-cols-4 hairline-b">
        <div className="p-[36px_32px] hairline-r cursor-pointer transition-colors duration-150 hover:bg-hover">
          <i className="ti ti-soup text-[18px] text-soft mb-[16px] block"></i>
          <div className="font-serif text-logo-sm font-light text-ink leading-[1.2] mb-[8px]">
            Nourish
          </div>
          <div className="text-small text-muted leading-[1.9] font-light">
            Meal trains, grocery delivery, and restaurant gift cards.
          </div>
        </div>
        <div className="p-[36px_32px] hairline-r cursor-pointer transition-colors duration-150 hover:bg-hover">
          <i className="ti ti-home text-[18px] text-soft mb-[16px] block"></i>
          <div className="font-serif text-logo-sm font-light text-ink leading-[1.2] mb-[8px]">
            Home
          </div>
          <div className="text-small text-muted leading-[1.9] font-light">
            House cleaning, yard work, and laundry services.
          </div>
        </div>
        <div className="p-[36px_32px] hairline-r cursor-pointer transition-colors duration-150 hover:bg-hover">
          <i className="ti ti-baby-carriage text-[18px] text-soft mb-[16px] block"></i>
          <div className="font-serif text-logo-sm font-light text-ink leading-[1.2] mb-[8px]">
            Care
          </div>
          <div className="text-small text-muted leading-[1.9] font-light">
            Child care, pet sitting, and school transportation.
          </div>
        </div>
        <div className="p-[36px_32px] cursor-pointer transition-colors duration-150 hover:bg-hover">
          <i className="ti ti-wallet text-[18px] text-soft mb-[16px] block"></i>
          <div className="font-serif text-logo-sm font-light text-ink leading-[1.2] mb-[8px]">
            Funds
          </div>
          <div className="text-small text-muted leading-[1.9] font-light">
            Help with medical bills, funeral costs, or living expenses.
          </div>
        </div>
      </div>
    </>
  );
}
