// Write your solution here!
// Write your solution here!
// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
  const addCat=cats.push(name);
  return addCat;
}
function destructivelyPrependCat(name){
  const addCat=cats.unshift(name);
  return addCat;
}
function destructivelyRemoveLastCat(name){
  const removeCat=cats.pop();
  return removeCat;
}
function destructivelyRemoveFirstCat(name){
  const removeCat=cats.shift();
  return removeCat;
}

function appendCat(name) {
  const addCat = [...cats];
  addCat.push(name);
  return addCat;
}
function prependCat(name) {
  const addCat = [...cats];
  addCat.unshift(name);
  return addCat;
}
function removeLastCat(name) {
  const addCat = [...cats];
  addCat.pop(name);
  return addCat;
}
function removeFirstCat(name) {
  const addCat = [...cats];
  addCat.shift(name);
  return addCat;
}



