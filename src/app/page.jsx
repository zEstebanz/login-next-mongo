'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Link from 'next/link';
import basic from '../../public/img/Basic.png'
import matraz from '../../public/img/matraz.png'
import conv from '../../public/img/conv.png'
import geometry from '../../public/img/geometri.png'

function HomePage() {
  const settings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="section-port">
      <div className="container">
        <h1 className="title text-7xl md:text-8xl text-center">Dev<span>Kit</span></h1>
        <h2 className="subtitle text-2xl md:text-4xl text-center">Cálculos Simples y Rápidos</h2>
      </div>

      <div className="container-carrusel">
        <Slider {...settings}>

          <div>
            <Link href={"./kit/cientific"}>
              <Image src={matraz} alt="Image 2" className="mx-auto w-2/3" />
            </Link>
          </div>

          <div>
            <Link href={"./kit/basic"}>
              <Image src={basic} alt="Image 2" className="mx-auto w-2/3" />
            </Link>
          </div>
          
          <div>
            <Link href={"./kit/geometry"}>
              <Image src={geometry} alt="Image 2" className="mx-auto w-2/3" />
            </Link>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default HomePage;
