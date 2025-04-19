import scss from "./Button.module.scss";

export default function Button({ variant, text, onClick }) {
	return (
		<button className={scss[variant]} onClick={onClick}>
			{text}
		</button>
	);
}
