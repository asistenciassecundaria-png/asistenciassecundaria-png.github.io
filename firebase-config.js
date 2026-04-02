const firebaseConfig = {
  apiKey: "AIzaSyCG3T8nTk9rO2NYrhzwV54uWPRSWU5aCsI",
  authDomain: "testlogin-b5640.firebaseapp.com",
  projectId: "testlogin-b5640",
  storageBucket: "testlogin-b5640.appspot.com",
  messagingSenderId: "615880496451",
  appId: "1:615880496451:web:8802856c1b50f48837cbf6"
};

// Inicializar
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const db = firebase.firestore();