import { createFileRoute } from '@tanstack/react-router'
import { PortfolioPage } from '#/pages/PortfolioPage.tsx'

export const Route = createFileRoute('/_layout/')({
  component: PortfolioPage,
})
