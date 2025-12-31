// import CategoryList from "@/features/categories/categoryList"
import CategoryCreateForm from "@/features/categories/categoryCreateForm"
import CategoryUpdateForm from "@/features/categories/categoryUpdateForm"

export const categoryRoutes = [
  {
    path: "categories",
    children: [
    //   {
    //     index: true,
    //     element: <CategoryList />,
    //   },
      {
        path: "create",
        element: <CategoryCreateForm />,
      },
      {
        path: ":id/update",
        element: <CategoryUpdateForm />,
      },
    ],
  },
]
