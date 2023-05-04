import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Authentication/Login/Login";
import Registration from "../pages/Authentication/Registration/Registration";
import MainLayout from "../layouts/MainLayout";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
				loader: () => fetch('./data.json')
			},
			{
				path: 'login',
				element: <Login></Login>
			},
			{
				path: 'registration',
				element: <Registration></Registration>
			},
			{
				path: 'blog',
				element: <Blog></Blog>
			},
			{
				path: 'about',
				element: <About></About>
			}
		]
	}
]);