import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '#/components/Layout.tsx'
import { createServerFn } from '@tanstack/react-start'
import { readFileSync } from 'node:fs'
import { parse } from 'yaml'
import type { Project } from '#/types.ts'

const getProjects = createServerFn().handler(async () => {
  return (parse(readFileSync('src/projects.yaml', 'utf-8')) as Project[])
    .filter((project) => project.is_active ?? true)
    .slice(0, 5)
})

export const Route = createFileRoute('/_layout')({
  component: Layout,
  beforeLoad: async ({ context }) => ({
    ...context,
    projects: await getProjects(),
  }),
  loader: async ({ context }) => context.projects,
})
