import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";

export const  routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses-details')
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>
            },
            {
                path: '/details/:id',
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])