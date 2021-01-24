import { ScreenshotParameter } from './ScreenshotParameter.type'
import { Url } from './Url.type'

export interface GetResponse {
  rootId: string
  meta: Meta
  jobs: JobResult[]
}

export interface JobResult {
  data: string
  rootId: string
  projectId: string
  uuid: string
  url: Url
  meta: Meta
  screenshotParameter: ScreenshotParameter
  preview: string
}

export interface Meta {
  created: number
}
