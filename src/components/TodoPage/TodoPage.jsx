import { useState } from "react"
import { Button, Card, Modal } from "react-bootstrap"
import { formatterDate } from "../../utils/formatters"

export default function TodoPage({ todo }) {
	const [show, setShow] = useState(false)
	function handleClose() {
		setShow(false)
	}
	function handleShow(e) {
		e.preventDefault()
		setShow(true)
	}
	return (
		<>
			<Card.Link href="#" onClick={handleShow}>
				Read more...
			</Card.Link>
			<Modal show={show} onHide={handleClose} animation={false}>
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
				<Modal.Body>{todo.body}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					{todo.status !== 4 && (
						<Button variant="success" onClick={handleClose}>
							Edit
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
