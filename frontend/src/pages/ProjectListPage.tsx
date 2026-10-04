import { useLoaderData, useNavigate } from '@tanstack/react-router'
import { Card, CardList } from '#/components/Card.tsx'
import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import { cn } from '#/lib/utils.ts'
import { Icon } from '#/components/Icon.tsx'
import { PROJECT_TYPES } from '#/types.ts'
import type { ProjectType } from '#/types.ts'

const projectTypesLabels: Record<ProjectType, string> = {
  ALL: 'Все',
  COMMERCIAL: 'Коммерческие',
  PET: 'Pet-проекты',
  HACKATHON: 'Хакатоны',
}

export function ProjectListPage() {
  const navigate = useNavigate({ from: '/projects' })
  const projects = useLoaderData({ from: '/_layout' })

  const [projectType, setProjectType] = useState<ProjectType>('ALL')

  return (
    <div className="flex flex-col gap-2.5">
      <div
        className="flex gap-2 py-5 sm:px-5"
        onClick={() => navigate({ to: '/' })}
      >
        <ArrowLeft className="self-center" />
        <p className="text-lg font-semibold">На главную</p>
      </div>

      <div className="space-y-10 py-5 sm:px-5">
        <div className="space-y-5">
          <h1 className="text-4xl font-semibold">Мои проекты</h1>
          <div className="flex gap-4 flex-wrap">
            {PROJECT_TYPES.map((elem) => (
              <button
                key={elem}
                className={cn(
                  'hover:bg-card/50 text-lg font-medium rounded-xl px-2.5 py-1.25 text-center transition shadow-md border-2 border-border text-nowrap',
                  elem === projectType && 'bg-card/50 backdrop-blur-lg',
                )}
                onClick={() => setProjectType(elem)}
              >
                {projectTypesLabels[elem]}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center md:justify-between gap-8">
          {projects
            .filter(
              (project) =>
                projectType === 'ALL' || projectType === project.type,
            )
            .map((project) => (
              <CardList
                key={project.title}
                className="w-full md:w-auto hover:scale-105 transition-transform"
              >
                <Card
                  className="flex-row justify-start items-center max-[500px]:flex-col md:flex-col gap-8 h-full"
                  onClick={() =>
                    navigate({
                      to: '/project/$slug',
                      params: { slug: project.slug },
                    })
                  }
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-60 h-auto max-h-60 object-cover rounded-xl"
                    />
                  ) : (
                    <div className="flex justify-center items-center bg-card/50 text-7xl font-bold max-w-60 max-h-60 rounded-xl w-full h-full">
                      {project.github ? (
                        <Icon name="github" className="size-20" />
                      ) : (
                        project.title.charAt(0)
                      )}
                    </div>
                  )}
                  <div className="flex flex-col gap-2 self-start md:w-0 md:min-w-full">
                    <p className="text-xl font-semibold">{project.title}</p>
                    <p className="text-lg">{project.short_description}</p>
                  </div>
                </Card>
              </CardList>
            ))}
        </div>
      </div>
    </div>
  )
}
