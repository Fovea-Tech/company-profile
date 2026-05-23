// Server component — no 'use client' so Next.js can statically optimize the image
// This is intentionally separate from Hero to avoid delaying LCP behind JS hydration
import Image from 'next/image';

export default function HeroImage() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:mx-0">
      <Image
        src="/mockup-web-bg.webp"
        alt="Tampilan website yang dibangun Fovea Technology"
        width={449}
        height={496}
        priority
        fetchPriority="high"
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 560px"
        className="h-auto w-full rounded-2xl border-[3px] border-black shadow-[8px_8px_0_#111111]"
      />
    </div>
  );
}
