import Link from 'next/link';
import MetaHead from '@/components/shared/meta-head';
import {
  siteTitle,
  siteDescription,
  siteSubTitle,
  siteSeparator,
} from '@/config/setting';
import { getFeaturedProject } from '@/config/data';
import CardProject from '@/components/shared/card-project';

function Home() {
  return (
    <>
      <MetaHead
        title={`${siteTitle()} ${siteSeparator()} ${siteSubTitle()}`}
        description={siteDescription()}
        canonical="/"
      />
      <div className="mb-5">
        <h2 id="profile" className="h4 text-center mb-3">
          My Profile
        </h2>
        <div className="row">
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item">
                <b>Nama:</b> Andrian Adi Saputra
              </li>
              <li className="list-group-item">
                <b>Alamat:</b> Indonesia
              </li>
              <li className="list-group-item">
                <b>Umur:</b> 22 Tahun
              </li>
              <li className="list-group-item">
                <b>Gender:</b> Pria
              </li>
              <li className="list-group-item">
                <b>Keahlian:</b> HTML, CSS, Javascript, PHP, Node Js, React Js,
                Next Js, Git.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-3">
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
    </>
  );
}

export default Home;
