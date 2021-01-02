import { ScreenshotParameter } from './ScreenshotParameter.type'
import { Url } from './Url.type'

export interface CreateRequest {
  screenshotParameter: ScreenshotParameter
  urls: Url[]
  scheduledTs?: number
  scheduleDescription?: {
    value: number
    unit: 'm' | 'h' | 'd'
  }
}
