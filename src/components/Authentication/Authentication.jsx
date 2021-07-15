import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import useAuth from "../../hooks/useAuth"

export default function Authentication() {
	const { signUp, signIn } = useAuth()
	const [signType, setSignType] = useState("SignIn")
	function sendSignReq(e) {
		e.preventDefault()
		const { email, password, repeatPassword } = e.target
		if (email.value.trim()) {
			if (signType === "SignIn" && password.value.trim()) {
				signIn(email.value.trim(), password.value.trim())
				e.target.reset()
				return
			}
			if (
				signType === "SignUp" &&
				password.value.trim() &&
				password.value.trim() === repeatPassword.value.trim()
			) {
				signUp(email.value.trim(), password.value.trim())
				e.target.reset()
				return
			}
		}
	}
	function changeSignType(e) {
		e.preventDefault()
		if (signType === "SignIn") {
			setSignType("SignUp")
			return
		}
		if (signType === "SignUp") {
			setSignType("SignIn")
			return
		}
	}
	return (
		<>
			{" "}
			{signType === "SignIn" && (
				<h1 className="text-center mb-4">Sign in to your account</h1>
			)}
			{signType === "SignUp" && (
				<h1 className="text-center mb-4">Register a new account</h1>
			)}
			<Form className="w-75 ml-auto mr-auto" onSubmit={sendSignReq}>
				<Form.Group controlId="formBasicEmail">
					<Form.Control
						type="email"
						name="email"
						placeholder="Enter email"
						required
					/>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>
				<Form.Group controlId="formBasicPassword">
					<Form.Control
						type="password"
						name="password"
						placeholder="Password"
						required
					/>
				</Form.Group>
				{signType === "SignUp" && (
					<Form.Group controlId="formRepeatPassword">
						<Form.Control
							type="password"
							name="repeatPassword"
							placeholder="Password(repeat)"
							required
						/>
					</Form.Group>
				)}
				<Button variant="primary" type="submit">
					{signType === "SignIn" && "Login"}
					{signType === "SignUp" && "Register"}
				</Button>{" "}
				<div>
					<button
						className="border-0 bg-white small text-primary"
						onClick={changeSignType}
					>
						{signType === "SignIn" && "Register"}
						{signType === "SignUp" && "I have an account"}
					</button>
				</div>
			</Form>
		</>
	)
}
