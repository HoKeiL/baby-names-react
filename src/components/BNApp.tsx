import { useState } from "react";
import { Baby, SexFilter, sortNames } from "./babyName";
import { byNotInList, bySearch, bySex } from "./filters";
import unsortedBabyNamesData from "../data/NamesData.json";
import { useFavourites } from "../hooks/useFavourites";
import { BabyNameList, SearchBar, FavouritesList } from "./BabyNamesList";

const sortedBabyNames: Baby[] = sortNames(unsortedBabyNamesData as Baby[]);

const BabyNamesApp = () => {
  const { favourites, addFavourite, removeFavourite } = useFavourites();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSex, setSelectedSex] = useState<SexFilter>("a");

  const mainNamesToShow = sortedBabyNames
    .filter(bySearch(searchTerm))
    .filter(bySex(selectedSex))
    .filter(byNotInList(favourites));

  return (
    <div className="main">
      <SearchBar
        {...{ searchTerm, setSearchTerm, setSelectedSex, selectedSex }}
      />
      <FavouritesList names={favourites} clickHandler={removeFavourite} />
      <BabyNameList names={mainNamesToShow} clickHandler={addFavourite} />
    </div>
  );
};

export default BabyNamesApp;
