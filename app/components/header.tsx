import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div className="w-full top-0 left-0 z-50 fixed h-16 flex justify-between items-center shadow-2xl px-6">
      <div>
        <h1 className="text-xl font-bold text-white">
          Proto<span className="text-orange-400">Smasher</span>
        </h1>
      </div>
      <nav>
        <ul className="flex gap-6 text-white font-semibold">
          {["Home", "About", "Categories", "Contact"].map((item) => (
            <li key={item}>
              <a
                href="/"
                className="hover:text-orange-400 transtion-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="relative">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={isSearchFocused || searchValue ? "" : "Search"}
          className="text-gray-400 pl-2 pr-10 py-2 rounded-md outline-none border border-gray-300 focus:border-orange-400"
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />
        {!isSearchFocused && (
          <FaMagnifyingGlass className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
        )}
      </div>
      <div className="flex items-center text-white">
        <MdLanguage
          size={25}
          className="bg-white rounded-full px-1 py-1 mr-1 text-black"
        />
        <h1>EN</h1>
        <div className="ml-7 flex gap-4 items-center">
          <h1>
            <a
              href="/"
              className="hover:text-orange-400 transition-colors duration-200"
            >
              Login
            </a>
          </h1>
          <h1 className="cursor-pointer text-black bg-white px-6 py-2 rounded-xl shadow-md hover:bg-orange-400 hover:text-white transition-all duration-200">
            <a href="/">Sign Up</a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
