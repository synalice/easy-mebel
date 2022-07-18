import Link from "next/link";
import Image from "next/image";
import s from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className="flex justify-center my-2 bg-slate-500">
        <div className="hover:cursor-pointer select-none">
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
      </header>
      <nav className="grid grid-cols-2 grid-rows-2 gap-3 lg:grid-cols-4 lg:grid-rows-1">
        <MyLink href="/" cssClass={s.btn} text="Главная" />
        <MyLink href="/contacts" cssClass={s.btn} text="Контакты" />
        <MyLink href="/gallery" cssClass={s.btn} text="Галерея" />
        <MyLink href="/about" cssClass={s.btn} text="О нас" />
      </nav>
    </>
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
