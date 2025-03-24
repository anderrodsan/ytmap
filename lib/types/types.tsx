export type IChannel = {
  id: string;
  title: string;
  description: string;
  subs: number;
  series: string[];
  videos: number;
  avatar: string;
};

//id, city, country, location, title, url, thumbnail
export type Video = {
  id: number;
  city: string;
  country: string;
  location: number[];
  title: string;
  url: string;
  thumbnail: string;
};
