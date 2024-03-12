'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = {
  '/': {
    name: 'Home',
  },
  '/projects': {
    name: 'Projects',
  },
  '/guestbook': {
    name: 'Guestbook',
  },
};

function toggleBurger() {
  let nav = document.getElementById('hamburger-links');
  if (nav?.style.display === 'flex') {
    nav.style.display = 'none';
  } else if (nav?.style) {
    nav.style.display = 'flex';
  }
}

export function NavBar() {
  const pathName = usePathname();

  return (
    <>
      <nav className="row">
        {/* Column 1 */}
        <div className="column">
          <div className="self-center">
            <img src="img/me.png" className="size-16 object-contain" />
          </div>
        </div>

        {/* Column 2 (Short Bio) */}
        <div className="column justify-center">
          <div className="row justify-center">
            <div className="tag-line">Alex Finley</div>
          </div>
          <div className="row justify-center">
            <div className="sub-tag-line"> Pixel Picasso</div>
          </div>
        </div>

        {/* Colum 3 (Hamburger Menu) */}
        <div className="column">
          <div className="self-end">
            <img
              src="img/hamburger_icon.svg"
              className="size-16 object-contain"
              onClick={toggleBurger}
            />
          </div>
        </div>
      </nav>

      <div id="hamburger-links" className="row nav-links">
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              id={pathName === path ? 'active' : ''}
              className="column items-center link"
              key={path}
              href={path}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </>
  );
}
