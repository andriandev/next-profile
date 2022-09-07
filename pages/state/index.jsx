import { useState } from 'react';
import MetaHead from '@/components/shared/meta-head';
import Button from '@/components/shared/button';

function State() {
  const [number, setNumber] = useState(1);

  const handleTambah = () => {
    setNumber((prev) => prev + 1);
  };

  const handleKurang = () => {
    setNumber((prev) => prev - 1);
  };

  return (
    <>
      <MetaHead title="State" description="Next bootstrap state" />
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

export default State;
