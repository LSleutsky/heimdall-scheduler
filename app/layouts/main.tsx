import { Outlet } from 'react-router';

import ThemeToggle from '~/components/ThemeToggle';

import { ThemeProvider } from '~/context/ThemeContext';

export default function MainLayout() {
  return (
    <ThemeProvider>
      <main className="min-h-screen flex flex-col flex-auto bg-linear-to-t from-starry-grape to-electric-orchid dark:from-galactic-violet dark:to-nebula-purple [&>*]:p-4">
        <header className="flex justify-between">
          <img alt="Image placeholder" src="https://placehold.co/200x50" />
          <ThemeToggle />
        </header>
        <div className="flex flex-col flex-auto">
          <Outlet />
        </div>
        <footer className="text-galactic-violet dark:text-starry-grape">
          This will be the footer
        </footer>
      </main>
    </ThemeProvider>
  );
}
