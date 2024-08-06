
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDw7jgFeDI2lU_YlsseqIfvkfqGjc5DwA8",
  authDomain: "blood-demons.firebaseapp.com",
  projectId: "blood-demons",
  storageBucket: "blood-demons.appspot.com",
  messagingSenderId: "699441588321",
  appId: "1:699441588321:web:2f17cc29aeb0d5fdf56220",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage();
const storageRef = ref(storage);