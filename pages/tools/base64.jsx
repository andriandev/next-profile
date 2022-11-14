import base64 from '@/package/base64';
import MetaHead from '@/components/shared/meta-head';
import { siteTitle, siteSeparator } from '@/config/setting';
import { useState } from 'react';
import Card from '@/components/shared/card';
import Button from '@/components/shared/button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Base64() {
  const [base64Option, setBase64Option] = useState('encode');
  const [base64Value, setBase64Value] = useState('');
  const [base64Result, setBase64Result] = useState('');

  // Run function if input radio button change
  function handleChangeBase64Option(e) {
    // Set Base64Option state with value input radio button
    setBase64Option(e.target.value);
    // Run function Base64 if input radio button change
    base64Run(base64Value, e.target.value);
    return;
  }

  // Run function if input text area value change
  function handleChangeBase64Input(e) {
    // Set base64Value state with input text area value
    setBase64Value(e.target.value);
    // Run function Base64 if input text area value change
    base64Run(e.target.value);
    return;
  }

  // Base64 run function
  function base64Run(string, option = base64Option) {
    let result = '';
    try {
      if (option === 'encode') {
        result = base64.encode(string);
      } else if (option === 'decode') {
        result = base64.decode(string);
      } else {
        result = 'Terjadi kesalahan, opsi harus encode atau decode.';
      }
    } catch (error) {
      // console.log(error.message);
      result = error?.message;
    }
    // Set Base64Result state with result
    setBase64Result(result);
    return;
  }

  // Function copy base64 result
  function handleCopy() {
    // Copy base64 result
    navigator.clipboard.writeText(base64Result);

    // Toast the copied text
    toast.success(`Hasil ${base64Option} berhasil di copy.`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return;
  }

  return (
    <>
      <MetaHead
        title={`Base64 Encode Decode ${siteSeparator()} ${siteTitle()}`}
        description="Alat untuk enkripsi base64 encode and decode dengan mudah."
        canonical="/tools/base64"
      />
      <h1 className="h4 text-center border-bottom pb-1 mb-3">
        Base64 Encode Decode
      </h1>
      <Card>
        <div className="mb-3">
          <div className="base64option text-center mb-2">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="base64"
                id="base64encode"
                value="encode"
                defaultChecked
                onChange={handleChangeBase64Option}
              />
              <label className="form-check-label" htmlFor="base64encode">
                Encode
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="base64"
                id="base64decode"
                value="decode"
                onChange={handleChangeBase64Option}
              />
              <label className="form-check-label" htmlFor="base64decode">
                Decode
              </label>
            </div>
          </div>
          <textarea
            className="form-control"
            rows="5"
            placeholder={`Masukan teks yang akan di ${base64Option}`}
            value={base64Value}
            onChange={handleChangeBase64Input}
          ></textarea>
          <div className="text-center">
            <Button
              className={`btn btn-primary btn-sm my-3${
                base64Result == '' ? ' disabled' : ''
              }`}
              onClick={handleCopy}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-clipboard-check mb-1"
                viewBox="0 0 16 16"
                alt="Copy"
              >
                <path
                  fillRule="evenodd"
                  d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
              </svg>{' '}
              Copy to Clipboard
            </Button>
          </div>
          <textarea
            className="form-control"
            rows="5"
            placeholder={`Hasil ${base64Option}`}
            value={base64Result}
            readOnly
            aria-label="readonly input base64-result"
          ></textarea>
        </div>
      </Card>
      <ToastContainer />
    </>
  );
}

export default Base64;
