import { PageTitle } from '#/components/PageTitle.tsx'
import { useLoaderData } from '@tanstack/react-router'

export function MyProjectsPage() {
  const { myProjects } = useLoaderData({ from: '/_layout' })

  return (
    <div className="flex flex-col gap-2.5">
      <PageTitle title="Мои проекты" />
      {myProjects.map((project) => (
        <div
          key={project.title}
          className="flex flex-col bg-card p-5 rounded-xl"
        >
          <p className="text-lg font-semibold">{project.title}</p>
          <p className="text-md">{project.description}</p>
        </div>
      ))}
    </div>
  )
}
