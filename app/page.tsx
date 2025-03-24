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
      <div className="relative flex flex-col items-center gap-5 w-full px-5 md:px-20 py-20">
        <AnimatedTitle className="">
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-center">
            Explora el nuevo modo de
          </p>
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-center">
            navegar <span className="text-[#087E8B]">YouTube</span>
          </p>
        </AnimatedTitle>

        <AnimatedText className="text-base md:text-lg pt-5 text-center max-w-[65ch]">
          Explora los videos de tu youtuber favorito a través de un mapa
          interactivo.
        </AnimatedText>
        <AnimatedText className="flex-center gap-5 pb-5">
          <Link href={"/channels"}>
            <Button variant={"outline"}>Explore Channels</Button>
          </Link>
          <Link href={"/channels"}>
            <Button variant={"default"}>Be Featured</Button>
          </Link>
        </AnimatedText>

        <AnimatedTitle className="relative w-full lg:w-2/3 h-[300px] lg:h-[500px] z-10 rounded-3xl group overflow-hidden">
          <Link href={"/map/yosoyplex?series=vuelta2"}>
            <Image
              src={"/img/plex-map.png"}
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
          </Link>
        </AnimatedTitle>
      </div>
    </div>
  );
}
