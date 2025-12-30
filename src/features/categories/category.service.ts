import { api } from "./api"
import type { CategoryFormValues } from "./category.schema"

export const createCategory = async (payload: CategoryFormValues) => {
  const res = await api.post("/categories", payload)
  return res.data
}
