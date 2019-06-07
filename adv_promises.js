let cleanRoom = function()
{
  return new Promise((resolve, reject)=>{
      resolve('Cleaned the room')
  })
}

let removeGarbage = function(p)
{
  return new Promise((resolve, reject)=>{
      resolve(p + 'revome Garbage')
  })
}

let winIcecream = function(p) {
    return new Promise((resolve, reject)=>{
        resolve(p + 'won icecream')
    })
}


cleanRoom().then(function(result){
    return removeGarbage(result)
}).then(function(result){
    return winIcecream(result)
}).then(function(result){
    console.log('finished ' + result)
})