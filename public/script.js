import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js"
import { getAuth,
         GoogleAuthProvider,
         onAuthStateChanged,
         signInWithPopup,
         signOut } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"

const firebaseConfig = {
  apiKey: "AIzaSyAcZ0oOMRS0D2DvkmAflK-F8PUvZqdJg_I",
  authDomain: "add-to-cart---hoda-app.firebaseapp.com",
  projectId: "add-to-cart---hoda-app",
  storageBucket: "add-to-cart---hoda-app.appspot.com",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const itemInputEl = document.getElementById("item-input")
const addButtonEl = document.getElementById("add-button")
const loginWithGoogleButtonEl = document.getElementById("login-with-google")
const logoutButtonEl = document.getElementById("logout-button")

const viewLoggedOut = document.getElementById("view-logged-out")
const viewLoggedIn = document.getElementById("view-logged-in")



onAuthStateChanged(auth, (user) => {
  if (user) {
    showLoggedInView()
  } else {
    showLoggedOutView()
  }
})

function showLoggedInView() {
  viewLoggedOut.style.display = "none"
  viewLoggedIn.style.display = "block"
}

function showLoggedOutView() {
  viewLoggedOut.style.display = "block"
  viewLoggedIn.style.display = "none"
}

let items = []

addButtonEl.addEventListener("click", () => {
  const inputValue = itemInputEl.value

  items.push(inputValue)
  console.log(items)
})

loginWithGoogleButtonEl.addEventListener("click", () => {
  authSignInWithGoogle()
})

logoutButtonEl.addEventListener("click", () => {
  authSignOut()
})

function authSignInWithGoogle() {
  signInWithPopup(auth, provider)
  .then((result) => {
    console.log("Signed in with Google")
  }).catch((error) => {
    console.log(error.message)
  })
}

function authSignOut() {
  signOut(auth)
      .then(() => {
          showLoggedOutView()
      }).catch((error) => {
          console.error(error.message)
      })
}