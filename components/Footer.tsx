export default function Footer() {
  return (
    <div className="flex items-center justify-between bg-slate-300 h-16 mt-2 p-2 text-gray-500">
      <span>
        © 2022 Easy Mebel
      </span>
      <span className="underline-offset-4 hover:underline">
        <a href="https://github.com/synalice">
          Дизайн сайта
        </a>
      </span>
    </div>
  );
}