import MetaHead from '../../app/shared/meta-head';

function About(props) {
  return (
    <>
      <MetaHead
        title="About"
        description="Next bootstrap about"
        canonical={props.baseUrl}
      />
      <h1>About</h1>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { baseUrl: process.env.BASE_URL },
  };
}

export default About;
