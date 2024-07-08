import { Inter } from "next/font/google";
import "./globals.css";
import "./../public/assets/styles/customStyle.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../public/assets/styles/homepageStyle.scss"
import "./../public/assets/styles/mixins.scss"
import "./../public/assets/styles/aboutPageStyle.scss";
import "./../App.scss"

import HeaderNavbar from "./header/header";
import Footer from "./footer/footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wtechy",
  description: "Digital Marketing Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderNavbar/>
        {children}
        <Footer/>
        </body>

    </html>
  );
}
