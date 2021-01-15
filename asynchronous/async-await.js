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

async function newCar(){
    const part1 = await wait('get chassis', random(1, 2));
    console.log(part1);
    
    const part2 = await wait('get wheels', random(1, 2));
    console.log(part2);

    const part3 = await wait('get carcass', random(1, 2));
    console.log(part3);

    const part4 = await wait('put it all together', random(1, 2));
    console.log(part4);
}

newCar();