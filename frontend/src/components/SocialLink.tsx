import { buttonVariants } from '#/components/Button.tsx'
import { cn } from '#/lib/utils.ts'

interface SocialLinkProps {
  url: string
  icon: React.ReactNode
  label: string
}

export function SocialLink({ url, icon, label }: SocialLinkProps) {
  return (
    <a
      href={url}
      className={cn(buttonVariants({ variant: 'circle', size: 'lg' }))}
      target="_blank"
      aria-label={label}
    >
      {icon}
    </a>
  )
}
