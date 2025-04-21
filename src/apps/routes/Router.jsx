import { createBrowserRouter } from "react-router-dom";
import { PATH } from "../../utils/constants/Constants";
import Layout from "../layout/Layout";
import Login from "../../pages/login/Login";
import Home from "../../pages/home/Home";
import Orders from "../../pages/Orders/Orders";
import Finance from "../../pages/finance/Finance";

export const AppRouter = createBrowserRouter([
	{
		path: PATH.home,
		element: <Layout />,
		children: [
			{
				path: PATH.home,
				element: <Home />
			},
			{
				path: PATH.login,
				element: <Login />
			},
			{
				path: PATH.orders,
				element: <Orders />
			},
			{
				path: PATH.finance,
				element: <Finance />
			},
		]
	},
]);
