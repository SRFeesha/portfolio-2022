import clsx from "clsx"
import Image from "next/image"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

export const ExplicativePicture = ({ src, caption, className }) => {
  return (
    <figure className="mb-32 mt-28 ">
      <div
        className={clsx(
          "relative p-4 mb-3 -mx-4 xl:p-6 bg-gradient-to-br xl:-mx-16 md:rounded-lg",
          className
        )}
      >
        <Zoom>
          <Image src={src} style={{ borderRadius: "4px" }} />
        </Zoom>
      </div>
      <figcaption className="text-base italic font-light leading-snug text-stone-500">
        {caption}
      </figcaption>
    </figure>
  )
}
