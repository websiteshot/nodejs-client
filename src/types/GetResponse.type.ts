import { ScreenshotParameter } from './ScreenshotParameter.type'

export interface GetResponse {
  rootId: string
  meta: Meta
  jobs: string[]
}

export interface JobResult {
  data: string
  rootId: string
  projectId: string
  uuid: string
  url: {
    url: string
    name: string
    loadingTime: number
  }
  meta: Meta
  screenshotParameter: ScreenshotParameter
  preview: string
}

export interface Meta {
  created: number
}
