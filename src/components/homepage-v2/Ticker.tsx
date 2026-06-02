export default function Ticker() {
  return (
    <div className="bg-new-oat-mid border-t-[0.5px] border-t-new-rule-md border-b-[0.5px] border-b-new-rule-md overflow-hidden py-[14px]">
      <div className="flex">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-8 px-8 whitespace-nowrap text-[9px] tracking-btn uppercase font-sans text-new-muted"
          >
            <span>Practical help for the hardest days</span>
            <div className="w-[3px] h-[3px] rounded-full bg-new-gold" />
            <span>Meaningful support that lasts</span>
            <div className="w-[3px] h-[3px] rounded-full bg-new-gold" />
            <span>Show up when it matters</span>
            <div className="w-[3px] h-[3px] rounded-full bg-new-gold" />
          </div>
        ))}
      </div>
    </div>
  );
}