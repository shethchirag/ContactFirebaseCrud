import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, isCloseHandler, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="absolute top-0 z-40 grid h-screen w-full place-items-center backdrop-blur ">
          <div className="relative z-50 m-auto min-h-[200px] min-w-[30%]  bg-white p-4 rounded-lg">
            <div className="flex justify-end">
              <AiOutlineClose
                onClick={isCloseHandler}
                className="self-end text-2xl cursor-pointer"
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
