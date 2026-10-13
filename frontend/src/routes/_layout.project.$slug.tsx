import { createFileRoute, notFound } from '@tanstack/react-router'
import { ProjectPage } from '#/pages/ProjectPage.tsx'
import { buildProjectData, JsonLd } from '#/structuredData.ts'
import { buildSeoHead } from '#/seo.ts'

export const Route = createFileRoute('/_layout/project/$slug')({
  loader: async ({ params, context }) => {
    const project = context.projects.find((elem) => elem.slug === params.slug)
    if (!project) {
      throw notFound()
    }
    return { project }
  },
  head: ({ loaderData }) => ({
    ...buildSeoHead({
      title: `Михаил Мороз | ${loaderData?.project.title || ''}`,
      description: loaderData?.project.short_description || '',
      url: `/project/${loaderData?.project.slug}`,
    }),
    scripts: loaderData?.project
      ? [JsonLd(buildProjectData(loaderData.project))]
      : [],
  }),
  component: ProjectPage,
})
