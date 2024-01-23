import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import ProjectsDetailsPage from "../Pages/Projects/ProjectsDetailsPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Gallery from "../Pages/Dashboard/Gallery/Gallery";



const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    children: [

        {
            path: '/',
            element: <Home />
        },
        {
            path: '/',
            element: <Projects />,

        },

        {
            path: '/products/:brand_name',
            element: <ProjectsDetailsPage />,
            loader: () => fetch('Projects.json')
        },
    ]

},
{
    path: '/dashboard',
    element: <Dashboard />,
    children: [
        {
            path: '/dashboard/gallery',
            element: <Gallery />
        },
        {
            path: '/dashboard/user',
            element: <Gallery />
        },
    ]

},
])

export default router;
