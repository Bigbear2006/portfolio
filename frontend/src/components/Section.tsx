import { ArrowRight } from 'lucide-react'
import type { ReactNode, RefObject } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { cn } from '#/lib/utils.ts'

export function Section({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-4 py-5 sm:px-5', className)}>
      {children}
    </div>
  )
}

export function SectionTitle({
  title,
  navigateTo,
  ref,
}: {
  title: string
  navigateTo?: string
  ref?: RefObject<HTMLDivElement | null>
}) {
  const navigate = useNavigate()
  return (
    <div
      ref={ref}
      className="flex items-baseline gap-4"
      onClick={() => navigate({ to: navigateTo })}
    >
      <div className="flex gap-4">
        <h2 className="text-2xl font-mono tracking-tight font-medium">
          {title}
        </h2>
        {navigateTo && <ArrowRight className="self-center mt-0.5" />}
      </div>
    </div>
  )
}
