import { useRouter } from 'next/router';
import { useState } from 'react';
import ActiveLink from '@/components/shared/active-link';
import { siteTitle } from '@/config/setting';
import NavHero from '@/components/layout/nav-hero';

function Header() {
  const [collapse, setCollapse] = useState(false);
  const { pathname } = useRouter();
  const urlPath = pathname == '/' ? true : false;

  const handleClick = () => {
    setCollapse((prev) => {
      if (prev === false) {
        return true;
      }
      return false;
    });
  };

  const NAV_ITEM = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Project',
      href: '/project',
    },
  ];

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark"
        aria-label="Main navigation"
      >
        <div className="container">
          <ActiveLink href="/" activeClassName="">
            <a className="navbar-brand">{siteTitle()}</a>
          </ActiveLink>
          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            id="navbarSideCollapse"
            aria-label="Toggle navigation"
            onClick={handleClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`navbar-collapse offcanvas-collapse${
              collapse ? ' open' : ''
            }`}
            id="navbarsExampleDefault"
          >
            <ul
              onClick={handleClick}
              className="navbar-nav me-auto mb-2 mb-lg-0"
            >
              {NAV_ITEM.map((item, i) => (
                <li className="nav-item" key={i}>
                  <ActiveLink
                    href={item.href}
                    activeClassName="active"
                    scroll={item.href.includes('#') ? false : true}
                  >
                    <a className="nav-link">{item.title}</a>
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {urlPath && <NavHero />}
    </header>
  );
}

export default Header;
