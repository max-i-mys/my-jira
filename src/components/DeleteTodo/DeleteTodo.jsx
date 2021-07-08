import { CloseButton } from "react-bootstrap"
import { deleteTodo } from "../../api/crud"
import { useTodos } from "../../hooks/useTodos"

export default function DeleteTodo({ todo }) {
	const [, dispatch] = useTodos()
	async function deleteThisTodo() {
		const [, deletedTodoError] = await deleteTodo(todo.id)
		if (!deletedTodoError) {
			dispatch({ type: "DELETE", payload: todo.id })
		}
	}
	return <>{todo.status === 4 && <CloseButton onClick={deleteThisTodo} />}</>
}
