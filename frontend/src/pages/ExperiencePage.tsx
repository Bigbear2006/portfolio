import { useLoaderData } from '@tanstack/react-router'
import { PageTitle } from '#/components/PageTitle.tsx'

export function ExperiencePage() {
  const { workProjects } = useLoaderData({ from: '/_layout' })

  return (
    <div className="flex flex-col gap-5">
      <PageTitle title="Опыт работы" />
      <div className="flex flex-col gap-5 bg-[var(--bg-inner)] p-5 rounded-xl">
        <div>
          <p className="text-xl font-semibold">BOTTEC</p>
          <p className="text-md">Март 2025 - Апрель 2026 (1 год 2 месяца)</p>
        </div>
        <div>
          <p className="text-xl font-semibold">Задачи</p>
          <p>- Разработка telegram ботов telegram web apps</p>
          <p>- Создание админ-панелей</p>
          <p>
            - Интеграция платежных систем (Юкасса, Робокасса, Stripe, Cryptobot)
          </p>
          <p>- Парсинг сайтов</p>
          <p>- Развертывание ботов на сервере, поддержка, доработка</p>
        </div>
        <div className="flex flex-col gap-2.5">
          <p className="text-xl font-semibold">Проекты</p>
          {workProjects.map((project) => (
            <div className="flex flex-col p-2.5 bg-[var(--bg)] rounded-xl">
              <p className="text-lg font-semibold">{project.title}</p>
              <p className="text-md">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
