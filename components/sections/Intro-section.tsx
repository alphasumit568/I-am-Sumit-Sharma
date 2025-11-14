import HeadingBadge from "@/components/heading-badge";
import { Hand } from "lucide-react";
import Image from "next/image";

export function IntroSection() {
  return (
    <section
      id="intro"
      className="w-full flex flex-col items-start justify-center"
    >
      <div className="space-y-6 ">
        
        <article className="space-y-3 sm:space-y-4">
          {/* Profile Image */}
          <div className="relative w-24 h-24 sm:w-62 sm:h-62 rounded-full overflow-hidden border-2 border-cyan-400 dark:border-cyan-500 shadow-lg">
            <Image
              src="/Sumit-profile-picture.jpeg"
              alt="Profile Picture"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-5xl font-bold tracking-tight leading-tight">
            <span className="text-[#08090a] dark:text-slate-200">
              Hi, I&apos;m Sumit Sharma
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-[#737373] dark:text-[#A1A1AA] max-w-2xl">
            A Full Stack Developer passionate about crafting seamless digital
            experiences
          </p>

          <p className="text-sm sm:text-base font-normal text-[#737373] dark:text-[#A1A1AA] max-w-2xl">
            I specialize in building full-stack web applications using the Full stack —{" "}
            <span className="text-[#08090a] dark:text-slate-100 font-semibold">
              React, Node.js, and JavaScript. I’m also skilled in SQL & Java(Basic) and more.
            </span>{" "}
            Always excited to tackle new challenges where I can create value and
            grow as a coder. Let&apos;s connect if you&apos;ve got a project
            that could use my skills!
          </p>
          {/* CV button */}
          <div>
            <a
              href="https://drive.google.com/file/d/1dpctQ7QLVpCnbnbfU800_zAFLqAi7l6I/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition"
            >
              Download CV
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}