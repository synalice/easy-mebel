import s from "./CallToAction.module.css";

export default function CallToAction({ text, phone }: { text: string, phone: string }) {
  return (
    <div className="flex flex-col items-center justify-center my-3">
      <button className={s.btn} name="ctaBtn">
        <a href={`tel:${phone}`}>{text}</a>
      </button>
    </div>
  );
}