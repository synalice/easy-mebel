import React, { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "../ImageCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import s from "./ImageCarousel.module.css"

export default function ImageCarousel({ slides }: { slides: string[] }) {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState(Array<number>);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index: number) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className={s.embla}>
        <div className={s.embla_viewport} ref={viewportRef}>
          <div className={s.embla_container}>
            {slides.map((index) => (
              <div className={s.embla_slide} key={index}>
                <div className={s.embla_slide_inner}>
                  <Image
                    alt="A cool cat."
                    src={index}
                    width="370%"
                    height="370%"
                    objectFit="contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className={s.embla_dots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
};
