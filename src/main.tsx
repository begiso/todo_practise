import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToDoListPage } from "./pages/ToDoListPage.tsx";
import "./assets/css/normalize.css";
import "./assets/css/style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage.tsx";
import { NotFound } from "./pages/404.tsx";
import { ItemDescription } from "./pages/ItemDescription.tsx";
import { Layout } from "./layouts/Layout.tsx";
import { ToDo } from "./models/todo-item.ts";

const todos: ToDo[] = [
  {
    id: 0,
    text: "Первое действие",
    isDone: false,
  },
  {
    id: 1,
    text: "Второе действие",
    isDone: true,
  },
  {
    id: 2,
    text: "Третье действие",
    isDone: false,
  },
  {
    id: 3,
    text: "Четвертое действие",
    isDone: true,
  },
];

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <HomePage todos={todos} />,
        },
        {
          path: "/todo",
          element: <ToDoListPage />,
        },
        {
          path: "/list/:id",
          element: <ItemDescription todos={todos} />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  { basename: "/app" }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
