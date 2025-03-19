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

const firebaseMessaging = {
  apiKey: "AIzaSyByqoUJkiOnFsTLxoaq0JHAMpEwCm3bqEA",
  authDomain: "cloud-messaging-damkar.firebaseapp.com",
  projectId: "cloud-messaging-damkar",
  storageBucket: "cloud-messaging-damkar.firebasestorage.app",
  messagingSenderId: "873746291386",
  appId: "1:873746291386:web:797391e722633117c64083",
  measurementId: "G-F9R2GE3V8B"
}

const apiKey = "Bearer JnrVVP9ueZgfgZe3woYwEpFW0maCL8CZZVmYlxiO45lk6rn9hXBsqszbQuOgfyGk"

const url = "https://56c7-114-124-148-36.ngrok-free.app"

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
  firebaseMessaging:firebaseMessaging,
  userId:myUserId,
  apiKey:apiKey,
  url:url
};
