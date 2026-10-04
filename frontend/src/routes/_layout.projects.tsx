import { createFileRoute } from '@tanstack/react-router'
import { ProjectListPage } from '#/pages/ProjectListPage.tsx'

export const Route = createFileRoute('/_layout/projects')({
  component: ProjectListPage,
})
