import { useTodos } from "../../hooks/useTodos"
import TodoCard from "../TodoCard/TodoCard"

export default function TodosCard(props) {
	const [todos] = useTodos()
	return (
		<>
			{todos &&
				todos
					.filter(todo => todo.status === props.status)
					.sort((a, b) => b.updatedAt - a.updatedAt)
					.sort((a, b) => b.createdAt - a.createdAt)
					.map(todo => <TodoCard key={todo.id} todo={todo} />)}
		</>
	)
}
