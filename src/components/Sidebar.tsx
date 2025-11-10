import { useState } from "react";
import { clsx } from "clsx";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <div className="flex justify-center items-center">
      <div
        className={clsx(
          "h-screen fixed top-0 left-0 transition-all duration-300 bg-white",
          open ? "w-80" : "w-0 overflow-hidden"
        )}
      >
        <div className="flex flex-row justify-between p-4 ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React Logo"
            className="w-8"
          />
          <span className="text-red-700 font-bold text-2xl hover:fill-red-600">
            X
          </span>
        </div>

        <ul className="space-y-4 p-">
          {navItems.map((item) => (
            <li
              key={item}
              className="hover:bg-blue-100 transition-all duration-500 p-4 text-2xl text-gray-500 w-full cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="absolute bottom-4 left-4 flex gap-4"></div>
      </div>

      <div className="flex flex-col justify-center mt-40 items-center space-y-3 p-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          className="w-24 mx-auto"
        />
        <button
          onClick={() => setOpen(!open)}
          className="tracking-[5px] border-2 hover:text-white px-4 py-1 cursor-pointer hover:bg-black transition-all duration-500 rounded-xl"
        >
          TOGGLE MENU
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
