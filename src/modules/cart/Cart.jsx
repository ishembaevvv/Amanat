import { useState } from "react";
import Button from "../../ui/button/Button";
import { data } from "../../utils/constants/Constants";
import scss from "./Cart.module.scss";
import {
	FaArrowLeft,
	FaArrowRight,
	FaPhoneAlt,
	FaMoneyBillAlt,
	FaClock,
	FaPen,
} from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import Edit from "../edit/Edit";
import Input from "../../ui/input/Input";

export default function Cart() {
	const [modal, setModal] = useState(false);
	const [сheck, setСheck] = useState(false);


	return (
		<div className={scss.container}>
			{modal ? <Edit setModal={setModal} /> : ""}
			{data.map((item, index) => {
				return (
					<div key={index} className={scss.card}>
						<div className={scss.header}>
							<p>
								{item.number}: id {item.id} {item.startLoc}-{item.endLoc}
							</p>

							<Input type="checkbox" checked={true} variant="checkbox" />
						</div>

						<ul className={scss.list}>
							<li>
								<FaArrowRight color="greenyellow" size={24} /> Amanat
							</li>
							<li>
								<FaArrowLeft color="yellow" size={24} /> {item.endLoc}
							</li>
							<li>
								<FaPhoneAlt color="greenyellow" size={24} /> {item.clientNum}
							</li>
							<li>
								<FaPhoneAlt color="yellow" size={24} /> {item.shopNum}
							</li>
							<li>
								<FaMoneyBillAlt color="yellow" size={24} /> {item.price}
							</li>
							<li>
								<FaClock color="blue" size={24} /> {item.date}
							</li>
							<li>
								<IoSpeedometerOutline color="green" size={24} />{" "}
								{item.status == true ? "Готов к отправке" : "Ожидание"}
							</li>
						</ul>

						<div className={scss.buttons}>
							<Button
								variant="default"
								text={<FaPen color="#000" />}
								onClick={() => setModal(true)}
							/>
							<Button variant="sumbit" text="Возрат" />
						</div>
					</div>
				);
			})}
		</div>
	);
}
