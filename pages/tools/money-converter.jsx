import {
  getAllSymbolsCountry,
  getNameCountry,
  convertMoney,
} from '@/package/fixer-api';
import MetaHead from '@/components/shared/meta-head';
import { siteTitle, siteSeparator } from '@/config/setting';
import { useState } from 'react';
import Card from '@/components/shared/card';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@/components/shared/button';

function MoneyConverter() {
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [symbolFromValue, setSymbolFromValue] = useState('USD');
  const [symbolToValue, setSymbolToValue] = useState('IDR');

  function handleChangeFromInput(e) {
    setFromValue(e.target.value);
    const total = convertMoney(symbolFromValue, symbolToValue, e.target.value);
    setToValue(total);
    return;
  }

  function handleChangetoInput(e) {
    setToValue(e.target.value);
    const total = convertMoney(symbolToValue, symbolFromValue, e.target.value);
    setFromValue(total);
    return;
  }

  function handleChangeSymbolFromInput(e) {
    setSymbolFromValue(e.target.value);
    if (fromValue != '') {
      const total = convertMoney(symbolToValue, e.target.value, toValue);
      setFromValue(total);
    }
    return;
  }

  function handleChangeSymbolToInput(e) {
    setSymbolToValue(e.target.value);
    if (toValue != '') {
      const total = convertMoney(symbolFromValue, e.target.value, fromValue);
      setToValue(total);
    }
    return;
  }

  function handleChangeBtn() {
    setFromValue(toValue);
    setToValue(fromValue);
    setSymbolFromValue(symbolToValue);
    setSymbolToValue(symbolFromValue);
  }

  return (
    <>
      <MetaHead
        title={`Money Converter ${siteSeparator()} ${siteTitle()}`}
        description="Alat untuk mengubah nilai tukar mata uang di berbagai negara dengan mudah."
        canonical="/tools/money-converter"
      />
      <h1 className="h4 text-center border-bottom pb-1 mb-3">
        Money Converter
      </h1>
      <Card>
        <div className="row justify-content-between text-center my-3">
          <div className="col-12 col-sm-5">
            <select
              className="form-select"
              onChange={handleChangeSymbolFromInput}
              aria-label="Nilai Awal"
              value={symbolFromValue}
            >
              {getAllSymbolsCountry().map((item, i) => (
                <option key={i} value={item}>
                  {`${item} - ${getNameCountry(item)}`}
                </option>
              ))}
            </select>
            <input
              type="number"
              className="form-control"
              value={fromValue}
              placeholder={`Nilai ${symbolFromValue}`}
              onChange={handleChangeFromInput}
            />
          </div>
          <div className="col-12 col-sm-2 align-self-center">
            <Button
              className="btn btn-light my-2"
              title="Tukar Konversi"
              onClick={handleChangeBtn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left-right d-none d-sm-block"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down-up d-sm-none"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                />
              </svg>
            </Button>
          </div>
          <div className="col-12 col-sm-5">
            <select
              className="form-select"
              onChange={handleChangeSymbolToInput}
              aria-label="Nilai Akhir"
              value={symbolToValue}
            >
              {getAllSymbolsCountry().map((item, i) => (
                <option key={i} value={item}>
                  {`${item} - ${getNameCountry(item)}`}
                </option>
              ))}
            </select>
            <input
              type="number"
              className="form-control"
              value={toValue}
              placeholder={`Nilai ${symbolToValue}`}
              onChange={handleChangetoInput}
            />
          </div>
        </div>
        <div className="alert alert-primary text-center mt-5" role="alert">
          Data di atas merupakan data pada tanggal 14 November 2022.
        </div>
      </Card>
    </>
  );
}

export default MoneyConverter;
