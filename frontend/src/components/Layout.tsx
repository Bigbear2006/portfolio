import { Outlet } from '@tanstack/react-router'
import { Footer } from '#/components/Footer.tsx'
import { Header } from '#/components/Header.tsx'
import { ContactRequestFormModal } from '#/components/ContactRequestForm.tsx'

export function Layout() {
  return (
    <div className="min-h-screen p-2.5 sm:p-10 bg-gradient-to-br from-sky-200 to-green-200 dark:from-sky-900 dark:to-green-900">
      {/* <div className="absolute right-0 top-[50vh] w-[50vw] h-[50vh] bg-gradient-to-br from-blue-300 via-emerald-300 to-green-300 rounded-full mix-blend-multiply filter blur-3xl"></div>*/}
      <Header />
      <div className="flex flex-col gap-2.5 p-5 mt-30 sm:mt-25 rounded-xl m-auto bg-card/25 backdrop-blur-md ring-2 ring-black/5 shadow-lg">
        <Outlet />
        <Footer />
        <ContactRequestFormModal />
      </div>
    </div>
  )
}
