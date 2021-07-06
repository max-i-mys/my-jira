import { createContext } from "react"

export const TodosContext = createContext()
export default function TodosProvider({ children }) {
	return <TodosContext.Provider value="100">{children}</TodosContext.Provider>
}
