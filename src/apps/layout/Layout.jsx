import { Outlet } from "react-router-dom";
import Header from "../../modules/header/Header";
import scss from "./Loyout.module.scss";

export default function Layout() {
	return (
		<div className={scss.app}>
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	)
}
