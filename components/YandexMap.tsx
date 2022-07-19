export default function YandexMap() {
  return (
    <>
      <div className="md:hidden block">
        <h2>Мы на карте</h2>
        <p className="text-center text-blue-700 clickableLink">
          <a href="https://yandex.ru/maps/-/CCUNrYCXkD">Ссылка</a>
        </p>
      </div>
      <div className="hidden md:block">
        <h2>Мы на карте</h2>

        <div className="border-4 border-gray-300">
          <script
            async
            type="text/javascript"
            charSet="utf-8"
            src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A3fb854baa7d0fba0a97f7c51481a1907471c72288db0ea5dc601c91c8b008034&amp;width=700&amp;height=400&amp;lang=ru_RU&amp;scroll=true"
          />
        </div>
      </div>
    </>
  );
}
