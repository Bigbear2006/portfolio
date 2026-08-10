import type { ReactNode } from 'react'
import { cn } from '#/lib/utils.ts'

export function CardList({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col border-2 border-border/50 rounded-xl bg-card/5 backdrop-blur-lg shadow-md">
      {children}
    </div>
  )
}

export function Card({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 sm:flex-row justify-between items-center border-t-2 border-t-border/50 first:border-0 p-6',
        className,
      )}
    >
      {children}
    </div>
  )
}
