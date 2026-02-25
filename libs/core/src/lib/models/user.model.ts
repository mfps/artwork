import { Timestamp } from '@angular/fire/firestore';

export interface UserDocument {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName: string;
  age: number;
  createdAt: Timestamp;
}

export interface RegisterInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  displayName: string;
  age: number;
}
