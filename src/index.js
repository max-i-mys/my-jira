import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import TodosProvider from "./contexts/TodosContext"
import App from "./App"

ReactDOM.render(
	<React.StrictMode>
		<TodosProvider>
			<App />
		</TodosProvider>
	</React.StrictMode>,
	document.getElementById("root")
)

reportWebVitals()
