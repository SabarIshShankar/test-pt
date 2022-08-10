import React, { useState, Component } from "react";
import Header from './prototype/Header'

const Poststay: React.FC = () => {
  return (
    <div className="App font mb-24 text-black">
      <div className="bg-yellow-600 text-center py-1 lg:px-4 p-2 bg-yellow-600 items-center text-white flex">
        <span className="text-center flex-auto">Get exclusive offers for a limited time</span>
      </div>
      <div className="max-w-lg mx-auto py-5 px-3 sm:py-5u sm:px-0 lg:max-w-xl lg:px-8">
        <Header />
      </div>
    </div>
  );
};

export default Poststay;
