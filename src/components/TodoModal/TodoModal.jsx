import { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { updateTodo } from "../../api/crud"
import { useTodos } from "../../hooks/useTodos"
import { formatterDate } from "../../utils/formatters"

export default function TodoModal({ todo }) {
	const [showModal, setShowModal] = useState(false)
	const [replaceModalBody, setReplaceModalBody] = useState(false)
	const [formTextBody, setFormTextBody] = useState(null)
	const [, dispatch] = useTodos()
	function handleClose() {
		setShowModal(false)
		setReplaceModalBody(false)
	}
	function handleShow() {
		setShowModal(true)
	}
	async function setNewTextBody() {
		if (formTextBody && replaceModalBody && formTextBody !== todo.body) {
			const [updatedTodo, updatedTodoErr] = await updateTodo(todo.id, {
				body: formTextBody,
				updatedAt: Date.now(),
			})
			if (!updatedTodoErr) {
				dispatch({ type: "UPDATE", payload: updatedTodo })
				setReplaceModalBody(false)
			}
		}
	}
	return (
		<>
			<button
				type="button"
				className="border-0 bg-white p-0 btn-link"
				onClick={handleShow}
			>
				Read more...
			</button>
			<Modal show={showModal} onHide={handleClose} animation={false}>
				<Modal.Header>
					<Modal.Title>{todo.title}</Modal.Title>
					<div className="d-flex flex-column flex-grow-1 align-items-end mr-2">
						<span className="small">
							Created: {formatterDate.format(todo.createdAt)}
						</span>
						{todo.updatedAt && (
							<span className="small">
								Updated: {formatterDate.format(todo.updatedAt)}
							</span>
						)}
					</div>
				</Modal.Header>
				<Modal.Body>
					{!replaceModalBody && todo.body}
					{replaceModalBody && (
						<Form className="mt-2">
							<Form.Group className="mb-3">
								<Form.Control
									as="textarea"
									rows={5}
									onChange={e => setFormTextBody(e.target.value)}
									defaultValue={todo.body}
								/>
							</Form.Group>
						</Form>
					)}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					{todo.status !== 4 && (
						<Button
							variant="success"
							onClick={() => setReplaceModalBody(() => !replaceModalBody)}
						>
							{!replaceModalBody && "Edit"}
							{replaceModalBody && "Cancel"}
						</Button>
					)}
					{todo.status !== 4 && (
						<Button variant="primary" onClick={setNewTextBody}>
							Save Changes
						</Button>
					)}
				</Modal.Footer>
			</Modal>
		</>
	)
}
