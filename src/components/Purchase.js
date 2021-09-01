import React from "react";

//icon
import imgDOAktif from "../assets/images/do-aktif.svg";
import imgDOSisa from "../assets/images/do-sisa.png";
import btnMenu from "../assets/images/btn-menu.svg";
import progressBar from "../assets/images/progress-bar.svg";
import imgTerkirim from "../assets/images/terkirim.png";
import imgTertunda from "../assets/images/tertunda.png";
import imgDikirim from "../assets/images/dikirim.png";
import imgNavigation from "../assets/images/bg-navigation.png";
import imgRectangle from "../assets/images/bg-rectangle.png";

const Mutasion = () => (
  <ul className="card bg-active" style={{ height: "50px", width: "329px" }}>
    <li className="row mt-1 mr-3">
      <div className="col-6 col-sm-2 ">
        <img src={imgNavigation} alt="" width="36px" />
      </div>
      <div className="col-6 col-sm-8 mt-1">
        <div className="card-text">DO-AGRS-040221.71</div>
      </div>
      <div className="col-6 col-sm-2 ">
        <img src={imgRectangle} alt="" width="36px" />
      </div>
    </li>
  </ul>
);

const Purchase = () => {
  return (
    <>
      <section className="container">
        <div className="header-title">
          <h1 className="font-weight-bold ">Purchase order Anda</h1>
        </div>

        <div className="container-grid">
          <div className="item column-12 row-1">
            <div className="card border-0" style={{ height: "320px" }}>
              <div className="row">
                <div className="col-6">
                  <div className="card-body">
                    <p className="card-text">
                      <small className="p-active font-weight-bold">
                        Nomor Purchase Order
                      </small>{" "}
                    </p>

                    <div className="card-title mt-4">
                      <h2>
                        <span className="font-weight-bold">
                          AGR001/02/2020#096
                        </span>
                      </h2>
                      <img src={progressBar} alt="" />
                      <div className="card-text font-weight-light ">
                        <p className="p-active">Presentase Muatan Kerabat</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-group">
                    <div className="col-6 px-3">
                      <div className="card-title font-weight-bold ">
                        <span className="card-number"> Batubara </span>
                      </div>
                      <span className="card-text font-weight-light">
                        <span className=" p-active">Nama Barang</span>
                      </span>
                    </div>
                    <div className="col-6 px-3">
                      <div className="card-title font-weight-bold ">
                        <span className="card-number"> 20.000 TON </span>
                      </div>
                      <div className="card-text font-weight-light ">
                        <span className="p-active">Tonase/Kubikasi </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card-group mt-3">
                    {/* Card PO Aktif */}
                    <div className="col-6">
                      <div className="card bg-active border-0">
                        <div className="card-body ">
                          <div className="card-img-top ">
                            <img src={imgDOAktif} alt="po-aktif" />
                          </div>
                          <div className="card-title mt-4">
                            <p className="text-primary font-weight-light">
                              <span className="font-weight-bold">DO</span> Aktif
                            </p>
                          </div>
                          <div className="card-text font-weight-light">
                            <p className="p-active">
                              Delivery order yang sedang kami proses.{" "}
                              <span className="p-active font-weight-bold">
                                dalam pengiriman
                              </span>
                            </p>
                          </div>
                          <div className="card-bottom">
                            <p className="card-text font-weight-bold">
                              <span className="card-number">200</span>
                            </p>
                            <p className="card-text">
                              <small className="p-active">
                                Lihat Lebih Lanjut
                              </small>{" "}
                              <img src={btnMenu} alt="" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card PO Sisa */}
                    <div className="col-6">
                      <div className="card bg-sisa border-0">
                        <div className="card-body">
                          <div className="card-img-top ">
                            <img src={imgDOSisa} alt="po-aktif" width="50px" />
                          </div>
                          <div className="card-title mt-3">
                            <p className="text-warning font-weight-light">
                              <span className="font-weight-bold">DO</span> Sisa
                            </p>
                          </div>
                          <div className="card-text font-weight-light">
                            <p className="p-active">
                              Delivery order yang sedang kami proses.{" "}
                              <span className="p-active font-weight-bold">
                                dalam pengiriman
                              </span>
                            </p>
                          </div>
                          <div className="card-bottom">
                            <p className="card-text font-weight-bold ">
                              <span className="card-number">200</span>
                            </p>
                            <p className="card-text">
                              <small className="p-active">
                                Lihat Lebih Lanjut
                              </small>{" "}
                              <img src={btnMenu} alt="" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item column-12 row-1">
            <div className="card border-0" style={{ height: "450px" }}>
              <div className="row">
                <div className="col-3">
                  <div className="card-body">
                    <h2 className="card-title font-weight-bold">
                      <span className="card-number">Status Muatan</span>
                    </h2>
                    <div className="card-text font-weight-light">
                      Pilih salah satu menu untuk mendapatkan informasi yang
                      Anda inginkan terkait dengan muatan Anda.
                    </div>
                    <img
                      src={imgTerkirim}
                      alt=""
                      width="120px"
                      style={{ marginTop: "30px" }}
                    />
                    <img
                      src={imgDikirim}
                      alt=""
                      width="120px"
                      style={{ marginTop: "30px" }}
                    />
                    <img
                      src={imgTertunda}
                      alt=""
                      width="120px"
                      style={{ marginTop: "30px" }}
                    />
                    <p className="card-text mt-5">
                      <small className="p-active">Lihat Lebih Lanjut</small>{" "}
                      <img src={btnMenu} alt="" />
                    </p>
                  </div>
                </div>
                <div className="col-9">
                  <div
                    className="card bg-muatan mt-3 mr-3"
                    style={{ height: "420px" }}
                  >
                    <div className="row mx-5 mt-5">
                      <div className="col-6">
                        <Mutasion />
                        <Mutasion />
                        <Mutasion />
                        <Mutasion />
                        <Mutasion />
                      </div>
                      <div className="col-6">
                        <Mutasion />
                        <Mutasion />
                        <Mutasion />
                        <Mutasion />
                        <Mutasion />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Purchase;
