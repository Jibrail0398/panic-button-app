const firebaseConfig = {
  apiKey: "AIzaSyDvD-kR9t8CwVD5xz7z8zPf50OimMvNTPo",
  authDomain: "panic-button-database.firebaseapp.com",
  databaseURL: "https://panic-button-database-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "panic-button-database",
  storageBucket: "panic-button-database.firebasestorage.app",
  messagingSenderId: "447258507352",
  appId: "1:447258507352:web:46549677f9bef2caffb22d",
  measurementId: "G-DGWXF2M8P9"
};

const apiKey = "Bearer JnrVVP9ueZgfgZe3woYwEpFW0maCL8CZZVmYlxiO45lk6rn9hXBsqszbQuOgfyGk"

function generateRandomString(length = 5) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
  }
  return result;
}
const myUserId = generateRandomString();

export const environment = {
  production: true,
  firebaseConfig :firebaseConfig,
  userId:myUserId
};
