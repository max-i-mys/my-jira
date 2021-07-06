import axios from "axios"
import { BASE_URL } from "./constants"

const crud = axios.create({
	baseURL: BASE_URL,
	headers: { "Content-Type": "application/json;charset=utf-8" },
})

crud.interceptors.response.use(
	response => {
		return [response.data, null]
	},
	error => {
		return [null, error]
	}
)

export async function getTodos() {
	return await crud.get()
}
