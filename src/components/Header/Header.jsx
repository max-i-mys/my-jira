import { NavLink } from "react-router-dom"

export default function Header() {
	return (
		<>
			<ul className="nav nav-tabs nav-justified mb-5">
				<li className="nav-item">
					<NavLink className="nav-link" to="todos">
						Todos
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="add">
						Add
					</NavLink>
				</li>
			</ul>
		</>
	)
}
