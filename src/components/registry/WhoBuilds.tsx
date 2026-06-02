export default function WhoBuilds() {
  return (
    <div className="p-[80px_60px] hairline-b bg-ink">
      <div className="text-label tracking-[0.24em] text-oat/40 uppercase mb-[16px] font-[400!important]">
        Anyone can build a mouurn registry
      </div>
      <div className="font-serif text-path font-light text-oat leading-[1.1] mb-[12px]">
        For yourself. Or for someone<br /> <em className="italic">you love.</em>
      </div>
      <div className="text-body text-oat/45 font-light leading-[1.8] mb-[52px] max-w-[560px]">
        A grief registry isn't just for death. It's for anyone carrying something heavy — and anyone who wants to help carry it with them.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-oat/10">
        {/* Card 1 */}
        <div className="p-[36px_32px] md:border-r border-b border-oat/10">
          <div className="font-serif text-logo-sm font-light text-oat mb-[10px] leading-[1.2]">
            The <em className="italic">griever</em>
          </div>
          <div className="text-small text-oat/50 leading-[1.9] font-light mb-[16px]">
            You're going through it and people want to help. The registry gives them a door — and takes the burden of asking off you.
          </div>
          <div className="font-serif text-quote text-oat/30 italic leading-[1.8]">
            "I couldn't find words. The registry said them for me."
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="p-[36px_32px] md:border-r border-b border-oat/10">
          <div className="font-serif text-logo-sm font-light text-oat mb-[10px] leading-[1.2]">
            Family — a sister, daughter,<br /> <em className="italic">parent, spouse</em>
          </div>
          <div className="text-small text-oat/50 leading-[1.9] font-light mb-[16px]">
            You're watching someone you love move through the depths of grief. You want to do something real. Build their registry and send it their way.
          </div>
          <div className="font-serif text-quote text-oat/30 italic leading-[1.8]">
            "I made one for my mom and she called me crying."
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-[36px_32px] border-b border-oat/10">
          <div className="font-serif text-logo-sm font-light text-oat mb-[10px] leading-[1.2]">
            The friend who <em className="italic">sees it</em>
          </div>
          <div className="text-small text-oat/50 leading-[1.9] font-light mb-[16px]">
            They keep saying they're fine. Building a registry for them is a way to say "I see you" — quietly, without pressure, without making it a moment.
          </div>
          <div className="font-serif text-quote text-oat/30 italic leading-[1.8]">
            "She kept saying she was fine. The registry said it's okay not to be."
          </div>
        </div>

        {/* Card 4 */}
        <div className="p-[36px_32px] md:border-r border-b border-oat/10">
          <div className="font-serif text-logo-sm font-light text-oat mb-[10px] leading-[1.2]">
            The <em className="italic">anticipatory</em>
          </div>
          <div className="text-small text-oat/50 leading-[1.9] font-light mb-[16px]">
            Loss is coming and you can feel it. Building the registry now — together or alone — is an act of love that looks forward.
          </div>
          <div className="font-serif text-quote text-oat/30 italic leading-[1.8]">
            "We built it together while he was still here. Knowing I would be taken care of brought him peace — and it brought me peace too."
          </div>
        </div>

        {/* Card 5 */}
        <div className="p-[36px_32px] md:border-r border-b border-oat/10">
          <div className="font-serif text-logo-sm font-light text-oat mb-[10px] leading-[1.2]">
            A coworker who<br /> <em className="italic">shows up</em>
          </div>
          <div className="text-small text-oat/50 leading-[1.9] font-light mb-[16px]">
            Someone at work is going through something and the whole office wants to help. One person builds the registry. Everyone shows up through it.
          </div>
          <div className="font-serif text-quote text-oat/30 italic leading-[1.8]">
            "Our whole office chipped in without her having to say a word."
          </div>
        </div>

        {/* Card 6 */}
        <div className="p-[36px_32px] border-b border-oat/10">
          <div className="font-serif text-logo-sm font-light text-oat mb-[10px] leading-[1.2]">
            Someone who just<br /> <em className="italic">wants to help</em>
          </div>
          <div className="text-small text-oat/50 leading-[1.9] font-light mb-[16px]">
            A neighbor, a church member, someone from school. You don't have to be the closest person — you just have to be the one who steps forward.
          </div>
          <div className="font-serif text-quote text-oat/30 italic leading-[1.8]">
            "I barely knew her. But I knew she needed someone to do something. So I did."
          </div>
        </div>
      </div>
    </div>
  );
}
