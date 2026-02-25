import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  CollectionReference,
  DocumentData,
} from '@angular/fire/firestore';
import { Artwork } from '../models/artwork.model';

@Injectable({ providedIn: 'root' })
export class ArtworkService {
  private readonly firestore = inject(Firestore);

  private col(uid: string): CollectionReference<DocumentData> {
    return collection(this.firestore, `users/${uid}/artworks`);
  }

  async getAll(uid: string): Promise<Artwork[]> {
    const snap = await getDocs(this.col(uid));
    return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Artwork, 'id'>) }));
  }

  async getById(uid: string, id: string): Promise<Artwork | undefined> {
    const ref = doc(this.col(uid), id);
    const snap = await getDoc(ref);
    if (!snap.exists()) return undefined;
    return { id: snap.id, ...(snap.data() as Omit<Artwork, 'id'>) };
  }

  async create(uid: string, data: Omit<Artwork, 'id'>): Promise<string> {
    const ref = await addDoc(this.col(uid), data as DocumentData);
    return ref.id;
  }

  async update(uid: string, id: string, data: Partial<Omit<Artwork, 'id'>>): Promise<void> {
    const ref = doc(this.col(uid), id);
    await updateDoc(ref, data as DocumentData);
  }

  async delete(uid: string, id: string): Promise<void> {
    const ref = doc(this.col(uid), id);
    await deleteDoc(ref);
  }
}
