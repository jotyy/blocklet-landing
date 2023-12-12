import { Icons } from '@/components/icons';
import { siteConfig } from '@/config/site';
import { Link } from 'react-router-dom';

import UserButton from './user-button';

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link to="/" className="flex items-center space-x-2">
          <Icons.Logo className="h-6 w-6" />
          <span className="inline-block font-bold">{siteConfig.name}</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-6">
          <nav className="flex items-center space-x-1">
            <UserButton />
          </nav>
        </div>
      </div>
    </header>
  );
}
