//// Code your solution here
function findMatching(driversArray, string){
   
    return driversArray.filter(name => name.toUpperCase() === string.toUpperCase()) 
    
        
}

function fuzzyMatch(nameArray, letters){
   /* "hello".slice(0,2) //=> "he" 
    "Sa".length //=> 2
    "Sammy".slice(0,2) //=> "Sa"
    */
    return nameArray.filter(name => name.slice(0, letters.length) === letters)


}

function matchName(nameofArray, nameWanted){
return nameofArray.filter(save=> save.name === nameWanted)

}

