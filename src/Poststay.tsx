import React, { useState, Component } from "react";
import Header from './prototype/Header'

const Poststay: React.FC = () => {
  return (
    <div className="App font mb-24 text-black mt-16">
      <div className="max-w-lg mx-auto py-5 px-3 sm:py-5u sm:px-0 lg:max-w-xl lg:px-8">
        <Header/>
      </div>
    </div>
  );
};

export default Poststay;
