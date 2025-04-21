import { PATH } from "../../utils/constants/Constants";
import scss from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Header() {
	const navigate = useNavigate();

	return (
		<header className={scss.header}>
			<img src={logo} alt="logo" />

			<ul className={scss.list}>
				<li onClick={() => navigate(PATH.home)}>Главная</li>
				<li onClick={() => navigate(PATH.finance)}>Финансы</li>
				<li onClick={() => navigate(PATH.orders)}>Заявки</li>
			</ul>

			<div className={scss.container}></div>
		</header>
	);
}
