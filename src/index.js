import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import TodosProvider from "./contexts/TodosContext"

ReactDOM.render(
	<React.StrictMode>
		<TodosProvider>
			<App />
		</TodosProvider>
	</React.StrictMode>,
	document.getElementById("root")
)

reportWebVitals()
