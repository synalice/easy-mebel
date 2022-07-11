import Link from "next/link";
import Image from "next/image";
import s from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <div className="flex justify-center mb-2 mt-2 bg-yellow-600">
        <div className="hover:cursor-pointer">
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="Логотип компании"
              width="300%"
              height="100%"
              objectFit="contain"
            />
          </Link>
        </div>
      </div>
      <nav className="grid grid-cols-2 grid-rows-2 gap-3 lg:grid-cols-4 lg:grid-rows-1">
        <MyLink href="/" cssClass={s.btn} text="Главная" />
        <MyLink href="/contacts" cssClass={s.btn} text="Контакты" />
        <MyLink href="/gallery" cssClass={s.btn} text="Галерея" />
        <MyLink href="/about" cssClass={s.btn} text="О нас" />
      </nav>
    </div>
  );
}

function MyLink(
  { href, cssClass, text }: { href: string; cssClass: string; text: string },
) {
  return (
    <Link href={href}>
      <a className={cssClass}>{text}</a>
    </Link>
  );
}
