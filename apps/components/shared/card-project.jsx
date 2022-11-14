import Link from 'next/link';
import MyImage from '@/components/shared/my-image';
import Button from '@/components/shared/button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CardProject(props) {
  if (props.items.length == 0) {
    return <p className="text-center">Tidak ada project.</p>;
  }

  function handleClick() {
    toast.info('Source code pribadi.', {
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
                width="640"
                height="360"
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
                    <>
                      {item.preview.includes('https://') ? (
                        <a
                          href={item.preview}
                          target="_blank"
                          className="btn btn-success btn-sm"
                          aria-label="preview"
                          title="Live Preview"
                        >
                          Live Preview
                        </a>
                      ) : (
                        <Link href={item.preview}>
                          <a
                            className="btn btn-success btn-sm"
                            aria-label="preview"
                            title="Live Preview"
                          >
                            Live Preview
                          </a>
                        </Link>
                      )}
                    </>
                  )}
                  {item.source_code == '' ? (
                    <Button
                      onClick={handleClick}
                      className="btn btn-secondary btn-sm"
                      aria-label="source"
                      title="Source Code"
                    >
                      Source Code
                    </Button>
                  ) : (
                    <a
                      href={item.source_code}
                      target="_blank"
                      className="btn btn-secondary btn-sm"
                      aria-label="source"
                      title="Source Code"
                    >
                      Source Code
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

CardProject.defaultProps = {
  classCard: '',
  classCardBody: '',
  items: [],
};

export default CardProject;
