"use client"

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from 'react-leaflet';
import { useState } from 'react';
import { Button } from '../ui/button';
import { ChevronsLeft, ChevronsRight, MapPinned } from 'lucide-react';
import { globeData } from '@/data/data';
import { PinIconNew, PinIconSeen } from './Icon';
import Image from 'next/image';
import Link from 'next/link';

const Map = () => {

  const data = globeData;

  function LocationMarker({ data }: { data:any }) {
    const [positionIndex, setPositionIndex] = useState(0);
    const [position, setPosition] = useState(data[0].location);
    const map = useMap();
  
    const moveToNextPosition = () => {
      const nextIndex = (positionIndex + 1) % data.length;
      map.flyTo(data[nextIndex].location, map.getZoom());
      setPositionIndex(nextIndex);
      setPosition(data[nextIndex].location);
    };

    const moveToPrevPosition = () => {
        const prevIndex = (positionIndex - 1) % data.length;
        map.flyTo(data[prevIndex].location, map.getZoom());
        setPositionIndex(prevIndex);
        setPosition(data[prevIndex].location);
      };
  
    return position === null ? null : (
      <div>
        <Polyline positions={data.slice(0, positionIndex + 1).map((item:any) => [item.location[0], item.location[1]])} color='dodgerblue' dashArray="10" weight={2}/>
        
        
        {data.map((item:any, index:any) => {

            const Icon = (index >= positionIndex)
            ? PinIconNew : PinIconSeen

            return(
                <div key={index} onClick={() => setPositionIndex(index)}>
                    <Marker position={[item.location[0], item.location[1]]} icon={Icon}>
                        <Popup className=''>
                            <div className='flex flex-col space-y-2'>
                              <div className='font-bold text-lg'>{data[positionIndex].title}</div>
                              <div className='flex gap-2 items-center'><MapPinned size={16}/> {data[positionIndex].country}, {data[positionIndex].city}</div>
                              <Link className='relative h-[200px] w-full cursor-pointer' href={item.url} target="_blank">
                                  <Image
                                      alt='Video Image' 
                                      src={item.thumbnail}
                                      fill
                                      sizes="100vw"
                                      style={{ objectFit: 'contain'}}
                                  />
                              </Link>
                              <div className='grid grid-cols-2 gap-2'>
                                  <Button variant={'outline'} onClick={moveToPrevPosition}>
                                      <ChevronsLeft/>
                                  </Button>
                                  <Button variant={'secondary'} onClick={moveToNextPosition}>
                                      <ChevronsRight/>
                                  </Button> 
                              </div>
                                
                            </div>
                        </Popup>
                    </Marker>
                </div>
            )}
        )}
        
        <Marker position={position} icon={PinIconSeen}>
          <Popup className=''>
            <div className='flex flex-col'>
                <div className='font-bold text-lg'>{data[positionIndex].title}</div>
                <div className='flex gap-2 items-center'><MapPinned size={16}/> {data[positionIndex].country}, {data[positionIndex].city}</div>
                <Link className='relative h-[200px] w-full cursor-pointer' href={data[positionIndex].url} target="_blank">
                    <Image
                        alt='Video Image' 
                        src={data[positionIndex].thumbnail}
                        fill
                        sizes="100vw"
                        style={{ objectFit: 'contain'}}
                    />
                </Link>
                <div className='grid grid-cols-2 gap-2'>
                    <Button variant={'outline'} onClick={moveToPrevPosition}>
                        <ChevronsLeft/>
                    </Button>
                    <Button variant={'secondary'} onClick={moveToNextPosition}>
                        <ChevronsRight/>
                    </Button> 
                </div>
                
            </div>
            
            
          </Popup>
        </Marker>
        
      </div>
    );
  }
  
  


  return (
    <div className="w-full h-full flex flex-col">
      <MapContainer
        style={{
          height: '100%',
          width: '100%',
        }}
        center={[data[0].location[0] + 2, data[0].location[1]]}
        zoom={5}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker data={data} />
      </MapContainer>
    </div>
  );
};

export default Map;
