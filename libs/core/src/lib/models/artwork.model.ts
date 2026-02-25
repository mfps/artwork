export type ArtworkStatus = 'Available' | 'Sold' | 'Reserved';

export interface Artwork {
  id?: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  price: number;
  description: string;
  collection: string;
  status: ArtworkStatus;
  category: string;
  location: string;
  imageUrl: string;
}
