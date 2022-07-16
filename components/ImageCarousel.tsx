import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import s from "./ImageCarousel.module.css";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla overflow-hidden my-2" ref={emblaRef}>
      <div className="embla__container flex">
        
        <div className={"embla__slide " + s.embla__slide_style}>
          <Image
            src="/carousel/kuhnya_2.png"
            alt="Картинка кухни от компании Easy Mebel"
            width="600%"
            height="600%"
            objectFit="contain"
          />
        </div>

        <div className={"embla__slide " + s.embla__slide_style}>
          <Image
            src="/carousel/garderob.png"
            alt="Картинка гардероба от компании Easy Mebel"
            width="370%"
            height="370%"
            objectFit="contain"
          />
        </div>

        <div className={"embla__slide " + s.embla__slide_style}>
          <Image
            src="/carousel/kuhnya.png"
            alt="Картинка ещё одной   кухни от компании Easy Mebel"
            width="370%"
            height="370%"
            objectFit="contain"
          />
        </div>
        
      </div>
    </div>
  )
}
