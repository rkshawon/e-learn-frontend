import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

// import { Provider } from "react-redux";
// import { store } from "../store/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Learn Landing Page",
  description:
    "Introducing Tailwind Course Landing Page, a versatile and engaging landing page template designed using Tailwind CSS and Material Tailwind.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Provider store={store}> */}
        <Navbar />
        {children}
        <Footer />
        {/* </Provider> */}
      </body>
    </html>
  );
}

// import { Roboto } from "next/font/google";

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "700", "900"],
//   display: "swap",
// });
