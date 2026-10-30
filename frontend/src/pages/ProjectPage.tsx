import { ArrowLeft, Globe } from 'lucide-react'
import { Icon } from '#/components/Icon.tsx'
import {
  notFound,
  useLoaderData,
  useNavigate,
  useParams,
} from '@tanstack/react-router'
import { Button } from '#/components/Button.tsx'
import { projectTypeLabels, roleLabels } from '#/types.ts'
import { Skill } from '#/components/Skill.tsx'

export function ProjectPage() {
  const { slug } = useParams({ from: '/_layout/project/$slug' })
  const projects = useLoaderData({ from: '/_layout' })
  const navigate = useNavigate({ from: '/project/$slug' })

  const project = projects.find((elem) => elem.slug === slug)
  if (!project) {
    throw notFound()
  }

  const projectTypeLabel = projectTypeLabels[project.type]
  const blocks = [
    project.type === 'COMMERCIAL' && project.company
      ? { label: 'Компания', value: project.company }
      : {
          label: 'Тип проекта',
          value:
            project.type === 'HACKATHON' && project.place
              ? `${projectTypeLabel} (${project.place} место)`
              : projectTypeLabel,
        },
    { label: 'Роль', value: roleLabels[project.role || 'SOLO'] },
    { label: 'Год', value: project.year },
  ]

  const info = [
    {
      label: project.type === 'PET' ? 'Идея' : 'Задача',
      value: project.problem,
    },
    { label: 'Решение', value: project.solution },
  ]

  return (
    <div className="flex flex-col gap-8 py-5 sm:px-5">
      <div
        className="flex gap-2 pb-4"
        onClick={() => navigate({ to: '/projects' })}
      >
        <ArrowLeft className="self-center" />
        <p className="text-lg font-semibold">Все проекты</p>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold">{project.title}</h1>
        <h2 className="text-xl">{project.short_description}</h2>
        <div className="flex gap-4 text-nowrap">
          {project.url && (
            <Button
              variant="outline"
              onClick={() =>
                window.open(project.url, '_blank', 'noopener,noreferrer')
              }
            >
              <Globe />
              Сайт
            </Button>
          )}
          {project.github && (
            <Button
              variant="outline"
              onClick={() =>
                window.open(project.github, '_blank', 'noopener,noreferrer')
              }
            >
              <Icon name="github" />
              GitHub
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-border rounded-xl bg-card">
        {blocks.map((block) => (
          <div
            key={block.label}
            className="flex flex-col justify-center border-border/50 border-b-2 p-5 md:border-b-0 md:border-r-2 last:border-0"
          >
            <h4 className="text-sm font-mono">{block.label}</h4>
            <h3 className="text-lg font-medium">{block.value}</h3>
          </div>
        ))}
      </div>

      {project.stack && (
        <div className="space-y-2">
          <h2 className="text-2xl font-mono tracking-tight font-medium">
            Стек
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((elem) => (
              <Skill key={elem} name={elem} />
            ))}
          </div>
        </div>
      )}

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {info.map((elem) => (
          <div key={elem.label} className="flex flex-col gap-2">
            <h3 className="text-2xl font-mono font-medium">{elem.label}</h3>
            <div className="flex-1 border-2 border-border rounded-xl bg-card shadow-md p-5">
              <h4 className="text-lg">{elem.value}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
