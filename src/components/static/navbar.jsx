import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b mb-4">
      <div className="container mx-auto h-[60px] flex items-center justify-between">
        <Link href={"/"} className="font-bold">
          Toko Buku
        </Link>
        <Link
          href={"/cart"}
          className="border py-2 px-4 rounded-md hover:bg-slate-100"
        >
          Keranjang
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
