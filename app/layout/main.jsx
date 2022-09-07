import Header from '@/layout/header';
import Footer from '@/layout/footer';

function Main(props) {
  return (
    <>
      <Header />
      <div className="container">{props.children}</div>
      <Footer />
    </>
  );
}

export default Main;
