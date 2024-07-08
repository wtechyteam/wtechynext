import { Inter } from "next/font/google";
import "./globals.css";
import "./../public/assets/styles/customStyle.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../public/assets/styles/homepageStyle.scss";
import "./../public/assets/styles/mixins.scss";
import "./../public/assets/styles/aboutPageStyle.scss";

import HeaderNavbar from "./header/header";
import Footer from "./footer/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        {children}
       
      </body>
    </html>
  );
}
