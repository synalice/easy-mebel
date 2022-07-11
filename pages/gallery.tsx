import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";

export default function Gallery() {
  return (
    <Layout>
      <Head>
        <title>Easy Mebel | Галерея</title>
      </Head>
      <Header />
    </Layout>
  );
}
