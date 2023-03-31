import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/components/styles/Home.module.css";
import Header from "../components/layout/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Car Rent</title>
      </Head>
      <main>
        <Header />
      </main>
    </>
  );
}
