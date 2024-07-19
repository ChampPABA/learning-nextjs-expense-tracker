import { Suspense } from "react";

import {
  fetchMostCategoryExpense,
  fetchMostCategoryTransaction,
  fetchTotalExpense,
  fetchTotalTransaction,
} from "../libs/data";
import { CardSkeleton, TransactionsSkeleton } from "../_components/skeleton";
import LatestTransaction from "../_components/latest-transaction";
import SummaryCard from "../_components/summary-card";
import AllSummary from "../_components/all-summary";

export default async function Page() {
  return (
    <main>
      <div className="flex w-full items-center justify-between mb-4">
        <h1 className="text-2xl">Dashboard</h1>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {/* <SummaryCard
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
        /> */}
        <Suspense
          fallback={
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          }
        >
          <AllSummary />
        </Suspense>
        {/* <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton /> */}
      </div>
      <div className="mt-6 pb-12">
        <Suspense fallback={<TransactionsSkeleton />}>
          <LatestTransaction />
        </Suspense>
      </div>
    </main>
  );
}
