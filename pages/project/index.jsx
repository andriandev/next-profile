import MetaHead from '@/components/shared/meta-head';
import MyImage from '@/components/shared/my-image';
import { siteTitle, siteSeparator } from '@/config/setting';
import { getAllProject } from '@/config/data';

function Project() {
  return (
    <>
      <MetaHead
        title={`Daftar Project ${siteSeparator()} ${siteTitle()}`}
        description={`Daftar project ${siteTitle()} yang pernah dibuat.`}
        canonical="/project"
      />
      <h1 className="h5">Daftar Project</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 justify-content-center">
        {getAllProject().map((item) => (
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
                {item.stack.map((itemStack, i) => (
                  <span className="badge text-bg-primary small me-1" key={i}>
                    {itemStack}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Project;
