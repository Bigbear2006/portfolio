import { useLoaderData, useNavigate } from '@tanstack/react-router'
import { Skill } from '#/components/Skill.tsx'
import { Card, CardList } from '#/components/Card.tsx'
import { Section, SectionTitle } from '#/components/Section.tsx'
import ResumePhoto from '#/assets/resume-photo.png'
import { Button } from '#/components/Button.tsx'
import { useRef } from 'react'
import { useModalContext } from '#/context.tsx'

const services = [
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
    description: 'Развертывание проектов на сервере и дальнейшее сопровождение',
  },
]

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

  const { openModal } = useModalContext()
  const projectsRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 md:gap-12 justify-center lg:justify-between items-center text-center sm:p-10">
        <div className="flex flex-1 flex-col gap-8 lg:gap-12 justify-center max-w-2xl">
          <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-left">
            <h1 className="max-[400px]:text-3xl text-4xl lg:text-5xl font-semibold font-mono">
              Михаил Мороз
            </h1>
            <h2 className="max-[400px]:text-lg text-xl lg:text-2xl text-pretty max-w-md lg:max-w-none">
              Я Fullstack Разработчик с опытом создания веб-сайтов,
              Telegram-ботов и Telegram Web Apps от проектирования архитектуры
              до деплоя и сопровождения.
            </h2>
          </div>
          <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
            <Button variant="accent" size="lg" onClick={openModal}>
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
        <div className="p-5 pb-0 order-first lg:order-none">
          <div className="flex justify-center items-end bg-card/25 overflow-hidden rounded-full shadow-lg border-3 border-border w-full aspect-square max-w-80 max-h-80 self-center lg:self-auto">
            <img src={ResumePhoto} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <Section>
          <SectionTitle title="Чем я занимаюсь" />
          <CardList>
            {services.map((elem, index) => (
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
                  <p className="text-xl font-semibold">{project.title}</p>
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
