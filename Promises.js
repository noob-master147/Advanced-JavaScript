let promiseToClean = new Promise(function(resolve, reject){
    //cleaning the room

    let isClean = true;

    if(isClean){
        resolve('Clean')
    } else {
        reject('not Clean');
    }
})

promiseToClean.then(function(fromResolve){
    console.log(`The room is ${fromResolve}`)
}).catch(function(fromReject){
    console.log(`The room is ${fromReject}`)
})