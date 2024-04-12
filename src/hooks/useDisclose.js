import React, { useState } from "react";

const useDisclose = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = () => {
    setIsOpen(true);
  };
  const isCloseHandler = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    isOpenHandler,
    isCloseHandler,
  };
};

export default useDisclose;
