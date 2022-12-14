import {
  siteTitle,
  siteSubTitle,
  siteDescription,
  siteImgNavHero,
} from '@/config/setting';
import MyImage from '@/components/shared/my-image';
import { getAllSocialNavHero } from '@/config/social-nav-hero';

function NavHero() {
  const SOCIAL_NAV_HERO = getAllSocialNavHero();

  return (
    <div className="masthead mb-5 bg-dark text-white">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center">
            <MyImage
              width="160"
              height="160"
              src={siteImgNavHero()}
              className=" img-thumbnail rounded-circle border border-dark"
              title={`${siteTitle()} ${siteSubTitle()}`}
              alt={`${siteTitle()} ${siteSubTitle()}`}
            />
            <h1 className="fw-light h2">{siteTitle()}</h1>
            <p className="lead fs-6">{siteDescription()}</p>
            <p className="lead fs-6">
              {SOCIAL_NAV_HERO.map((item, i) => (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-secondary btn-sm me-1"
                  role="button"
                  title={item.title}
                  aria-label={item.title}
                  key={i}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={item.iconClass}
                    viewBox="0 0 16 16"
                    alt={item.title}
                  >
                    {item.iconPath.map((itemPath, i) => (
                      <path key={i} fillRule={item.iconFillRule} d={itemPath} />
                    ))}
                  </svg>
                </a>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavHero;
