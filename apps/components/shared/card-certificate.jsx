import MyImage from '@/components/shared/my-image';
import Button from '@/components/shared/button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CardCertificate(props) {
  if (props.items.length == 0) {
    return <p className="text-center">Tidak ada sertifikat.</p>;
  }

  function handleClick() {
    toast.info('Tidak ada preview.', {
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
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 justify-content-center">
        {props.items.map((item) => (
          <div className="col mb-3" key={item.slug}>
            <div
              className={`card h-100 shadow-sm${
                props.classCard && ` ${props.classCard}`
              }`}
            >
              <MyImage
                width="600"
                height="446"
                title={item.title}
                src={item.image}
                className="card-img-top border-bottom"
                alt={item.title}
              />
              <div
                className={`card-body${
                  props.classCardBody && ` ${props.classCardBody}`
                }`}
              >
                <h5 className="card-title h6">{item.title}</h5>
                <div>
                  {item.stack.map((itemStack, i) => (
                    <span className="badge text-bg-primary small me-1" key={i}>
                      {itemStack}
                    </span>
                  ))}
                </div>
              </div>
              <div className="card-footer">
                <div className="d-grid gap-2">
                  {item.preview == '' ? (
                    <Button
                      onClick={handleClick}
                      className="btn btn-success btn-sm"
                      aria-label="preview"
                      title="Live Preview"
                    >
                      Live Preview
                    </Button>
                  ) : (
                    <a
                      href={item.preview}
                      target="_blank"
                      className="btn btn-success btn-sm"
                      aria-label="preview"
                      title="Live Preview"
                    >
                      Live Preview
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </>
  );
}

CardCertificate.defaultProps = {
  classCard: '',
  classCardBody: '',
  items: [],
};

export default CardCertificate;
