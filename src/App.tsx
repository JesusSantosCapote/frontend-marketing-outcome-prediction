import './App.css'
import { Layout } from './components/layout/Layout'
import { Predict } from './pages/Predict';
import { AboutUs } from './pages/AboutUs';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Predict /></Layout>,
  },
  {
    path: "/about-us",
    element: <Layout><AboutUs /></Layout>
  }
]);

function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
