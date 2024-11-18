import React from "react";

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

//pages.............
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import Chatbox from "../pages/chatbox/chatbox";
import Notification from "../pages/notification/Notification";

// Components.............
import Nav from "../components/nav/Nav";
import LeftBar from "../components/leftbar/LeftBar";
import RightBar from "../components/rightbar/RightBar";
import Notify from "../components/notify/notify";

export default function Layout(){

    // Feed.........
    const Feed =()=>{
        return (
            <>
            <Nav />
            <main>
                <LeftBar />
                <div className="container">
                    <Outlet />
                </div>
                <RightBar />
            </main>
            </>
        )
    }

    // Router..........
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Feed />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/profile/:id",
                    element: <Profile />,
                },
                {
                    path: "/chatbox/:id",
                    element: <Chatbox />,
                },
                {
                    path:"/notification",
                    element: <Notification />,
                }
            ]
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/signup",
            element: <Signup />
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}