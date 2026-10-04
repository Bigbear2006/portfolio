import { buttonVariants } from '#/components/Button.tsx'
import { cn } from '#/lib/utils.ts'

interface SocialLinkProps {
  url: string
  icon: React.ReactNode
}

export function SocialLink({ url, icon }: SocialLinkProps) {
  return (
    <a
      href={url}
      className={cn(buttonVariants({ variant: 'circle', size: 'lg' }))}
      target="_blank"
    >
      {icon}
    </a>
  )
}
