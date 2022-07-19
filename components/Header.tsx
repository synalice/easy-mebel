import Link from "next/link";
import Image from "next/image";
import s from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className="lg:hidden flex justify-center my-2 bg-slate-500">
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
      <header className="hidden lg:flex justify-center my-2 bg-slate-500">
        <div className="hover:cursor-pointer select-none">
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="Логотип компании"
              width="400%"
              height="150%"
              objectFit="contain"
            />
          </Link>
        </div>
      </header>
      <nav className="grid grid-cols-2 grid-rows-2 gap-3 lg:grid-cols-4 lg:grid-rows-1">
        <MyLink href="/" className={s.btn} text="Главная" />
        <MyLink href="/contacts" className={s.btn} text="Контакты" />
        <MyLink href="/gallery" className={s.btn} text="Галерея" />
        <MyLink href="/about" className={s.btn} text="О нас" />
      </nav>
    </>
  );
}

function MyLink(
  { href, className, text }: { href: string; className: string; text: string },
) {
  return (
    <Link href={href}>
      <a
        className={className}
      >
        {text}
      </a>
    </Link>
  );
}
