import { useTodos } from "../../hooks/useTodos"
import { getStatus } from "../../utils/functions"
import TodoCard from "../TodoCard/TodoCard"

export default function TodosCard(props) {
	const [todos] = useTodos()
	const countTodos = todos.filter(todo => todo.status === props.status).length
	return (
		<>
			<h5 className="text-uppercase text-white todo__title">
				{getStatus(props.status)} ({countTodos})
			</h5>
			{todos &&
				todos
					.filter(todo => todo.status === props.status)
					.sort((a, b) => b.createdAt - a.createdAt)
					.sort((a, b) => b.updatedAt - a.updatedAt)
					.map(todo => <TodoCard key={todo.id} todo={todo} />)}
		</>
	)
}
