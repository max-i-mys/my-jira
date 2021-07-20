export function getStatus(status) {
	switch (status) {
		case 1:
			return "To do"
		case 2:
			return "In progress"
		case 3:
			return "Code review"
		default:
			return "Done"
	}
}
export function getErrorMessage(message) {
	switch (message) {
		case "Firebase: Error (auth/wrong-password).":
		case "Firebase: Error (auth/user-not-found).":
			return "wrongAuth"
		case "Firebase: Error (auth/email-already-in-use).":
			return "usedEmail"
		case "Firebase: Error (auth/weak-password).":
			return "weakPassword"
		default:
			return "authError"
	}
}
