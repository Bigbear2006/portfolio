import { createFileRoute } from '@tanstack/react-router'
import { MyProjectsPage } from '#/pages/MyProjectsPage.tsx'

export const Route = createFileRoute('/_layout/my-projects')({
  component: MyProjectsPage,
})
