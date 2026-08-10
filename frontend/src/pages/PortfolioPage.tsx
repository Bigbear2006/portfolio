import ThemeToggle from '#/components/ThemeToggle.tsx'
import { useLoaderData } from '@tanstack/react-router'
import { Skill } from '#/components/Skill.tsx'
import { Card, CardList } from '#/components/Card.tsx'
import { Section, SectionTitle } from '#/components/Section.tsx'

export interface Project {
  title: string
  description: string
  url: string
  github?: string
  date?: string
  place?: number
  stack: string[]
}

const stackTabs = [
  {
    title: 'Backend',
    skills: (
      <>
        <Skill name="Python" />
        <Skill name="Django" />
        <Skill name="FastAPI" />
        <Skill name="Sqlalchemy" />
        <Skill name="Aiogram" />
        <Skill name="Postgresql" />
        <Skill name="Redis" />
        <Skill name="Celery" />
        <Skill name="Docker" />
        <Skill name="Nginx" />
      </>
    ),
  },
  {
    title: 'Frontend',
    skills: (
      <>
        <Skill name="HTML" iconName="html5" />
        <Skill name="CSS" iconName="css3" />
        <Skill name="Typescript" />
        <Skill name="React" />
        <Skill name="Tailwind" iconName="tailwindcss" />
        <Skill name="TanStack Start" iconName="tanstack" />
      </>
    ),
  },
]

export function PortfolioPage() {
  const { myProjects, hackathonProjects } = useLoaderData({ from: '/_layout' })

  return (
    <>
      <div className="flex flex-col gap-2.5 items-center text-center pb-8">
        <ThemeToggle />
        <div className="flex flex-col gap-1.5 items-center">
          <h1 className="text-4xl font-semibold font-mono">Bigbear</h1>
          <p className="text-lg font-mono">Full Stack Разработчик</p>
          <div className="flex gap-4 items-center">
            <span className="bg-green-500 w-2 h-2 rounded-xl ring-3 ring-green-200 dark:bg-green-400 dark:ring-green-500/30"></span>
            <p className="font-mono">Available for work</p>
          </div>
        </div>
        <button className="bg-primary text-lg font-mono font-medium rounded-xl px-5 py-2.5 text-center transition shadow-xl hover:ring-6 ring-primary/25">
          Связаться
        </button>
      </div>

      <div className="flex flex-col gap-2.5">
        <Section>
          <SectionTitle title="Обо мне" />
          <CardList>
            {[
              {
                title: 'Сайты',
                description: 'Разработка сайтов, подключение платежных систем',
              },
              {
                title: 'Telegram',
                description: 'Разработка Telegram-ботов и Telegram Mini Apps',
              },
              {
                title: 'Доработка',
                description: 'Исправление и доработка существующих проектов',
              },
              {
                title: 'Деплой',
                description: 'Развертывание проектов на сервере',
              },
              {
                title: 'Платежные системы',
                description:
                  'Подключение любых платежных систем к вашему проекту - Юкасса, Робокасса, Stripe, Cryptobot и другие',
              },
            ].map((elem, index) => (
              <Card key={index}>
                <div className="flex flex-col gap-2">
                  <p className="text-lg font-medium">{elem.title}</p>
                  <p className="text-muted">{elem.description}</p>
                </div>
              </Card>
            ))}
          </CardList>
        </Section>

        <Section>
          <SectionTitle title="Стек технологий" />
          <div className="flex flex-col gap-4 justify-start">
            {stackTabs.map((tab) => (
              <div key={tab.title} className="flex flex-col gap-2">
                <span className="text-lg font-mono">{tab.title}</span>
                <div className="flex flex-wrap gap-2">{tab.skills}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <SectionTitle title="Мои проекты" navigateTo="my-projects" />
          <CardList>
            {myProjects.map((project) => (
              <Card key={project.title}>
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-medium">{project.title}</p>
                  <p className="text-muted">{project.description}</p>
                </div>
                <div className="w-max">
                  <button className="bg-primary w-max px-4 py-2 border-2 border-border/50 rounded-xl hover:ring-4 ring-primary/10 transition">
                    Перейти
                  </button>
                </div>
              </Card>
            ))}
          </CardList>
        </Section>

        <Section>
          <SectionTitle title="Опыт работы" navigateTo="/experience" />
          <CardList>
            <Card>
              <div className="transparent flex flex-col gap-2">
                <p className="text-xl font-medium">BOTTEC</p>
                <p className="text-muted">Full Stack Разработчик</p>
              </div>
              <div>
                <p className="sm:text-right text-sm text-muted">
                  Март 2025 - Апрель 2026
                </p>
              </div>
            </Card>
          </CardList>
        </Section>

        <Section>
          <SectionTitle title="Хакатоны" navigateTo="/hackathons" />
          <CardList>
            {hackathonProjects.map((project) => (
              <Card key={project.title}>
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-medium">{project.title}</p>
                  <p className="text-muted">{project.description}</p>
                </div>
                {project.place && (
                  <div>
                    <div
                      className={`px-2 py-1 text-sm rounded-full border-2 text-nowrap w-max ${getPlaceStyles(project.place)}`}
                    >
                      {project.place} место
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </CardList>
        </Section>
      </div>
    </>
  )
}

function getPlaceStyles(place: number): string {
  if (place === 1) {
    return 'text-[#b8860b] border-[#d4af37]'
  } else if (place === 2) {
    return 'text-[#909090] border-[#b0b0b0]'
  } else if (place === 3) {
    return 'text-[#b1633d] border-[#cd7f32]'
  } else {
    return ''
  }
}
