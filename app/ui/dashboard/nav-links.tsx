'use client'

import {
  UserGroupIcon,
  UserCircleIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  IdentificationIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'ReReclamation Of', href: '/dashboard/reclamation-ofs', icon: IdentificationIcon },
  { name: 'Users', href: '/dashboard/users', icon: UserCircleIcon },
];

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <>
      {links.map(({icon,name,href}) => {
        const LinkIcon = icon;
        return (
          <Link
            key={name}
            href={href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === href,
              },
            )}>
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{name}</p>
          </Link>
        );
      })}
    </>
  );
}
