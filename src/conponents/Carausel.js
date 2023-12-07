import React, { useState, useEffect } from 'react';
import { IMG_LINK } from '../utils/imageLink';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carausel = () => {
  const [carausal, setCarausal] = useState(null);

  const fetchCaruasel = async () => {
    const data = await fetch('https://swiggy-clone-wjqx.onrender.com/api/v1/restaurant/carousel');
    const json = await data.json();
    console.log(json?.data?.carousel);
    setCarausal(json?.data?.carousel);
  };

  useEffect(() => {
    fetchCaruasel();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className='z-0'>
      <Slider {...settings}>
        {carausal &&
          carausal.map((pic, index) => (
            <div key={index}>
              <img className="w-[350px] m-5" src={IMG_LINK + pic.imageId} style={{ zIndex: 1 }} />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Carausel;
