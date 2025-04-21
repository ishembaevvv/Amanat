import { useState } from "react";
import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import scss from "./Edit.module.scss";

export default function Edit({ setModal }) {
	const [photo, setPhoto] = useState(null);

	const hadlePhoto = e => {
		const file = e.target.files[0];

		if (file) setPhoto(URL.createObjectURL(file));
	};

	return (
		<div className={scss.edit}>
			<h3 className={scss.title}>Заявка</h3>
			<b className={scss.desc}>Отправитель</b>
			<p className={scss.miniTitle}>Адрес</p>
			<Input type="text" />
			<Button text="+ Дополнительные данные" variant="default" />

			<p className={scss.miniTitle}>Контакт</p>
			<Button text="+ Дополнительные данные" variant="default" />
			<Input type="text" />

			<b className={scss.desc}>Отправитель</b>
			<p className={scss.miniTitle}>Куда</p>
			<Input type="text" />
			<Button text="+ Дополнительные данные" variant="default" />
			<p className={scss.miniTitle}>Контакт</p>
			<Input type="text" />

			<b className={scss.desc}>Отправитель</b>
			<Button text="+ Дополнительные данные" variant="default" />
			<p className={scss.miniTitle}>Количество</p>
			<Input type="number" defaultValue={0} />
			<p className={scss.miniTitle}>Стоимость доставки</p>
			<Input type="number" defaultValue={0} />
			<p className={scss.miniTitle}>Оплачено наличными</p>
			<Input type="number" defaultValue={0} />
			<p className={scss.miniTitle}>Оплачено без наличными</p>
			<Input type="number" defaultValue={0} />
			<p className={scss.miniTitle}>Выкуп</p>
			<Input type="number" defaultValue={0} />
			<p className={scss.miniTitle}>Долг покупателя</p>
			<Input type="number" defaultValue={0} />

			<div className={scss.photo}>
				<p className={scss.miniTitle}>Выбрать фото</p>
				{photo == null ? (
					""
				) : (
					<div className={scss.image}>
						<img src={photo} alt="" />
					</div>
				)}
				<Input type="file" onChange={hadlePhoto} />
			</div>

			<p className={scss.miniTitle}>Комментарий</p>
			<Input type="text" />

			<div className={scss.btns}>
				<Button
					text="отмена"
					variant="default"
					onClick={() => setModal(false)}
				/>
				<Button text="ок" variant="sumbit" onClick={() => setModal(false)} />
			</div>
		</div>
	);
}
