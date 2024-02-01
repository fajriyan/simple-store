"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Checkout = ({ id, title, price, quantity }) => {
  const router = useRouter();

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

  const onCheckoutLink = async () => {
    const dataLink = {
      id,
      title,
      price,
      quantity,
    };
    const res = await fetch("/api/pay-link", {
      method: "POST",
      body: JSON.stringify(dataLink),
    });
    const requestData = await res.json();
    if (confirm(`Checkout produk : ${title}?`) == true) {
      router.push(requestData.links.payment_url);
    } else {
    }
  };

  return (
    <>
      <button
        onClick={onCheckout}
        className="mt-2 bg-slate-900 hover:scale-105 transition-all duration-300 px-3 py-2 text-xs font-medium uppercase tracking-wide text-white rounded-md flex items-center gap-2"
      >
        Checkout
      </button>
      <button onClick={onCheckoutLink}>link</button>
    </>
  );
};

export default Checkout;
