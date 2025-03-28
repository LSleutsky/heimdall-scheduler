import { Outlet } from 'react-router';

import ThemeToggle from '~/components/ThemeToggle';

import { ThemeProvider } from '~/context/ThemeContext';

export default function MainLayout() {
  return (
    <ThemeProvider>
      <main className='bg-red-100 dark:bg-purple-dark'>
        <header>
          <ThemeToggle />
        </header>
        <Outlet />
      </main>
    </ThemeProvider>
  );
}
