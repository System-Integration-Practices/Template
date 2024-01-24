import React, { Fragment, useState } from "react";
import Pagination from "../components/Pagination";
import InputRadio from "../components/inputs/InputRadio";
import InputSelect from "../components/inputs/InputSelect";
import InputCheckbox from "../components/inputs/InputCheckbox";
import Button from "../components/Button";

const TestUIStyles = () => {
  return (
    <Fragment>
      <div className="flex flex-col gap-2 p-7">
        <h1 className="bg-black-90 text-primary-light-10 text-heading-1">
          Heading 1
        </h1>
        <h2 className="text-primary-light-20 bg-white-10">Heading 2</h2>
        <input type="text" className="input-text" placeholder="Hello" />
        <InputRadio></InputRadio>
        <InputCheckbox></InputCheckbox>
        <InputSelect></InputSelect>
        <Pagination totalPages={20}></Pagination>
        <Button>Hello</Button>
        <Button secondary>Hello</Button>
        <Button tertiary>Hello</Button>
        <div className="w-full h-[250px] bg-primary-light-30"></div>
      </div>
    </Fragment>
  );
};

export default TestUIStyles;
