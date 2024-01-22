"use client";

import { useEffect } from "react";

const Checkout = ({ id, title, price, quantity }) => {
  useEffect(() => {
    const snapMidtrans = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.NEXT_PUBLIC_CLIENT;

    const script = document.createElement("script");
    script.src = snapMidtrans;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);

    console.log("snap script load success");
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const onCheckout = async () => {
    const datas = {
      id,
      title,
      price,
      quantity,
    };
    const responses = await fetch("/api/token", {
      method: "POST",
      body: JSON.stringify(datas),
    });

    const requestData = await responses.json();
    window.snap.pay(requestData.token);
  };

  return (
    <>
      <button
        onClick={onCheckout}
        className="mt-2 bg-slate-900 hover:scale-105 transition-all duration-300 px-3 py-2 text-xs font-medium uppercase tracking-wide text-white rounded-md flex items-center gap-2"
      >
        Checkout
      </button>
    </>
  );
};

export default Checkout;
