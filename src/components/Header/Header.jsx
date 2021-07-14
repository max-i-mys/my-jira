import { NavLink } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

export default function Header() {
	const { user, signOut } = useAuth()
	console.log(user)
	return (
		<>
			<ul className="nav nav-tabs nav-justified mb-5">
				<li className="nav-item">
					<NavLink className="nav-link" exact to="/">
						Todos
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/add">
						Add
					</NavLink>
				</li>
				{user && (
					<li className="nav-item">
						<NavLink
							className="nav-link text-danger"
							exact
							to="/"
							onClick={() => signOut()}
						>
							Log out
						</NavLink>
					</li>
				)}
			</ul>
		</>
	)
}
