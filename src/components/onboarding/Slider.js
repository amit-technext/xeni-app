import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import slider1 from '../../assets/img/slider/slider1.png';
import slider2 from '../../assets/img/slider/slider2.png';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Flex from '../common/utils/Flex';

export const sliders = [
  {
    id: '1',
    image: slider1,
    shortDesc: 'Everything you need to run your travel business',
    link: 'url'
  },
  {
    id: '2',
    image: slider2,
    shortDesc: 'Everything you need to run your travel business',
    link: 'url'
  },
  {
    id: '3',
    image: slider1,
    shortDesc: 'Everything you need to run your travel business',
    link: 'url'
  }
];

const Slider = () => {
  return (
    <>
      <Card className="mb-6 SliderSection">
        <Carousel>
          {sliders?.map(slider => (
            <Carousel.Item key={slider.id} interval={3000}>
              <div>
                <img className="w-100" src={slider.image} alt="First slide" />
              </div>
              <Carousel.Caption>
                <p className="text-black fs--2 fs-sm--1 fs-md-1 fs-xl-3 fw-bold">
                  {slider.shortDesc}
                </p>
                <Link to="/signup">
                  <Button className="bg-primary border-0 text-white text-decoration-none px-3 px-sm-5 fs--2 fs-lg--1 py-1 py-sm-2 fw-normal">
                    Build now
                  </Button>
                </Link>
                <Flex
                  alignItems={'center'}
                  direction={'column'}
                  className="cursor-pointer scrollBar d-none"
                >
                  <div className="border border-2 border-black rounded-pill py-3 px-2">
                    <FontAwesomeIcon
                      className="text-black"
                      icon={faChevronDown}
                    />
                  </div>
                  <div className="text-black fs--1 fw-semi-bold pt-2">
                    Scroll Down
                  </div>
                </Flex>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Card>
    </>
  );
};

export default Slider;
