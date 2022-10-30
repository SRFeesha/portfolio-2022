import { Analytics as VercelAnalytics } from "@vercel/analytics/react"
import splitbee from "@splitbee/web"

export const Analytics = () => {
  splitbee.init({ disableCookie: true })

  return <VercelAnalytics />
}
