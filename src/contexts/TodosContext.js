import { createContext } from "react"
import React, { useReducer, useEffect } from "react"
import { getTodos } from "../api/crud"

const initialState = []
export const TodosContext = createContext()
export default function TodosProvider({ children }) {
	useEffect(() => {
		;(async () => {
			const [dataTodos] = await getTodos()
			dispatchTodos({ type: "INITIAL", payload: dataTodos })
		})()
	}, [])

	const [todos, dispatchTodos] = useReducer(reducer, initialState)
	function reducer(state, action) {
		switch (action.type) {
			case "INITIAL":
				return action.payload
			case "ADD":
				return [...state, action.payload]
			case "UPDATE": {
				const newState = [...state]
				const index = newState.findIndex(todo => todo.id === action.payload.id)
				newState.splice(index, 1, action.payload)
				return newState
			}
			case "DELETE": {
				break
			}
			default:
				throw new Error(`Wrong action type: ${action.type}`)
		}
	}
	return (
		<TodosContext.Provider value={[todos, dispatchTodos]}>
			{children}
		</TodosContext.Provider>
	)
}
