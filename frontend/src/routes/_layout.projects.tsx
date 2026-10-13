import { createFileRoute } from '@tanstack/react-router'
import { ProjectListPage } from '#/pages/ProjectListPage.tsx'
import { buildProjectListData, JsonLd } from '#/structuredData.ts'
import { buildSeoHead } from '#/seo.ts'

export const Route = createFileRoute('/_layout/projects')({
  loader: async ({ context }) => context.projects,
  head: ({ loaderData }) => {
    return {
      ...buildSeoHead({
        title: 'Михаил Мороз | Мои проекты',
        description: 'Мои проекты',
        url: '/projects',
      }),
      scripts: loaderData ? [JsonLd(buildProjectListData(loaderData))] : [],
    }
  },
  component: ProjectListPage,
})
