import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import ImageCarousel from "../components/ImageCarousel"
import Article from "../components/Article";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";

export default function Gallery() {
  return (
    <>
      <Layout>
        <Head>
          <title>Easy Mebel | Галерея</title>
        </Head>

        <Header />

        <Article>
          <h1>Наши работы</h1>
          <p>Листайте в сторону, чтобы увидеть больше</p>
          <ImageCarousel />
        </Article>

        {/* <Article>
        <CallToAction text={"Позвонить нам"} phone={"+7(926)218-66-68"} />
      </Article> */}

      </Layout>

      <Footer />
    </>
  );
}
