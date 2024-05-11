"use client";

import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search/${search}`);
    setSearch("");
  }

  return (
    <form 
      className="flex items-center justify-between px-5 py-1 my-10 max-w-6xl mx-auto"
      onSubmit={handleSubmit}
      >
      <input
        type="text"
        placeholder="Search for a movie..."
        className="w-full h-3 p-3 placeholder-gray-400 outline-none bg-transparent flex-1 font-medium text-lg "
        value={search}
        onChange={handleChange}
      />
      <button disabled={!search} className="disabled:hover:none">
        <IoSearch className="text-2xl hover:text-teal-500 transition-colors duration-200" />
      </button>
    </form>
  );
};

export default SearchBox;
