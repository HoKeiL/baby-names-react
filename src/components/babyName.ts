export type BabyNameId = number;

export interface Baby {
  readonly name: string;
  readonly sex: Sex;
  readonly id: BabyNameId;
}

export type Sex = "m" | "f";

export type SexFilter = Sex | "a";

/** Return a sorted copy of the given BabyNames, sorted by name. */
export function sortNames(originalNames: Baby[]): Baby[] {
  return [...originalNames].sort((a, b) => a.name.localeCompare(b.name));
}
