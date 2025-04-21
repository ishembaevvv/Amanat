import React, { useEffect } from "react";
import { user } from "../../utils/constants/Constants";
import scss from "./Home.module.scss";

export default function Home() {
	return (
		<div className={scss.home}>
			<h2 className={scss.title}>Профиль</h2>

			<div className={scss.container}>
				{user.map((el, index) => {
					return (
						<div className={scss.info} key={index}>
							<div className={scss.avatar}></div>
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
		</div>
	);
}
