import "./App.css"
import TodosCard from "./components/TodosCard/TodosCard"
import "bootstrap/dist/css/bootstrap.min.css"
import { Col, Container, Row } from "react-bootstrap"
import AddTodo from "./components/AddTodo/AddTodo"

function App() {
	return (
		<div className="App">
			<Container className="p-3">
				<AddTodo />
				<Row>
					<Col lg={3} className="pl-1 pr-1">
						<div className="bg-success p-2 rounded">
							<h5 className="text-uppercase text-white">To do</h5>
							<div className="d-flex flex-column align-items-center todo__column rounded">
								<TodosCard status={1} />
							</div>
						</div>
					</Col>
					<Col lg={3} className="pl-1 pr-1">
						<div className="bg-info p-2 rounded">
							<h5 className="text-uppercase text-white">In progress</h5>
							<div className="d-flex flex-column align-items-center todo__column rounded">
								<TodosCard status={2} />
							</div>
						</div>
					</Col>
					<Col lg={3} className="pl-1 pr-1">
						<div className="bg-primary p-2 rounded">
							<h5 className="text-uppercase text-white">Code review</h5>
							<div className="d-flex flex-column align-items-center todo__column rounded">
								<TodosCard status={3} />
							</div>
						</div>
					</Col>
					<Col lg={3} className="pl-1 pr-1">
						<div className="bg-secondary p-2 rounded">
							<h5 className="text-uppercase text-white">Done</h5>
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
