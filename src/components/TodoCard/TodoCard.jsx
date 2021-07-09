import { Card } from "react-bootstrap"
import { updateTodo } from "../../api/crud"
import { useTodos } from "../../hooks/useTodos"
import { formatterDate } from "../../utils/formatters"
import DeleteTodo from "../DeleteTodo/DeleteTodo"
import TodoPage from "../TodoPage/TodoPage"

export default function TodoCard({ todo }) {
	const [, dispatch] = useTodos()
	async function setNewStatus(e) {
		e.preventDefault()
		const newStatus = todo.status < 4 ? todo.status + 1 : todo.status
		if (newStatus !== todo.status) {
			const [todoWithNewStatus, todoWithNewStatusErr] = await updateTodo(
				todo.id,
				{
					status: newStatus,
					updatedAt: Date.now(),
				}
			)
			if (!todoWithNewStatusErr) {
				dispatch({ type: "UPDATE", payload: todoWithNewStatus })
			}
		}
	}
	return (
		<>
			<Card
				style={{ width: "100%", cursor: "pointer" }}
				className={`${todo.status === 4 ? "text-decoration-line-through" : ""}`}
				onContextMenu={setNewStatus}
			>
				<Card.Header className={"d-flex justify-content-between pb-2 pt-2"}>
					<Card.Title className="small m-0">
						<Card.Text>Created:</Card.Text>{" "}
						{formatterDate.format(todo.createdAt)}
					</Card.Title>
					{todo.updatedAt && (
						<Card.Title className="small m-0 text-right">
							<Card.Text>Updated:</Card.Text>{" "}
							{formatterDate.format(todo.updatedAt)}
						</Card.Title>
					)}
				</Card.Header>
				<Card.Body>
					<Card.Title>{todo.title}</Card.Title>
					<Card.Text className="todo__body">{todo.body}</Card.Text>
					<TodoPage todo={todo} />
					<DeleteTodo todo={todo} />
				</Card.Body>
			</Card>
		</>
	)
}
