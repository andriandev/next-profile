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
        <div className="row row-cols-1 row-cols-md-2 text-center">
          <div className="col mb-3">
            <p>{getNameCountry(symbolFromValue)}</p>
            <select
              className="form-select"
              onChange={handleChangeSymbolFromInput}
              aria-label="Nilai Awal"
            >
              <option defaultValue={symbolFromValue}>{symbolFromValue}</option>
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
          <div className="col mb-3">
            <p>{getNameCountry(symbolToValue)}</p>
            <select
              className="form-select"
              onChange={handleChangeSymbolToInput}
              aria-label="Nilai Akhir"
            >
              <option defaultValue={symbolToValue}>{symbolToValue}</option>
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
      </Card>
    </>
  );
}

export default MoneyConverter;
