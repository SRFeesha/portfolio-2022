import Image from "next/image"
import CVMock from "@/assets/img/cv-mock.png"
import Link from "next/link"

export const Resume = () => {
  const PDFLink = "/assets/pdf/Beniamino-Marini--Product-Designer-resume.pdf"

  return (
    <div className="flex justify-center items-center flex-col w-full overflow-hidden">
      <h3 className="text-center text-stone-500 uppercase text-lg font-semibold tracking-wide texl-lg md:text-xl lg:leading-none">
        Download my resume
      </h3>
      <div className="mt-32 w-full border-stone-400 border bg-stone-200 max-w-3xl h-60 rounded-t-4xl inset-shadow-sm flex place-content-center relative">
        <div className=" max-w-lg shadow hover:shadow-2xl transition ease-in-out place-content-center justify-items-center hover:-translate-y-8 hover:rotate-1 absolute -bottom-30 cursor-pointer border border-stone-200 duration-200">
          <a href={PDFLink} target="_blank" rel="noopener noreferrer">
            <Image
              src={CVMock}
              alt="Beniamino Marini Product Designer"
              className="object-cover mask-origin-padding "
            />
          </a>
        </div>
        {/* <span
          class="absolute -bottom-px w-full h-4 bg-pink-500 "
          aria-hidden="true"
        ></span> */}
      </div>
    </div>
  )
}
