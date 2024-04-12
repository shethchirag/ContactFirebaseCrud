import React from "react";
import { createPortal } from "react-dom";
import { AiFillCloseSquare, AiOutlineClose } from "react-icons/ai";

const Model = ({ isOpen, isCloseHandler, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="relative z-50 m-auto min-h-[200px] max-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineClose
                onClick={isCloseHandler}
                className="text-2xl self-end cursor-pointer"
              />
            </div>
            {children}
          </div>
          <div
            onClick={isCloseHandler}
            className="h-screen backdrop-blur absolute top-0  w-full z-40 w-screen"
          />
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Model;
