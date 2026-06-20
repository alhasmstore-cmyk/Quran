// إعدادات اتصال سيرفر Firebase الحقيقي الخاص بمشروع رحلة النور
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBmNuF85OGfwvbFzRTrXepw1-HtNoHV8Cs",
  authDomain: "quran-d0bc0.firebaseapp.com",
  databaseURL: "https://quran-d0bc0-default-rtdb.firebaseio.com", // تم بناؤه تلقائياً بناءً على معرف مشروعك
  projectId: "quran-d0bc0",
  storageBucket: "quran-d0bc0.firebasestorage.app",
  messagingSenderId: "675683659315",
  appId: "1:675683659315:web:056882e5d94f099b3c3d46",
  measurementId: "G-01BF2N1DLK"
};

if (typeof window !== "undefined") {
  window.FIREBASE_CONFIG = FIREBASE_CONFIG;
}
