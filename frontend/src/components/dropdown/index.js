import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Dropdown({ title, options, mode }) {
  return (
    <div className="text-right ">
      <Menu as="div" className="relative inline-block text-left ">
        <div className="flex items-center justify-center">
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-white rounded-xl text-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-75">
            {title}
            <ChevronDownIcon
              className={
                mode
                  ? "ml-2 -mr-1 h-5 w-5 text-gray-800 self-center z-10"
                  : "ml-2 -mr-1 h-5 w-5 text-white self-center"
              }
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100  transform opacity-0"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-cyan-50 rounded-xl">
            <div className="px-1 py-1 bg-white">
              {options?.map(({ name, method }, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-blue-500  text-white  rounded-xl" : " text-gray-900 "
                      } group flex w-full items-center px-2 py-2 text-sm` }
                      onClick={method ? method : ""}>
                      {name}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

Dropdown.defaultProps = {
  title: "",
  options: [
    {
      name: "Option1",
    },
    {
      name: "Option2",
    },
  ],
  mode: false,
};
