import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import { cn } from '#/lib/utils.ts'

export const buttonVariants = cva(
  'flex gap-2 justify-center items-center rounded-xl text-center transition hover:ring-4 ring-primary/10 whitespace-nowrap',
  {
    variants: {
      variant: {
        default: 'bg-primary',
        accent: 'bg-accent',
        outline: 'border-2 border-border',
        circle: 'rounded-full bg-accent/50',
      },
      size: {
        default: 'px-4 py-2',
        lg: 'px-6 py-3 text-xl font-medium hover:ring-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
    compoundVariants: [
      {
        variant: 'circle',
        size: 'default',
        class: 'p-2',
      },
      {
        variant: 'circle',
        size: 'lg',
        class: 'p-2.5 hover:ring-4',
      },
    ],
  },
)

export function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}
