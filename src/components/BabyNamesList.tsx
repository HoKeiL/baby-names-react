import React from "react";
import { Baby, SexFilter } from "./babyName";

export type NameClickHandler = (nameObj: Baby) => void;
export const classForName = ({ sex }: { sex: string }) =>
  sex === "m" ? "boy" : "girl";

export interface BabyNameViewProps {
  babyName: Baby;
  clickHandler: NameClickHandler;
}
export function BabyNameView({
  babyName,
  clickHandler,
}: BabyNameViewProps): JSX.Element {
  return (
    <li
      className={"name " + classForName(babyName)}
      onClick={(e) => clickHandler(babyName)}
    >
      {babyName.name}
    </li>
  );
}

export interface BabyNameListProps {
  names: Baby[];
  clickHandler: NameClickHandler;
}
export function BabyNameList({ names, clickHandler }: BabyNameListProps) {
  return (
    <ul>
      {names.map((name) => (
        <BabyNameView
          key={name.id}
          babyName={name}
          clickHandler={clickHandler}
        />
      ))}
    </ul>
  );
}

// search bar
export interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (st: string) => void;
  selectedSex: string;
  setSelectedSex: (sex: SexFilter) => void;
}

export function SearchBar({
  searchTerm,
  setSearchTerm,
  selectedSex,
  setSelectedSex,
}: SearchBarProps): JSX.Element {
  return (
    <>
      <div className="controlBar">
        <input
          placeholder="Search for a name..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <span className="sexButtons">
          <div
            title="show all names"
            className={`chooser anyChooser ${
              selectedSex === "a" ? "selected" : ""
            }`}
            onClick={() => setSelectedSex("a")}
          ></div>
          <div
            title="show only girls' names"
            className={`chooser femaleChooser ${
              selectedSex === "f" ? "selected" : ""
            }`}
            onClick={() => setSelectedSex("f")}
          ></div>
          <div
            title="show only boys' names"
            className={`chooser maleChooser ${
              selectedSex === "m" ? "selected" : ""
            }`}
            onClick={() => setSelectedSex("m")}
          ></div>
        </span>
      </div>
    </>
  );
}

//favourite list

export interface FavouritesListProps {
  names: Baby[];
  clickHandler: NameClickHandler;
}

export function FavouritesList({
  names,
  clickHandler,
}: FavouritesListProps): JSX.Element {
  return (
    <div className="favourites">
      <span>Favourites: </span>
      {names.length === 0 ? (
        <span>Click some names below to add to your shortlist...</span>
      ) : (
        <BabyNameList names={names} clickHandler={clickHandler} />
      )}
    </div>
  );
}
