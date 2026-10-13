import { createFileRoute } from '@tanstack/react-router'
import { PortfolioPage } from '#/pages/PortfolioPage.tsx'
import { buildPortfolioData, JsonLd } from '#/structuredData.ts'
import { buildSeoHead } from '#/seo.ts'
import { config } from '#/config.ts'

export const Route = createFileRoute('/_layout/')({
  head: () => ({
    ...buildSeoHead({
      title: 'Михаил Мороз | Fullstack-разработчик',
      description:
        'Михаил Мороз - Fullstack-разработчик сайтов, телеграм ботов и Telegram Mini App',
      url: config.SITE_URL,
    }),
    scripts: [JsonLd(buildPortfolioData())],
  }),
  component: PortfolioPage,
})
