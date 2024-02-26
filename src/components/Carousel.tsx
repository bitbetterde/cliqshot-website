import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

interface CarouselProps {
  images: string[];
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, className }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const slideClasses = "flex-[0_0_100%] min-w-0";

  return (
    <div
      className={`overflow-hidden h-full w-full relative ${className || ""}`}
      ref={emblaRef}
    >
      <div className="flex h-full">
        {images?.map((img, i) => (
          <div className={slideClasses} key={i}>
            <img
              className="object-cover w-auto aspect-video"
              src={img}
              alt="Your alt text"
            />
          </div>
        ))}
      </div>
      <div className="absolute top-0 h-full w-full flex justify-between items-center">
        <div className="flex w-full justify-between px-2">
          <NavButton onClick={scrollPrev} flipped />
          <NavButton onClick={scrollNext} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;

interface ButtonProps {
  flipped?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export const NavButton: React.FC<ButtonProps> = ({
  flipped,
  onClick,
  disabled,
}) => {
  return (
    <button
      className="h-auto w-auto bg-white/40 p-4 rounded-full text-white/75 hover:bg-white/60"
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <svg
        className={`h-8 w-8 ${flipped ? "rotate-180" : ""}`}
        viewBox="0 0 532 532"
      >
        <path
          fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
      <span className="sr-only">
        {flipped ? "Vorheriges Bild" : "Nächstes Bild"}
      </span>
    </button>
  );
};
