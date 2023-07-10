// to take the from NamesData and check if the oject represents a boy or girl name and return string



export default function IsGirl(BabyName : object):boolean{
    if (BabyName[sex] === "f"){
        return true
    } else return false
     
}