//Código aula promises

function random(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// function connectionDB(msg, time){
//     return new Promise((resolve, reject)=>{
//         if (typeof msg !== 'string'){
//             const err = 'Erro 404';
//             reject(err);
//         }
//         setTimeout(()=>{
//             resolve(msg);
//         }, time)
//     })
// }


// connectionDB('Connection database', random(1, 3))
//     .then(response =>{
//         console.log(response);
//         return connectionDB('Searching in database', random(1, 3))
//     })
//     .then(response =>{
//         console.log(response);
//         return connectionDB('handling the data', random(1, 3));
//     })
//     .then(response =>{
//         console.log(response);
//         return connectionDB('displaying data on the screen', random(', 3'))
//     })
//     .then(response =>{
//         console.log(response);
//     })
//     .catch(err =>{
//         console.log(err);
//     });

    
//console.log('Isso irá executar antes de tudo!');
//Código treino promises

function Search(msg){
    return new Promise((resolve, reject)=>{
        const database = [
            'learn javascript', 'learn python', 
            'learn C#', 'self studies', 'Curso em vídeo',
            'excel', 'pascal', 'visual basic'
        ]
        const data = database.find(d => d === msg );

        if(data !== undefined){
            setTimeout(()=>{
                resolve(`Search: ${msg}`);
            }, random(1, 5));
        }else{
            reject('Error 404 [Not Found]');
        }
    })
}


Search('java')
    .then(response =>{
        console.log(response);
    })
    .catch(err =>{
        console.log(err);
    })