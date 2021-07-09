import { useState } from "react"
import { Button, Card, Form, Modal } from "react-bootstrap"
import { formatterDate } from "../../utils/formatters"

export default function TodoModal({ todo }) {
	const [showModal, setShowModal] = useState(false)
	const [replaceModalBody, setReplaceModalBody] = useState(false)
	function handleClose() {
		setShowModal(false)
	}
	function handleShow(e) {
		e.preventDefault()
		setShowModal(true)
	}
	return (
		<>
			<Card.Link href="#" onClick={handleShow}>
				Read more...
			</Card.Link>
			<Modal show={showModal} onHide={handleClose} animation={false}>
				<Modal.Header closeButton>
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
								<Form.Control as="textarea" rows={5}>
									{todo.body}
								</Form.Control>
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
						<Button variant="primary" onClick={handleClose}>
							Save Changes
						</Button>
					)}
				</Modal.Footer>
			</Modal>
		</>
	)
}
