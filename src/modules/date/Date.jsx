import Button from "../../ui/button/Button"
import Input from "../../ui/input/Input"
import scss from './Date.module.scss'

export default function Date() {
	return (
		<div className={scss.date}>
			<h3 className={scss.title}>Дневной баланс</h3>
			<div className={scss.dates}>
				<Input type="date" />
				<Input type="date" />
			</div>

			<Button text="Поиск" variant="sumbit" />
		</div>
	)
}
