import { getTodos } from "../../api/crud"
import React, { useState, useEffect } from "react"
import TodoCard from "../TodoCard/TodoCard"

export default function TodosCard() {
	const [todos, setTodos] = useState([])
	useEffect(() => {
		;(async () => {
			const [dataTodo, dataTodoError] = await getTodos()
			if (!dataTodoError) {
				setTodos(dataTodo)
			}
		})()
	}, [])
	return (
		<>
			{todos.map(todo => (
				<TodoCard key={todo.id} todo={todo} />
			))}
		</>
	)
}
