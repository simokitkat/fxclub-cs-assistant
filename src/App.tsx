import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import HomePage from "./pages/HomePage";
import LinkDecoder from "./pages/LinkDecoder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "link-decoder", element: <LinkDecoder /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
