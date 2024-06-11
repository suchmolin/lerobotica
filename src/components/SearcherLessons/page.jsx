import { CiSearch } from "react-icons/ci";
const SearcherLessons = (props) => {
  const { search, setSearch } = props;

  return (
    <div className="flex px-3 lg:px-0 w-full items-center mx-0 lg:mx-4 font-[cerapro]">
      <label htmlFor="searcher" className="text-xl -mr-8 z-10 text-gray-500 ">
        <CiSearch />
      </label>
      <input
        className="w-full pl-10 h-9 rounded-lg shadow-md focus:outline-[#00528c] focus:outline-1"
        type="text"
        name="searcher"
        placeholder="Buscar ..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </div>
  );
};

export default SearcherLessons;
