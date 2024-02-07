"use client";

const Cart = ({ id, img, title, price, quantity }) => {
  const onCart = () => {
    const qb = localStorage.getItem("cart");
    const qbb = JSON.parse(qb);
    const qu = qbb?.q || 0;

    console.log(qu);
    localStorage.setItem(
      "cart",
      JSON.stringify({
        id: id,
        image: img,
        title: title,
        prices: price,
        q: Number(quantity) + Number(qu),
      })
    );
    // localStorage.setItem("img", img);
    // localStorage.setItem("title", title);
    // localStorage.setItem("price", price);
    // localStorage.setItem("q", Number(qb) + Number(quantity));
    alert("berhasil");
  };

  return (
    <div>
      <button
        onClick={onCart}
        className="mt-2 bg-slate-900 hover:scale-105 transition-all duration-300 px-3 py-2 text-xs font-medium uppercase tracking-wide text-white rounded-md flex items-center gap-2"
      >
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
  );
};

export default Cart;
