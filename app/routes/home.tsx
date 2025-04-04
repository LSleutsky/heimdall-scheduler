import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [{ title: `Heimdall Scheduler` }, { name: `description`, content: `Welcome to Heimdall Scheduler!` }];
}

export default function Home() {
  return <h1 className="text-galactic-violet dark:text-starry-grape">This is the Home Page</h1>;
}
