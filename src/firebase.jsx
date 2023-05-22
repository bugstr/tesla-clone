import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDXp9HzI0VCNtjFQjvodPPAm6dTCF6ia4k",
  authDomain: "tesla-clone-8826c.firebaseapp.com",
  projectId: "tesla-clone-8826c",
  storageBucket: "tesla-clone-8826c.appspot.com",
  messagingSenderId: "395709245377",
  appId: "1:395709245377:web:d15d83a2485a2be61fb140",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
