import { ChevronRight } from 'lucide-react'
import { useNavigate } from '@tanstack/react-router'

interface BlockTitleProps {
  title: string
  navigateTo: string
}

export function BlockTitle({ title, navigateTo }: BlockTitleProps) {
  const navigate = useNavigate()
  return (
    <div className="flex gap-1" onClick={() => navigate({ to: navigateTo })}>
      <p className="text-xl">{title}</p>
      <ChevronRight className="mt-1.25" />
    </div>
  )
}
