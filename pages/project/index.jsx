import MetaHead from '@/components/shared/meta-head';
import { siteTitle, siteSeparator } from '@/config/setting';
import { getAllProject } from '@/config/project';
import CardProject from '@/components/shared/card-project';

function Project() {
  return (
    <>
      <MetaHead
        title={`Daftar Project ${siteSeparator()} ${siteTitle()}`}
        description={`Daftar project ${siteTitle()} yang pernah dibuat.`}
        canonical="/project"
      />
      <h1 className="h4 text-center border-bottom pb-1 mb-3">Daftar Project</h1>
      <CardProject items={getAllProject()} />
    </>
  );
}

export default Project;
