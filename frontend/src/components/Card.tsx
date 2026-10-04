import type { ReactNode } from 'react'
import { cn } from '#/lib/utils.ts'

export function CardList({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        'flex flex-col border-2 border-border/50 rounded-xl bg-card/5 backdrop-blur-lg shadow-md',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function Card({
  className,
  onClick,
  children,
}: {
  className?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
  children: ReactNode
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'flex flex-col gap-4 sm:flex-row justify-between sm:items-center border-t-2 border-t-border/50 first:border-0 p-6 hover:bg-card/25 transition-colors',
        className,
      )}
    >
      {children}
    </div>
  )
}
