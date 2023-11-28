import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAAhptvSdWKRcbT4wijR4hmYrG7CulVV0Q',
  authDomain: 'rey-nails-app.firebaseapp.com',
  projectId: 'rey-nails-app',
  storageBucket: 'rey-nails-app.appspot.com',
  messagingSenderId: '27877760542',
  appId: '1:27877760542:web:b2d41304bb0fa1da34580f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
