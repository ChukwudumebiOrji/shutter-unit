import { createBrowserRouter, RouteObject } from "react-router-dom"
import Gallery from "../components/pages/gallery"
import Contact from "../components/pages/contact"
import About from "../components/pages/about"
import Collection, { collectionLoader } from "../components/pages/collection"
import Layout from "../components/layout/Layout"

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Gallery /> },
      {
        path: "collections/:collectionId",
        element: <Collection />,
        loader: collectionLoader,
        //   errorElement: <Error />, action: async ()=>{}
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
