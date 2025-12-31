 


import { api } from "./api"


import type { CategoryFormValues } from "./category.schema"

/* CREATE */
export const createCategory = async (payload: CategoryFormValues) => {
  const res = await api.post("/categories", payload)
  return res.data
}

/* GET BY ID */
export const getCategoryById = async (id: string) => {
  const res = await api.get(`/categories/${id}`)
  return res.data
}

/* UPDATE */
export const updateCategory = async (
  id: string,
  payload: CategoryFormValues
) => {
  const res = await api.patch(`/categories/${id}`, payload)
  return res.data
}

/* DELETE */
export const deleteCategory = async (id: string) => {
  const res = await api.delete(`/categories/${id}`)
  return res.data
}
