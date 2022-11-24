import { useState } from 'react';
import MetaHead from '@/components/shared/meta-head';
import { siteTitle, siteSeparator } from '@/config/setting';
import QRCode from 'qrcode';
import Card from '@/components/shared/card';
import Button from '@/components/shared/button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function QRCodePage() {
  const [imgCode, setImgCode] = useState(
    'https://i.ibb.co/DQ73Xpv/QR-Code.png'
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (e.target[0].value == '') {
      toast.info(`Harap isi form input !`, {
        autoClose: 3000,
      });
      return;
    }

    QRCode.toDataURL(e.target[0].value)
      .then((url) => {
        setImgCode(url);
        toast.success(`QR Code Generated !`, {
          autoClose: 3000,
        });
      })
      .catch((e) => {
        toast.error(`Error ${e?.message}`, {
          autoClose: 3000,
        });
        console.error(e);
      });
    return;
  }

  return (
    <>
      <MetaHead
        title={`QR Code Generator ${siteSeparator()} ${siteTitle()}`}
        description="Alat untuk membuat sebuah bar qrcode dengan mudah."
        canonical="/tools/qrcode-generator"
      />
      <h1 className="h4 text-center border-bottom pb-1 mb-3">
        QR Code Generator
      </h1>
      <Card>
        <form className="mb-3" onSubmit={handleSubmit}>
          <textarea
            className="form-control mb-3"
            rows="5"
            placeholder="Masukan text maksimal 305 kata."
            maxLength="305"
          ></textarea>
          <div className="text-center">
            <Button type="submit" className="btn btn-primary btn-sm mb-2">
              Generate QR Code
            </Button>
          </div>
        </form>
        <div className="text-center">
          <img
            src={imgCode}
            alt="QR Code"
            width="180"
            className="border img-fluid"
          />
        </div>
      </Card>
      <ToastContainer />
    </>
  );
}

export default QRCodePage;
