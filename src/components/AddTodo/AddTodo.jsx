import { Button, Form } from "react-bootstrap"
import React, { useState } from "react"
import { useTodos } from "../../hooks/useTodos"
import { addTodo } from "../../api/crud"
import { useHistory } from "react-router-dom"
import useAuth from './../../hooks/useAuth';

export default function AddTodo() {
	const {user} = useAuth()
	const [, dispatch] = useTodos()
	const [todoTitle, setTodoTitle] = useState(null)
	const [todoBody, setTodoBody] = useState(null)
	const history = useHistory()
	async function addNewTodo(e) {
		e.preventDefault()
		const newTodo = {
			title: todoTitle,
			body: todoBody,
			createdAt: Date.now(),
			updatedAt: null,
			status: 1,
			userId: user.uid
		}
		const [addedNewTodo, addedNewTodoError] = await addTodo(newTodo)
		if (!addedNewTodoError) {
			dispatch({ type: "ADD", payload: addedNewTodo })
		}
		history.push("/")
	}
	return (
		<>
			<h1 className="text-center mb-4">You can add your todos here!</h1>
			<Form className="w-50 ml-auto mr-auto" onSubmit={addNewTodo}>
				<Form.Group>
					<Form.Label>Todo's title</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter title"
						onChange={e => setTodoTitle(() => e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Todo's body</Form.Label>
					<Form.Control
						as="textarea"
						rows={5}
						onChange={e => setTodoBody(() => e.target.value)}
						required
					/>
				</Form.Group>
				<Button variant="success" type="submit">
					Add todo
				</Button>
			</Form>
		</>
	)
}
