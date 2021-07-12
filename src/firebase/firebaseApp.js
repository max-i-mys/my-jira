import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
const firebaseConfig = {
	apiKey: "AIzaSyB3rdjWRWalNjvMuDby7neupcTYGHWYhAY",
	authDomain: "my-jira-e5e8d.firebaseapp.com",
	projectId: "my-jira-e5e8d",
	storageBucket: "my-jira-e5e8d.appspot.com",
	messagingSenderId: "611464328251",
	appId: "1:611464328251:web:54e27752f75284fcfe581e",
}

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth()
export { auth, firebaseApp }
