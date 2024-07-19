import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteTransaction } from "../create/_lib/action";

export default function DeleteButton({ id }) {
  return (
    <form action={deleteTransaction.bind(null, id)}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
