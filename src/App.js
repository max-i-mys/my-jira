import "./App.css"
import TodosCard from "./components/TodosCard/TodosCard"
import "bootstrap/dist/css/bootstrap.min.css"
import { Col, Container, Row } from "react-bootstrap"
function App() {
	return (
		<div className="App">
			<Container className="p-3">
				<Row>
					<Col
						lg={3}
						className="d-flex flex-column align-items-center todo__column"
					>
						<TodosCard />
					</Col>
					<Col
						lg={3}
						className="d-flex flex-column align-items-center todo__column"
					>
						<TodosCard />
					</Col>
					<Col
						lg={3}
						className="d-flex flex-column align-items-center todo__column"
					>
						<TodosCard />
					</Col>
					<Col
						lg={3}
						className="d-flex flex-column align-items-center todo__column"
					>
						<TodosCard />
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default App
