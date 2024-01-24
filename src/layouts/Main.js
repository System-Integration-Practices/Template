import React, { Fragment } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="flex-auto bg-[#F9F9F9] min-h-screen pb-8">
        <div className="flex justify-center py-6">
          <form action="" className="relative pl-10">
            <input
              type="text"
              className="text-body-6 w-[260px] placeholder:text-black-60 py-3 px-4 bg-transparent"
              placeholder="Search Appointment, Patient or etc"
            />
            <button className="absolute top-0 left-0 bottom-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </form>
        </div>
        <div className="pt-[30px] px-[30px]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
