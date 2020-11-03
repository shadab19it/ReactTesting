import React from "react";
import "./ReactSpring.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Divider = () => {
  return (
    <div>
      <span className='line'></span>
      <img src='./icons8-star-48.png' alt='' />
      <span className='line'></span>
    </div>
  );
};

const FotterBanner = () => {
  return (
    <div className='fotter-banner'>
      <h1 data-aos='zoom-in'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
      <p data-aos='zoom-in-up'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ipsam blanditiis maiores ratione tempora numquam impedit!
        Animi cum excepturi voluptatibus!
      </p>
    </div>
  );
};
const FotterLinks = () => {
  return (
    <React.Fragment>
      <div className='fotter-links'>
        <ul className='social-links'>
          <li className='link-title'>Social</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
        <ul className='help-links'>
          <li className='link-title'>Social</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
        <ul className='other-links'>
          <li className='link-title'>Social</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </div>
      <div className='fotter-bottom'>
        <p>Shadab &copy; 2020</p>
      </div>
    </React.Fragment>
  );
};

const Fotter = () => {
  return (
    <section className='fotter-wrapper'>
      <FotterBanner />
      <FotterLinks />
    </section>
  );
};

const Product = ({ productImg }) => {
  return (
    <div className='product'>
      <div className='product-img' data-aos='fade-up'>
        <img src={productImg} alt='' />
      </div>
      <div className='product-detail' data-aos='zoom-in'>
        <h3 className='product-title'>Lorem ipsum dolor sit.</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor sequi voluptatum pariatur ex vero vitae quasi expedita autem est,
          fugit voluptate, officia nulla? Minima non, reiciendis aspernatur eligendi eos accusantium?
        </p>
      </div>
    </div>
  );
};

const ProductList = () => {
  return (
    <section className='products-wrapper'>
      <Product productImg='https://images.unsplash.com/photo-1587502623997-f8a7417849ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80' />
      <Product productImg='https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' />
      <Product productImg='https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80' />
    </section>
  );
};

const AutherInfo = () => {
  return (
    <section className='auther-info'>
      <div className='auther-pic'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnYz_yN68eGjMSQ5pbum94YUpIPPvJOp4XTg&usqp=CAU' alt='' />
      </div>
      <div className='auther-details'>
        <h2 className='auther-name'>Shadab Alam</h2>
        <ul>
          <li>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

const NavBar = () => {
  const [navfixed, setNavfixed] = React.useState(false);
  React.useEffect(() => {
    const windowScroll = () => {
      const scrollHeight = window.scrollY.toFixed(0);
      if (scrollHeight > 400) {
        setNavfixed(true);
      } else {
        setNavfixed(false);
      }
    };
    window.addEventListener("scroll", windowScroll);
    return () => window.removeEventListener("scroll", windowScroll);
  }, []);
  return (
    <div className={`nav ${navfixed && "nav-fixed"}`}>
      <div className='brand-name'>Focus</div>
      <div className='nav-bars'>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
      <div className={`nav-links`}>
        <div className='link'>Link one</div>
        <div className='link'>Link two</div>
      </div>
    </div>
  );
};

const HeroWrapper = () => {
  return (
    <div className='hero-wrapper'>
      <div className='author-pic ' data-aos='fade-left'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnYz_yN68eGjMSQ5pbum94YUpIPPvJOp4XTg&usqp=CAU' alt='' />
      </div>
      <div className='hero-info' data-aos='fade-right'>
        <h2 className='hero-title'>Shadab Alam , Frontend Developer !</h2>
        <p className='hero-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempora incidunt qui esse.</p>
        <div className='btns'>
          <button className='btn'>Contect Us</button>
          <button className='btn'>Read More</button>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <NavBar />
      <HeroWrapper />
    </header>
  );
};

const ReactSpring = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1500,
      // offset: 200,
    });
  }, []);
  return (
    <div className='main-container'>
      <Header />
      {/* <AutherInfo /> */}
      <ProductList />
      <Fotter />
    </div>
  );
};

export default ReactSpring;
