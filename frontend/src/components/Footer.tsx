import { SocialLink } from '#/components/SocialLink.tsx'
import { Icon } from '#/components/Icon.tsx'
import { Card, CardList } from '#/components/Card.tsx'
import { Section } from '#/components/Section.tsx'
import { config } from '#/config.ts'

export function Footer() {
  return (
    <Section>
      <CardList>
        <Card>
          <div className="space-y-2 sm:space-y-0 text-center sm:text-left">
            <p className="text-sm sm:text-md self-center sm:self-auto underline-offset-2 hover:underline">
              {config.EMAIL}
            </p>
            <p className="text-sm">Политика конфиденциальности</p>
          </div>
          <div className="flex gap-2 justify-center">
            <SocialLink
              url="https://www.linkedin.com/in/mikhailmoroz/"
              icon={<Icon name="linkedin" />}
            />
            <SocialLink
              url="https://github.com/Bigbear2006"
              icon={<Icon name="github" />}
            />
            {/* <SocialLink*/}
            {/*  url="https://t.me/bigbeardev"*/}
            {/*  icon={<Icon name="telegram" />}*/}
            {/* />*/}
          </div>
        </Card>
      </CardList>
    </Section>
  )
}
