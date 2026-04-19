type PlaceStatus = 'visited' | 'wishlist' | 'planned';

type Photo = {
  url: string;
  alt?: string;
};

type PlaceTag = string;

export type Place = {
  id: string;
  name: string;
  countryCode: string;
  coordinates: [lng: number, lat: number];
  status: PlaceStatus;
  visitedAt?: Date;
  photos: Photo[];
  notes: string;
  tags: PlaceTag[];
  rating?: 1 | 2 | 3 | 4 | 5;
  createdAt: Date
};

type RouteStop = {
  placeId: string
  order: number
  notes: string
  duration?: number
}

export type Route = {
  id: string
  title: string
  stops: RouteStop[]
  startDate?: Date
  endDate?: Date
}
