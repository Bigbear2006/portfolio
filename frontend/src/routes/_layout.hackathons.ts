import { createFileRoute } from '@tanstack/react-router'
import { HackathonsPage } from '#/pages/HackathonsPage.tsx'

export const Route = createFileRoute('/_layout/hackathons')({
  component: HackathonsPage,
})
