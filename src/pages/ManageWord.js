import React, { Fragment } from "react";
import Button from "../components/Button";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

const ManageWord = () => {
  return (
    <Fragment>
      <h2>List Word</h2>
      <table class=" w-full table-auto border-separate border-spacing-y-5 rounded-tl-xl rounded-tr-xl">
        <thead className=" w-full  bg-[#ECEFF1]">
          <tr>
            <ThItem>English Word</ThItem>
            <ThItem>Vietnamese Word</ThItem>
            <ThItem>Date</ThItem>
            <ThItem>Type</ThItem>
            <ThItem>Action</ThItem>
          </tr>
        </thead>
        <tbody className="w-full">
          {Array(10)
            .fill(0)
            .map((item, index) => {
              return (
                <tr className="bg-white">
                  <ThItem>Hello</ThItem>
                  <ThItem>Xin chao</ThItem>
                  <ThItem>Jun 21, 2021</ThItem>
                  <ThItem>Noun, Adjective</ThItem>
                  <ThItem>
                    <div className="flex gap-4">
                      <Button>
                        <Link
                          to={`/detail-word/${index}`}
                          className="w-full h-full"
                        >
                          Info
                        </Link>
                      </Button>
                      <Button secondary2>Delete</Button>
                    </div>
                  </ThItem>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Pagination totalPages={5}></Pagination>
    </Fragment>
  );
};

const ThItem = ({ children }) => {
  return (
    <th
      className={`text-left py-4 text-body-2 text-black-20 first:rounded-l-xl first:pl-8 last:rounded-r-xl`}
    >
      {children}
    </th>
  );
};

const TdItem = ({ children }) => {
  return (
    <td className="py-3 pl-8 first:rounded-l-xl first:pl-8 last:rounded-r-xl">
      {children}
    </td>
  );
};

export default ManageWord;
