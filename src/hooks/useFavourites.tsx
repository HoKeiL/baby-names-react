import { useState } from "react";
import { Baby } from "../components/BabyNamesList";
/** React custom hook to keep track of a list of baby names as favourites, offering also add and remove convenience functions.  */
export function useFavourites() {
  const [favourites, setFavourites] = useState<Baby[]>([]);

  /** Add the given name to favourites if it is not already there */
  function addFavourite(nameToAdd: Baby): void {
    if (!favourites.find((f) => f.id === nameToAdd.id)) {
      setFavourites((prevFavs) => [...prevFavs, nameToAdd]);
    }
  }

  /** Remove the given name from favourites if it is there. */
  function removeFavourite(nameToRemove: Baby): void {
    setFavourites((prevFavs) =>
      prevFavs.filter((f) => f.id !== nameToRemove.id)
    );
  }
  return { favourites, addFavourite, removeFavourite };
}
