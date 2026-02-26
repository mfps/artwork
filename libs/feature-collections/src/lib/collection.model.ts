import { ArtworkStatus } from '@art-work/core';

export interface Collection {
  id: string;
  title: string;
  artworkCount: number;
  description: string;
  coverUrl: string;
  totalValue: number;
  status: string;
}

export interface CollectionArtwork {
  id: string;
  title: string;
  year: number;
  medium: string;
  price: number;
  imageUrl: string;
  status: ArtworkStatus;
}

export const MOCK_COLLECTIONS: Collection[] = [
  {
    id: '1',
    title: 'Landscapes',
    artworkCount: 8,
    description: 'Mountain and ocean scenes from 2023–2024',
    coverUrl: '',
    totalValue: 12498,
    status: 'Post Listed',
  },
  {
    id: '2',
    title: 'Portraits',
    artworkCount: 3,
    description: 'Figurative studies and commissioned portraits',
    coverUrl: '',
    totalValue: 8600,
    status: 'NFT',
  },
  {
    id: '3',
    title: 'Abstract Series',
    artworkCount: 12,
    description: 'Experimental color and form explorations',
    coverUrl: '',
    totalValue: 18950,
    status: 'NFT',
  },
  {
    id: '4',
    title: 'Still Life',
    artworkCount: 5,
    description: 'Classic arrangements with modern palette',
    coverUrl: '',
    totalValue: 4200,
    status: 'Post Listed',
  },
  {
    id: '5',
    title: 'Seascapes',
    artworkCount: 6,
    description: 'Ocean waves and coastal scenery',
    coverUrl: '',
    totalValue: 7000,
    status: 'NFT',
  },
];

export const MOCK_COLLECTION_ARTWORKS: Record<string, CollectionArtwork[]> = {
  '1': [
    { id: 'a1', title: 'Sunset Over Mountains', year: 2024, medium: 'Oil on Canvas', price: 2400, imageUrl: '', status: 'Available' },
    { id: 'a2', title: 'Alpine Morning', year: 2024, medium: 'Oil on Canvas', price: 1800, imageUrl: '', status: 'Available' },
    { id: 'a3', title: 'Coastal Cliffs', year: 2023, medium: 'Acrylic', price: 1950, imageUrl: '', status: 'Available' },
    { id: 'a4', title: 'Desert Dusk', year: 2023, medium: 'Watercolor', price: 1200, imageUrl: '', status: 'Sold' },
  ],
  '2': [
    { id: 'b1', title: 'Elena', year: 2023, medium: 'Oil on Canvas', price: 3200, imageUrl: '', status: 'Available' },
    { id: 'b2', title: 'The Musician', year: 2022, medium: 'Charcoal', price: 1800, imageUrl: '', status: 'Sold' },
    { id: 'b3', title: 'Self Study', year: 2024, medium: 'Oil on Canvas', price: 2900, imageUrl: '', status: 'Reserved' },
  ],
};

export const MOCK_ALL_ARTWORKS: CollectionArtwork[] = [
  { id: 'a1', title: 'Sunset Over Mountains', year: 2024, medium: 'Oil on Canvas', price: 2400, imageUrl: '', status: 'Available' },
  { id: 'a2', title: 'Alpine Morning', year: 2024, medium: 'Oil on Canvas', price: 1800, imageUrl: '', status: 'Available' },
  { id: 'a3', title: 'Coastal Cliffs', year: 2023, medium: 'Acrylic', price: 1950, imageUrl: '', status: 'Available' },
  { id: 'a4', title: 'Desert Dusk', year: 2023, medium: 'Watercolor', price: 1200, imageUrl: '', status: 'Sold' },
  { id: 'b1', title: 'Elena', year: 2023, medium: 'Oil on Canvas', price: 3200, imageUrl: '', status: 'Available' },
  { id: 'b2', title: 'The Musician', year: 2022, medium: 'Charcoal', price: 1800, imageUrl: '', status: 'Sold' },
  { id: 'b3', title: 'Self Study', year: 2024, medium: 'Oil on Canvas', price: 2900, imageUrl: '', status: 'Reserved' },
  { id: 'c1', title: 'Urban Fragments No. 7', year: 2023, medium: 'Acrylic on Board', price: 1490, imageUrl: '', status: 'Available' },
  { id: 'c2', title: 'Still Life with Lemons', year: 2024, medium: 'Oil on Canvas', price: 1600, imageUrl: '', status: 'Available' },
  { id: 'c3', title: 'Ocean Whispers', year: 2023, medium: 'Mixed Media', price: 2700, imageUrl: '', status: 'Available' },
];
