import Link from 'next/link';
import MetaHead from '@/components/shared/meta-head';
import {
  siteTitle,
  siteDescription,
  siteSubTitle,
  siteSeparator,
} from '@/config/setting';
import NavHero from '@/components/layout/nav-hero';
import { getFeaturedProject } from '@/config/project';
import { getFeaturedTools } from '@/config/tools';
import CardProject from '@/components/shared/card-project';

function Home() {
  return (
    <>
      <MetaHead
        title={`${siteTitle()} ${siteSeparator()} ${siteSubTitle()}`}
        description={siteDescription()}
        canonical="/"
      />
      {<NavHero />}
      <div className="container mb-5">
        <h2 id="project" className="h4 text-center mb-3">
          My Project
        </h2>
        <CardProject items={getFeaturedProject()} />
        <div className="row">
          <div className="col text-center">
            <Link href="/project">
              <a className="text-decoration-none small ">
                View All Project &raquo;
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <h2 id="tools" className="h4 text-center mb-3">
          My Tools
        </h2>
        <CardProject items={getFeaturedTools()} />
        <div className="row">
          <div className="col text-center">
            <Link href="/tools">
              <a className="text-decoration-none small ">
                View All Tools &raquo;
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
