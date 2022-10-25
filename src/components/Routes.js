import { createBrowserRouter } from "react-router-dom";
import Course from "../Courses/Course";
import Faq from "../FAQ/Faq";
import Main from "../Main/Main";
import Theme from "../Theme/Theme";
import Home from "./Home/Home";
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [{
            path: '/',
            element: <Home></Home>

        },
        {
            path: '/home',
            element: <Home></Home>

        },
        {
            path: '/courses',
            element: <Course></Course>

        },
        {
            path: '/faq',
            element: <Faq></Faq>

        },
        {
            path: '/theme',
            element: <Theme></Theme>

        }

        ]
    }

])