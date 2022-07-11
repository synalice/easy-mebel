import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Main from "../components/Main";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

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

        <CallToAction text={"Позвонить нам"} phone={"+7(926)218-66-68"} />
      </Main>

      <Main>
        <h1 className="pb-2 text-xl text-center font-extrabold text-gray-800">
          Что мы производим
        </h1>
      
        <h2 className="mt-2 pb-2 text-lg text-left font-extrabold text-gray-800">
          КУХНИ
        </h2>
      
        <p className="mt-[-0.5rem]">
          Кухни без ручек, современные кухни, кухни со скошенными фасадами Аделькрайс, кухни с фасадами МДФ покрытое эмалью, МДФ в пленке, кухни с интегрированными ручками и профилем Gola.
        </p>
      
        <h2 className="mt-2 pb-2 text-lg text-left font-extrabold text-gray-800">
          ШКАФЫ КУПЕ
        </h2>
       
        <p className="mt-[-0.5rem]">
          Встроенные шкафы купе, отдельностоящие шкафы купе, шкафы для гостиной и спальни, шкафы в детскую и на балкон.
        </p>
       
        <h2 className="mt-2 pb-2 text-lg text-left font-extrabold text-gray-800">
          ДВЕРИ КУПЕ
        </h2>
      
        <p className="mt-[-0.5rem]">
          Двери купе с использованием профиля <i>&quot;Аристо&quot;</i>, <i>&quot;Командор&quot;</i>, <i>&quot;Риал Про&quot;</i>, <i>&quot;Модус&quot;</i>, <i>&quot;Тотал&quot;</i> и <i>&quot;Италюм&quot;</i>.
        </p>
      
        <p className="mt-8">
          Для шкафов купе и кухонь используем ЛДСП мировых лидеров таких как: <i>Egger</i>, <i>Kronospan</i>, <i>Kronostar</i> и другие. У нас самый большой выбор цветов ЛДСП.
        </p>
      </Main>
    
      <Main>
        <h1 className="pb-2 text-xl text-center font-extrabold text-gray-800">
          Мы так же производим распил и кромление деталей для других производителей мебели!
        </h1>
        
        <CallToAction text="Заказать распил" phone={"+7(926)162-03-62"} />
      </Main>

      <Footer />
    </Layout>
  );
}
