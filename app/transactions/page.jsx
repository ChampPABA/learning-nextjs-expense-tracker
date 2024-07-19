import CreateButton from "./_components/create-button";
import Pagination from "./_components/pagination";
import Search from "./_components/search";

import { fetchSearchTotal } from "../libs/data";
import TransactionList from "./_components/transaction-list";
import { TableSkeleton } from "../_components/skeleton";
import { Suspense } from "react";

export const metadata = {
  title: "Transactions",
};

export default async function Page({ searchParams }) {
  const search = searchParams.search || "";
  const page = +searchParams.page || 1;

  const totalTransactions = await fetchSearchTotal(search);
  // console.log(totalTransactions);

  return (
    <main className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Transactions</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search transactions..." />
        <CreateButton />
      </div>
      <Suspense fallback={<TableSkeleton />}>
        <TransactionList search={search} page={page} />
      </Suspense>

      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={Math.ceil(totalTransactions / 5)} />
      </div>
    </main>
  );
}
