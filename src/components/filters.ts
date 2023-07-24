//Alternative (and perhaps unnecessarily complex) way to implement filters, making the main react component cleaner.
//Note: none of these know anything about React.
import { Baby, SexFilter } from "./babyName";
export type PredicateFunction<T> = (item: T) => boolean;

/** Create a predicate function which passes if a given baby name matches the given searchTerm */
export function bySearch(searchTerm: string): PredicateFunction<Baby> {
  return (nameData: Baby) =>
    nameData.name.toLowerCase().includes(searchTerm.toLowerCase());
}

/** Create a predicate function which passes if a given baby name matches with the given sex filter */
export function bySex(sexFilter: SexFilter): PredicateFunction<Baby> {
  return (nameData: Baby) => sexFilter === "a" || sexFilter === nameData.sex;
}

/** Create a predicate function which passes if a given baby name is not in the given list of favourite names. */
export function byNotInList(favourites: Baby[]): PredicateFunction<Baby> {
  return (name: Baby) => !favourites.find((f) => f.id === name.id);
}
