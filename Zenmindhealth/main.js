const toggleButton = document.getElementById("navbar-toggle");
const navbarMenu = document.getElementById("navbar-menu");

toggleButton.addEventListener("click", () => {
  const expanded = toggleButton.getAttribute("display") === "block";
  toggleButton.setAttribute("display", "none");
  navbarMenu.classList.toggle("show-menu");
});
function toggleForm(formId) {
  var loginForm = document.getElementById("login-form");
  var signupForm = document.getElementById("signup-form");
  var loginToggle = document.getElementById("login-toggle");
  var signupToggle = document.getElementById("signup-toggle");

  if (formId === "login-form") {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    loginToggle.disabled = true;
    signupToggle.disabled = false;
  } else {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    loginToggle.disabled = false;
    signupToggle.disabled = true;
  }
}
document.getElementById("login-toggle").addEventListener("click", () => {
  toggleForm("login-form");
});
document.getElementById("signup-toggle").addEventListener("click", () => {
  toggleForm("signup-toggle");
});

const solution = [
  ["Persistent sadness", "you have symtomps of persistent sadness"],
  [
    "Changes in sleep patterns",
    "You may be experiencing changes in sleep patterns",
  ],
  ["Appetite change", "You might notice changes in your appetite"],
  ["Loss of interest", "You may be experiencing a loss of interest"],
  ["Low energy", "You might be feeling a lack of energy"],
  ["Difficulty in concentrating", "You may find it hard to concentrate"],
  [
    "Negative self-perception",
    "You might be experiencing negative self-perception",
  ],
  ["Isolation", "You may be feeling isolated"],
  ["Suicidal thoughts", "You might be experiencing suicidal thoughts"],
];

// Import the functions you need from the SDKs you needimport { initializeApp } from "firebase/app";import { getAnalytics } from "firebase/analytics";// TODO: Add SDKs for Firebase products that you want to use// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfNZdiCvIdjghLAlogiq3AGd-Lm7zSh7g",
  authDomain: "zen-mind-da902.firebaseapp.com",
  projectId: "zen-mind-da902",
  storageBucket: "zen-mind-da902.appspot.com",
  messagingSenderId: "628304909744",
  appId: "1:628304909744:web:f3c0a2006675a7c5977275",
  measurementId: "G-V9733BSE76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const depression_found =
  "As per the answers, you have been in the state of depression but it's just a bump in the road. Remember, you're resilient, and brighter days are on the horizon.";
