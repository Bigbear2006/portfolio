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

export function ProjectPage() {
  const { slug } = useParams({ from: '/_layout/project/$slug' })
  const projects = useLoaderData({ from: '/_layout' })
  const navigate = useNavigate({ from: '/project/$slug' })

  const project = projects.find((elem) => elem.slug === slug)
  if (!project) {
    throw notFound()
  }

  return (
    <Section>
      <div
        className="flex gap-2 pb-4"
        onClick={() => navigate({ to: '/projects' })}
      >
        <ArrowLeft className="self-center" />
        <p className="text-lg font-semibold">Все проекты</p>
      </div>

      <div className="flex flex-col gap-4 pb-6">
        <h1 className="text-4xl font-semibold">{project.title}</h1>
        <p className="text-xl">{project.description}</p>
        <div className="flex gap-4 text-nowrap">
          {project.url && (
            <button className="flex items-center gap-2 border-2 border-border py-2 px-4 rounded-xl shadow-md">
              <Globe />
              Сайт
            </button>
          )}
          {project.github && (
            <button className="flex items-center gap-2 border-2 border-border py-2 px-4 rounded-xl shadow-md">
              <Icon name="github" />
              GitHub
            </button>
          )}
        </div>
      </div>

      {project.features && (
        <Section className="p-0 sm:p-0">
          <SectionTitle title="Технические особенности" />
          <CardList>
            {project.features.map((elem, index) => (
              <Card key={elem} className="py-4 px-6">
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
