import { useState, useEffect } from "react"
import { getUserData } from "../../api/crud"
import useAuth from "../../hooks/useAuth"
import AlertMessage from "../AlertMessage/AlertMessage"

export default function Greeting() {
	const { user } = useAuth()
	const [userName, setUserName] = useState(null)
	const [userSurname, setUserSurname] = useState(null)
	const [showAlertMessage, setShowAlertMessage] = useState(false)
	useEffect(() => {
		;(async () => {
			if (user) {
				const [userData, userDataErr] = await getUserData(user.uid)
				if (!userDataErr) {
					const userObject = userData[0]
					setUserName(userObject.name)
					setUserSurname(userObject.surname)
				}
			}
		})()
	}, [user])

	useEffect(() => {
		let refreshAlertTimer = null
		if (user) {
			setShowAlertMessage(true)
			refreshAlertTimer = setTimeout(() => setShowAlertMessage(false), 5000)
		}
		return () => clearTimeout(refreshAlertTimer)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])

	return (
		<>
			{showAlertMessage && (
				<AlertMessage type="success" dismissible>
					<h4>
						Hello {userName} {userSurname}!
					</h4>
					<p>You have successfully entered the site</p>
				</AlertMessage>
			)}
		</>
	)
}
