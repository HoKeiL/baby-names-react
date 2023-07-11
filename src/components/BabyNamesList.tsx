import React from "react";
import namesData from "../data/NamesData.json";



export default function BabyNames(): JSX.Element {
    
  function getGirlsName(arr: object[]) {
    const girlsNameArr = [];
    
    for (const eachName of namesData) {
         if(eachName.sex === "f"){
            girlsNameArr.push(eachName.name)}
            
  }
  return girlsNameArr;
  }
  function getBoysName(arr: object[]) {
    const boysNameArr = [];
    
    for (const eachName of namesData) {
         if(eachName.sex === "m"){
            boysNameArr.push(eachName.name)}
            
  }
  return boysNameArr;
  }

  return (
    <>
      
        <p >{getGirlsName(namesData).sort()}</p>
        <p >{getBoysName(namesData).sort()}</p>
      
    </>
  );
}
