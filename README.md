# Websiteshot NodeJS Client

<hr />

<div align="center">
    <a href="https://websiteshot.app/">
        <img src="./assets/logo-mini.png">
    </a>
</div>

<div align="center">
<p>Never spend time again to create awesome screenshots of your websites.</p>
</div>

<div align="center">
<a style="margin: 1em;" href="https://websiteshot.app">Websiteshot</a> | <a style="margin: 1em;" href="https://docs.websiteshot.app">Documentation</a>
</div>

<hr />

## Installation

```bash
npm i @websiteshot/nodejs-client --save
```

## Usage

Import the Controller and the needed types:

```js
import {
  Config,
  CreateRequest,
  ScreenshotParameter,
  Url,
  WebsiteshotController,
} from '@websiteshot/nodejs-client'
```

Use the Client:

```js
const config: Config = {
  projectId: '...',
  apikey: '...',
}

const websiteshotController = new WebsiteshotController(config)

const screenshotParameter: ScreenshotParameter = {
  width: 1200,
  height: 720,
}

const urls: Url[] = [
  {
    url: 'https://websiteshot.app',
    name: 'Websiteshot',
  },
]

const createRequest: CreateRequest = {
  screenshotParameter,
  urls,
}

await websiteshotController.create(createRequest)
```
