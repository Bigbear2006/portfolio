import { createFileRoute } from '@tanstack/react-router'
import { ExperiencePage } from '#/pages/ExperiencePage.tsx'

export const Route = createFileRoute('/_layout/experience')({
  component: ExperiencePage,
})
