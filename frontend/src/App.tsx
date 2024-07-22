import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import HomePage from "./pages/HomePage";
import LinkDecoderPage from "./pages/LinkDecoderPage";
import AIAssistantPage from "./pages/AIAssistantPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "link-decoder", element: <LinkDecoderPage /> },
      { path: "ai-assistant", element: <AIAssistantPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
