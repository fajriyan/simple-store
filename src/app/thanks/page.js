import Link from "next/link";

const Thanks = () => {
  return (
    <div className="container mx-auto h-[100vh] flex items-center justify-center flex-col">
      <h1 className="text-xl font-semibold">
        Thank you for making a purchase.
      </h1>
      <div className="mt-5">
        <Link
          href={"/"}
          className="px-5 py-2 bg-lime-500 font-medium hover:ring-2 ring-slate-500"
        >
          Back to Shop
        </Link>
      </div>
    </div>
  );
};

export default Thanks;
