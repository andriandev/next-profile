import MetaHead from '@/components/shared/meta-head';
import Card from '@/components/shared/card';

function About() {
  return (
    <>
      <MetaHead
        title="About Me"
        description="Andriandev merupakan website portofolio pribadi dan tempat menyimpan berbagai projek"
      />
      <Card classCard="mt-3">
        <h1>About Me</h1>
        <p>
          Andriandev merupakan website portofolio pribadi dan tempat menyimpan
          berbagai projek
        </p>
      </Card>
    </>
  );
}

export default About;
