import Image from 'next/image';
import MetaHead from '@/components/shared/meta-head';
import Card from '@/components/shared/card';

function Home() {
  return (
    <>
      <MetaHead
        title="AndrianDev - Web Developer"
        description="Andriandev merupakan website portofolio pribadi dan tempat menyimpan berbagai projek"
      />
      <Card classCard="my-3">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-3 text-center">
            <Image
              width="220"
              height="220"
              src="/assets/img/profile.jpg"
              className="rounded mx-auto d-block img-thumbnail"
            />
          </div>
          <div className="col-sm-12 col-md-8 col-lg-9 my-2">
            <ul className="list-group">
              <li className="list-group-item">
                <b>Nama:</b> Andrian Adi Saputra
              </li>
              <li className="list-group-item">
                <b>Alamat:</b> Pringsewu, Lampung, Indonesia
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
      </Card>
    </>
  );
}

export default Home;
