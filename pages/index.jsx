import MetaHead from '../app/shared/meta-head';

function Home(props) {
  return (
    <>
      <MetaHead
        title="Next Bootstrap"
        description="Next js bootstrap layout"
        canonical={props.baseUrl}
      />
      <h1>Home</h1>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { baseUrl: process.env.BASE_URL },
  };
}

export default Home;
