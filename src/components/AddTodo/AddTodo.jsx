import { Button, Form } from "react-bootstrap"
import React, { useState } from "react"
import { useTodos } from "../../hooks/useTodos"
import { addTodo } from "../../api/crud"

export default function AddTodo() {
	const [, dispatch] = useTodos()
	const [todoTitle, setTodoTitle] = useState(null)
	const [todoBody, setTodoBody] = useState(null)
	async function addNewTodo(e) {
		e.preventDefault()
		const newTodo = {
			title: todoTitle,
			body: todoBody,
			createdAt: Date.now(),
			updatedAt: null,
			status: 1,
		}
		const [addedNewTodo, addedNewTodoError] = await addTodo(newTodo)
		if (!addedNewTodoError) {
			dispatch({ type: "ADD", payload: addedNewTodo })
		}
	}
	return (
		<>
			<h1 className="text-center mb-4">You can add your todos here!</h1>
			<Form className="w-50 ml-auto mr-auto" onSubmit={addNewTodo}>
				<Form.Group controlId="inlineFormInputTitle">
					<Form.Label>Todo's title</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter title"
						onChange={e => setTodoTitle(() => e.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlTextarea1">
					<Form.Label>Todo's body</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						onChange={e => setTodoBody(() => e.target.value)}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Add todo
				</Button>
			</Form>
		</>
	)
}
