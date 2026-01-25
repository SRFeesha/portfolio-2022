import { Shopify } from "../logos"
import { Zendesk } from "../logos"
import { Uber } from "../logos"
import { AWS } from "../logos"
import { Ikea } from "../logos"

export const Companies = () => {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold tracking-wider uppercase font-display text-stone-500">
        Through my work at Phrase, supporting teams at
      </h2>
      <div className="flex">
        <div className="flex items-center justify-center w-64 h-16">
          <Shopify className="object-center " />
        </div>
        <div className="flex items-center justify-center w-64 h-16">
          <Zendesk className="object-center " />
        </div>
        <div className="flex items-center justify-center w-64 h-16">
          <Uber className="object-center " />
        </div>
        <div className="flex items-center justify-center w-64 h-16">
          <Ikea className="object-center " />
        </div>
        <div className="flex items-center justify-center w-64 h-16">
          <AWS className="object-center " />
        </div>
      </div>
    </div>
  )
}
