import { useState } from "react";
import { clsx } from "clsx";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <div className="flex justify-center items-center">
      <div
        className={clsx(
          "h-screen fixed top-0 left-0 bg-blue-500 text-white transition-all duration-300 ",
          open ? "w-80" : "w-0 overflow-hidden"
        )}
      >
        <div className="p-4 text-xl font-bold">Sidebar</div>
        <ul className="space-y-4 p-4">
          {navItems.map((item) => (
            <li key={item} className="hover:text-yellow-300 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
        <div className="absolute bottom-4 left-4 flex gap-4">
          <a href="#" className="hover:text-yellow-300">
            GitHub
          </a>
          <a href="#" className="hover:text-yellow-300">
            Twitter
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-center mt-40 items-center space-y-3 p-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          className="w-24 mx-auto"
        />
        <button
          onClick={() => setOpen(!open)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          TOGGLE MENU
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
