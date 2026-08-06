import { useState } from 'react'
import ThemeToggle from '#/components/ThemeToggle.tsx'
import { useLoaderData } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { Skill } from '#/components/Skill.tsx'
import { BlockTitle } from '#/components/BlockTitle.tsx'

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
        <Skill name="Docker" />
        <Skill name="Nginx" />
        <Skill name="Postgresql" />
        <Skill name="Redis" />
        <Skill name="Sqlalchemy" />
        <Skill name="Celery" />
        <Skill name="Aiogram" />
        <Skill name="FastAPI" />
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
  const [selectedStackTab, setSelectedStackTab] = useState<number>(0)

  return (
    <>
      <div className="flex flex-col gap-2.5 items-center text-center pb-8">
        <ThemeToggle />
        <div className="flex flex-col gap-1.5">
          <h1 className="text-4xl font-semibold">Bigbear</h1>
          <p>Full Stack Разработчик</p>
        </div>
        <button className="bg-[var(--bg-inner)] rounded-lg px-4 py-2 text-center transition hover:-translate-y-0.5">
          Связаться
        </button>
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="flex flex-col bg-[var(--bg-inner)] p-5 rounded-xl">
          <div className="flex items-center">
            <p className="text-xl">Обо мне</p>
          </div>
          <p>Разработка веб-сайтов, Telegram ботов, Telegram Web Apps</p>
        </div>

        <div className="flex flex-col gap-2.5 bg-[var(--bg-inner)] p-5 rounded-xl">
          <div className="flex justify-start p-1 bg-[var(--bg)] rounded-lg max-w-max">
            {stackTabs.map((tab, index) => (
              <div
                className={`relative flex py-1 px-2 text-center rounded-md ${index === selectedStackTab ? 'bg-[var(--bg-inner)]' : ''}`}
                onClick={() => setSelectedStackTab(index)}
              >
                {index === selectedStackTab && (
                  <motion.div
                    layoutId="stack-active-bg"
                    className="absolute inset-0 bg-[var(--bg-inner)] rounded-md z-0"
                    transition={{
                      // type: 'spring',
                      // stiffness: 200,
                      // damping: 35,
                      duration: 0.3,
                    }}
                  />
                )}
                <span className="relative z-1">{tab.title}</span>
              </div>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStackTab}
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              transition={{ duration: 0.2 }}
            >
              {stackTabs[selectedStackTab].skills}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-col gap-2.5 bg-[var(--bg-inner)] p-5 rounded-xl">
          {/* <div className="flex justify-between items-center">*/}
          {/*  <h2 className="text-xl">Мои проекты</h2>*/}
          {/*  <div className="flex items-center">*/}
          {/*    <button className="flex gap-1 justify-between items-center bg-[var(--bg)] p-2 rounded-lg">*/}
          {/*      <p className="-mt-0.25">Смотреть все</p>*/}
          {/*      <ChevronRight className="-mr-1" size={20} />*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/* </div>*/}
          <BlockTitle title="Мои проекты" navigateTo="my-projects" />
          <div className="flex flex-col gap-2.5">
            {myProjects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col p-2.5 bg-[var(--bg)] rounded-xl"
              >
                <p className="text-lg font-semibold">{project.title}</p>
                <p className="text-md">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2.5 bg-[var(--bg-inner)] p-5 rounded-xl">
          <BlockTitle title="Опыт работы" navigateTo="/experience" />
          <div className="flex flex-col p-2.5 bg-[var(--bg)] rounded-xl">
            <p className="text-lg font-semibold">BOTTEC</p>
            <p className="text-md">Март 2025 - Апрель 2026</p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 bg-[var(--bg-inner)] p-5 rounded-xl">
          <BlockTitle title="Хакатоны" navigateTo="/hackathons" />
          <div className="flex flex-col gap-2.5">
            {hackathonProjects.map((project) => (
              <div className="flex flex-col p-2.5 bg-[var(--bg)] rounded-xl">
                <p className="text-lg font-semibold">{project.title}</p>
                <p className="text-md">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
