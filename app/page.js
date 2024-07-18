import Image from "next/image";
import styles from "./page.module.css";
import Homepage from './home/page';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <>
   <Homepage/>
   <SpeedInsights/>
    </>
  );
}
