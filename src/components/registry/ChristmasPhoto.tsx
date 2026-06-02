import Image from "next/image";

export default function ChristmasPhoto() {
  return (
    <div className="relative w-full h-[320px] sm:h-[480px] md:h-[680px] overflow-hidden hairline-b max-h-[680px]">
      <Image
        src="/images/christmas_photo.jpg"
        alt="Christmas house"
        fill
        className="object-cover object-top"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-[28px_60px] bg-gradient-to-t from-ink/65 to-transparent">
        <p className="font-serif text-body italic text-oat/70 font-light tracking-[0.04em]">
          My little yellow house. The first Christmas without the Great Bob Sizlo. They showed up.
        </p>
      </div>
    </div>
  );
}
