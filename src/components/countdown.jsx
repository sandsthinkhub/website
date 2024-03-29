import React from "react";

export default function countdown() {
  return (
    <div>
      <section className="py-8 bg-indigo-500 bg-gradient md:py-16">
        <div className="box-content max-w-5xl px-5 mx-auto">
          <div className="flex flex-col items-center -mx-5 md:flex-row">
            <div className="w-full px-5 mb-5 text-center md:mb-0 md:text-left">
              <h6 className="text-xs font-semibold text-indigo-800 uppercase md:text-bas">
                Opening tickets
              </h6>
              <h3 className="text-2xl font-bold text-white font-heading md:text-4xl">
                Saturday 17
              </h3>
              <h3 className="text-lg font-bold leading-tight text-white font-heading md:text-xl">
                @ 10:00 AM
              </h3>
              <div className="w-full mt-4 md:w-44">
                <button
                  type="button"
                  className="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Early bird
                </button>
              </div>
            </div>
            <div className="w-full px-5 md:w-auto">
              <div className="flex justify-center text-center text-white">
                <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                  <div className="text-2xl font-semibold md:text-3xl">
                    <span>0</span>
                    <span>1</span>
                  </div>
                  <div className="mt-3 text-xs uppercase opacity-75">Day</div>
                </div>
                <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                  <div className="text-2xl font-semibold md:text-3xl">
                    <span>1</span>
                    <span>8</span>
                  </div>
                  <div className="mt-3 text-xs uppercase opacity-75 ">Hour</div>
                </div>
                <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                  <div className="text-2xl font-semibold md:text-3xl">
                    <span>5</span>
                    <span>0</span>
                  </div>
                  <div className="mt-3 text-xs uppercase opacity-75 ">Min</div>
                </div>
                <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                  <div className="text-2xl font-semibold md:text-3xl">
                    <span>1</span>
                    <span>9</span>
                  </div>
                  <div className="mt-3 text-xs uppercase opacity-75 ">
                    Second
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
