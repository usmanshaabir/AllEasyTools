import React from 'react';
import vector from '../Assets/Images/Vector.png';

export default function Navbar() {
  return (
    <>
      <div className="py-2 bg-green-500">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {/* The first column (hidden on small screens) */}
          {/* <div className="hidden 2xl:block"></div> */}

          {/* The second column */}
          <div className="flex items-center justify-center md:justify-start">
            <img className="me-2" src={vector} alt="vector not Found" />
            <p className="text-black">
              <span className="font-medium">Are you in need of help?</span>We are here to help you
            </p>
          </div>

          {/* The third column */}
          <div className="flex space-x-2 justify-center md:justify-end">
            <button type="button" className="text-black rounded-lg text-sm md:me-3">
              Location
            </button>
            <button type="button" className="text-black rounded-lg text-sm">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
