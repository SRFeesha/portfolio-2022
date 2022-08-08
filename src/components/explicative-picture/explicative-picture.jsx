import clsx from "clsx"
import Image from "next/image"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

export const ExplicativePicture = ({ src, caption, className, alt }) => {
  return (
    <figure className="mt-20 mb-28 ">
      <div
        className={clsx(
          "relative p-2 md:p-4 mb-3 -mx-4 xl:p-6 bg-gradient-to-br xl:-mx-16 md:rounded-lg",
          className
        )}
      >
        <Zoom>
          <Image src={src} style={{ borderRadius: "4px" }} alt={alt} />
        </Zoom>
      </div>
      <figcaption className="italic font-light leading-snug  text-stone-500">
        {caption}
      </figcaption>
    </figure>
  )
}
