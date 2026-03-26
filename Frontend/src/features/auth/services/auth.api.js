import axios from "axios"

const API = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true
})

export const login = async (data) => {
  const res = await API.post("/auth/login", data)
  return res.data
}

export const register = async (data) => {
  const res = await API.post("/auth/register", data)
  return res.data
}

export const logout = async () => {
  const res = await API.post("/auth/logout")
  return res.data
}

export const getMe = async () => {
  const res = await API.get("/auth/me")
  return res.data
}