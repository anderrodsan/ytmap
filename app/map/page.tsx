import SideBar from "@/components/navigation/SideBar";
import Map from "@/components/map/Map";

export default function YTMap() {
  return (
    <div className="flex flex-col md:flex-row h-full w-full">
      <SideBar className="md:h-full md:w-1/3 lg:flex flex-col pt-2 md:py-5 px-2 md:px-5" />
      <div className="relative rounded-b-2xl md:rounded-t-2xl overflow-hidden flex-1 m-2 md:m-5 md:ml-0">
        <Map />
      </div>
    </div>
  );
}
