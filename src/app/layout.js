import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: 'e-bazar - Online Shopping for Electronics, Fashion, Home & More',
  description:
    'Shop at e-bazar for the best deals on electronics, fashion, home goods, and more. Enjoy fast delivery, easy returns, and secure payments.',
  keywords: ['e-bazar', 'online shopping', 'electronics', 'fashion', 'home goods', 'deals', 'discounts'],
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
        <Footer />
      </body>
    </html>
  );
}
