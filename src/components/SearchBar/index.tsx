import React from "react";
import { ReactComponent as Arrow } from "../../assets/icon-arrow.svg";
import style from "./style.module.scss";

type SearchBarProps = {
  setQuery: (arg: string) => void;
  setIPData: (arg: null) => void;
};

export const SearchBar = ({ setQuery, setIPData }: SearchBarProps) => {
  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    setIPData(null);
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const IP = formData.get("IP")?.toString();
    if (IP === "" || IP === undefined) return;
    setQuery(IP);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <header className={style.headerContainer}>
      <h1>IP Address Tracker</h1>
      <form className={style.searchBarWrapper} onSubmit={handleSubmit}>
        <input placeholder="Search for any IP address" name="IP" />
        <button>
          <Arrow />
        </button>
      </form>
    </header>
  );
};
