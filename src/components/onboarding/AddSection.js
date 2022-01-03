import React from 'react';
import Slider from 'react-slick';
import Dashboard from '../../assets/img/herosection/Dashboard.png';
import Flex from '../common/utils/Flex';

const AddSection = () => {
  const settings = {
    dots: false,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <Flex alignItems={'center'} direction={'column'}>
        <div className="pt-5 pb-3">
          <p className="w-100 fs-2 fw-bold text-black ">
            Power your business with Xeniapp
          </p>
        </div>
      </Flex>

      <div>
        <Slider {...settings}>
          <div>
            <img src={Dashboard} className="mx-auto" alt={'dashboard'} />
          </div>
          <div>
            <img src={Dashboard} className="mx-auto" alt={'dashboard'} />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default AddSection;
