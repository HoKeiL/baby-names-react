import React from "react";
import namesData from "../data/NamesData.json";

export type BabyNameId = number;
export type Sex = "m" | "f";
export type SexFilter = Sex | "a";
export interface Baby {
  id: BabyNameId;
  name: string;
  sex: Sex;
}
export function filterBySearch(names: Baby[], searchTerm: string): Baby[] {
  return searchTerm.trim().length > 0
    ? names.filter((o) =>
        o.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : names;
}

export function filterOutFavourites(
  names: Baby[],
  favouritesIds: BabyNameId[]
): Baby[] {
  return names.filter((o) => !favouritesIds.includes(o.id));
}

export function filterBySex(names: Baby[], selectedSex: SexFilter): Baby[] {
  return names.filter((o) => selectedSex === "a" || selectedSex === o.sex);
}

export function sortNames(originalNames: Baby[]): Baby[] {
  return [...originalNames].sort((a, b) => a.name.localeCompare(b.name));
}

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
