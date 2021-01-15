//Código aula promises


function random(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time){
    return new Promise((resolve, reject)=>{
        if (typeof msg !== 'string'){
            const err = 'Erro 404';
            reject(err);
            return;
        }
        setTimeout(()=>{
            resolve(msg.toUpperCase() + ' - Passe na promise');
        }, time)
    })
}

//Promisse.all => entrega todas as promisses em um array
const promisesAll = [
    'First Value',
    wait('Promise 1', random(1, 2)),
    wait('Promise 2', random(1, 3)),
    wait('Promise 3', random(1, 4)),
    'Outro valor'
]

Promise.all(promisesAll)
    .then(response =>{
        console.log(response);
    })
    .catch(err =>{
        console.log(err);
    });

//Promise.race => returns the first to be resolved
const promisesRace = [
    wait('Promise 1', 3000),
    wait('Promise 2', 5000),
    wait('Promise 3', 100),
]

Promise.race(promisesRace)
    .then(response =>{
        console.log(response)
    })
    .catch(err =>{
        console.log(err);
    })

//Promise.resolve => Already returns a resolved promise
const downloadPage = () =>{
    const inCache = false;

    if(inCache){
        return Promise.resolve('page in cache');
    }else{
        return wait('download page', random(1, 3));
    }
}

downloadPage()
    .then(page =>{
        console.log(page);
    })
    .catch(err =>{
        console.log(err);
    })