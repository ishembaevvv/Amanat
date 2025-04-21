import scss from "./Input.module.scss";

export default function Input({ type, variant, placeholder, onChange, defaultValue }) {
	return (
		<input
			type={type}
			className={scss[variant]}
			variant={variant}
			placeholder={placeholder}
			onChange={onChange}
			value={defaultValue}
		/>
	);
}
