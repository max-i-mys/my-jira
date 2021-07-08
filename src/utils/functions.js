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
