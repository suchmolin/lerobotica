import { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { IoIosClose } from "react-icons/io";

export default function MultiSelect(props) {
  const { data, placeHolder, state, seter, size, disabled } = props;
  const people = data;

  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Combobox value={state} onChange={seter} multiple>
      <div className="relative cursor-pointer">
        <div className="flex relative w-full cursor-pointer overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#00528c] md:text-xs">
          <Combobox.Button className="">
            <Combobox.Input
              className={`w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 focus:outline-none cursor-pointer ${size}`}
              displayValue={(people) =>
                people.map((person) => person.name).join(", ")
              }
              placeholder={placeHolder}
              readOnly
              disabled={disabled}
            />

            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              {state.length === 0 && (
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                  disabled={disabled}
                />
              )}
            </div>
          </Combobox.Button>
          {state.length > 0 && (
            <span
              onClick={() => seter([])}
              className="absolute inset-y-0 right-0 pr-2 text-2xl text-gray-400 z-10 flex items-center"
            >
              <IoIosClose />
            </span>
          )}
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-sm bg-white py-1 text-base shadow-lg ring-1 ring-[#00528c] focus:outline-none sm:text-sm">
            {filteredPeople.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredPeople.map((person) => (
                <Combobox.Option
                  key={person.id}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? "bg-[#00528c] text-white" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncat ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.count
                          ? `${person.name} (${person.count})`
                          : person.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-[#00528c]"
                          }`}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
}
