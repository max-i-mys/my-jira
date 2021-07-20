import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut as signOutUser,
	onAuthStateChanged,
} from "firebase/auth"
import { useState, createContext, useEffect } from "react"
import { createUser } from "../api/crud"
import { auth } from "../firebase/firebaseApp"
import { useRouter } from "../hooks/useRouter"

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [userData, setUserData] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)
	const router = useRouter()

	useEffect(() => {
		error && console.warn("Firebase auth error ->>", error.message)
	}, [error])
	useEffect(() => {
		console.warn("loading", loading)
	}, [loading])
	useEffect(() => {
		if (user) {
			router.replace("/")
		}
		if (!user) {
			router.replace("/auth")
		}
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])

	useEffect(() => {
		if (!user && router.pathname !== "/auth") {
			router.replace("/auth")
			return
		}
		if (user && router.pathname === "/auth") {
			router.replace("/")
			return
		}
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.pathname])

	useEffect(() => {
		setLoading(true)
		onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user)
			} else {
				setUser(null)
			}
			setLoading(false)
		})
	}, [])

	function signUp(email, password) {
		setLoading(true)
		createUserWithEmailAndPassword(auth, email, password)
			.finally(() => setLoading(false))
			.then(userCredential => {
				setUser(userCredential.user)
				setError(null)
				return createUser({ id: userCredential.user.uid })
			})
			.then(([userData, userDataError]) => {
				if (!userDataError) {
					setUserData(userData)
					setError(null)
				} else {
					setUserData(null)
					setError(userDataError)
				}
			})
			.catch(error => {
				setError(error)
				setUser(null)
			})
	}

	function signIn(email, password) {
		setLoading(true)
		signInWithEmailAndPassword(auth, email, password)
			.finally(() => setLoading(false))
			.then(userCredential => {
				setUser(userCredential.user)
				setError(null)
			})
			.catch(error => {
				setError(error)
				setUser(null)
			})
	}
	function signOut() {
		setLoading(true)
		signOutUser(auth)
			.finally(() => setLoading(false))
			.then(userCredential => {
				setUser(null)
				setError(null)
			})
			.catch(error => {
				setError(error)
			})
	}
	return (
		<AuthContext.Provider
			value={{ user, error, userData, loading, signUp, signIn, signOut }}
		>
			{children}
		</AuthContext.Provider>
	)
}
export default AuthProvider
