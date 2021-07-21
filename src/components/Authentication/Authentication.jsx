import { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import useAuth from "../../hooks/useAuth"
import { getErrorMessage } from "../../utils/functions"
import AlertError from "../AlertMessage/AlertMessage"

export default function Authentication() {
	const { signUp, signIn, error, setUserName, setUserSurname } = useAuth()
	const [signType, setSignType] = useState("SignIn")
	const [showAlertError, setShowAlertError] = useState(false)
	const [errorMessage, setErrorMessage] = useState(null)
	const [valuePasswordRepeat, setValuePasswordRepeat] = useState(null)
	const [valuePassword, setValuePassword] = useState(null)
	const [valueEmail, setValueEmail] = useState(null)
	const [visibleWrongPasswordRepeat, setVisibleWrongPasswordRepeat] =
		useState(true)

	useEffect(() => {
		let refreshAlertTimer = null
		if (error) {
			setErrorMessage(() => getErrorMessage(error.message))
			setShowAlertError(error)
			console.log("ERROR!!!!->>>>", error, errorMessage)
			refreshAlertTimer = setTimeout(() => setShowAlertError(false), 5000)
		}
		return () => clearTimeout(refreshAlertTimer)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [error])
	useEffect(() => {
		if (valuePassword && valuePasswordRepeat) {
			if (valuePassword.trim() === valuePasswordRepeat.trim()) {
				setVisibleWrongPasswordRepeat(false)
				return
			}
			setVisibleWrongPasswordRepeat(true)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [valuePasswordRepeat])
	function sendSignReq(e) {
		e.preventDefault()
		if (valueEmail.trim()) {
			if (signType === "SignIn" && valuePassword.trim()) {
				signIn(valueEmail.trim(), valuePassword.trim())
				return
			}
			if (
				signType === "SignUp" &&
				valuePassword.trim() &&
				valuePassword.trim() === valuePasswordRepeat.trim()
			) {
				signUp(valueEmail.trim(), valuePassword.trim())
				return
			}
		}
	}
	function changeSignType() {
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
					{errorMessage === "authError" && (
						<AlertError type="warning">
							<h4>Error!</h4>
							<p>Check the correctness of the entered data!</p>
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
							onChange={e => setValueEmail(() => e.target.value)}
							required
						/>
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>
					{signType === "SignUp" && (
						<Form.Group controlId="formBasicName">
							<Form.Control
								type="text"
								placeholder="Enter your name"
								onChange={e => setUserName(() => e.target.value)}
								required
							/>
						</Form.Group>
					)}
					{signType === "SignUp" && (
						<Form.Group controlId="formBasicSurname">
							<Form.Control
								type="text"
								placeholder="Enter your surname"
								onChange={e => setUserSurname(() => e.target.value)}
								required
							/>
						</Form.Group>
					)}
					<Form.Group controlId="formBasicPassword">
						<Form.Control
							type="password"
							name="password"
							placeholder="Password (minimum 6 characters)"
							onChange={e => setValuePassword(() => e.target.value)}
							required
						/>
					</Form.Group>
					{signType === "SignUp" && (
						<Form.Group controlId="formRepeatPassword">
							<Form.Control
								type="password"
								name="repeatPassword"
								placeholder="Password(repeat)"
								className={
									visibleWrongPasswordRepeat ? "wrong-repeat-password" : ""
								}
								onChange={e => setValuePasswordRepeat(() => e.target.value)}
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
							type="button"
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
