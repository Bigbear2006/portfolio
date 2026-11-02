import { useLoaderData, useNavigate } from '@tanstack/react-router'
import { Card, CardList } from '#/components/Card.tsx'
import {
  ArrowLeft,
  Bot,
  CalendarDays,
  Coins,
  GraduationCap,
  UserPlus,
} from 'lucide-react'
import { useState } from 'react'
import { Icon } from '#/components/Icon.tsx'
import { projectTypeLabels } from '#/types.ts'
import type { ProjectType } from '#/types.ts'
import { cn } from '#/lib/utils.ts'

// const projectTypesFilterLabels: Record<ProjectType | 'ALL', string> = {
//   ALL: 'Все',
//   COMMERCIAL: 'Коммерческие',
//   PET: 'Pet-проекты',
//   HACKATHON: 'Хакатоны',
// }

const projectIcons: Record<string, React.ReactNode> = {
  github: <Icon name="github" className="size-10" />,
  'graduation-cap': <GraduationCap />,
  bot: <Bot />,
  coins: <Coins />,
  user: <UserPlus />,
  calendar: <CalendarDays />,
}

export function ProjectListPage() {
  const navigate = useNavigate({ from: '/projects' })
  const projects = useLoaderData({ from: '/_layout' })

  // @ts-ignore
  const [projectType, setProjectType] = useState<ProjectType | 'ALL'>('ALL')

  const logoBox = 'size-20 shrink-0 rounded-xl'

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
          <h1 className="text-4xl font-mono font-semibold">
            Последние проекты
          </h1>
          {/*<div className="flex gap-4 flex-wrap">*/}
          {/*  {(['ALL', ...PROJECT_TYPES] as const).map((elem) => (*/}
          {/*    <button*/}
          {/*      key={elem}*/}
          {/*      className={cn(*/}
          {/*        'hover:bg-card text-lg font-medium rounded-xl px-2.5 py-1.25 text-center transition shadow-md border-2 border-border text-nowrap',*/}
          {/*        elem === projectType && 'bg-card',*/}
          {/*      )}*/}
          {/*      onClick={() => setProjectType(elem)}*/}
          {/*    >*/}
          {/*      {projectTypesFilterLabels[elem]}*/}
          {/*    </button>*/}
          {/*  ))}*/}
          {/*</div>*/}
        </div>
        <div className="flex flex-col justify-center md:justify-between gap-8">
          {projects
            .filter(
              (project) =>
                projectType === 'ALL' || projectType === project.type,
            )
            .map((project) => (
              <CardList
                key={project.title}
                className="md:w-auto transition-transform"
              >
                <Card
                  className="flex-col sm:flex-col sm:items-start justify-start gap-4 h-full hover:bg-primary/50"
                  onClick={() =>
                    navigate({
                      to: '/project/$slug',
                      params: { slug: project.slug },
                    })
                  }
                >
                  <div className="flex gap-4 max-[400px]:flex-col">
                    {project.logo ? (
                      <img
                        src={project.logo}
                        alt={project.title}
                        className={cn(logoBox, 'object-cover')}
                      />
                    ) : (
                      <div
                        className={cn(
                          logoBox,
                          'flex items-center justify-center bg-primary font-bold text-4xl sm:text-7xl',
                          '[&>svg]:size-1/2',
                        )}
                      >
                        {project.icon && projectIcons[project.icon]
                          ? projectIcons[project.icon]
                          : project.title.charAt(0)}
                      </div>
                    )}
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <h4 className="text-sm font-medium">
                        {project.company || projectTypeLabels[project.type]},{' '}
                        {project.year}
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 self-start">
                    <h3 className="text-lg">{project.short_description}</h3>
                  </div>
                </Card>
              </CardList>
            ))}
        </div>
      </div>
    </div>
  )
}
