import Button from "../../ui/button/Button";
import { PATH } from "../../utils/constants/Constants";
import scss from "./Header.module.scss";
import { useNavigate } from "react-router-dom";

export default function Header() {
	const navigate = useNavigate();

	return (
		<header className={scss.header}>
			<h3>LOGO</h3>

			<ul className={scss.list}>
				<li onClick={() => navigate(PATH.home)}>Главная</li>
				<li onClick={() => navigate(PATH.orders)}>Заявки</li>
			</ul>

			<Button
				variant="login"
				text="Войти"
				onClick={() => navigate(PATH.login)}
			/>
		</header>
	);
}
