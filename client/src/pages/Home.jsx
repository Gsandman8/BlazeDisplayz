// import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
// import Cart from "../components/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

// for carousel
import carousel2 from '/images/carousel/carousel2.png';
import carousel3 from '/images/carousel/carousel3.png';
import carousel4 from '/images/carousel/carousel4.png';
import carousel5 from '/images/carousel/carousel5.png';
import carousel6 from '/images/carousel/carousel6.png';
import carousel7 from '/images/carousel/carousel7.png';
import carousel8 from '/images/carousel/carousel8.png';
import carousel9 from '/images/carousel/carousel9.png';
import carousel10 from '/images/carousel/carousel10.png';
import carousel11 from '/images/carousel/carousel11.png';
import carousel12 from '/images/carousel/carousel12.png';
import carousel13 from '/images/carousel/carousel13.png';
import carousel14 from '/images/carousel/carousel14.png';
import carousel15 from '/images/carousel/carousel15.png';
import carousel16 from '/images/carousel/carousel16.png';
import carousel17 from '/images/carousel/carousel17.png';

// for trending
import mproduct6 from '/images/products/categories/mensHoodies/product6.png';
import mproduct9 from '/images/products/categories/mensHoodies/product9.png';
import wproduct1 from '/images/products/categories/womensHoodies/product1.png'
import wproduct6 from '/images/products/categories/womensHoodies/product6.png';

export default function Home() {
  return (
    <main>
      {/* <CategoryMenu />
      <ProductList /> */}
      {/* <Cart /> */}
      <section className='banner'>
        <p>FREE SHIPPING FOR CLUB MEMBERS!</p>
      </section>

      <section className="carouselContainer">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel12} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel5} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel8} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel16} alt="Fourth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel3} alt="Fifth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel14} alt="Sixth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel7} alt="Seventh slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel9} alt="Eighth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel11} alt="Ninth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel15} alt="Tenth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel6} alt="Eleventh slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel10} alt="Twelfth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel4} alt="Thirteenth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel13} alt="Fourteenth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel17} alt="Fifteenth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel2} alt="Sixteenth slide" />
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="container mt-4">
        <h2>TRENDING LOOKS</h2>
        <div className="row">
          <div className="col-md-3">
            <img className="d-block w-100" src={wproduct1} alt="Item 1" />
          </div>
          <div className="col-md-3">
            <img className="d-block w-100" src={mproduct6} alt="Item 2" />
          </div>
          <div className="col-md-3">
            <img className="d-block w-100" src={mproduct9} alt="Item 3" />
          </div>
          <div className="col-md-3">
            <img className="d-block w-100" src={wproduct6} alt="Item 4" />
          </div>
        </div>
      </section>
    </main>
  );
};