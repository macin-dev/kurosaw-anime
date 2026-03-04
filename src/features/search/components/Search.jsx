import { FiSearch } from "react-icons/fi";

export default function Search() {
  return (
    <label
      className="ring-search-placeholder focus-within:shadow-search-placeholder bg-search-bg flex items-center gap-2 rounded-lg p-2.5 ring-1 focus-within:shadow-md"
      htmlFor="search"
    >
      <FiSearch className="text-search-placeholder" />
      <input
        autoComplete="off"
        className="placeholder:text-search-placeholder grow text-base text-white outline-none"
        type="text"
        name="search"
        id="search"
        placeholder="Search"
      />
    </label>
  );
}

export function SearchContainer() {
  return (
    <div className="hidden grow lg:block">
      <Search />
    </div>
  );
}
