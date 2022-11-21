import { useRouter } from 'next/router';
import Header from '@/layout/header';
import Footer from '@/layout/footer';

function Main(props) {
  const { pathname } = useRouter();
  const urlPath = pathname == '/' ? true : false;

  return (
    <>
      <Header />
      <div className={`${urlPath ? '' : 'container my-3'}`}>
        {props.children}
      </div>
      <Footer />
    </>
  );
}

export default Main;
