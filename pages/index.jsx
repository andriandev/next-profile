import Link from 'next/link';
import MetaHead from '@/components/shared/meta-head';
import MyImage from '@/components/shared/my-image';
import Button from '@/components/shared/button';
import {
  siteTitle,
  siteDescription,
  siteSubTitle,
  siteSeparator,
} from '@/config/setting';
import { getFeaturedProject } from '@/config/data';

function Home() {
  return (
    <>
      <MetaHead
        title={`${siteTitle()} ${siteSeparator()} ${siteSubTitle()}`}
        description={siteDescription()}
        canonical="/"
      />
      <h2 id="profile" className="h5 text-center mb-3">
        My Profile
      </h2>
      <div className="row mb-5">
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
      <h2 id="project" className="h5 text-center mb-3">
        My Project
      </h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center">
        {getFeaturedProject().map((item) => (
          <div className="col mb-3" key={item.slug}>
            <div className="card h-100 shadow-sm">
              <MyImage
                width="559"
                height="314"
                src={item.image}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title h6">{item.title}</h5>
                <div>
                  {item.stack.map((itemStack, i) => (
                    <span className="badge text-bg-primary small me-1" key={i}>
                      {itemStack}
                    </span>
                  ))}
                </div>
              </div>
              <div className="card-footer">
                <div className="d-grid gap-2">
                  <Button className="btn btn-primary btn-sm">
                    Live Preview
                  </Button>
                  <Button className="btn btn-success btn-sm">
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row mb-3">
        <div className="col text-center">
          <Link href="/project">
            <a className="text-decoration-none small ">
              View All Project &raquo;
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
