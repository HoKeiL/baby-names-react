import React from "react";
import namesData from "../data/NamesData.json";

interface Baby {
  id: number;
  name: string;
  sex: string;
}



export default function BabyNames(): JSX.Element {
    
  function getBabyNames(arr: Baby[]): string[] {

    return arr.map((eachBaby) => eachBaby.name + " ").sort()
    
  }
  

  return (
    <>
      <ul className="allbabynames">
        <li>{getBabyNames(namesData)}</li>
      </ul>

    </>
  );
}
