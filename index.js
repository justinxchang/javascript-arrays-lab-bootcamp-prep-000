// Add your functions and code here

function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name){
  return kittens.splice(2, 0, name);
}

function prependKitten(name){
  return 
}


function removeLastKitten(){
  return kittens.slice(0, 2);
}

function removeFirstKitten(){
  return kittens.slice(1);
}