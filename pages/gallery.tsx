import { InferGetServerSidePropsType } from "next";

import * as fs from "fs";

import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import ImageCarousel from "../components/ImageCarousel"
import Article from "../components/Article";
import Footer from "../components/Footer";

export async function getServerSideProps() {
  const slides: string[] = fs.readdirSync("./public/carousel/").map(file => "/carousel/" + file)

  return {
    props: {
      slides: slides
    }
  }
}

export default function Gallery(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
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

          <ImageCarousel slides={props.slides} />
        </Article>
      </Layout>

      <Footer />
    </>
  );
}
