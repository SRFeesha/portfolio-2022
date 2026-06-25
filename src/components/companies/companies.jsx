import { Shopify } from "../logos"
import { Zendesk } from "../logos"
import { Uber } from "../logos"
import { AWS } from "../logos"
import { Ikea } from "../logos"

export const Companies = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semi text-stone-600 px-2 text-balance">
        6 years designing complex products, from startups to scale-ups. Now
        leading design systems at{" "}
        <a
          href="https://www.linkedin.com/company/phraseplatform/"
          className="inline-flex items-center gap-1 align-middle hover:underline hover:text-teal-700 decoration-teal-400 decoration-2 underline-offset-2 px-px -translate-y-px"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/favicon-phrase-black.svg"
            alt=""
            aria-hidden="true"
            className="w-6 h-6 rounded-2 overflow-hidden"
          />
          Phrase
        </a>{" "}
        and impacting teams at
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
