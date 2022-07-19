import Head from "next/head";
import Article from "../components/Article";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import YandexMap from "../components/YandexMap";

export default function Contacts() {
  return (
    <>
      <Layout>
        <Head>
          <title>Easy Mebel | Контакты</title>
        </Head>

        <Header />

        <Article>
          <h2 className="pb-0">Адрес выставочного зала</h2>

          <p>
            <i>
              Балашиха, ш. Энтузиастов, 54А <br />
              ТЦ Галион, этаж 3, павильон 314Д
            </i>
          </p>

          <h2 className="mt-2 pb-0">Отдела продаж</h2>

          <p>
            Телефон:{" "}
            <a
              href="tel:+7(926)218-66-68"
              className="text-blue-700 clickableLink"
            >
              +7(926)218-66-68
            </a>
          </p>

          <h2 className="mt-2 pb-0">Отдела распила ЛДСП</h2>

          <p>
            Телефон:{" "}
            <a
              href="tel:+7(926)162-03-62"
              className="text-blue-700 clickableLink"
            >
              +7(926)162-03-62
            </a>
          </p>
          <h2 className="mt-2 pb-0">
            Часы работы
          </h2>
          <p>Ежедневно с <span className="">10:00</span> до <span>21:00</span></p>
        </Article>

        <Article>
          <YandexMap />
        </Article>
      </Layout>

      <Footer />
    </>
  );
}
