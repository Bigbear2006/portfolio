import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { useNavigate } from '@tanstack/react-router'

export function Section({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-4 py-5 sm:px-5">{children}</div>
}

export function SectionTitle({
  title,
  navigateTo,
}: {
  title: string
  navigateTo?: string
}) {
  const navigate = useNavigate()
  return (
    <div
      className="flex items-baseline gap-4"
      onClick={() => navigate({ to: navigateTo })}
    >
      <div className="flex gap-4">
        <h2 className="text-2xl font-mono">{title}</h2>
        {navigateTo && <ArrowRight className="self-center mt-0.5" />}
      </div>
      {/* {!navigateTo && <span className="flex-1 h-[1.5px] bg-card"></span>}*/}
    </div>
  )
}
