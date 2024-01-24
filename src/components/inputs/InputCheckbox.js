import React from "react";

const InputCheckbox = () => {
  return (
    <div className="">
      <input type="checkbox" name="" id="checkbox" />
      <label
        className="block w-8 h-8 border border-black-30 rounded-lg  relative checkbox-inner cursor-pointer transition-all"
        htmlFor="checkbox"
      >
        <div className="absolute w-5 h-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 border-b-2 border-l-2 border-b-white border-l-white rounded-sm -rotate-45 opacity-0 invisible transition-all"></div>
      </label>
    </div>
  );
};

export default InputCheckbox;
