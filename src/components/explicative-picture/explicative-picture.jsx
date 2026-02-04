import clsx from "clsx"
import Image from "next/image"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

export const ExplicativePicture = ({ src, caption, className, alt }) => {
  // Use alt prop if provided, otherwise fall back to caption for accessibility
  const imageAlt = alt || caption || "Case study image"

  return (
    <figure className="mt-10 -mx-3 mb-14">
      <div
        className={clsx(
          "relative p-2 mb-3 xl:p-3 md:mx-0 md:rounded-lg ",
          className
        )}
      >
        <Zoom>
          <Image src={src} style={{ borderRadius: "4px" }} alt={imageAlt} />
        </Zoom>
        <figcaption className="mx-4 mt-2 italic leading-snug md:ml-1 text-stone-500">
          {caption}
        </figcaption>
      </div>
    </figure>
  )
}
