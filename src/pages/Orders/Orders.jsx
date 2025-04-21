import scss from "./Orders.module.scss";
import Search from "../../modules/search/Search";
import Cart from "../../modules/cart/Cart";
import Edit from "../../modules/edit/Edit";

export default function Orders() {
	return (
		<div className={scss.orders}>
			<Search />
			<Cart />
		</div>
	);
}
