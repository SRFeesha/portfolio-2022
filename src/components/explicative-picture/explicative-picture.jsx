import clsx from "clsx"
import Image from "next/image"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

export const ExplicativePicture = ({ src, caption, className, alt }) => {
  return (
    <figure className="mt-10 -mx-3 mb-14">
      <div
        className={clsx(
          "relative p-2 mb-3 xl:p-3 md:-mx-0 xl:-mx-8 md:rounded-lg border",
          className
        )}
      >
        <Zoom>
          <Image src={src} style={{ borderRadius: "4px" }} alt={alt} />
        </Zoom>
        <figcaption className="mx-2 font-light leading-snug md:ml-1 text-stone-500">
          {caption}
        </figcaption>
      </div>
    </figure>
  )
}
