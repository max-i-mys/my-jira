import React, { useContext } from "react"
import { TodosContext } from "../contexts/TodosContext"

export function useTodos() {
	return useContext(TodosContext)
}
