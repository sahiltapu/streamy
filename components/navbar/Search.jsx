"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchIcon, X } from "lucide-react";
import qs from "query-string";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const trimmedValue = value.trim();
    if (!trimmedValue) {
      return;
    }

    const url = qs.stringifyUrl(
      {
        url: "/search",
        query: { term: trimmedValue },
      },
      { skipEmptyString: true }
    );
    router.push(url);
  };

  return (
    <form
      className="relative w-full lg:w-[400px] flex items-center gap-1"
      onSubmit={onSubmit}
    >
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-[#050816] border-none outline-none"
        placeholder={`Search...`}
      />
      {value && (
        <Button
          className="absolute right-14 rounded-full text-white bg-[#050816] hover:bg-[#050816]"
          onClick={(e) => {
            setValue("");
          }}
        >
          <X className="h-5 w-5" />
        </Button>
      )}
      <Button
        type="submit"
        className="rounded-full bg-green-800 text-white hover:bg-green-950 transition"
      >
        <SearchIcon className="h-5 w-5" />
      </Button>
    </form>
  );
};

export default Search;
