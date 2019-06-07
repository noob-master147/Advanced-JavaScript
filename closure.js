// var pass = 3;

// let addTo = function()
// {
//     let i = 9
//     return pass + i
// }

// console.log(addTo())

//closures are noting but functions with 
//preserved data

let addTo = function(pass)
{
  let add = function(inner)
  {
    return inner + pass
  }
  return add
}

let addThree = new addTo(5)
console.log(addThree(7))