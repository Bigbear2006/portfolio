import { environmentManager } from '@tanstack/react-query'

let env

if (environmentManager.isServer()) {
  env = process.env
} else {
  env = import.meta.env
}

export const config = {
  BASE_API_URL: env.VITE_BASE_API_URL!,
  UMAMI_SCRIPT: env.VITE_UMAMI_SCRIPT,
  UMAMI_WEBSITE_ID: env.VITE_UMAMI_WEBSITE_ID,
  SITE_URL: 'https://mikhailmoroz.com',
  EMAIL: 'contact@mikhailmoroz.com',
  GITHUB: 'https://github.com/Bigbear2006',
  LINKEDIN: 'https://linkedin.com/in/mikhailmoroz/',
  TELEGRAM: 'https://t.me/bigbeardev',
}
