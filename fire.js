// Configuración de tu proyecto login-cd589
const firebaseConfig = {
  apiKey: "AIzaSyB5mcICmAnEmEdHWihTNUekM-knh7LpI6w",
  authDomain: "login-cd589.firebaseapp.com",
  projectId: "login-cd589",
  storageBucket: "login-cd589.firebasestorage.app",
  messagingSenderId: "430456285943",
  appId: "1:430456285943:web:f7463ea8d8c47abe2b81f2",
  measurementId: "G-NLGMX4NHXY"
};
// Inicializar Firebase (Versión compatible sin errores de import)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Variables para usar en todo tu proyecto
const auth = firebase.auth();
const db = firebase.firestore();

// --- FUNCIÓN DE LOGIN ---
function loginUsuario(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Login exitoso
            console.log("Bienvenido:", userCredential.user.email);
            window.location.href = "menu.html"; // Te manda al menú
        })
        .catch((error) => {
            // Si hay error (contraseña mal, usuario no existe)
            alert("Error: " + error.message);
        });
}