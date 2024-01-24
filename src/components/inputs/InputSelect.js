import React, { useState } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";

const InputSelect = ({
  className,
  classSelect,
  classWrapOption,
  classOption,
  disabled,
  ...props
}) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const [label, setLabel] = useState("Dropdown");

  const handleValueClick = (e) => {
    setLabel("Your select is: " + e.target.dataset.value);
    setShow(false);
  };
  return (
    <div className={`relative ${className}`} ref={nodeRef}>
      <div
        className={`py-6 px-8 w-full border border-white-30 rounded-2xl text-body-5 text-black-30 flex items-center justify-between cursor-pointer ${
          disabled ? "bg-transparent" : "bg-white"
        } ${classSelect}`}
        onClick={() => setShow(!show)}
      >
        <span>{label}</span>
        <img src="assets/icons/arrow-down.svg" alt="" />
      </div>
      {show && (
        <div
          className={`absolute rounded-2xl border border-white-30
          top-full w-full left-0  flex flex-col translate-y-4 overflow-hidden bg-white z-10 ${classWrapOption}`}
        >
          {Array(5)
            .fill(0)
            .map((item, index) => {
              return (
                <div
                  className={` py-6 px-8 text-body-5 text-black-30 hover:bg-primary-light-90 ${classOption}`}
                  onClick={handleValueClick}
                  data-value={"Dropdown 1"}
                >
                  <span>Dropdown 1</span>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default InputSelect;
