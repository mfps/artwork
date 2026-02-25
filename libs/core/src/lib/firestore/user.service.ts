import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  doc,
  setDoc,
  docData,
  serverTimestamp,
} from '@angular/fire/firestore';
import { toSignal } from '@angular/core/rxjs-interop';
import { RegisterInput, UserDocument } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly firestore = inject(Firestore);

  async createUser(uid: string, data: RegisterInput): Promise<void> {
    const userRef = doc(this.firestore, 'users', uid);
    await setDoc(userRef, {
      uid,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      displayName: data.displayName,
      age: data.age,
      createdAt: serverTimestamp(),
    });
  }

  getUserSignal(uid: string) {
    const userRef = doc(this.firestore, 'users', uid);
    return toSignal(docData(userRef) as import('rxjs').Observable<UserDocument>, {
      initialValue: null,
    });
  }
}
