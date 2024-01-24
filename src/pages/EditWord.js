import React, { Fragment, useState } from "react";
import Button from "../components/Button";
import InputText from "../components/inputs/InputText";
import InputSelect from "../components/inputs/InputSelect";

const EditWord = () => {
  const [formType, setFormType] = useState([
    {
      meaningCambridge: "meaning 1",
      meaningVietnamese: "",
      type: "",
    },
  ]);
  const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const handleAdd = (e) => {
    e.preventDefault();
    setFormType([
      ...formType,
      {
        meaningCambridge: `meaning ${formType.length + 1}`,
        meaningVietnamese: "",
        type: "",
      },
    ]);
  };

  const handleRemove = (e, index) => {
    console.log("🚀 ~ handleRemove ~ index:", index);
    e.preventDefault();
    const temp = [...formType];
    temp.splice(index, 1);
    setFormType(temp);
    console.log("🚀 ~ handleRemove ~ temp:", temp);
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <Fragment>
      <h2>Edit Word</h2>
      <form action="" className="mt-10 grid gap-x-6 gap-y-8 grid-cols-6">
        <div className="col-span-3">
          <label htmlFor="" className="text-body-5 text-black-10">
            English Word *
          </label>
          <div className="mt-2">
            <InputText placeholder="English word"></InputText>
          </div>
        </div>
        <div className="col-span-3">
          <label htmlFor="" className="text-body-5 text-black-10">
            English Cambridge *
          </label>
          <div className="mt-2">
            <InputText placeholder="English word (Cambridge)"></InputText>
          </div>
        </div>
        <div className="col-span-full">
          <div className="flex items-center mb-2">
            <div className="text-body-5">Classification and Meaning</div>
            <Button
              primary
              icon
              className="w-10 h-10 ml-auto"
              onClick={handleAdd}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </Button>
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
            {formType.map((typeItem, index) => {
              // console.log(index);
              return (
                <div className="grid grid-cols-8 gap-x-2 mt-2 rounded-2xl">
                  <div className="col-span-2 flex gap-1">
                    <Button
                      icon
                      secondary2
                      className=" h-full aspect-square"
                      onClick={(e) => handleRemove(e, index)}
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
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </Button>
                    <InputSelect className={"flex-1"}></InputSelect>
                  </div>
                  <div className="col-span-4">
                    <InputText
                      placeholder="English word"
                      onChange={handleOnChange}
                    ></InputText>
                  </div>
                  <div className="col-span-2">
                    <InputText placeholder="Meaning word"></InputText>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-full">
          <label htmlFor="" className="text-body-5 text-black-10">
            Pronoun
          </label>
          <InputText placeholder="Pronoun"></InputText>
        </div>
        <div className="col-span-full">
          <div className="flex justify-end gap-4">
            <Button secondary>Update</Button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default EditWord;
