import MetaHead from '@/components/shared/meta-head';
import { siteTitle, siteSeparator } from '@/config/setting';
import { getAllCertificate } from '@/config/certificate';
import CardCertificate from '@/components/shared/card-certificate';

function Certificate() {
  return (
    <>
      <MetaHead
        title={`Daftar Sertifikat ${siteSeparator()} ${siteTitle()}`}
        description={`Daftar sertifikat ${siteTitle()} yang pernah didapatkan dari kursus.`}
        canonical="/certificate"
      />
      <h1 className="h4 text-center border-bottom pb-1 mb-3">
        Daftar Sertifikat
      </h1>
      <CardCertificate items={getAllCertificate()} />
    </>
  );
}

export default Certificate;
