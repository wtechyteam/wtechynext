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

      <link rel="icon" href="/favicon.ico" />

        {/* <title>WTechy: Digital Marketing Agency | Grow Your Brand Online</title> */}
        <meta title="WTechy: Digital Marketing Agency | Grow Your Brand Online"/>
        <meta name="description"
        content="Boost your business with WTechy's expert digital marketing services. From SEO to social media, we help you reach your target audience and drive growth. Visit now!"/>
      
      <meta name="google-site-verification" content="E8rAJvSHBFK662FDIdBiIwwlFycqsH9kOAzfa6jNpnc" />

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-1ZWHY1Z5SB"></script> 

     {/* Include the Google Analytics script */}
     <script
          id="google-analytics"
          strategy="afterInteractive" // Load script after page is interactive
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1ZWHY1Z5SB');
          `}
        </script>
      
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

