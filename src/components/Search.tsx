"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Search() {
  function handleSearch(term: string) {
    console.log(term);
  }
  return (
    <>
      <Input
        type="text"
        placeholder="Search by city"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <Button>Search</Button>
    </>
  );
}
