import {
  fetchMostCategoryExpense,
  fetchMostCategoryTransaction,
  fetchTotalExpense,
  fetchTotalTransaction,
} from "../libs/data";
import SummaryCard from "./summary-card";

export default async function AllSummary() {
  const [
    totalExpense,
    totalTransaction,
    totalFoodExpense,
    totalFoodTransaction,
  ] = await Promise.all([
    fetchTotalExpense(),
    fetchTotalTransaction(),
    fetchMostCategoryExpense(),
    fetchMostCategoryTransaction(),
  ]);
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <>
      <SummaryCard
        title="Expense"
        type="expense"
        value={new Intl.NumberFormat("en-US", {
          minimumFractionDigits: 2,
        }).format(totalExpense)}
      />
      <SummaryCard
        title="Transactions"
        type="transaction"
        value={totalTransaction}
      />
      <SummaryCard
        title="Food Expense"
        type="categoryExpense"
        value={new Intl.NumberFormat("en-US", {
          minimumFractionDigits: 2,
        }).format(totalFoodExpense.totalExpense)}
      />
      <SummaryCard
        title="Food Transactions"
        type="categoryTransaction"
        value={totalFoodTransaction.totalTransaction}
      />
    </>
  );
}
