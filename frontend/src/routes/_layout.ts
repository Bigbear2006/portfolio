import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '#/components/Layout.tsx'
import type { Project } from '#/pages/PortfolioPage.tsx'
import { createServerFn } from '@tanstack/react-start'
import { readFileSync } from 'node:fs'
import { parse } from 'yaml'

const getMyProjects = createServerFn().handler(async () => {
  return parse(readFileSync('src/projects/my.yaml', 'utf-8')) as Project[]
})

const getWorkProjects = createServerFn().handler(async () => {
  return parse(readFileSync('src/projects/work.yaml', 'utf-8')) as Project[]
})

const getHackathonProjects = createServerFn().handler(async () => {
  return parse(
    readFileSync('src/projects/hackathons.yaml', 'utf-8'),
  ) as Project[]
})

export const Route = createFileRoute('/_layout')({
  component: Layout,
  loader: async () => ({
    myProjects: await getMyProjects(),
    workProjects: await getWorkProjects(),
    hackathonProjects: await getHackathonProjects(),
  }),
})
