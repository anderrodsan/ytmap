import SideBar from "@/components/navigation/SideBar";
import Map from "@/components/map/Map";
import ChannelCard2 from "@/components/cards/ChannelCard2";
import { ChannelData } from "@/data/channels";

export default function YTMap({ params }: { params: { id: string } }) {
  const item = ChannelData.find(({ id }) => id === params.id) || ChannelData[0];
  console.log(item);

  return (
    <div className="flex flex-col md:flex-row h-full w-full">
      <SideBar
        className="hidden md:h-full md:w-1/3 lg:flex flex-col pt-2 md:py-5 px-2 md:px-5"
        channel={item}
      />
      <div className="relative rounded-2xl overflow-hidden flex-1 m-2 md:m-5 lg:ml-0 ">
        <div className="lg:hidden">
          <ChannelCard2
            item={item}
            className="absolute bottom-2 left-2 right-2 z-50 bg-green text-white rounded-2xl"
          />
        </div>

        <Map />
      </div>
    </div>
  );
}
