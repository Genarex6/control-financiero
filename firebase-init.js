/* Configuración pública de la aplicación web Firebase. */
const firebaseConfig = {
  apiKey: "AIzaSyBFcXgzEdjVHyzT5z1kEvO8TOKdPK3Q6aA",
  authDomain: "control-financiero-7602e.firebaseapp.com",
  projectId: "control-financiero-7602e",
  storageBucket: "control-financiero-7602e.firebasestorage.app",
  messagingSenderId: "420459768760",
  appId: "1:420459768760:web:79f3371b3e6af2481f3d4d"
};

firebase.initializeApp(firebaseConfig);
window.financeAuth = firebase.auth();
window.financeDb = firebase.firestore();
