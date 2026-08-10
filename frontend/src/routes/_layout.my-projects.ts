import { createFileRoute } from '@tanstack/react-router'
import { ProjectPage } from '#/pages/ProjectPage.tsx'

export const Route = createFileRoute('/_layout/my-projects')({
  component: ProjectPage,
})
