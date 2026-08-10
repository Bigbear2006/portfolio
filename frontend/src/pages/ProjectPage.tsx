import { Section } from '#/components/Section.tsx'
import { Card, CardList } from '#/components/Card.tsx'
import { Globe } from 'lucide-react'
import { Icon } from '#/components/Icon.tsx'

export function ProjectPage() {
  return (
    <div>
      <Section>
        <h1 className="text-4xl font-semibold pb-6">ClassFlow</h1>
        <CardList>
          <Card>
            <div className="flex flex-col gap-4">
              <p className="text-xl font-mono font-semibold">О проекте</p>
              <p className="text-lg">
                Сайт для управления учебным процессом дополнительного
                образования. Сайт для управления учебным процессом
                дополнительного образования. Сайт для управления учебным
                процессом дополнительного образования. Сайт для управления
                учебным процессом дополнительного образования
              </p>
            </div>
            <div className="flex gap-4 text-nowrap">
              <button className="flex items-center gap-2 border-2 border-border py-2 px-4 rounded-xl">
                <Globe />
                Сайт
              </button>
              <button className="flex items-center gap-2 border-2 border-border py-2 px-4 rounded-xl">
                <Icon name="github" />
                GitHub
              </button>
            </div>
          </Card>
        </CardList>
        <CardList>
          <div className="flex flex-col gap-0">
            <p className="text-xl font-mono font-semibold p-6">
              Реализованный функционал
            </p>
            {['sdds', 'vszdvasd', 'dsav'].map((elem, index) => (
              <Card key={elem} className="py-4 px-6">
                <div className="flex gap-4 items-center justify-center">
                  <p className="text-sm font-mono">{index + 1}</p>
                  <p className="text-lg">{elem}</p>
                </div>
              </Card>
            ))}
          </div>
        </CardList>
      </Section>
    </div>
  )
}
