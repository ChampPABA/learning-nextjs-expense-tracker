import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1 className="text-red-500">
        404 Transaction with this id was not found !!!
      </h1>
      <Link href="/transactions">Go to Transactions Page</Link>
    </>
  );
}
