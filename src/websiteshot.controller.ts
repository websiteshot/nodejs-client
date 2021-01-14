import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Config } from './types/Config.type'
import { CreateRequest } from './types/CreateRequest.type'
import { CreateResponse } from './types/CreateResponse.type'
import { GetResponse } from './types/GetResponse.type'

const BASE_URL = `https://api.websiteshot.app`

export enum Route {
  API = 'api',
  PROJECTS = 'projects',
  SCREENSHOTS = 'screenshots',
  ROOT = 'root',
  TEMPLATES = 'templates',
}

export class WebsiteshotController {
  constructor(private config: Config) {}

  public async create(request: CreateRequest): Promise<CreateResponse> {
    let url
    let data

    if (request.templateId) {
      url = `${BASE_URL}/${Route.API}/${Route.PROJECTS}/${this.config.projectId}/${Route.TEMPLATES}/${request.templateId}`
      data = {
        scheduledTs: request.scheduledTs,
        scheduleDescription: request.scheduleDescription,
      }
    } else if (request.screenshotParameter && request.urls) {
      url = `${BASE_URL}/${Route.API}/${Route.PROJECTS}/${this.config.projectId}`
      data = {
        screenshotParameter: request.screenshotParameter,
        urls: request.urls,
        scheduledTs: request.scheduledTs,
        scheduleDescription: request.scheduleDescription,
      }
    }

    if (!url || !data) {
      throw new Error(
        `Mandatory Parameter missing. ScreenshotParameter and URLs or TemplateId must be set.`,
      )
    }

    const config: AxiosRequestConfig = {
      method: `POST`,
      url,
      headers: {
        Authorization: this.config.apikey,
      },
      data,
    }

    try {
      const result: AxiosResponse = await axios(config)
      return result ? result.data : undefined
    } catch (error) {
      throw new Error(`Failed to create Screenshot Job: ${error.message}`)
    }
  }

  public async get(jobId: string): Promise<GetResponse> {
    const url = `${BASE_URL}/${Route.API}/${Route.PROJECTS}/${this.config.projectId}/${Route.SCREENSHOTS}/${Route.ROOT}/${jobId}`

    const config: AxiosRequestConfig = {
      method: `GET`,
      url,
      headers: {
        Authorization: this.config.apikey,
      },
    }

    try {
      const result: AxiosResponse = await axios(config)
      return result ? result.data : undefined
    } catch (error) {
      throw new Error(`Failed to get Screenshot Jobs: ${error.message}`)
    }
  }
}
