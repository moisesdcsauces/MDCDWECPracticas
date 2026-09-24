function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let matriz = new Array(5).fill(0).map(
    () => {
        return new Array(5).fill(0).map(
            () =>{
                return getRandomInt(1, 100)
            }  
        )
    }
);


for(let i = 0; i<matriz.length;i++){
    for(let j = 0; j<matriz[i];j++){
        matriz[i][j] = getRandomInt(1, 100);
    }
    console.log(matriz[i]);
}