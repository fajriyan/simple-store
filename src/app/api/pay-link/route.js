import { NextResponse } from "next/server";

export async function POST(req) {
  const { id, title, price, quantity } = await req.json();

  const secret = process.env.SECRET;
  const reqBase64 = Buffer.from(secret).toString("base64");

  console.log(id);
  console.log(price);
  console.log(title);
  console.log(quantity);

  const data = {
    item_details: [
      {
        id: id,
        name: title,
        price: price,
        quantity: quantity,
      },
    ],
    transaction_details: {
      order_id: id,
      gross_amount: price * quantity,
    },
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/payment-links`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Basic ${reqBase64}`,
    },
    body: JSON.stringify(data),
  });

  const links = await res.json();
  console.log(links);

  return NextResponse.json({ links });
}
