import { useEffect, useState } from "react";
import scss from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../utils/constants/Constants";

export default function Login() {
	const [logined, setLogined] = useState([]);
	const [register, setRegister] = useState([]);
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const clickLogin = () => {
		setRegister({ login: login, password: password });

		logined.map(item => {
			if (register.login == item.login && register.password == item.password)
				navigate(PATH.home);
		});
	};

	useEffect(() => {
		const getLoginedUser = JSON.parse(localStorage.getItem("check_login"));
		getLoginedUser && setLogined(getLoginedUser);
	}, [register]);

	logined.map(item => {
		if (item.isLogined == true) {
			navigate(PATH.home);
		}
	});

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
	}, [logined]);

	return (
		<div className={scss.formContainer}>
			<p className={scss.title}>Войти</p>

			<form className={scss.form}>
				<input
					onChange={e => setLogin(e.target.value)}
					type="text"
					className={scss.input}
					placeholder="Логин"
				/>
				<input
					onChange={e => setPassword(e.target.value)}
					type="password"
					className={scss.input}
					placeholder="Пароль"
				/>
				<button
					onClick={e => clickLogin(e.preventDefault())}
					className={scss.formBtn}
				>
					Войти
				</button>
			</form>

			<span className={scss.pageLink}>Забыл пароль?</span>
		</div>
	);
}
