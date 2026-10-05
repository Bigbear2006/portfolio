import { SocialLink } from '#/components/SocialLink.tsx'
import { Icon } from '#/components/Icon.tsx'
import { Card, CardList } from '#/components/Card.tsx'
import { Section } from '#/components/Section.tsx'
import { LinkedinIcon } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <Section>
      <CardList>
        <Card>
          <p className="text-md self-center sm:self-auto">
            &copy; {year} Bigbear
          </p>
          <div className="flex gap-2 justify-center">
            <SocialLink
              url="https://www.linkedin.com/in/mikhailmoroz/"
              icon={<LinkedinIcon className="size-5" />}
            />
            <SocialLink
              url="https://github.com/Bigbear2006"
              icon={<Icon name="github" />}
            />
            <SocialLink
              url="https://t.me/bigbeardev"
              icon={<Icon name="telegram" />}
            />
          </div>
        </Card>
      </CardList>
    </Section>
  )
}
