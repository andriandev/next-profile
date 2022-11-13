const MY_CERTIFICATE = [
  {
    title: 'Database MySQL',
    slug: 'database-mysql',
    image: 'https://i.ibb.co/GT9n5rZ/Database-My-SQL.jpg',
    stack: ['MySQL'],
    preview: 'http://ude.my/UC-ab8ae418-544d-4f4b-9fb1-fcce0fdcc314',
  },
  {
    title: 'Secure VPS in Ubuntu',
    slug: 'secure-vps-in-ubuntu',
    image: 'https://i.ibb.co/X8rv91t/Secure-VPS-in-Ubuntu.jpg',
    stack: ['Ubuntu', 'VPS'],
    preview: 'http://ude.my/UC-ffa752a6-f434-48e1-9358-ad8c29aa88af',
  },
  {
    title: 'React Front To Back 2022',
    slug: 'react-js-2022',
    image: 'https://i.ibb.co/WHqyXDt/React-Front-To-Back-2022.jpg',
    stack: ['React Js'],
    preview: 'http://ude.my/UC-2cd4779b-a980-4ad8-aa3c-67e2110324f5',
  },
  {
    title: 'Next js & React js',
    slug: 'next-js-and-react-js',
    image: 'https://i.ibb.co/ZmK6H8S/Next-js-React.jpg',
    stack: ['React Js', 'Next Js'],
    preview: 'http://ude.my/UC-5ea25267-7805-4fb3-9e00-a3eda490890e',
  },
];

const limitCertificatePerPage = 50;

export function getAllCertificate(page = 1, limit = limitCertificatePerPage) {
  const limitCertificate = limit * page;
  const offsetCertificate = (page - 1) * limit;
  return MY_CERTIFICATE.slice(offsetCertificate, limitCertificate);
}

export function getCertificateBySlug(slug) {
  return MY_CERTIFICATE.find((certificate) => certificate.slug === slug);
}

export function getPageCount(limit = limitCertificatePerPage) {
  const pageCount = MY_CERTIFICATE.length / limit;
  return Math.ceil(pageCount);
}
