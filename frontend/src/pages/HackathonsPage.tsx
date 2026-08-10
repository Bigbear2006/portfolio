import { PageTitle } from '#/components/PageTitle.tsx'
import { useLoaderData } from '@tanstack/react-router'

export function HackathonsPage() {
  const { hackathonProjects } = useLoaderData({ from: '/_layout' })

  return (
    <div className="flex flex-col gap-2.5">
      <PageTitle title="Хакатоны" />
      <div className="flex flex-col gap-2.5">
        {hackathonProjects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col gap-2.5 bg-card p-5 rounded-xl"
          >
            <div className="flex flex-col -gap-1 leading-none">
              <p className="text-lg font-semibold">{project.title}</p>
              <p>
                {project.date}, {project.place} место
              </p>
            </div>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
