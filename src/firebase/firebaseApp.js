import { initializeApp, getAuth } from "firebase/app"

const firebaseConfig = {
	apiKey: "AIzaSyB3rdjWRWalNjvMuDby7neupcTYGHWYhAY",
	authDomain: "my-jira-e5e8d.firebaseapp.com",
	projectId: "my-jira-e5e8d",
	storageBucket: "my-jira-e5e8d.appspot.com",
	messagingSenderId: "611464328251",
	appId: "1:611464328251:web:54e27752f75284fcfe581e",
}

export const firebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth()
