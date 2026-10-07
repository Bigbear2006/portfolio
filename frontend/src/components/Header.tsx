import { Card, CardList } from '#/components/Card.tsx'
import { Button } from '#/components/Button.tsx'
import ThemeToggle from '#/components/ThemeToggle.tsx'
import { useModalContext } from '#/context.tsx'

export function Header() {
  const { openModal } = useModalContext()

  return (
    <div className="px-2.5 sm:px-10 py-5 fixed z-1 inset-0 max-h-[64px] mx-auto">
      <CardList className="bg-card/25 backdrop-blur-sm">
        <Card className="p-5 sm:px-10 flex-row">
          <div className="hidden sm:block ">
            <h2 className="text-xl font-semibold">Михаил Мороз</h2>
            <h3 className="text-muted font-medium">Fullstack-разработчик</h3>
          </div>
          <div className="flex items-center justify-between gap-2 w-full sm:w-auto">
            <ThemeToggle />
            <Button className="font-semibold" onClick={openModal}>
              Связаться
            </Button>
          </div>
        </Card>
      </CardList>
    </div>
  )
}
