import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App/App";
import Login from "../../modules/login/Login";
import { PATH } from "../../utils/constants/Constants";
import Home from "../../modules/home/Home";

export const AppRouter = createBrowserRouter([
	{
		path: PATH.login,
		element: <App />,
		children: [
			{
				path: PATH.login,
				element: <Login />,
			},
			{
				path: "/home",
				element: <Home />,
			},
		],
	},
]);
