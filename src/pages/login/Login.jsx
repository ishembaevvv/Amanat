import scss from "./Login.module.scss";
import { PATH } from "../../utils/constants/Constants";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";

export default function Login() {
	const navigate = useNavigate();

	return (
		<div className={scss.formContainer}>
			<p className={scss.title}>Войти</p>

			<form className={scss.form}>
				<Input type="text" variant="default" placeholder="Логин" />
				<Input type="password" variant="default" placeholder="Пароль" />
				<Button variant="sumbit" text="Войти" />
			</form>

			<span className={scss.pageLink}>Забыл пароль?</span>
		</div>
	);
}
