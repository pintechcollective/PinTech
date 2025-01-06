import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2">
        <div className="flex text-center flex-col items-center">
          <Image
            src="/LogoScreenShot.png"
            alt="Next.js logo"
            width={300}
            height={200}
            priority
          />
          <h1 className="font-FontFusion text-5xl uppercase">Pintech</h1>
          <h2 className="line-clamp-3 text-3xl">
            REVOLUTIONING <a className="text-accent">AMR FLEET</a> OPERATIONS
          </h2>
          <p className="line-clamp-7 mt-4 text-2xl">
            Pinnacle Technology Collective is a forward-thinking company in the
            robotics and automation industry. Founded with a shared passion for
            innovation, we bring over a decade of expertise in robotics
            maintenance and deployment. Out mission is to redefine robot
            integration and support and our services encompass the full
            lifecycle of Autonomous Mobile Robots (AMRs) and related
            infrastructure, from deployment to maintenance and training.
          </p>
        </div>
      </main>
    </div>
  );
}
