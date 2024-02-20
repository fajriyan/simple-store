"use client";
import Navbar from "@/components/static/navbar";
import { data } from "autoprefixer";

const Cart = () => {
  const dataCart = localStorage.getItem("cart");
  const jsonCart = JSON.parse(dataCart);

  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        <h1>Keranjang</h1>

        <div className="">
          {jsonCart?.map((e) => (
            <>
              <div className="flex border-b mb-3 pb-3">
                <div className="w-[25%] pr-6">
                  <img
                    src={e.image}
                    alt="asdasd"
                    className="object-cover w-full h-40 object-top"
                  />
                </div>
                <div className="w-[70%] pr-10">
                  <h2 className="font-semibold">{e.title}</h2>
                  <div className="text-xs">{e.id}</div>

                  <div className="py-2 border-t mt-2 flex items-center justify-between">
                    <div className="">
                      <input
                        type="number"
                        className="border border-slate-500 w-11 rounded-md px-1 py-[4px] mr-4"
                        defaultValue={1}
                      />
                      <span className="font-medium">{e.prices}</span>
                    </div>
                    <span className="font-medium">{e.prices}</span>
                  </div>
                </div>
                <div className="w-[10%] ">
                  <button className="bg-slate-600 text-white w-full h-full">
                    hapus
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
