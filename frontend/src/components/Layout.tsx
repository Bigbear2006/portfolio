import { Outlet } from '@tanstack/react-router'
import { Footer } from '#/components/Footer.tsx'
import { Header } from '#/components/Header.tsx'
import { ContactRequestFormModal } from '#/components/ContactRequestForm.tsx'

export function Layout() {
  return (
    <div className="min-h-screen p-2.5 sm:p-10">
      <Header />
      <main className="flex flex-col gap-2.5 p-5 mt-30 sm:mt-25 m-auto">
        <Outlet />
        <ContactRequestFormModal />
      </main>
      <Footer />
    </div>
  )
}
