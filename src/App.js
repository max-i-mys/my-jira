import "./App.css"
import TodoCards from "./components/TodoCards/TodoCards"
import "bootstrap/dist/css/bootstrap.min.css"
import { Col, Container, Row } from "react-bootstrap"
import AddTodo from "./components/AddTodo/AddTodo"
import Header from "./components/Header/Header"
import { Route, Switch } from "react-router-dom"
import Authentication from "./components/Authentication/Authentication"
function App() {
	return (
		<div className="App">
			<Container className="p-3">
				<Header />
				<Switch>
					<Route exact path="/auth">
						<Authentication />
					</Route>
					<Route exact path="/">
						<h1 className="text-center mb-4">It's your ToDo list!</h1>
						<Row>
							<Col lg={3} className="pl-1 pr-1">
								<div className="bg-success p-2 rounded">
									<div className="d-flex flex-column align-items-center todo__column pb-2 rounded">
										<TodoCards status={1} />
									</div>
								</div>
							</Col>
							<Col lg={3} className="pl-1 pr-1">
								<div className="bg-info p-2 rounded">
									<div className="d-flex flex-column align-items-center todo__column pb-2 rounded">
										<TodoCards status={2} />
									</div>
								</div>
							</Col>
							<Col lg={3} className="pl-1 pr-1">
								<div className="bg-primary p-2 rounded">
									<div className="d-flex flex-column align-items-center todo__column pb-2 rounded">
										<TodoCards status={3} />
									</div>
								</div>
							</Col>
							<Col lg={3} className="pl-1 pr-1">
								<div className="bg-secondary p-2 rounded">
									<div className="d-flex flex-column align-items-center todo__column pb-2 rounded">
										<TodoCards status={4} />
									</div>
								</div>
							</Col>
						</Row>
					</Route>
					<Route exact path="/add">
						<AddTodo />
					</Route>
					<Route path="*/">
						<h1 className="text-center mb-4">404! The page does not exist!</h1>
					</Route>
				</Switch>
			</Container>
		</div>
	)
}

export default App
