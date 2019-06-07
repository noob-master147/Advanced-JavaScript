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

Promise.all([cleanRoom(), 
             removeGarbage(),
             winIcecream()]).then(function(){
                 console.log('all finished')
             })