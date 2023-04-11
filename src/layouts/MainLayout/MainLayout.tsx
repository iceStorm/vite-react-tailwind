import { Outlet } from 'react-router-dom'
import { clsx } from 'clsx'

export function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={clsx('border-b', 'sticky top-0', 'backdrop-blur-md bg-white bg-opacity-75')}
      >
        <div className="container py-2">
          <a href="#" className="font-bold">
            Hello
          </a>
        </div>
      </header>

      <main className="container flex-1 py-5">
        <Outlet />
      </main>

      <footer className="border-t py-2">
        <div className="container text-center">
          <p>Made by Vite with &hearts;</p>
        </div>
      </footer>
    </div>
  )
}
