import { useState, useEffect } from 'react';
import { siteTitle, siteSeparator } from '@/config/setting';
import JsonHighlight from '@/package/json-highlight';
import MetaHead from '@/components/shared/meta-head';
import Card from '@/components/shared/card';
import Button from '@/components/shared/button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TrackIP() {
  const [ipAddress, setIPAddress] = useState('');
  const [ipInfo, setIpInfo] = useState({ tools: 'Track IP Location' });
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    function handleErrorFirstLoading() {
      toast.update(toastFirstLoading, {
        render: 'Terjadi kesalahan !',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
        pauseOnHover: true,
        closeOnClick: true,
      });
      setIpInfo({ error: 'Terjadi Kesalahan !' });
      return;
    }

    const toastFirstLoading = toast.loading('Please wait...');
    setIsDisabled(true);
    fetch('https://api.ipify.org?format=json')
      .then((res) => res.json())
      .then((data) => {
        setIPAddress(data?.ip);
        fetch(`https://ipinfo.io/${data?.ip}?token=983cb7316a8f52`)
          .then((res) => res.json())
          .then((data) => {
            if (data?.error) {
              handleErrorFirstLoading();
            } else {
              toast.update(toastFirstLoading, {
                render: 'Tracking berhasil.',
                type: 'success',
                isLoading: false,
                autoClose: 3000,
                pauseOnHover: true,
                closeOnClick: true,
              });
              setIpInfo(data);
            }
          })
          .catch((e) => {
            console.log(e);
            handleErrorFirstLoading();
          });
      })
      .catch((e) => {
        console.log(e);
        handleErrorFirstLoading();
      })
      .finally(() => {
        setIsDisabled(false);
      });
  }, []);

  function handleChange(e) {
    setIPAddress(e.target.value);
    return;
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Set loading
    const toastLoading = toast.loading('Please wait...');
    setIsDisabled(true);

    fetch(`https://ipinfo.io/${ipAddress}?token=983cb7316a8f52`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.error) {
          toast.update(toastLoading, {
            render: data?.error?.title || data?.error,
            type: 'error',
            isLoading: false,
            autoClose: 3000,
            pauseOnHover: true,
            closeOnClick: true,
          });
          setIpInfo(data);
        } else {
          toast.update(toastLoading, {
            render: 'Tracking berhasil.',
            type: 'success',
            isLoading: false,
            autoClose: 3000,
            pauseOnHover: true,
            closeOnClick: true,
          });
          setIpInfo(data);
        }
      })
      .catch((e) => {
        toast.update(toastLoading, {
          render: `Terjadi Kesalahan !`,
          type: 'error',
          isLoading: false,
          autoClose: 3000,
          pauseOnHover: true,
          closeOnClick: true,
        });
        setIpInfo({ error: 'Terjadi Kesalahan !' });
      })
      .finally(() => setIsDisabled(false));

    return;
  }

  return (
    <>
      <MetaHead
        title={`Track IP Location ${siteSeparator()} ${siteTitle()}`}
        description="Alat untuk melacak sebuah lokasi menggunakan IP dengan mudah."
        canonical="/tools/track-ip"
      />
      <h1 className="h4 text-center border-bottom pb-1 mb-3">
        Track IP Location
      </h1>
      <form onSubmit={handleSubmit}>
        <Card>
          <div className="input-group mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="IP Address 1.1.1.1"
              aria-label="IP Address"
              aria-describedby="button-addon"
              value={ipAddress}
              onChange={handleChange}
              disabled={isDisabled}
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
                className="bi bi-search mb-1"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>{' '}
              Track
            </Button>
          </div>
          <div className="bg-dark rounded">
            <pre>
              <code
                dangerouslySetInnerHTML={{
                  __html: JsonHighlight(ipInfo, {
                    keyColor: '#f7e414',
                    numberColor: 'cornflowerblue',
                    stringColor: '#12eb0e',
                    trueColor: 'cornflowerblue',
                    falseColor: 'cornflowerblue',
                    nullColor: 'cornflowerblue',
                  }),
                }}
              ></code>
            </pre>
          </div>
        </Card>
      </form>
      <ToastContainer />
    </>
  );
}

export default TrackIP;
