import MetaHead from '@/components/shared/meta-head';
import { siteTitle, siteSeparator } from '@/config/setting';
import { useState } from 'react';
import Card from '@/components/shared/card';
import Button from '@/components/shared/button';
import MyImage from '@/components/shared/my-image';
import { getRandomArray, getQueryUrl } from '@/helpers/function';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Tools() {
  const [webUrl, setWebUrl] = useState('');
  const [fullPage, setFullPage] = useState(false);
  const [lazyLoad, setlazyLoad] = useState(false);
  const [width, setWidth] = useState(1280);
  const [height, setHeight] = useState(720);
  const [delay, setDelay] = useState(1500);
  const [fileType, setFileType] = useState('PNG');
  const [imgResult, setImgResult] = useState(
    'https://i.ibb.co/cDgDZrc/google.png'
  );
  const [linkImgResult, setLinkImgResult] = useState(
    'https://i.ibb.co/cDgDZrc/google.png'
  );
  const [isDisabled, setIsDisabled] = useState(false);
  const [disabledHeight, setdisabledHeight] = useState(false);

  function handleChangeWebUrl(e) {
    setWebUrl(e.target.value);
    return;
  }

  function handleChangeInputFullPage() {
    setdisabledHeight((prev) => !prev);
    setFullPage((prev) => !prev);
    return;
  }

  function handleChangeInputLazyLoad() {
    setlazyLoad((prev) => !prev);
    return;
  }

  function handleChangeInputWidth(e) {
    setWidth(e.target.value);
    return;
  }

  function handleChangeInputHeight(e) {
    setHeight(e.target.value);
    return;
  }

  function handleChangeInputDelay(e) {
    setDelay(e.target.value);
    return;
  }

  function handleChangeInputFileType(e) {
    setFileType(e.target.value);
    return;
  }

  const FILE_TYPE = ['PNG', 'JPG', 'WebP', 'PDF'];

  function handleSubmit(e) {
    e.preventDefault();

    const arrayToken = [
      'JHD8KQ8-34BMH4K-JHCQBXG-399TRJD',
      'A37VAEH-ME644W9-JK16T5Z-GNKNZ6P',
      'EN1AF68-3CC4NBP-NZD15YV-2TCBCN9',
      '0MF280M-C2YMSYH-NVZH45T-G9Q6WDE',
      '3SG62YG-MV14SGA-P7ECD3Y-9S96ZDK',
    ];

    const token = getRandomArray(arrayToken);

    const options = {
      token: token,
      url: encodeURIComponent(webUrl),
      width: width,
      height: height,
      delay: delay,
      file_type: fileType.toLowerCase(),
    };
    if (fullPage == true) {
      options.full_page = fullPage;
    }
    if (lazyLoad == true) {
      options.lazy_load = lazyLoad;
    }
    const url = getQueryUrl(
      'https://shot.screenshotapi.net/screenshot',
      options
    );

    // Set loading
    const toastLoading = toast.loading('Please wait...');
    setImgResult('/assets/img/loading-spin.gif');
    setIsDisabled(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.error) {
          setImgResult('https://i.ibb.co/cDgDZrc/google.png');
          setLinkImgResult('https://i.ibb.co/cDgDZrc/google.png');
          toast.update(toastLoading, {
            render: `Terjadi kesalahan !`,
            type: 'error',
            isLoading: false,
            autoClose: 3000,
            pauseOnHover: true,
            closeOnClick: true,
          });
        } else {
          if (data?.file_type == 'pdf') {
            setImgResult('https://i.ibb.co/XWPVQbx/PDF-Image.png');
          } else {
            setImgResult(data?.screenshot);
          }
          setLinkImgResult(data?.screenshot);
          toast.update(toastLoading, {
            render: 'Screenshoot berhasil.',
            type: 'success',
            isLoading: false,
            autoClose: 3000,
            pauseOnHover: true,
            closeOnClick: true,
          });
        }
      })
      .catch((e) => {
        // console.log(e?.message);
        setImgResult('https://i.ibb.co/cDgDZrc/google.png');
        setLinkImgResult('https://i.ibb.co/cDgDZrc/google.png');
        toast.update(toastLoading, {
          render: `Error ${e?.message}`,
          type: 'error',
          isLoading: false,
          autoClose: 3000,
          pauseOnHover: true,
          closeOnClick: true,
        });
      })
      .finally(() => setIsDisabled(false));

    return;
  }

  return (
    <>
      <MetaHead
        title={`Web Screenshot ${siteSeparator()} ${siteTitle()}`}
        description={`Alat untuk mengambil screenshot atau tangkapan layar suatu website dengan mudah.`}
        canonical="/web-screenshot"
      />
      <h1 className="h4 text-center border-bottom pb-1 mb-3">Web Screenshot</h1>
      <form onSubmit={handleSubmit}>
        <Card>
          <div className="input-group mb-4">
            <input
              type="url"
              className="form-control"
              placeholder="https://google.com"
              aria-label="Url website"
              aria-describedby="button-addon"
              defaultValue={webUrl}
              onChange={handleChangeWebUrl}
              required
            />
            <Button
              type="submit"
              className={`btn btn-primary${isDisabled ? ' disabled' : ''}`}
              id="button-addon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-camera mb-1"
                viewBox="0 0 16 16"
                alt="Screenshoot"
              >
                <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
              </svg>{' '}
              Shot
            </Button>
          </div>
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="form-check form-switch mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="full-page"
                  value={fullPage}
                  onChange={handleChangeInputFullPage}
                />
                <label className="form-check-label" htmlFor="full-page">
                  Full Page
                </label>
              </div>
              <div className="form-check form-switch mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="lazy-load"
                  value={lazyLoad}
                  onChange={handleChangeInputLazyLoad}
                />
                <label className="form-check-label" htmlFor="lazy-load">
                  Lazy Load
                </label>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="width">
                  Width
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="1280"
                  aria-label="width"
                  aria-describedby="width"
                  value={width}
                  onChange={handleChangeInputWidth}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="height">
                  Height
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="720"
                  aria-label="height"
                  aria-describedby="height"
                  value={height}
                  onChange={handleChangeInputHeight}
                  disabled={disabledHeight}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="delay">
                  Delay
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="1500"
                  aria-label="delay"
                  aria-describedby="delay"
                  value={delay}
                  onChange={handleChangeInputDelay}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="filetype">
                  Format
                </span>
                <select
                  className="form-select"
                  aria-label="filetype"
                  onChange={handleChangeInputFileType}
                  value={fileType}
                  required
                >
                  {FILE_TYPE.map((item, i) => (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-12 col-md-7 text-center">
              <div className="img-result mb-2">
                <MyImage
                  src={imgResult}
                  alt="Hasil Screenshot"
                  className="img-fluid border shadow-sm"
                  optimize="disable"
                />
              </div>
              <a
                href={linkImgResult}
                target="_blank"
                rel="noopener"
                className={`btn btn-primary btn-sm${
                  isDisabled ? ' disabled' : ''
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cloud-arrow-down mb-1"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"
                  />
                  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                </svg>{' '}
                Download
              </a>
            </div>
          </div>
        </Card>
      </form>
      <ToastContainer />
    </>
  );
}

export default Tools;
