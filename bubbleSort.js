const arr = [7,5,76,2,4,5,9,1235,8673,45];

let bubbleSort = () => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length; j++){
            if(arr[j] < arr[j-1]){
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr));