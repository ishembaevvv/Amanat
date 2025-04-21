import Date from "../../modules/date/Date";
import FinanceTable from "../../modules/financeTable/FinanceTable";
import Input from "../../ui/input/Input";
import { data } from "../../utils/constants/Constants";
import scss from "./Finance.module.scss";

export default function Finance() {
	return (
		<div className={scss.finance}>
			<Date />
			<FinanceTable />
		</div>
	);
}
