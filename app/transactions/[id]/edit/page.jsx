import EditForm from "./_components/edit-form";

export const metadata = {
  title: "Edit Transaction",
};

export default function Page({ params }) {
  return (
    <main className="w-full">
      <div className="flex w-full items-center justify-between mb-6">
        <h1 className="text-2xl">Edit Transaction</h1>
      </div>
      <EditForm id={params.id} />
    </main>
  );
}
