import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Profile from "../../Others/Profile";
import AllCourse from "../../Pages/AllCourse/AllCourse";
import Blog from "../../Pages/Blog/Blog";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Error from "../../Pages/Error/Error";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all-course',
                element: <AllCourse></AllCourse>,
                loader: () => fetch('https://mec-edu-server-foysal767.vercel.app/courses-details')
            },
            {
                path: '/course-category/:id/course-details',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://mec-edu-server-foysal767.vercel.app/course-category/${params.id}`)
            },
            {
                path: '/course/:id/course-details',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://mec-edu-server-foysal767.vercel.app/course/${params.id}`)
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/course-category/:id/checkout',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://mec-edu-server-foysal767.vercel.app/course-category/${params.id}`)
            },
            {
                path: '/course/:id/checkout',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://mec-edu-server-foysal767.vercel.app/course/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]

    },
    {
        path: '*',
        element: <Error></Error>
    }
])