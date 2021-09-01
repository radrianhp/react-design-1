import React from "react";

//component
import Carousel from "./Carousel";

import carouselImage1 from "../assets/images/carousel-image-1.jpeg";
import carouselImage2 from "../assets/images/carousel-image-2.jpeg";
import carouselImage3 from "../assets/images/carousel-image-3.jpeg";

export default function Service() {
  return (
    <>
      <section className="container">
        <div className="header-title">
          <h1 className="font-weight-bold ">Layanan Agros</h1>
          <span>
            Your Truly Logistics Solutions, Agros selalu memberi kemudahan dan
            kenyamanan untuk Anda.
          </span>
        </div>
        <Carousel show={3}>
          <div className="card text-black border-0" style={{ margin: 5 }}>
            <img src={carouselImage1} alt="" width="370px" height="200px" />
            <div className="card-img-overlay mt-3">
              <div className="card-title font-weight-bold">AGROS DRIVER</div>
              <div className="card-text font-weight-light ">
                Agros menawarkan keleluasan untuk memilih proyek sehingga
                peningkatan pendapatan bukan lagi impian
              </div>
            </div>
          </div>
          <div className="card text-black border-0" style={{ margin: 5 }}>
            <img src={carouselImage2} alt="" width="370px" height="200px" />
            <div className="card-img-overlay mt-3">
              <div className="card-title font-weight-bold">AGROS DRIVER</div>
              <div className="card-text font-weight-light">
                Agros menawarkan keleluasan untuk memilih proyek sehingga
                peningkatan pendapatan bukan lagi impian
              </div>
            </div>
          </div>
          <div className="card text-black border-0" style={{ margin: 5 }}>
            <img src={carouselImage3} alt="" width="370px" height="200px" />
            <div className="card-img-overlay mt-3">
              <div className="card-title font-weight-bold">AGROS Shop</div>
              <div className="card-text font-weight-light ">
                Agros menawarkan keleluasan untuk memilih proyek sehingga
                peningkatan pendapatan bukan lagi impian
              </div>
            </div>
          </div>
        </Carousel>
      </section>
    </>
  );
}
