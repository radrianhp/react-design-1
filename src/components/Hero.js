import React from "react";

//images
import profile from "../assets/images/profile.svg";
import addPlus from "../assets/images/add-group.svg";
import BgAgros from "../assets/images/bg-argos.png";
import imgPOAktif from "../assets/images/po-aktif.svg";
import imgPOSisa from "../assets/images/po-sisa.svg";
import imgMessager from "../assets/images/icon-messager.svg";
import imgPay from "../assets/images/icon-pay.svg";
import imgCritical from "../assets/images/hero-critical.png";

import btnMenu from "../assets/images/btn-menu.svg";

//icons
import { AiOutlineSetting } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";

export default function Hero() {
  return (
    <section className="container">
      <h1 className="mb-3 font-weight-bold"> Dashboard Kerabat</h1>

      {/* breadcumb */}
      <div className="mt-3 mb-3">
        Navigation:{" "}
        <a href="/#" className="ml-3 header__btn-breadcumb">
          Dashboard
        </a>
      </div>

      <div className="container-grid">
        {/* Card Profile */}
        <div className="item column-4 row-1">
          <div className="card border-0">
            <div className="card-body">
              <div className="row ">
                <div className="col">
                  <div className="card-img-top ">
                    <img src={profile} alt="profile" />
                  </div>
                </div>
                <div className="col ml-5">
                  <div className="card-text setting">
                    <p>
                      Pengaturan{" "}
                      <AiOutlineSetting style={{ verticalAlign: "middle" }} />
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-title mt-4">
                <h3>PT. ARTA GLOBAL PROSPERO</h3>
              </div>
              <div className="card-text font-weight-light">
                <p>+62 (31) 3974550</p>
                <p>Antarglobalpropero@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card Add Purchase */}
        <div className="item column-4 row-1">
          <div className="card text-white border-0">
            <img
              src={BgAgros}
              alt="bg-agros"
              className="card-img"
              style={{ height: "260px" }}
            />
            <div className="card-img-overlay">
              <div className="row ">
                <div className="col">
                  <div className="card-img-top ">
                    <img src={addPlus} alt="plus" />
                  </div>
                </div>
                <div className="col">
                  <div className="card-text setting">
                    <p className="add-purcharse">
                      <BsArrowUpRight />
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="card-title">TAMBAH</h3>
              <h3 className="card-title ">PURCHASE ORDER</h3>
              <p className="card-text mt-4 font-weight-light">
                Purchase order dapat dilakukan dalam Agros Shipper
              </p>
            </div>
          </div>
        </div>

        {/* Card PO Aktif */}
        <div className="item column-2 row-1">
          <div className="card bg-active border-0">
            <div className="card-body">
              <div className="card-img-top ">
                <img src={imgPOAktif} alt="po-aktif" />
              </div>
              <div className="card-title mt-4">
                <p className="text-primary font-weight-light">
                  <span className="font-weight-bold">PO</span> Aktif
                </p>
              </div>
              <div className="card-text font-weight-light">
                <p className="p-active">
                  Purchase order yang{" "}
                  <span className="p-active font-weight-bold">
                    sedang berjalan
                  </span>
                </p>
              </div>
              <div className="card-bottom">
                <p className="card-text font-weight-bold card-number">10</p>
                <p className="card-text">
                  <small className="p-active">Lihat Lebih Lanjut</small>{" "}
                  <img src={btnMenu} alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card PO Sisa */}
        <div className="item column-2 row-1">
          <div className="card bg-sisa border-0">
            <div className="card-body">
              <div className="card-img-top ">
                <img src={imgPOSisa} alt="po-aktif" />
              </div>
              <div className="card-title mt-2">
                <p className="text-warning font-weight-light">
                  <span className="font-weight-bold">PO</span> Aktif
                </p>
              </div>
              <div className="card-text font-weight-light">
                <p className="p-active">
                  Purchase order yang{" "}
                  <span className="p-active font-weight-bold">
                    sedang berjalan
                  </span>
                </p>
              </div>
              <div className="card-bottom">
                <p className="card-text font-weight-bold card-number">10</p>
                <p className="card-text">
                  <small className="p-active">Lihat Lebih Lanjut</small>{" "}
                  <img src={btnMenu} alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card Messager */}
        <div className="item column-3 row-1">
          <div className="card border-0">
            <div className="card-body">
              <div className="card-img-top ">
                <img src={imgMessager} alt="profile" />
              </div>

              <div className="card-title mt-4">
                <h5>
                  <span className="font-weight-bold">Agros</span> Messenger
                </h5>
              </div>
              <div className="card-text font-weight-light ">
                <p className="p-active">
                  Interaksi eksklusif
                  <span className="font-weight-bold">1-ON-1</span>bersama Agros
                  Sales / Admin sesuai dengan Office Hours
                </p>
              </div>
              <p className="card-text">
                <small className="p-active font-weight-bold">Mon - Fri</small>
                <small className="p-active font-weight-light">
                  09.00 - 17.00
                </small>{" "}
                <img src={btnMenu} alt="" />
              </p>
            </div>
          </div>
        </div>

        {/* Pay */}
        <div className="item column-3 row-1">
          <div className="card border-0">
            <div className="card-body">
              <div className="card-img-top ">
                <img src={imgPay} alt="profile" />
              </div>

              <div className="card-title mt-4">
                <h5>
                  <span className="font-weight-bold">Agros</span> Pay
                </h5>
              </div>
              <div className="card-text font-weight-light ">
                <p className="p-active">
                  Halaman pembayaran eksklusif yang menawarkan kemudahan untuk
                  muatan Kerabat.
                </p>
              </div>
              <p className="card-text">
                <small className="p-active">Lihat Tagihan Anda</small>{" "}
                <img src={btnMenu} alt="" />
              </p>
            </div>
          </div>
        </div>

        <div className="item column-6 row-1">
          <div className="card border-0">
            <div className="row">
              <div className="col">
                <div className="card-body">
                  <div className="card-img-top ">
                    <img src={imgPay} alt="profile" />
                  </div>

                  <div className="card-title mt-4">
                    <h5>
                      <span className="font-weight-bold">
                        Kritik atau Saran?
                      </span>
                    </h5>
                  </div>
                  <div className="card-text font-weight-light ">
                    <p className="p-active">
                      Agros Team sangat terbuka dengan kritik dan saran Anda
                      demi kenyaman Anda.
                    </p>
                  </div>
                  <p className="card-text">
                    <small className="p-active">
                      Masukan Kritik atau Saran
                    </small>{" "}
                    <img src={btnMenu} alt="" />
                  </p>
                </div>
              </div>

              <div className="col mt-2">
                <img
                  src={imgCritical}
                  alt="profile"
                  style={{ width: "250px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
