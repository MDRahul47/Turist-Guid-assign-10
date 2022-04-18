
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCiYhOKYD7Vr_fg9-1c25fYlx9_qOfaDNY",
    authDomain: "no-10-c1db2.firebaseapp.com",
    projectId: "no-10-c1db2",
    storageBucket: "no-10-c1db2.appspot.com",
    messagingSenderId: "842599533903",
    appId: "1:842599533903:web:c23002b26682cc908cc93a"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
// export default app;