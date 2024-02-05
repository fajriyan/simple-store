import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Toko Buku Fajriyan",
  description: "Menyediakan Buku Terbaik dengan Harga Murah",
  alternates: {
    canonical: `/`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="https://raw.githubusercontent.com/fajriyan/simple-payment/main/public/favicon.ico"
        sizes="any"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
