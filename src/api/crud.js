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

export async function createUser(data) {
	return await crud.post("/users", data)
}
export async function getTodos(uid) {
	return await crud.get(`/todos?userId=${uid}`)
}
export async function addTodo(data) {
	return await crud.post("/todos", data)
}
export async function updateTodo(id, data) {
	return await crud.patch(`/todos/${id}`, data)
}
export async function deleteTodo(id) {
	return await crud.delete(`/todos/${id}`)
}
