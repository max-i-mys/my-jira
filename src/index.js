import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import TodosProvider from "./contexts/TodosContext"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<TodosProvider>
				<App />
			</TodosProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
)

reportWebVitals()
