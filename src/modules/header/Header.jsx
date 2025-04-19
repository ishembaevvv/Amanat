import { useEffect, useState } from "react";
import scss from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../utils/constants/Constants";

export default function Header() {
	const [logined, setLogined] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const getLoginedUser = JSON.parse(localStorage.getItem("check_login"));
		getLoginedUser && setLogined(getLoginedUser);
	}, []);

	const CloseLogin = () => {
		navigate(PATH.login);

		useEffect(() => {
			localStorage.setItem(
				"check_login",
				JSON.stringify([
					{
						login: "ishembaev05",
						name: "Anatai",
						last_name: "ishembaev",
						phone: "+996700000000",
						email: "ish05@gmail.com",
						check_password: "ggg",
						password: "ggg",
						count: "Kyrgyzstan",
						region: "Karakol",
						isLogined: false,
					},
				])
			);
		});
	};

	return (
		<header className={scss.header}>
			<h3>LOGO</h3>

			<ul className={scss.list}>
				<li>Главная</li>
				<li>Заявки</li>
			</ul>

			<a
				style={
					logined.isLogined == false
						? { color: "transparent" }
						: { color: "var(--white)" }
				}
				onClick={e => CloseLogin(e.preventDefault())}
				className={scss.logout}
			>
				Выйти
			</a>
		</header>
	);
}
