import { Suspense } from "react";
import LatestTransaction from "./_components/latest-transaction";
import SummaryCard from "./_components/summary-card";
import {
  fetchMostCategoryExpense,
  fetchMostCategoryTransaction,
  fetchTotalExpense,
  fetchTotalTransaction,
} from "./libs/data";
import { TransactionsSkeleton } from "./_components/skeleton";

export default async function Page() {
  const totalExpense = await fetchTotalExpense();
  const totalTransaction = await fetchTotalTransaction();
  const totalFoodExpense = await fetchMostCategoryExpense();
  const totalFoodTransaction = await fetchMostCategoryTransaction();

  return (
    <main>
      <div className="flex w-full items-center justify-between mb-4">
        <h1 className="text-2xl">Dashboard</h1>
      </div>
      <div className="grid grid-cols-4 gap-6">
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
      </div>
      <div className="mt-6 pb-12">
        <Suspense fallback={<TransactionsSkeleton />}>
          <LatestTransaction />
        </Suspense>
      </div>
    </main>
  );
}
