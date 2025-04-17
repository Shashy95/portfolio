import Head from "next/head";
import "@/styles/globals.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Portfolio | Sharon Novatus</title>
        <meta name="description" content="Portfolio of Sharon Novatus, a passionate software developer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout><Component {...pageProps} /></Layout>
      
    </>
  );

}
