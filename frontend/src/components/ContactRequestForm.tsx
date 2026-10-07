import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '#/components/ui/field.tsx'
import { Textarea } from '#/components/ui/textarea.tsx'
import { Button } from '#/components/Button.tsx'
import { Controller } from 'react-hook-form'
import { useContactRequestForm } from '#/hooks/forms/contact-request.ts'
import { Input } from '#/components/ui/input.tsx'
import { Dialog, DialogContent } from '#/components/ui/dialog.tsx'
import { useContactRequestMutation } from '#/hooks/mutations/contact-request.ts'
import { useModalContext } from '#/context.tsx'

export function ContactRequestFormModal() {
  const { isOpen, setIsOpen, openModal } = useModalContext()
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <ContactRequestForm onSuccess={openModal} />
      </DialogContent>
    </Dialog>
  )
}

interface ContactRequestFormProps {
  onSuccess: () => void
}

function ContactRequestForm({ onSuccess }: ContactRequestFormProps) {
  const { control, trigger, handleSubmit } = useContactRequestForm()
  const contactRequestMutation = useContactRequestMutation({ onSuccess })

  return (
    <form
      onSubmit={handleSubmit((data) => contactRequestMutation.mutate(data))}
    >
      <FieldGroup>
        <Controller
          name="message"
          control={control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="message">Сообщение</FieldLabel>
              <Textarea
                {...field}
                id="message"
                placeholder="..."
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="email">Почта</FieldLabel>
              <Input
                {...field}
                id="email"
                placeholder="email@gmail.com"
                aria-invalid={fieldState.invalid}
              />
              <FieldDescription>
                Необязательна, если указан телеграм
              </FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="telegram"
          control={control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="telegram">Телеграм</FieldLabel>
              <Input
                {...field}
                onChange={(e) => {
                  field.onChange(e)
                  trigger('email')
                }}
                id="telegram"
                placeholder="@username"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Button type="submit" variant="accent" className="h-11 font-semibold">
          Отправить
        </Button>
      </FieldGroup>
    </form>
  )
}
