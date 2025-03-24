import SideBar from "@/components/navigation/SideBar";
import Map from "@/components/map/Map";
import ChannelCard2 from "@/components/cards/ChannelCard2";
import { ChannelData } from "@/data/channels";
import { globeData } from "@/data/data";
import { promises as fs } from "fs";
import { Video } from "@/lib/types/types";

export default async function YTMap({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { series: string };
}) {
  const channel =
    ChannelData.find(({ id }) => id === params.id) || ChannelData[0];

  //get the series from the searchparams
  const series = searchParams.series || null;

  const videosRaw = await fs.readFile(
    process.cwd() + `/data/${params.id}/${series}.json`,
    "utf8"
  );

  const videos: Video[] = JSON.parse(videosRaw);

  if (!videos && !channel) {
    return <div>Not found</div>;
  }

  return (
    <div className="flex flex-col md:flex-row h-full w-full bg-stone-50">
      <SideBar
        className="hidden md:h-full lg:flex flex-col pt-2 pl-3"
        channel={channel}
        data={videos}
      />
      <div className="relative overflow-hidden flex-1 ">
        <div className="lg:hidden">
          <ChannelCard2 item={channel} className="" />
        </div>
        <Map data={videos} />
      </div>
    </div>
  );
}
