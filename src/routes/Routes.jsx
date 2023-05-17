import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "../pages/shared/Loader/Loader";

const ErrorPage = lazy(() => import("../pages/ErrorPage/ErrorPage"));
const Login = lazy(() => import("../pages/Authentication/Login/Login"));
const Registration = lazy(() => import("../pages/Authentication/Registration/Registration"));
const MainLayout = lazy(() => import("../layouts/MainLayout"));
const Blog = lazy(() => import("../pages/Blog/Blog"));
const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const RecipeDetails = lazy(() => import("../pages/RecipeDetails/RecipeDetails"));
const PrivateRoute = lazy(() => import("./PrivateRoute"));
const PasswordReset = lazy(() => import("../pages/Authentication/PasswordReset/PasswordReset"));
const Profile = lazy(() => import("../pages/Authentication/Profile/Profile"));
const BlogPDF = lazy(() => import("../pages/Blog/BlogPDF"));

// import ErrorPage from "../pages/ErrorPage/ErrorPage";
// import Login from "../pages/Authentication/Login/Login";
// import Registration from "../pages/Authentication/Registration/Registration";
// import MainLayout from "../layouts/MainLayout";
// import Blog from "../pages/Blog/Blog";
// import Home from "../pages/Home/Home";
// import About from "../pages/About/About";
// import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
// import PrivateRoute from "./PrivateRoute";
// import PasswordReset from "../pages/Authentication/PasswordReset/PasswordReset";
// import Profile from "../pages/Authentication/Profile/Profile";
// import BlogPDF from "../pages/Blog/BlogPDF";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Suspense fallback={<Loader></Loader>}><Home></Home></Suspense>,
				// loader: () => fetch('https://chef-world-server.vercel.app/chefs')
			},
			{
				path: "/recipes/:id",
				element: <Suspense fallback={<Loader></Loader>}><PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute></Suspense>,
				loader: ({ params }) => fetch(`https://chef-world-server.vercel.app/recipes/${params.id}`)
			},
			{
				path: 'login',
				element: <Suspense fallback={<Loader></Loader>}><Login></Login></Suspense>
			},
			{
				path: 'registration',
				element: <Suspense fallback={<Loader></Loader>}><Registration></Registration></Suspense>
			},
			{
				path: 'password-reset',
				element: <Suspense fallback={<Loader></Loader>}><PasswordReset></PasswordReset></Suspense>
			},
			{
				path: 'profile',
				element: <Suspense fallback={<Loader></Loader>}><Profile></Profile></Suspense>
			},
			{
				path: 'blog',
				element: <Suspense fallback={<Loader></Loader>}><Blog></Blog></Suspense>
			},
			{
				path: 'pdf',
				element: <Suspense fallback={<Loader></Loader>}><BlogPDF></BlogPDF></Suspense>
			},
			{
				path: 'about',
				element: <Suspense fallback={<Loader></Loader>}><About></About></Suspense>
			}
		]
	}
]);