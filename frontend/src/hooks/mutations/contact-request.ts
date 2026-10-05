import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { createContactRequest } from '#/api/contact-request.ts'

interface UseEstimationMutationOptions {
  onSuccess?: () => void
}

export function useContactRequestMutation({
  onSuccess,
}: UseEstimationMutationOptions) {
  return useMutation({
    mutationFn: createContactRequest,
    onSuccess: () => {
      onSuccess?.()
      toast.success('Данные отправлены! Отвечу в течение 24 часов')
    },
    onError: () => {
      toast.error(
        'Ошибка отправки. Проверьте введенные данные и попробуйте еще раз или напишите мне на почту',
      )
    },
  })
}
