import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Main from "../components/Main";
import CallToAction from "../components/CallToAction";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Easy Mebel | Главная</title>
      </Head>

      <Header />

      <Main>
        <h1 className="pb-2 text-xl text-center font-extrabold text-gray-800">
          Немного о нас
        </h1>
        <p>
          Мы занимаемся проектированием и производством красивой и современной мебели на заказ.
        </p>
      </Main>

      <CallToAction />
    </Layout>
  );
}
