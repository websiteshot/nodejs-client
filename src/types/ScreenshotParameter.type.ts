export interface ScreenshotParameter {
  name?: string
  width: number
  height: number
  fullPage?: boolean
  loginParameter?: LoginParameter
  style?: BrowserFrameStyle
  area?: CropArea
  effects?: ImageEffectConfig[]
}

export enum BrowserFrameStyle {
  MAC_OS_SIMPLE_LIGHT = 'macos-simple-light',
  MAC_OS_SIMPLE_DARK = 'macos-simple-dark',
}

export interface ImageEffectConfig {
  effect: ImageEffect
  options?: ShadowOptions | EffectBlurOptions | EffectResizeOptions
}

export enum ImageEffect {
  RESIZE = 'resize',
  BLUR = 'blur',
  SHADOW = 'shadow',
}

export interface EffectBlurOptions {
  radius: number
}

export interface EffectResizeOptions {
  width?: number
  height?: number
}

export interface LoginParameter {
  username: {
    username: string
    elementId: string
  }
  password: {
    password: string
    elementId: string
  }
  loginButton: {
    elementId: string
  }
}

export interface ShadowOptions {
  margin?: number
  blur?: number
  offset?: number
  opacity?: number
  color?: Color
  bgColor?: Color
}

export interface Color {
  r: number
  g: number
  b: number
  a: number
}

export enum CropArea {
  TOP_LEFT = 'topleft',
  TOP_RIGHT = 'topright',
  BOTTOM_LEFT = 'bottomleft',
  BOTTOM_RIGHT = 'bottomright',
  CENTER_CENTER = 'centercenter',
  UPPER_HALF = 'upperhalf',
  LOWER_HALF = 'lowerhalf',
  RIGHT_SIDE = 'rightside',
  LEFT_SIDE = 'leftside',
}

export interface CropParameter {
  source: string
  target: string
  area: CropArea
}
