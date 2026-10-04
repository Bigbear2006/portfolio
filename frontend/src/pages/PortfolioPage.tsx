import ThemeToggle from '#/components/ThemeToggle.tsx'
import { useLoaderData, useNavigate } from '@tanstack/react-router'
import { Skill } from '#/components/Skill.tsx'
import { Card, CardList } from '#/components/Card.tsx'
import { Section, SectionTitle } from '#/components/Section.tsx'
import PlaceholderImage from '#/assets/placeholder.png'
import { Button } from '#/components/Button.tsx'
import { useRef } from 'react'

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
  const projects = useLoaderData({ from: '/_layout' })
  const navigate = useNavigate()

  const projectsRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <ThemeToggle />

      <div className="flex flex-col md:flex-row gap-12 md:gap-6 justify-center md:justify-between md:items-center text-center sm:p-10">
        <div className="flex flex-col gap-12 max-w-2xl">
          <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
            <h1 className="text-5xl font-semibold font-mono">Михаил Мороз</h1>
            <h2 className="text-2xl text-pretty">
              Я Fullstack Разработчик с опытом создания веб-сайтов,
              Telegram-ботов и Telegram Web Apps от проектирования архитектуры
              до деплоя и сопровождения.
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <Button variant="accent" size="lg">
              Связаться
            </Button>
            <Button
              size="lg"
              onClick={() =>
                projectsRef.current?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }
            >
              Мои проекты
            </Button>
          </div>
        </div>
        <img
          src={PlaceholderImage}
          alt="Михаил Мороз"
          className="w-100 h-auto order-first md:order-none self-center md:self-auto"
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <Section>
          <SectionTitle title="Чем я занимаюсь" />
          <CardList>
            {[
              {
                title: 'Веб-разработка',
                description:
                  'Разработка сайтов от формирования ТЗ до деплоя и сопровождения',
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
                title: 'Интеграции',
                description:
                  'Подключение любых платежных систем к вашему проекту, интеграция ИИ, CRM и других сторонних API',
              },
              {
                title: 'Деплой',
                description:
                  'Развертывание проектов на сервере и дальнейшее сопровождение',
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
          <SectionTitle
            ref={projectsRef}
            title={`Мои проекты (${projects.length})`}
            navigateTo="projects"
          />
          <CardList>
            {projects.slice(0, 5).map((project) => (
              <Card key={project.title}>
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-medium">{project.title}</p>
                  <p className="text-muted">{project.short_description}</p>
                </div>
                <Button
                  variant="outline"
                  onClick={() =>
                    navigate({
                      to: '/project/$slug',
                      params: { slug: project.slug },
                    })
                  }
                >
                  Перейти
                </Button>
              </Card>
            ))}
          </CardList>
        </Section>
      </div>
    </>
  )
}
