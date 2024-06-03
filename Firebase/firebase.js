// Importar e configurar o Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB29Vr_Gr5WOlrT2xePFjaAYhSDIHSzfZs",
  authDomain: "medconsulta-2b6df.firebaseapp.com",
  projectId: "medconsulta-2b6df",
  storageBucket: "medconsulta-2b6df.appspot.com",
  messagingSenderId: "394701899441",
  appId: "1:394701899441:web:23928a6e6f7885f7688490",
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar serviços
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Exportar os serviços para uso em outros scripts
export { app, auth, db, storage };
