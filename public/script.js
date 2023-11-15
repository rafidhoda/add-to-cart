import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js"

const firebaseConfig = {
  apiKey: "AIzaSyAcZ0oOMRS0D2DvkmAflK-F8PUvZqdJg_I",
  authDomain: "add-to-cart---hoda-app.firebaseapp.com",
  projectId: "add-to-cart---hoda-app",
  storageBucket: "add-to-cart---hoda-app.appspot.com",
}

const app = initializeApp(firebaseConfig)

const itemInputEl = document.getElementById("item-input")
const addButtonEl = document.getElementById("add-button")

let items = []

addButtonEl.addEventListener("click", () => {
  const inputValue = itemInputEl.value

  items.push(inputValue)
  console.log(items)
})