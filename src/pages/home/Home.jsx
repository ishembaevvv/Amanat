import React, { useEffect } from "react";
import { user } from "../../utils/constants/Constants";
import scss from "./Home.module.scss";
import axios from "axios";

export default function Home() {
	async function getData() {
		try {
			const response = await axios.get("http://192.168.1.104:5002")
			if (!response.ok) throw new Error("Ошибка");

			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		getData();
	}, []);

	return (
		<div className={scss.home}>
			<h2 className={scss.title}>Профиль</h2>

			{user.map((el, index) => {
				return (
					<div className={scss.info} key={index}>
						<img className={scss.avatar} src={el.avatar} alt="avatar" />
						<ul className={scss.list}>
							<h3 className={scss.desc}>Информация о пользователя</h3>
							<li>
								Тип пользователя: <b>Курьер</b>
							</li>
							<li>
								Логин: <b>{el.login}</b>
							</li>
							<li>
								Баланс: <b>{el.price}</b>
							</li>
							<li>
								Контакты: <b>{el.phone}</b>
							</li>
							<li>
								Имя: <b>{el.name}</b>
							</li>
							<li>
								Фамилия: <b>{el.lastName}</b>
							</li>
							<li>
								Локация: <b>{el.region}</b>
							</li>
						</ul>
					</div>
				);
			})}
		</div>
	);
}
