import { Alert } from "react-bootstrap"

export default function AlertError(props) {
	return (
		<>
			<Alert variant={props.type}>
				<Alert.Heading>{props.children[0]}</Alert.Heading>
				{props.children[1]}
			</Alert>
		</>
	)
}
