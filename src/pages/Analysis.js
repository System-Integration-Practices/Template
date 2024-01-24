import React, { Fragment } from "react";
import Button from "../components/Button";
import { useForm } from "react-hook-form";

const Analysis = () => {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data.analysis.replaceAll("\n", " "));
  };
  return (
    <Fragment>
      <h2 className="text-black">Paragraph Analysis</h2>
      <form action="" className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <label
          htmlFor="analysis"
          className=" block text-body-5 text-black-10 mb-4"
        >
          Description
        </label>
        <textarea
          {...register("analysis")}
          id="analysis"
          className="block resize-none w-full h-[300px] rounded-2xl border border-black-80 bg-transparent px-4 py-2 mb-10"
        ></textarea>
        <div className="flex">
          <Button
            type="submit"
            secondary
            // onClick={(e) => e.preventDefault()}
            className="ml-auto"
          >
            Analysis
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default Analysis;
