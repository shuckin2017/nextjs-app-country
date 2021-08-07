import { SearchIcon,XIcon } from "@heroicons/react/solid";
export default function SearchCountry({ ...rest }) {
  return (
    <div className="w-full mt-2 lg:mt-6 flex items-center bg-white py-2 px-3 rounded-xl">
      <SearchIcon className="w-7 h-7 text-gray-500 mr-3 active:text-blue-300 transition-all" />
      <input
        className="w-full h-10 outline-none  border-none bg-transparent text-gray-500 text-xl"
        {...rest}
      />
      <XIcon className="w-7 h-7 text-gray-500 mr-3 active:text-blue-300 transition-all" />
    </div>
  );
}
