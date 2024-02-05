import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b mb-4">
      <div className="container mx-auto h-[60px] flex items-center justify-between">
        <Link href={"/"} className="font-bold">
          <img
            width={35}
            src={
              "https://raw.githubusercontent.com/fajriyan/simple-payment/main/public/logo.png"
            }
          />
        </Link>
        <div className="flex gap-2">
          <Link
            href={"/cart"}
            className="border py-2 px-4 rounded-md hover:bg-slate-100"
          >
            Keranjang
          </Link>
          <Link
            href={"/cart"}
            className="border py-2 px-4 rounded-md hover:bg-slate-100"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
