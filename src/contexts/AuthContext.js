import { useReducer, createContext } from "react"
const initialState = {}
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
	const [data, dispatch] = useReducer(reducer, initialState)
	function reducer(state, action) {
		switch (action.type) {
			case "":
				return state
			default:
				throw new Error("Wrong action type!")
		}
	}
	return (
		<AuthContext.Provider value={[data, dispatch]}>
			{children}
		</AuthContext.Provider>
	)
}
export default AuthProvider
