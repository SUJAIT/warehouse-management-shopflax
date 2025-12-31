import { useEffect, useState } from "react"
import { getCategoryById } from "../category.service"

export const useCategoryById = (id?: string) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return

    setLoading(true)
    getCategoryById(id)
      .then((res: any) => setData(res))
      .finally(() => setLoading(false))
  }, [id])

  return { data, loading }
}
