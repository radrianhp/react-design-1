import React from "react";

//component
import Carousel from "./Carousel";

const TableHistory = () => (
  <div
    className="card border-0 mb-2 ml-2"
    style={{ width: "988px", height: "80px" }}
  >
    <div className="card-body">Halo</div>
  </div>
);

const History = () => {
  return (
    <>
      <section className="container">
        <div className="header-title">
          <h1 className="font-weight-bold ">Riwayat Purchase Order</h1>
          <span>
            Purchase order otomatis akan tersimpan dan terkumpul dalam halaman
            riwayat.
          </span>
        </div>
        <div className="row mt-5">
          <Carousel show={2}>
            <TableHistory />
            <TableHistory />
            <TableHistory />
            <TableHistory />
            <TableHistory />
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default History;
