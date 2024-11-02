import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CSSTransition } from "react-transition-group";

const LanguageCv = ({ mode,language, setLanguage }) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "Es", name: "Es", flag: "/file/espana.png" },
    { code: "En", name: "En", flag: "/file/reino-unido.png" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-4/5 mx-auto sm:w-auto sm:mx-0">
      <div
        onClick={toggleDropdown}
        className={`flex items-center h-full justify-between sm:w-24  p-2 border w-[185px] ${
          mode
            ? "text-white bg-neutral-900 border-neutral-700"
            : "text-black bg-white border-gray-300"
        } rounded-md cursor-pointer`}
      >
        <div className="flex items-center justify-center gap-1">
          <img
            src={languages.find((l) => l.code === language).flag}
            alt={language}
            className="w-5 h-4"
          />
          <span className="uppercase">{language}</span>
        </div>
        <button>
          <IoIosArrowDown />
        </button>
      </div>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="dropdown"
        unmountOnExit
      >
        <div className="absolute left-0 z-10 rounded-md shadow-lg mt-0.5">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className={`flex items-center sm:w-24 w-[185px] gap-1 p-2 ${
                mode
                  ? "text-white bg-neutral-900 hover:bg-black"
                  : "text-black bg-neutral-300 hover:bg-white"
              } cursor-pointer`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <img src={lang.flag} alt={lang.name} className="w-5 h-4" />
              <span className="uppercase">{lang.name}</span>
            </div>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
};

export default LanguageCv;
