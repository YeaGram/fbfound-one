import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsqGZZ2w4TuWq5R98veifkysX_uTYjDT8",
  authDomain: "irfan-earlux-a7198.firebaseapp.com",
  projectId: "irfan-earlux-a7198",
  storageBucket: "irfan-earlux-a7198.appspot.com",
  messagingSenderId: "1054092571383",
  appId: "1:1054092571383:web:ac241744543842541bd9f2",
  measurementId: "G-90FR6R67D3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// codeStartHereerer------------->>>>><<
// <------FormActivity :V dahlah gak tau nama yang bagud :D

const form = document.querySelector(".contact-form");

const sendData = (e) => {
  //biargak reload masss :))
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const db = getDatabase();
  const reference = ref(db);
  set(reference, {
    username: name,
    email: email,
    subject: subject,
    message: message,
  });
  console.log("Sending To Firebase...");
  form.reset();
};

form.addEventListener("submit", sendData);

// function writeData(name) {
//   const db = getDatabase();
//   const reference = ref(db);

//   set(reference, {
//     username: name,
//   });
// }
