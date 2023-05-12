import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Authentication/Login/Login";
import Registration from "../pages/Authentication/Registration/Registration";
import MainLayout from "../layouts/MainLayout";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import PrivateRoute from "./PrivateRoute";
import PasswordReset from "../pages/Authentication/PasswordReset/PasswordReset";
import Profile from "../pages/Authentication/Profile/Profile";
import BlogPDF from "../pages/Blog/BlogPDF";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
				loader: () => fetch('https://chef-world-server.vercel.app/chefs')
			},
			{
				path: "/recipes/:id",
				element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>,
				loader: ({ params }) => fetch(`https://chef-world-server.vercel.app/recipes/${params.id}`)
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
				path: 'password-reset',
				element: <PasswordReset></PasswordReset>
			},
			{
				path: 'profile',
				element: <Profile></Profile>
			},
			{
				path: 'blog',
				element: <Blog></Blog>
			},
			{
				path: 'pdf',
				element: <BlogPDF></BlogPDF>
			},
			{
				path: 'about',
				element: <About></About>
			}
		]
	}
]);