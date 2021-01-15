function random(min=0, max=3){
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
            resolve(msg);
        }, time)
    })
}

// wait('Level 1', random())
//     .then(response =>{
//         console.log(response);
//         return wait('Level 2', random())
//     })
//     .then(response =>{
//         console.log(response)
//         return wait('Level 3', random())
//     })
//     .then(response =>{
//         console.log(response)
//     })
//     .catch(err =>{
//         console.log(err);
//     });

async function main(){
    try{

        const level1 = await wait('Level 1', random());
        console.log(level1);

        const level2 = await wait('Level 2', random());
        console.log(level2)

        const level3 = await wait('Level 3', random());
        console.log(level3);

        console.log(`The ${level3} is over!`);
    }catch(err){
        console.log(err);
    }
}

main();