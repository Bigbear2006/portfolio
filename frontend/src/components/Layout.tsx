import { Outlet } from '@tanstack/react-router'
import { Footer } from '#/components/Footer.tsx'

export function Layout() {
  return (
    <div className="min-h-screen p-2.5 bg-[var(--overlay)]">
      <div className="flex flex-col gap-2.5 p-5 rounded-xl bg-[var(--bg)] max-w-[600px] m-auto">
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}
