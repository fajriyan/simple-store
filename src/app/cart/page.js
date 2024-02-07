import Navbar from "@/components/static/navbar";

const Cart = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        <h1>Keranjang</h1>

        <div className="flex">
          <div className="w-[25%]">
            <img src="./public/logo.png" alt="asdasd" />
          </div>
          <div className="w-[70%] pr-10">
            <h2 className="font-semibold">Buku Belajar Bla Bla</h2>

            <p className="text-sm">
              buku latihan menulis hijaiyah Al-quran Buku Latihan Menulis
              Hijaiyah Al-Quran Buku ini dapat melatih anak untuk menulis huruf
              hijaiyah yang ada di dalam Al-Quran.
            </p>
            <div className="py-2 border-t mt-2 flex items-center justify-between">
              <div className="">
                <input
                  type="number"
                  className="border border-slate-500 w-11 rounded-md px-1 py-[4px] mr-4"
                  value={1}
                />
                <span className="font-medium">Rp 345.000,00</span>
              </div>
              <span className="font-medium">Rp 345.000,00</span>
            </div>
          </div>
          <div className="w-[10%]">
            <button>hapus</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
