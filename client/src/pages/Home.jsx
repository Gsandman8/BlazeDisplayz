// import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
// import Cart from "../components/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import landscape from "../../public/images/landscape.jpg";
import sunset from "../../public/images/sunset.jpg";
import sunrise from "../../public/images/sunrise.jpg";

export default function Home() {
  return (
    <main>
      {/* <CategoryMenu />
      <ProductList /> */}
      {/* <Cart /> */}
      <section className='banner'>
        <p>FREE SHIPPING FOR CLUB MEMBERS!</p>
      </section>

      <section className="container carouselContainer">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={landscape} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={sunset} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={sunrise} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>

      <section className="container mt-4">
        <h2>TRENDING LOOKS</h2>
        <div className="row">
          <div className="col-md-3">
            <img className="d-block w-100" src={landscape} alt="Item 1" />
          </div>
          <div className="col-md-3">
            <img className="d-block w-100" src={sunset} alt="Item 2" />
          </div>
          <div className="col-md-3">
            <img className="d-block w-100" src={sunrise} alt="Item 3" />
          </div>
          <div className="col-md-3">
            <img className="d-block w-100" src={landscape} alt="Item 4" />
          </div>
        </div>
      </section>
    </main>
  );
};