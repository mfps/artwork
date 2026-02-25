import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Artwork } from '../models/artwork.model';
import { ArtworkService } from './artwork.service';

type LoadStatus = 'idle' | 'loading' | 'loaded' | 'error';

interface ArtworkState {
  artworks: Artwork[];
  status: LoadStatus;
  error: string | null;
}

const MOCK_ARTWORKS: Artwork[] = [
  {
    id: 'mock-1',
    title: 'Golden Hour',
    year: 2023,
    medium: 'Oil on canvas',
    dimensions: '24 × 36 in',
    price: 2400,
    description: 'A warm landscape capturing the last light of day over rolling hills.',
    collection: 'Landscapes',
    status: 'Available',
    category: 'Painting',
    location: 'Studio — Shelf A1',
    imageUrl: '',
  },
  {
    id: 'mock-2',
    title: 'Urban Fragments',
    year: 2024,
    medium: 'Acrylic on board',
    dimensions: '18 × 24 in',
    price: 1800,
    description: 'Abstract exploration of city geometry and shadow.',
    collection: 'City Series',
    status: 'Sold',
    category: 'Painting',
    location: 'Studio — Shelf B2',
    imageUrl: '',
  },
  {
    id: 'mock-3',
    title: 'Still Life No. 7',
    year: 2022,
    medium: 'Watercolor',
    dimensions: '12 × 16 in',
    price: 850,
    description: 'Soft study of everyday objects bathed in morning light.',
    collection: 'Studies',
    status: 'Available',
    category: 'Painting',
    location: 'Studio — Shelf A3',
    imageUrl: '',
  },
  {
    id: 'mock-4',
    title: 'Quiet Garden',
    year: 2024,
    medium: 'Ink on paper',
    dimensions: '9 × 12 in',
    price: 620,
    description: 'Meditative line work inspired by a Japanese garden visit.',
    collection: 'Drawings',
    status: 'Reserved',
    category: 'Drawing',
    location: 'Studio — Drawer 2',
    imageUrl: '',
  },
  {
    id: 'mock-5',
    title: 'Coastal Memory',
    year: 2021,
    medium: 'Oil on canvas',
    dimensions: '30 × 40 in',
    price: 3200,
    description: 'Atmospheric seascape with moody, overcast skies.',
    collection: 'Landscapes',
    status: 'Sold',
    category: 'Painting',
    location: 'Framed — Wall 3',
    imageUrl: '',
  },
];

const initialState: ArtworkState = {
  artworks: MOCK_ARTWORKS,
  status: 'loaded',
  error: null,
};

export const ArtworkStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),

  withComputed(({ artworks, status }) => ({
    isLoading: computed(() => status() === 'loading'),
    totalCount: computed(() => artworks().length),
    availableCount: computed(
      () => artworks().filter((a) => a.status === 'Available').length,
    ),
    soldCount: computed(
      () => artworks().filter((a) => a.status === 'Sold').length,
    ),
    revenue: computed(() =>
      artworks()
        .filter((a) => a.status === 'Sold')
        .reduce((sum, a) => sum + a.price, 0),
    ),
  })),

  withMethods((store) => {
    const artworkService = inject(ArtworkService);

    return {
      async loadAll(uid: string): Promise<void> {
        patchState(store, { status: 'loading', error: null });
        try {
          const artworks = await artworkService.getAll(uid);
          patchState(store, { artworks, status: 'loaded' });
        } catch {
          patchState(store, { status: 'error', error: 'Failed to load artworks.' });
        }
      },

      async create(uid: string, data: Omit<Artwork, 'id'>): Promise<string> {
        const id = await artworkService.create(uid, data);
        patchState(store, {
          artworks: [...store.artworks(), { id, ...data }],
        });
        return id;
      },

      async update(
        uid: string,
        id: string,
        data: Partial<Omit<Artwork, 'id'>>,
      ): Promise<void> {
        await artworkService.update(uid, id, data);
        patchState(store, {
          artworks: store
            .artworks()
            .map((a) => (a.id === id ? { ...a, ...data } : a)),
        });
      },

      async remove(uid: string, id: string): Promise<void> {
        await artworkService.delete(uid, id);
        patchState(store, {
          artworks: store.artworks().filter((a) => a.id !== id),
        });
      },
    };
  }),
);

export type ArtworkStore = InstanceType<typeof ArtworkStore>;
