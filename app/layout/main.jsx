import Header from './header';
import Footer from './footer';

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
