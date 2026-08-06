interface SocialLinkProps {
  url: string
  icon: React.ReactNode
}

export function SocialLink({ url, icon }: SocialLinkProps) {
  return (
    <a href={url} target="_blank">
      <div className="flex items-center justify-center rounded-full bg-[var(--bg)] p-2.5 transition">
        {icon}
      </div>
    </a>
  )
}
