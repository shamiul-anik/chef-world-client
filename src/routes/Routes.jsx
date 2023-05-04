import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Authentication/Login/Login";
import Registration from "../pages/Authentication/Registration/Registration";
import MainLayout from "../layouts/MainLayout";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
				loader: () => fetch('http://localhost:5000/chefs')
			},
			{
				path: "/recipes/:id",
				element: <RecipeDetails></RecipeDetails>,
				loader: ({ params }) => fetch(`http://localhost:5000/recipes/${params.id}`)
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