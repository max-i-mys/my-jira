import { Card } from "react-bootstrap"
import { formatterDate } from "../../utils/formatters"

export default function TodoCard({ todo }) {
	return (
		<>
			<Card style={{ width: "100%", cursor: "pointer" }}>
				<Card.Header className="d-flex justify-content-between pb-2 pt-2">
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
					<Card.Text>{todo.body}</Card.Text>
					<Card.Link href="#">Read more...</Card.Link>
				</Card.Body>
			</Card>
		</>
	)
}
