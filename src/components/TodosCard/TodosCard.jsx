import { useTodos } from "../../hooks/useTodos"
import TodoCard from "../TodoCard/TodoCard"

export default function TodosCard() {
	const [todos] = useTodos()
	return (
		<>{todos && todos.map(todo => <TodoCard key={todo.id} todo={todo} />)}</>
	)
}
