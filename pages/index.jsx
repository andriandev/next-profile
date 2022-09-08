import MetaHead from '@/components/shared/meta-head';
import Card from '@/components/shared/card';

function Home() {
  return (
    <>
      <MetaHead
        title="AndrianDev - Web Developer"
        description="Andriandev merupakan website portofolio pribadi dan tempat menyimpan berbagai projek"
      />
      <Card classCard="mt-3">
        <h1>Home</h1>
      </Card>
    </>
  );
}

export default Home;
