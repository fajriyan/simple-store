import Checkout from "@/components/checkout";
import Footer from "@/components/static/footer";
import Navbar from "@/components/static/navbar";
import { Product } from "@/data/important";
import Cart from "../components/cart";

export default function Home() {


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
                        <Cart
                          id={p.id + "-" + generatedID}
                          img={p.image_1}
                          title={p.title}
                          price={p.price}
                          quantity={1}
                        />
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
