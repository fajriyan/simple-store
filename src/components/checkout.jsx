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
      <div className="mt-2 flex items-center gap-2">
        <a href="#pay">
          <button
            onClick={onCheckout}
            className="bg-slate-900 hover:scale-105 transition-all duration-300 px-3 py-2 text-xs font-medium uppercase tracking-wide text-white rounded-md "
          >
            Checkout
          </button>
        </a>
        <a href="#pay-link">
          <button
            onClick={onCheckoutLink}
            className="bg-slate-900 hover:scale-105 transition-all duration-300 px-2 py-2 text-xs font-medium uppercase tracking-wide text-white rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-link-45deg"
              viewBox="0 0 16 16"
            >
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
            </svg>
          </button>
        </a>
      </div>
    </>
  );
};

export default Checkout;
