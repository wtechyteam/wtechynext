import Image from "next/image";
import styles from "./page.module.css";
import Homepage from './home/page';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
    <link rel="shortcut icon" href="/images/favicon.ico" />
    </Head>
   <Homepage/>
   <SpeedInsights/>
    </>
  );
}
