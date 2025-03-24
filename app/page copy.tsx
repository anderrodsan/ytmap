import AnimatedText from "@/components/framer-motion/AnimatedText";
import AnimatedTitle from "@/components/framer-motion/AnimatedTitle";
import TopChannels from "@/components/hero/TopChannels";
import Value from "@/components/hero/Value";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function YTMap() {
  return (
    <div className="relative">
      <div className="relative flex flex-col items-center gap-5 w-full px-5 md:px-20 pt-20">
        <AnimatedTitle className="">
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-center">
            Discover the new way to
          </p>
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-center">
            navigate <span className="text-[#087E8B]">YouTube</span>
          </p>
        </AnimatedTitle>

        <AnimatedText className="text-base md:text-lg pt-5 text-center max-w-[65ch]">
          Join as a creator to get your content seen or explore your favorite
          channels as a viewer. Join now!
        </AnimatedText>
        <AnimatedText className="flex-center gap-5 pb-5">
          <Link href={"/channels"}>
            <Button variant={"outline"}>Explore Channels</Button>
          </Link>
          <Link href={"/channels"}>
            <Button variant={"default"}>Be Featured</Button>
          </Link>
        </AnimatedText>
        <AnimatedTitle className="relative w-full lg:w-2/3 h-[300px] lg:h-[500px] z-10 rounded-3xl group overflow-hidden border-[10px] border-green/20 shadow-xl">
          <Image
            src={"/plexmap.png"}
            alt="Logo"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top",
              borderRadius: "20px",
              borderTopRightRadius: "20px",
            }}
            className="group-hover:scale-[1.02] transition duration-300"
          />
        </AnimatedTitle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute z-0 bottom-[50px] lg:bottom-[200px] w-full"
        >
          <path
            fill="#61b1ba"
            fill-opacity="1"
            d="M0,256L60,240C120,224,240,192,360,165.3C480,139,600,117,720,117.3C840,117,960,139,1080,128C1200,117,1320,75,1380,53.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <div className="absolute left-0 right-0 bottom-0 h-[55px] lg:h-[200px] w-full bg-[#61b1ba]" />
      </div>

      <TopChannels />
      <Value />
    </div>
  );
}
