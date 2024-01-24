import React, { Fragment } from "react";
import Button from "../components/Button";
import InputText from "../components/inputs/InputText";
import InputSelect from "../components/inputs/InputSelect";
import { Link } from "react-router-dom";

const DetailWord = () => {
  return (
    <Fragment>
      <div className="flex items-center">
        <h2>Detail Word</h2>
        <div className="flex gap-2 ml-auto">
          <Button tertiary icon className="aspect-square w-12">
            <Link
              to={"/edit-word/1"}
              className="w-full h-full flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
            </Link>
          </Button>
          <Button icon className="aspect-square w-12">
            <Link
              to={"/create-word"}
              className="w-full h-full flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </Link>
          </Button>
        </div>
      </div>

      <form action="" className="mt-10 grid gap-x-6 gap-y-8 grid-cols-6">
        <div className="col-span-3">
          <label htmlFor="" className="text-body-5 text-black-10">
            English Word *
          </label>
          <div className="mt-2">
            <InputText placeholder="English word" disabled></InputText>
          </div>
        </div>
        <div className="col-span-3">
          <label htmlFor="" className="text-body-5 text-black-10">
            English Cambridge *
          </label>
          <div className="mt-2">
            <InputText
              placeholder="English word (Cambridge)"
              disabled
            ></InputText>
          </div>
        </div>
        <div className="col-span-full">
          <div className="flex items-center mb-2">
            <div className="text-body-5">Classification and Meaning</div>
            {/* <Button primary icon className="w-10 h-10 ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </Button> */}
          </div>
          <div className="bg-white-20 grid grid-cols-8 gap-x-6 py-4 rounded-2xl">
            <span className="text-body-1 text-black-20 col-span-2 text-center">
              Type
            </span>
            <span className="text-body-1 text-black-20 col-span-4 pl-4">
              Meaning Cambridge
            </span>
            <span className="text-body-1 text-black-20 col-span-2 pl-4">
              Meaning Vietnamese
            </span>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-8 gap-x-2 mt-2 rounded-2xl">
              <div className="col-span-2 flex gap-1">
                {/* <Button icon secondary2 className=" h-full aspect-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </Button> */}
                <InputSelect className={"flex-1"} disabled></InputSelect>
              </div>
              <div className="col-span-4">
                <InputText placeholder="English word" disabled></InputText>
              </div>
              <div className="col-span-2">
                <InputText placeholder="Meaning word" disabled></InputText>
              </div>
            </div>
            <div className="grid grid-cols-8 gap-x-2 mt-2 rounded-2xl">
              <div className="col-span-2 flex gap-1">
                {/* <Button icon secondary2 className=" h-full aspect-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </Button> */}
                <InputSelect className={"flex-1"} disabled></InputSelect>
              </div>
              <div className="col-span-4">
                <InputText placeholder="English word" disabled></InputText>
              </div>
              <div className="col-span-2">
                <InputText placeholder="Meaning word" disabled></InputText>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-full">
          <label htmlFor="" className="text-body-5 text-black-10">
            Pronoun
          </label>
          <InputText placeholder="Pronoun" disabled></InputText>
        </div>
        <div className="col-span-full">
          <div className="flex justify-end gap-4">
            <Button borderColor="#23a9f9" outline>
              Back
            </Button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default DetailWord;
