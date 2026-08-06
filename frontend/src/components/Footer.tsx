import { SocialLink } from '#/components/SocialLink.tsx'
import { Icon } from '#/components/Icon.tsx'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className="flex justify-between items-center px-5 py-2.5 rounded-lg bg-[var(--bg-inner)]">
      <p className="text-md">&copy; {year} Bigbear</p>
      <div className="flex gap-2 justify-center">
        <SocialLink
          url="https://github.com/Bigbear2006"
          icon={<Icon name="github" />}
        />
        <SocialLink
          url="https://t.me/bigbeardev"
          icon={<Icon name="telegram" />}
        />
      </div>
    </div>
  )
}
