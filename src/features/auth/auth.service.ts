import axios from "axios"

export const login = async (payload: {
  email: string
  password: string
}) => {
  const res = await axios.post(
    "http://localhost:8000/auth/login",
    payload
  )
  return res.data
}

// ✅ ADD THIS
export const logout = () => {
  localStorage.removeItem("token")
}
