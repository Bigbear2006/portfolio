import type { ReactNode } from 'react'
import { cn } from '#/lib/utils.ts'

export function CardList({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return <div className={cn('flex flex-col gap-4', className)}>{children}</div>
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
        'flex flex-col gap-4 sm:flex-row justify-between sm:items-center border-2 border-border p-6 transition-colors rounded-xl bg-card',
        className,
      )}
    >
      {children}
    </div>
  )
}
