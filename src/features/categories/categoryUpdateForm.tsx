import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { categorySchema } from "./category.schema"
import type { CategoryFormValues } from "./category.schema"
import { updateCategory } from "./category.service"
import { useCategoryById } from "./hooks/useCategoryById"

const CategoryUpdateForm = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const { data, loading } = useCategoryById(id!)

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
      slug: "",
      icon: "",
      sortOrder: 0,
      isActive: true,
    },
  })

  /* 🔁 Prefill form when data comes */
  useEffect(() => {
    if (data) {
      form.reset({
        name: data.name,
        slug: data.slug,
        icon: data.icon ?? "",
        sortOrder: data.sortOrder ?? 0,
        isActive: data.isActive ?? true,
      })
    }
  }, [data, form])

  const onSubmit = async (values: CategoryFormValues) => {
    try {
      await updateCategory(id!, values)
      navigate("/dashboard/categories")
    } catch (error) {
      console.error("Update failed", error)
    }
  }

  if (loading) return <p>Loading...</p>

  return (
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle>Update Category</CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Category name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Slug */}
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input placeholder="category-slug" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Icon */}
            <FormField
              control={form.control}
              name="icon"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Icon</FormLabel>
                  <FormControl>
                    <Input placeholder="mdi:phone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Sort Order */}
            <FormField
              control={form.control}
              name="sortOrder"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sort Order</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) =>
                        field.onChange(Number(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Active */}
            <FormField
              control={form.control}
              name="isActive"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel>Active</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Update Category
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default CategoryUpdateForm
