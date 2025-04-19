import React, { useEffect, useState } from "react";
import { data } from "../../utils/constants/Constants";
import Card from "../../ui/card/Card";

export default function Home() {
	const [logined, setLogined] = useState([]);

	useEffect(() => {
		const getLoginedUser = JSON.parse(localStorage.getItem("check_login"));
		getLoginedUser && setLogined(getLoginedUser);
	}, []);

	useEffect(() => {
		localStorage.setItem(
			"check_login",
			JSON.stringify([
				{
					login: "ishembaev05",
					name: "Anatai",
					last_name: "ishembaev",
					phone: "+996700000000",
					email: "ish05@gmail.com",
					check_password: "ggg",
					password: "ggg",
					count: "Kyrgyzstan",
					region: "Karakol",
					isLogined: true,
				},
			])
		);
	});

	

	data.map(item => {
		return <Card item={item} />
	})
}
