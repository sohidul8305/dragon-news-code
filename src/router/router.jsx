import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
{
    path: "/",
    element: <HomeLayout></HomeLayout>,
},
{
    path: "/auth",
    element: <h2>Auththiication alyout</h2>,
},
{
    path: "/news",
    element: <h2>News Layout</h2>,
},
{
    path: "/*",
    element: <h2>Erroe 404</h2>,
},

]);
export default router;