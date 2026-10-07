import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import { cn } from '#/lib/utils.ts'

export const buttonVariants = cva(
  'flex gap-2 justify-center items-center rounded-xl text-center transition shadow-xl hover:ring-4 ring-primary/10 backdrop-blur-lg border-2 border-border whitespace-nowrap',
  {
    variants: {
      variant: {
        default: 'bg-card/50',
        accent: 'bg-accent/50',
        outline: 'backdrop-blur-none',
        circle: 'rounded-full shadow-sm',
      },
      size: {
        default: 'px-4 py-2',
        lg: 'px-5 py-2.5 text-xl font-medium border-3 hover:ring-6',
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
        class: 'p-2.5 border-2 hover:ring-4',
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
