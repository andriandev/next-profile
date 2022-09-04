import { useState } from 'react';
import MetaHead from '../../app/shared/meta-head';
import Button from '../../app/components/button';

function State(props) {
  const [number, setNumber] = useState(1);

  const handleTambah = () => {
    setNumber((prev) => prev + 1);
  };

  const handleKurang = () => {
    setNumber((prev) => prev - 1);
  };

  return (
    <>
      <MetaHead
        title="State"
        description="Next bootstrap state"
        canonical={props.baseUrl}
      />
      <h1>State</h1>
      <Button className="btn btn-primary btn-sm me-2" onClick={handleTambah}>
        Tambah 1
      </Button>
      <Button className="btn btn-primary btn-sm" onClick={handleKurang}>
        Kurang 1
      </Button>
      <p className="my-2">Number: {number}</p>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { baseUrl: process.env.BASE_URL },
  };
}

export default State;
