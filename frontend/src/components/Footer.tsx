import { SocialLink } from '#/components/SocialLink.tsx'
import { Icon } from '#/components/Icon.tsx'
import { Card, CardList } from '#/components/Card.tsx'
import { config } from '#/config.ts'
import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="pt-5">
      <CardList className="bg-card/25 backdrop-blur-md shadow-lg ring-2 ring-black/5 border-0 sm:px-5">
        <Card className="gap-6 hover:bg-transparent">
          <div className="text-center sm:text-left">
            <p className="self-center sm:self-auto">{config.EMAIL}</p>
            <Link
              to="/privacy"
              className="text-sm underline-offset-2 hover:underline"
            >
              Политика конфиденциальности
            </Link>
          </div>
          <div className="flex gap-2 justify-center">
            <SocialLink
              url={config.LINKEDIN}
              icon={<Icon name="linkedin" />}
              label="LinkedIn"
            />
            <SocialLink
              url={config.GITHUB}
              icon={<Icon name="github" />}
              label="GitHub"
            />
          </div>
        </Card>
      </CardList>
    </footer>
  )
}
