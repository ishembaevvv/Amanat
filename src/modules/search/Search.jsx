import scss from "./Seardh.module.scss";
import Input from "../../ui/input/Input";
import Button from "../../ui/button/Button";
import { IoIosSearch } from "react-icons/io";

export default function Search() {
	return (
		<div className={scss.search}>
			<div className={scss.header}>
				<h2>Заявки</h2>
			</div>

			<div className={scss.filter}>
				<select defaultChecked="false">
					<option value="true">Готов доставке</option>
					<option value="false">Забрал</option>
				</select>
				<Button text="+ Создать" variant="sumbit" />
			</div>

			<div className={scss.container}>
				<Input variant="search" placeholder="Поиск по номеру телефона" />
				<Button variant="search" text={<IoIosSearch />} />
			</div>

			<div className={scss.footer}>
				<Input type="checkbox" />
				<label for="checkbox">Выбрать всё</label>
			</div>
		</div>
	);
}
