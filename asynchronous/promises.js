//Código aula promises

function random(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function connectionDB(msg, time){
    return new Promise((resolve, reject)=>{
        if (typeof msg !== 'string'){
            const err = 'Erro 404';
            reject(err);
        }
        setTimeout(()=>{
            resolve(msg);
        }, time)
    })
}


connectionDB('Connection database', random(1, 3))
    .then(response =>{
        console.log(response);
        return connectionDB('Searching in database', random(1, 3))
    })
    .then(response =>{
        console.log(response);
        return connectionDB('handling the data', random(1, 3));
    })
    .then(response =>{
        console.log(response);
        return connectionDB('displaying data on the screen', random(', 3'))
    })
    .then(response =>{
        console.log(response);
    })
    .catch(err =>{
        console.log(err);
    });

    
console.log('Isso irá executar antes de tudo!');
//Código treino promises

function Browser(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('Open browser');
        }, random(1, 5));
    })
}

function Search(msg){
    return new Promise((resolve, reject)=>{
        const database = [
            {search: 'learn javascript', results: 14}, 
            {search: 'learn python', results: 15},
            {search: 'learn C#', results: 10},
            {search: 'self studies', results: 10},
            {search: 'Curso em vídeo', results: 17},
            {search: 'excel', results: 6},
            {search: 'pascal', results: 9},
            {search: 'visual basic', results: 7},
        ]
        const data = database.find(d => d.search === msg );

        if(data !== undefined){
            setTimeout(()=>{
                resolve(`Search: ${data.search} \nResults: ${data.results}`);
            }, random(1, 5));
        }else{
            reject('Error 404 [Not Found]');
        }
    })
}

Browser()
    .then(resolve =>{
        console.log(resolve);
        return Search('learn javascript');
    })
    .then(response =>{
        console.log(response);
    })
    .catch(err =>{
        console.log(err);
    })