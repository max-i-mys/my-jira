import { useTodos } from "../../hooks/useTodos"
import { getStatus } from "../../utils/functions"
import TodoCard from "../TodoCard/TodoCard"

export default function TodoCards(props) {
	const [todos] = useTodos()
	const filteredTodos = todos.filter(todo => todo.status === props.status)
	return (
		<>
			<h5 className="text-uppercase text-white todo__title">
				{getStatus(props.status)} ({filteredTodos.length})
			</h5>
			{todos &&
				filteredTodos
					.sort(
						(a, b) => b.updatedAt - a.updatedAt || b.createdAt - a.createdAt
					)
					.map(todo => <TodoCard key={todo.id} todo={todo} />)}
		</>
	)
}
