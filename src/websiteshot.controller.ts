import axios, { AxiosRequestConfig } from 'axios'
import { Config } from './types/Config.type'
import { CreateRequest } from './types/CreateRequest.type'

const BASE_URL = `https://api.websiteshot.app`

export class WebsiteshotController {
  constructor(private config: Config) {}

  public async create(request: CreateRequest) {
    const url = `${BASE_URL}/api/projects/${this.config.projectId}`
    const data = {
      screenshotParameter: request.screenshotParameter,
      urls: request.urls,
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
      await axios(config)
    } catch (error) {
      throw new Error(`Failed to create Screenshot Job: ${error.message}`)
    }
  }
}
