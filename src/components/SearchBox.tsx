/** @format */

import { cn } from "@/utils/cn";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type Props = {
  className?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

export default function SearchBox(props: Props) {
  return (
    <form
      onSubmit={props.onSubmit}
      className={cn(
        "flex relative items-center justify-center h-10",
        props.className,
      )}
    >
      <Input
        type="text"
        value={props.value}
        onChange={props.onChange}
        className="w-full"
        placeholder="Search location.."
      />
      <Button>
        <IoSearch />
      </Button>
    </form>
  );
}
