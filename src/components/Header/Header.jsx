import { Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
export default function Header() {
	const { user, signOut } = useAuth()
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
						<Nav.Link
							className="nav-link text-danger"
							href="/auth"
							onClick={() => signOut()}
						>
							Log out
						</Nav.Link>
					</li>
				)}
			</ul>
		</>
	)
}
