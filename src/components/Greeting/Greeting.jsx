import { useState, useEffect } from "react"
import { getUserData } from "../../api/crud"
import useAuth from "../../hooks/useAuth"
import AlertMessage from "../AlertMessage/AlertMessage"

export default function Greeting() {
	const { user } = useAuth()
	const [userData, setUserData] = useState({})
	const [showAlertMessage, setShowAlertMessage] = useState(false)
	useEffect(() => {
		;(async () => {
			if (user) {
				const [userData, userDataErr] = await getUserData(user.uid)
				if (!userDataErr) {
					setUserData(userData[0])
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
			{userData?.status === "offline" && (
				<>
					{showAlertMessage && (
						<AlertMessage type="success" dismissible>
							<h4>
								{userData?.name &&
									`Hello ${userData?.name} ${userData?.surname}!`}
								{!userData?.name && "Congratulations!"}
							</h4>
							<p>
								{userData?.name && "You have successfully entered the site"}
								{!userData?.name &&
									"You have successfully registered on the site"}
							</p>
						</AlertMessage>
					)}
				</>
			)}
		</>
	)
}
