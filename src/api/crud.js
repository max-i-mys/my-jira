import axios from "axios"
import { BASE_URL } from "./constants"

const crud = axios.create({
	baseURL: BASE_URL,
	headers: { "Content-Type": "application/json;charset=utf-8" },
})

export async function getTodos() {
	return await crud.get()
}
