import React from "react";

const Checkout = () => {
  return (
    <div className="bg-primaryBgColor p-4">
      <div className="breadcrumbs text-base font-medium mb-4">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Checkout </a>
          </li>
        </ul>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gray-200 md:col-span-2  rounded-lg p-4">
          <div>
            <h2 className="text-grayColor font-medium">Delivery Address</h2>
            <p>
              81 A, Mudia Hafiz Dhaura Tanda Bareilly Uttar Pradesh, Dhaura
              Tanda, Uttar Pradesh
            </p>
            <p>243204</p>
          </div>
          <div>
            <h2 className="text-grayColor font-medium mt-4">Payment Options</h2>
            <div className="p-4">
              <form className="flex items-center gap-x-2" action="">
                <input id="upi" type="radio" />
                <label className="" htmlFor="upi">
                  UPI
                </label>
              </form>
              <form className="flex items-center gap-x-2" action="">
                <input id="phonpe" type="radio" />
                <label className="" htmlFor="phonpe">
                  Phonepay
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-gray-200  rounded-lg p-4">
          <h1 className="font-semibold text-grayColor text-lg mb-4">
            Price Details
          </h1>
          <div className="flex flex-col gap-y-2">
            <div className="flex justify-between items-center">
              <h4>Price(1 item)</h4>
              <p className="text-gray-900">Rs. 1000</p>
            </div>
            <div className="flex justify-between items-center">
              <h4>Discount</h4>
              <p className="text-green">- Rs. 1 00</p>
            </div>
            <div className="flex justify-between items-center">
              <h4>Platform Fee</h4>
              <p className="text-gray-900">Rs. 1000</p>
            </div>
            <div className="flex justify-between items-center">
              <h4>Delivery Charges</h4>
              <p className="text-gray-900">Rs. 1000</p>
            </div>
            <div className="flex justify-between items-center font-semibold text-xl my-4">
              <h4>Total Amount</h4>
              <p className="text-gray-900">Rs. 1000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
