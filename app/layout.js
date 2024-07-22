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
      <head>
        {/* <title>WTechy: Digital Marketing Agency | Grow Your Brand Online</title> */}
        <meta title="WTechy: Digital Marketing Agency | Grow Your Brand Online"/>
        <meta name="description"
        content="Boost your business with WTechy's expert digital marketing services. From SEO to social media, we help you reach your target audience and drive growth. Visit now!"/>
      </head>
      <body>
        <HeaderNavbar/>
        {children}
       <Footer/>
      </body>
    </html>
  );
}


// export function generateMetaData(){
//   return{
//       title: "WTechy: Digital Marketing Agency | Grow Your Brand Online ",
//       description: "Boost your business with WTechy's expert digital marketing services. From SEO to social media, we help you reach your target audience and drive growth. Visit now!"
//   }
// }

