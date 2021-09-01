import React, { Component } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Purchase from "../components/Purchase";
import Service from "../components/Service";
import History from "../components/History";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="bg-background">
        <Header />
        <Hero />
        <Purchase />
        <Service />
        <History />
      </div>
    );
  }
}
