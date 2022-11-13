import base64 from '@/package/base64';
import MetaHead from '@/components/shared/meta-head';
import { siteTitle, siteSeparator } from '@/config/setting';
import { useState } from 'react';
import Card from '@/components/shared/card';

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
            className="form-control mb-4"
            rows="5"
            placeholder={`Masukan teks yang akan di ${base64Option}`}
            value={base64Value}
            onChange={handleChangeBase64Input}
          ></textarea>
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
    </>
  );
}

export default Base64;
