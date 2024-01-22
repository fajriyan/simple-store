import Checkout from "@/components/checkout";
import Footer from "@/components/static/footer";
import Navbar from "@/components/static/navbar";
import { Product } from "@/data/important";

export default function Home() {
  // const onCart = (url, ayat, namaSurat) => {
  //   toast.success("Simpan Berhasil");
  //   localStorage.setItem("url", url);
  //   localStorage.setItem("ayat", ayat);
  //   localStorage.setItem("namaSurat", namaSurat);
  // };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-3 md:px-0">
        <h1 className="text-xl font-semibold mb-1">
          Produk Rekomendasi dari Kami
        </h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {Product.map((p) => {
            const rupiah = (number) => {
              return new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(number);
            };

            const generatedID = "Z" + Math.random(19);

            return (
              <a href="#" className="group relative block">
                <div className="relative h-[350px] sm:h-[450px] rounded-md overflow-hidden ">
                  <img
                    src={p.image_1}
                    alt={"1" + p.title}
                    width={100}
                    height={100}
                    className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-all duration-700 "
                  />

                  <img
                    src={p.image_2}
                    alt={"2" + p.title}
                    width={100}
                    height={100}
                    className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>

                <div className="absolute inset-0 flex flex-col items-start justify-end p-3">
                  <div className="backdrop-blur-xl bg-white/50 hover:bg-white/60 p-3 w-full rounded-md">
                    <h2 className="text-md leading-5 capitalize font-semibold text-slate-900 ">
                      {p.title}
                    </h2>
                    <p className="mt-1.5  text-xs text-slate-900 ">
                      {p.description}
                    </p>
                    <hr className="border-slate-600 mt-2" />
                    <div className="flex items-center justify-between w-full">
                      <div className="flex gap-2">
                        <Checkout
                          id={p.id + "-" + generatedID}
                          title={p.title}
                          price={p.price}
                          quantity={1}
                        />
                        <button className="mt-2 bg-slate-900 hover:scale-105 transition-all duration-300 px-3 py-2 text-xs font-medium uppercase tracking-wide text-white rounded-md flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                          </svg>
                        </button>
                      </div>
                      <span className="text-lg font-bold">
                        {rupiah(p.price)}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
