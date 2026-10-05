import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const EstimationSchema = z
  .object({
    message: z
      .string('Обязательное поле')
      .min(10, 'Минимум 10 символов')
      .max(1000, 'Не больше 1000 символов'),
    email: z
      .union([z.email('Неверный email'), z.literal('')])
      .optional()
      .transform((val) => (val === '' ? undefined : val)),
    telegram: z
      .union([
        z.string().startsWith('@', 'Юзернейм должен начинаться с @'),
        z.literal(''),
      ])
      .optional()
      .transform((val) => (val === '' ? undefined : val)),
  })
  .superRefine((values, ctx) => {
    if (!values.email && !values.telegram) {
      ctx.addIssue({
        code: 'custom',
        message: 'Надо указать почту или телеграм',
        path: ['email'],
      })
    }
  })

type ContactRequestInput = z.input<typeof EstimationSchema>
type ContactRequest = z.infer<typeof EstimationSchema>

export function useContactRequestForm() {
  return useForm<ContactRequestInput, any, ContactRequest>({
    resolver: zodResolver(EstimationSchema),
  })
}
