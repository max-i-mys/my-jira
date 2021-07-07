import "./App.css"
import TodosCard from "./components/TodosCard/TodosCard"
import "bootstrap/dist/css/bootstrap.min.css"
import { Col, Container, Row } from "react-bootstrap"
function App() {
	return (
		<div className="App">
			<Container className="p-3">
				<Row>
					<Col lg={3} className="pl-1 pr-1">
						<div className="bg-light p-2 rounded">
							<h5 className="text-uppercase">To do</h5>
							<div className="d-flex flex-column align-items-center todo__column rounded">
								<TodosCard status={1} />
							</div>
						</div>
					</Col>
					<Col lg={3} className="pl-1 pr-1">
						<div className="bg-light p-2 rounded">
							<h5 className="text-uppercase">In progress</h5>
							<div className="d-flex flex-column align-items-center todo__column rounded">
								<TodosCard status={2} />
							</div>
						</div>
					</Col>
					<Col lg={3} className="pl-1 pr-1">
						<div className="bg-light p-2 rounded">
							<h5 className="text-uppercase">Code review</h5>
							<div className="d-flex flex-column align-items-center todo__column rounded">
								<TodosCard status={3} />
							</div>
						</div>
					</Col>
					<Col lg={3} className="pl-1 pr-1">
						<div className="bg-light p-2 rounded">
							<h5 className="text-uppercase">Done</h5>
							<div className="d-flex flex-column align-items-center todo__column rounded">
								<TodosCard status={4} />
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default App
