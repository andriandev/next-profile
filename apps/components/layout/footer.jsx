import Link from 'next/link';
import { siteTitle } from '@/config/setting';

function Footer() {
  return (
    <footer className="bg-light border-top">
      <p className="text-center text-muted my-3">
        Copyright ©{new Date().getFullYear() + ' '}
        <Link href="/">
          <a className="text-muted text-decoration-none">{siteTitle()}</a>
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
