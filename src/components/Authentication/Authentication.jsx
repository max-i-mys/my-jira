import { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import useAuth from "../../hooks/useAuth"
import { getErrorMessage } from "../../utils/functions"
import AlertError from "../AlertError/AlertError"

export default function Authentication() {
	const { signUp, signIn, error } = useAuth()
	const [signType, setSignType] = useState("SignIn")
	const [showAlertError, setShowAlertError] = useState(false)
	const [errorMessage, setErrorMessage] = useState(null)

	useEffect(() => {
		if (error) {
			setErrorMessage(() => getErrorMessage(error.message))
		}
	}, [error])
	let refreshAlertTimer = null
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

	useEffect(() => {
		if (signType === "SignIn") {
			setShowAlertError(error)
			refreshAlertTimer = setInterval(() => setShowAlertError(false), 5000)
		}
		return () => clearTimeout(refreshAlertTimer)
	}, [error])
	return (
		<>
			{showAlertError && (
				<>
					{errorMessage === "wrongAuth" && (
						<AlertError type="danger">
							<h4>Access is denied!</h4>
							<p>Incorrect email or password.</p>
						</AlertError>
					)}

					{errorMessage === "usedEmail" && (
						<AlertError type="warning">
							<h4>You cannot use this email.</h4>
							<p>Try another!</p>
						</AlertError>
					)}
					{errorMessage === "weakPassword" && (
						<AlertError type="warning">
							<h4>This password is very weak!</h4>
							<p>
								Your password must be at least six characters long. Try using
								numbers and letters.
							</p>
						</AlertError>
					)}
				</>
			)}
			<div className="vertical-centered">
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
			</div>
		</>
	)
}
