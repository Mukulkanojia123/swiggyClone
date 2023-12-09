import React, { useState, useEffect } from "react";
import { IMG_LINK } from "../utils/imageLink";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carausel = () => {
  const [carausal, setCarausal] = useState(null);

  const fetchCaruasel = async () => {
    const data = await fetch(
      "https://swiggy-clone-wjqx.onrender.com/api/v1/restaurant/carousel"
    );
    const json = await data.json();
    console.log(json?.data?.carousel);
    setCarausal(json?.data?.carousel);
  };

  useEffect(() => {
    fetchCaruasel();
  }, []);

  return (
    <div className="flex  overflow-x-scroll overflow-hidden no-scrollbar">
      {" "}
      {carausal &&
        carausal.map((pic, index) => (
          <img
            key={index}
            className="w-96 h-72  p-5"
            src={IMG_LINK + pic.imageId}
          />
        ))}
    </div>
  );
};

export default Carausel;


























// import React, { useState, useEffect } from 'react';
// import { IMG_LINK } from '../utils/imageLink';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Carausel = () => {
//   const [carausal, setCarausal] = useState(null);

//   const fetchCaruasel = async () => {
//     try {
//       const response = await fetch('https://swiggy-clone-wjqx.onrender.com/api/v1/restaurant/carousel');
//       const data = await response.json();
//       console.log(data?.data?.carousel);
//       setCarausal(data?.data?.carousel);
//     } catch (error) {
//       console.error('Error fetching carousel data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchCaruasel();
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className='z-0 mt-15'> {/* Adjust the top margin based on your header's height */}
//       <Slider {...settings}>
//         {carausal &&
//           carausal.map((pic, index) => (
//             <img className="w-[350px] p-5 z-0" key={index} src={IMG_LINK + pic.imageId} alt={`Carousel Image ${index}`} />
//           ))}
//       </Slider>
//     </div>
//   );
// };

// export default Carausel;
