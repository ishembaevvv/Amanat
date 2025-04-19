import Header from "../../../modules/header/Header";
import { Outlet } from "react-router-dom"
import scss from "./App.module.scss";

export default function App() {
	return (
		<div className={scss.app}>
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	)
}
