import { useState } from "react";
import {
  BabyNameList,
  SexFilter,
  filterBySex,
  filterOutFavourites,
  filterBySearch,
  Baby,
  sortNames,
  SearchBar,
} from "./BabyNamesList";
import { useFavourites } from "../hooks/useFavourites";
import namesData from "../data/NamesData.json";

const sortedBabyNames: Baby[] = sortNames(namesData as Baby[]);

const BabyNamesApp = () => {
  //look at Hooks
  const { favourites, addFavourite, removeFavourite } = useFavourites();

  const mainListToShow = sortedBabyNames;

  return (
    <div className="main">
      {/* <SearchBar
                {...{ searchTerm, setSearchTerm, setSelectedSex, selectedSex }}
            /> */}
      <hr></hr>
      <BabyNameList names={mainListToShow} clickHandler={addFavourite} />
    </div>
  );
};

export default BabyNamesApp;
