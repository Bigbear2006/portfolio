import { config } from '#/config.ts'

interface BuildSeoHeadProps {
  title: string
  description: string
  url: string
  image?: string
}

export function buildSeoHead({
  title,
  description,
  url,
  image,
}: BuildSeoHeadProps) {
  url = url.startsWith('http') ? url : `${config.SITE_URL}${url}`
  return {
    meta: [
      { title: title },
      { name: 'description', content: description },
      { name: 'og:title', content: title },
      { name: 'og:description', content: description },
      ...(image ? [{ name: 'og:image', content: image }] : []),
      { name: 'og:url', content: url },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      ...(image ? [{ name: 'twitter:image', content: image }] : []),
      { name: 'twitter:url', content: url },
    ],
    links: [
      {
        rel: 'canonical',
        href: url,
      },
    ],
  }
}
