import React, { useState } from "react";
import { IconSearch } from "../../assets/icons";
import Dropdown from "../dropdown";

const SearchBox = () => {
  const [showSearch, setShowSearch] = useState(false);
  const options = [
    {
      name: (
        <form className="flex gap-1">
          <input
            className="flex w-0 p-2 text-sm border-gray-400 ext-gray-700 outline-none rounded-xl sm:w-10 md:w-50 lg:w-full"
            type="text"
            placeholder="Search"
          />
          <button className="" type="submit">
            <IconSearch />
          </button>
        </form>
      ),
    },
  ];
  return (
    <div className="flex ">
      {/* TODO <form className="flex gap-1">
        <input
          className="flex w-0 p-2 text-sm border-gray-400 ext-gray-700 outline-none rounded-xl sm:w-10 md:w-50 lg:w-full"
          type="text"
          placeholder="Search"
        />
        <button className="" type="submit">
          <IconSearch />
        </button>
      </form> */}
      <div className="text-gray-700  hover:scale-110">
        <Dropdown
          title={
            <div className="font-bold hover:text-primary">
              <IconSearch />
            </div>
          }
          downIcon={false}
          options={options}
        />
      </div>
    </div>
  );
};

export default SearchBox;
