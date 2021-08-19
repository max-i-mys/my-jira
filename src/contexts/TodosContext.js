import { createContext } from "react"
import React, { useReducer, useEffect, useState } from "react"
import { getTodos } from "../api/crud"
import useAuth from "./../hooks/useAuth"

const initialState = []
export const TodosContext = createContext()
export default function TodosProvider({ children }) {
	const { user } = useAuth()
	const [loaded, setLoaded] = useState(false)
	useEffect(() => {
		if (!loaded && user?.uid) {
			;(async function () {
				const [dataTodos, dataTodosErr] = await getTodos(user.uid)
				if (!dataTodosErr) {
					dispatchTodos({ type: "INITIAL", payload: dataTodos })
					setLoaded(true)
				}
			})()
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])

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
				if (index !== -1) {
					newState.splice(index, 1, action.payload)
				}
				return newState
			}
			case "DELETE": {
				const newState = [...state]
				const index = newState.findIndex(todo => todo.id === action.payload)
				if (index !== -1) {
					newState.splice(index, 1)
				}
				return newState
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
