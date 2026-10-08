import { Section, SectionTitle } from '#/components/Section.tsx'
import { Card, CardList } from '#/components/Card.tsx'
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

  return (
    <Section className="gap-8">
      <div
        className="flex gap-2 pb-4"
        onClick={() => navigate({ to: '/projects' })}
      >
        <ArrowLeft className="self-center" />
        <p className="text-lg font-semibold">Все проекты</p>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold">{project.title}</h1>
        <p className="text-xl">{project.description}</p>
        <div className="flex gap-4 text-nowrap">
          {project.url && (
            <Button variant="outline">
              <Globe />
              Сайт
            </Button>
          )}
          {project.github && (
            <Button variant="outline">
              <Icon name="github" />
              GitHub
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-border/50 rounded-xl bg-card/5 backdrop-blur-lg shadow-md">
        {blocks.map((block) => (
          <div
            key={block.label}
            className="flex flex-col justify-center border-border/50 border-b-2 p-5 md:border-b-0 md:border-r-2 last:border-0"
          >
            <p className="text-sm font-mono">{block.label}</p>
            <p className="text-lg font-medium">{block.value}</p>
          </div>
        ))}
      </div>

      {project.features && (
        <Section className="p-0 sm:p-0">
          <SectionTitle title="Технические особенности" />
          <CardList>
            {project.features.map((elem, index) => (
              <Card key={elem} className="items-start py-4 px-6">
                <div className="flex gap-4 items-center justify-center">
                  <p className="text-lg font-mono">{index + 1}</p>
                  <p className="text-lg">{elem}</p>
                </div>
              </Card>
            ))}
          </CardList>
        </Section>
      )}
    </Section>
  )
}
