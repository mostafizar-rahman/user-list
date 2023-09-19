import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Profile from "../Pages/Profile/Profile";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/profile",
        element:<Profile/>
    }
])