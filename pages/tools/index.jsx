import MetaHead from '@/components/shared/meta-head';
import { siteTitle, siteSeparator } from '@/config/setting';
import { getAllTools } from '@/config/tools';
import CardProject from '@/components/shared/card-project';

function Tools() {
  return (
    <>
      <MetaHead
        title={`Daftar Tools ${siteSeparator()} ${siteTitle()}`}
        description={`Daftar tools ${siteTitle()} yang pernah dibuat.`}
        canonical="/tools"
      />
      <h1 className="h4 text-center border-bottom pb-1 mb-3">Daftar Tools</h1>
      <CardProject items={getAllTools()} />
    </>
  );
}

export default Tools;
