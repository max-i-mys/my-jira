import { useTodos } from "../../hooks/useTodos"
import { getStatus } from "../../utils/functions"
import TodoCard from "../TodoCard/TodoCard"
import { useEffect } from "react"
import useAuth from "../../hooks/useAuth"
import { getUserData, updateUserData } from "../../api/crud"

export default function TodoList(props) {
	const [todos] = useTodos()
	const filteredTodos = todos.filter(todo => todo.status === props.status)
	const { user } = useAuth()
	useEffect(() => {
		;(async () => {
			if (user) {
				const [userData, userDataErr] = await getUserData(user.uid)
				if (!userDataErr) {
					const userObject = userData[0]
					userObject?.status === "offline" &&
						(await updateUserData(user.uid, {
							status: "online",
						}))
				}
			}
		})()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
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
