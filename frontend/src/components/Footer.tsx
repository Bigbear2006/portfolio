import { SocialLink } from '#/components/SocialLink.tsx'
import { Icon } from '#/components/Icon.tsx'
import { Card, CardList } from '#/components/Card.tsx'
import { config } from '#/config.ts'
import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="p-5 sm:p-10 pt-5 sm:pt-5">
      <CardList>
        <Card className="gap-6">
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
