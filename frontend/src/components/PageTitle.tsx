import { ChevronLeft } from 'lucide-react'
import { useNavigate } from '@tanstack/react-router'

interface PageTitleProps {
  title: string
}

export function PageTitle({ title }: PageTitleProps) {
  const navigate = useNavigate()
  return (
    <div
      className="flex gap-1 items-center pb-2.5"
      onClick={() => navigate({ to: '/' })}
    >
      <ChevronLeft className="mt-1.25" size={40} />
      <h1 className="text-4xl font-semibold">{title}</h1>
    </div>
  )
}
