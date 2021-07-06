import React, { useContext } from "react"
import { useTodos } from "../../hooks/useTodos"

export default function TodoCard({ todo }) {
	const count = useTodos()
	return (
		<>
			<div className="todo">
				<h3>{todo.title}</h3>
				{count}
			</div>
		</>
	)
}
