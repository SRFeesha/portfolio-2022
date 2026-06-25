import { Shopify } from "../logos"
import { Zendesk } from "../logos"
import { Uber } from "../logos"
import { AWS } from "../logos"
import { Ikea } from "../logos"

export const Companies = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-base font-medium text-stone-600 px-2">
        Designing at{" "}
        <a
          href="https://www.linkedin.com/company/phraseplatform/"
          className="inline-flex items-center gap-1 align-middle hover:underline text-teal-700 decoration-teal-400 decoration-2 underline-offset-2 px-px"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/favicon-phrase.svg"
            alt=""
            aria-hidden="true"
            className="w-6 h-6 "
          />
          Phrase
        </a>
        , impacting teams at
      </h2>
      <ul
        className=" 
        mt-6 grid place-items-center gap-x-2 gap-y-6 grid-cols-12 md:grid-cols-5 md:gap-y-0 text-stone-400 
      "
      >
        <li className="w-full max-h-16 max-w-40 col-span-4 md:col-span-1 ">
          <div className="flex items-center justify-center">
            <Shopify className="max-h-full max-w-full object-contain " />
          </div>
        </li>
        <li className="w-full max-h-16 max-w-40 col-span-4 md:col-span-1">
          <div className=" flex items-center justify-center">
            <Uber className="max-h-full max-w-full object-contain" />
          </div>
        </li>
        <li className="w-full max-h-16 max-w-40 col-span-4 md:col-span-1">
          <div className="flex items-center justify-center">
            <Ikea className="max-h-full max-w-full object-contain" />
          </div>
        </li>
        <li className="w-full col-start-3 col-span-4 md:col-span-1">
          <div className="flex items-center justify-center">
            <Zendesk className="max-h-full max-w-full object-contain" />
          </div>
        </li>
        <li className="w-full col-start-7 col-span-4 md:col-span-1">
          <div className=" flex items-center justify-center">
            <AWS className="max-h-full max-w-full object-contain" />
          </div>
        </li>
      </ul>
    </div>
  )
}
