import s from "./CallToAction.module.css";

export default function CallToAction() {
  return (
    <div className="flex flex-col items-center justify-center my-3">
      <button className={s.btn} name="ctaBtn">Позвонить нам</button>
      <label htmlFor="ctaBtn">
        <a href="tel:+7(926)218-66-68">+7(926)218-66-68</a>
      </label>
    </div>
  );
}