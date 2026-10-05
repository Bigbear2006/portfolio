import { Card, CardList } from '#/components/Card.tsx'
import { Button } from '#/components/Button.tsx'
import ThemeToggle from '#/components/ThemeToggle.tsx'
import { useModalContext } from '#/context.tsx'

export function Header() {
  const { openModal } = useModalContext()

  return (
    <div className="px-2.5 sm:px-10 py-5 fixed z-1 inset-0 max-h-[64px] mx-auto">
      <CardList className="bg-card/25 backdrop-blur-sm">
        <Card className="p-2.5 sm:p-2.5 flex-row">
          {/*<div className="flex items-center gap-6">*/}
          {/*  <h2 className="text-lg font-semibold">Михаил Мороз</h2>*/}
          <Button
            className="font-semibold"
            onClick={openModal}
          >
            Связаться
          </Button>
          {/*</div>*/}
          <ThemeToggle />
        </Card>
      </CardList>
    </div>
  )
}
