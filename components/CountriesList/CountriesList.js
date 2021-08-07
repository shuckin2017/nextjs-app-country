import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

const countriesSortBy = (countries, value, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }
  if (direction === "desc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }
  return countries;
};

const SortArrow = (direction) => {
  if (!direction) {
    return <></>;
  }
  if (direction === "desc") {
    return <ChevronUpIcon className="w-6 h-6" />;
  } else {
    return <ChevronDownIcon className="w-6 h-6" />;
  }
};

export default function CountriesList({ countries }) {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();
  const setSortCountries = countriesSortBy(countries, value, direction);

  const toggleDirect = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  };

  const setValueDirection = (value) => {
    toggleDirect();
    setValue(value);
  };

  return (
    <div className="mt-3 ">
      <div className="flex justify-between py-3 px-2  text-gray-400 text-md transition-all">
        <button
          className="flex flex-1 hover:text-gray-300 active:text-gray-400"
          onClick={toggleDirect}
        >
          <p>Название</p>
          <SortArrow />
        </button>
        <button
          className="flex flex-1 hover:text-gray-300 active:text-gray-400"
          onClick={() => setValueDirection}
        >
          <p>Популяция</p>
          <SortArrow direction={direction} />
        </button>
        <button
          className="flex flex-1 hover:text-gray-300 active:text-gray-400 hidden lg:flex"
          onClick={() => setValueDirection("population")}
        >
          <p>Регион</p>
          <SortArrow direction={direction} />
        </button>
        <button
          className="flex flex-1 hover:text-gray-300 active:text-gray-400 hidden lg:flex"
          onClick={toggleDirect}
        >
          <p>Сталица</p>
          <SortArrow direction={direction} />
        </button>
        <button
          className="flex flex-1 hover:text-gray-300 active:text-gray-400 hidden lg:flex"
          onClick={toggleDirect}
        >
          <p>Площадь</p>
          <SortArrow direction={direction} />
        </button>
      </div>
      <div>
        {setSortCountries.map((country) => (
          <div className="country-item flex justify-between py-5 px-4 bg-white rounded-xl text-gray-700 text-md mt-4 shadow-sm hover:shadow-lg transition-all">
            {/* <img
              src={country.flag}
              alt=""
              className="hidden lg:block h-auto w-10 mr-3 bg-auto"
            /> */}
            <div className="flex-1">{country.name}</div>
            <div className="flex-1">{country.population}</div>
            <div className="flex-1 hidden lg:block">
              {country.region || "none"}
            </div>
            <div className="flex-1 hidden lg:block">
              {country.capital || "none"}
            </div>
            <div className="flex-1 hidden lg:block">{country.area || 0}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
